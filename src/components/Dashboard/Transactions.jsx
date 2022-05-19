import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppleIcon from "@mui/icons-material/Apple";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableCell,
  TableRow,
  Typography,
  Box,
} from "@mui/material";

const transactions = [
  {
    id: 1,
    title: "Youtube Premium",
    deal: "subscription",
    price: "$500",
    icon: <YouTubeIcon />,
  },
  {
    id: 2,
    title: "Github",
    deal: "Development",
    price: "$500",
    icon: <GitHubIcon />,
  },
  {
    id: 3,
    title: "Apple Music",
    deal: "Shopping",
    price: "$50",
    icon: <AppleIcon />,
  },
  {
    id: 4,
    title: "Shopify",
    deal: "Shopping",
    price: "$50",
    icon: <GraphicEqIcon />,
  },
];

export const Transactions = () => {
  return (
    <Box sx={{ my: 7 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {transactions.map((t) => (
              <TableRow key={t.id}>
                <TableCell scope="row">{t.icon}</TableCell>
                <TableCell align="left">{t.title}</TableCell>
                <TableCell style={{ width: 160 }}>{t.deal}</TableCell>
                <TableCell style={{ width: 100 }} align="right">
                  {t.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
