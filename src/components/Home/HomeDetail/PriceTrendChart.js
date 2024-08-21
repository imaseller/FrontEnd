import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const PriceTrendChart = ({ data }) => {
  return (
    <div style={{ marginBottom: '8px' }}>
      <label
        style={{
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '10px',
          display: 'block',
          marginBottom: '8px',
        }}
      >
        가격변동 안내
      </label>
      <ResponsiveContainer width='100%' height={200}>
        <LineChart data={data}>
          <XAxis dataKey='date' tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='price'
            stroke='#f5a623'
            strokeWidth={2}
            dot={{ stroke: '#f5a623', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceTrendChart;
