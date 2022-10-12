import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const QuizData = useLoaderData();
  return (
    <div className="lg:px-96 md:mt-5 px-0 mt-5">
      <div>
        <ResponsiveContainer width="92%" height={400}>
          <BarChart data={QuizData.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <footer className="text-center text-black font-bold pt-4 rounded">
        <p><small>Copyright © 2022 web quiz store.</small></p>
    </footer>
    </div>
  );
};

export default Statistics;
