import styles from "./layout.module.css";
import Date from "./date";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Articles({
  postsData,
}: {
  postsData: {
    title: string;
    link: string;
    date: string;
    description: string;
    source: string;
  }[];
}) {
  return (
    <>
      {postsData.map(({ title, link, date, description, source }) => (
        <Card className={styles.article} key={link}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Date dateString={date} />
            </Typography>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {source}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={link}>
              記事を読む
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
