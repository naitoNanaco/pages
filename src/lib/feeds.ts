import Parser from "rss-parser";

type CustomFeed = { link: string };
type CustomItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    feed: ["link"],
    item: ["title", "link", "pubDate", "description"],
  },
});

type FeedSource = {
  name: string;
  url: string;
};

type PostsData = {
  title: string;
  link: string;
  date: string;
  description: string;
  source: string;
};

const feedSources: FeedSource[] = [
  {
    name: "note.com",
    url: "https://note.com/na_it_o/rss",
  },
  {
    name: "zenn.dev",
    url: "https://zenn.dev/na_it_o/feed",
  },
  {
    name: "qiita.com",
    url: "https://qiita.com/na_it_o/feed.atom",
  },
];

export const getSortedPostsData = async () => {
  var allPostsData: PostsData[] = new Array(0);
  await Promise.all(
    feedSources.map(async (feedSource) => {
      const feed = await parser.parseURL(feedSource.url);
      allPostsData = allPostsData.concat(
        feed.items.map((item) => {
          const title = item.title;
          const link = item.link;
          const date = item.isoDate;
          const description = item.description
            ? item.description.replace(/(<([^>]+)>)/gi, "")
            : "";
          const source = feedSource.name;

          return {
            title,
            link,
            date,
            description,
            source,
          };
        })
      );
    })
  );

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
