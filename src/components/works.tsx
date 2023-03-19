import styles from "./works.module.css";
import Link from "next/link";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const works: {
  subject: string;
  image: string;
  abstract: string;
  documents: { title: string; url: string }[];
  skills: string[];
}[] = [
  {
    subject: "クラウドサービスを利用したWebアプリケーション環境構築",
    image: "/images/aws.png",
    abstract:
      "クラウド上にアプリケーションの実行環境を構築しています。\nAWS上でECS/SES/SNS/SQS/Lambda/DynamoDBを利用したメール駆動のサービスを構築しました。",
    documents: [
      {
        title: "AWS Dev Day Online Japan 2020 発表スライド",
        url: "https://speakerdeck.com/na_it_o/aws-dev-day-online-japan-2020",
      },
    ],
    skills: ["AWS", "CI/CD", "Terraform", "Go"],
  },
  {
    subject: "SLOの策定と監視",
    image: "/images/graph.png",
    abstract:
      "主要プロダクトのSLO策定をゼロから主導しました。SLIの取得のための技術的な実装に加え、継続的な運用のための文化的側面での導入を促進しました。",
    documents: [{ title: "", url: "https://" }],
    skills: ["Monitoring", "AWS"],
  },
  {
    subject: "社内の技術標準策定と推進",
    image: "/images/bpmn.png",
    abstract:
      "ビジネスプロセス表記のBPMN統一、Kubernetesによる社内PaaS構築など実施しました。また先進的なトピックのキャッチアップを目的として技術開発のテーマ選定・実調査を担当しました。",
    documents: [{ title: "", url: "https://" }],
    skills: ["BPMN", "Azure", "Kubernetes", "Docker"],
  },
];

export default function Works() {
  return (
    <>
      {works.map(({ subject, image, abstract, documents, skills }) => (
        <Card className={styles.article} key={subject}>
          <CardContent>
            <Typography variant="h6" component="div">
              {subject}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              className={styles.abstract}
            >
              {abstract}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {documents.map((document) => [
                <Link key={document.url} href={document.url}>
                  <a>{document.title}</a>
                </Link>,
              ])}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {skills.map((skill, i) => [i > 0 && ", ", skill])}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={"." + image}
            className={styles.image}
          />
        </Card>
      ))}
    </>
  );
}
