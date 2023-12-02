"use client";

import { Card } from "@radix-ui/themes";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", value: open, color: "var(--grass-10)" },
    { label: "In Progress", value: inProgress, color: "var(--amber-10)" },
    { label: "Closed", value: closed, color: "var(--red-10)" },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={60}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
