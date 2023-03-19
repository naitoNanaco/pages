import React from "react";
import styles from "./profile.module.css";

const profile = "SRE/インフラ・クラウドエンジニア。Gopherくんが好き。";

const history: {
  date: string;
  description: string;
}[] = [
  {
    date: "2020/01",
    description: "Web系の企業に就職。SREとして設計、開発、運用に従事。",
  },
  {
    date: "2013/04",
    description: "SIerに就職。企画、技術開発、社内の技術標準化を担当。",
  },
  {
    date: "2013/03",
    description: "大学院情報科学研究科を卒業。修士号を取得。",
  },
];

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Container>{profile}</Container>

      <TableContainer className={styles.history}>
        <Table>
          <TableBody>
            {history.map((job) => (
              <TableRow
                key={job.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className={styles.date}>
                  {job.date}
                </TableCell>
                <TableCell align="left">{job.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
