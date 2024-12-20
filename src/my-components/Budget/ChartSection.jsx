"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const chartData = [
  { name: "Income", value: 10000, color: "#4CB944" },
  { name: "Expense", value: 7000, color: "#F06543" },
  { name: "Remaining", value: 3000, color: "#246EB9" },
];

const ChartSection = () => (
  <Card className="flex flex-col mb-6">
    <CardHeader className="items-center pb-0">
      <CardTitle className="text-primaryGreen font-semibold">Expense Breakdown</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <div className="flex flex-col items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            paddingAngle={5}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry) => (
              <span className="font-semibold" style={{ color: entry.payload.color }}>{value}</span>
            )}
          />
        </PieChart>
      </div>
    </CardContent>
  </Card>
);

export default ChartSection;
