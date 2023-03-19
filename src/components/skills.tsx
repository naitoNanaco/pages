import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const skills: {
  name: string;
  color: string;
  level: number;
}[] = [
  {
    name: "AWS",
    color: "#FF9900",
    level: 3,
  },
  {
    name: "GCP",
    color: "#4285F4",
    level: 2,
  },
  {
    name: "CI/CD",
    color: "#161616",
    level: 3,
  },
  {
    name: "Go",
    color: "#29BEB0",
    level: 3,
  },
  {
    name: "PHP",
    color: "#8892BE",
    level: 1,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    level: 1,
  },
];

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 16,
          family:
            "'M PLUS Rounded 1c', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => {
          if (value === 1) {
            return "初心者";
          } else if (value === 2) {
            return "少しだけ";
          } else if (value === 3) {
            return "実務";
          }
          return null;
        },
        font: {
          size: 14,
          family:
            "'M PLUS Rounded 1c', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
      },
    },
  },
};

export const data = {
  labels: skills.map((skill) => skill.name),
  datasets: [
    {
      data: skills.map((skill) => skill.level),
      backgroundColor: skills.map((skill) => skill.color + "BB"),
    },
  ],
};

export default function Skills() {
  return <Bar options={options} data={data} />;
}
