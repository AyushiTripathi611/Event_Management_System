import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const DoughnutChart = ({ data }) => {
  const chartData = {
    series: [
      {
        data: data.map((item) => ({ id: item.id, value: item.value, label: item.label })),
        innerRadius: 30,
        outerRadius: 100,
        paddingAngle: 5,
        cornerRadius: 5,
        startAngle: 0,
        endAngle: 360,
        cx: 110,
        cy: 95,
      },
    ],
  };

  return <PieChart {...chartData} width={400} height={200} />;
};

export default DoughnutChart;
