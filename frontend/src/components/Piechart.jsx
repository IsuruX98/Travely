import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Premium ', value: 400 },
  { name: 'Exclusive ', value: 300 },
  { name: 'Bronze', value: 300 },
  { name: 'Silver', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const Piechart = () => {
  return (
    <div> <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div flex justify-between>
            <div className='grid grid-cols-4  justify-content pl-6'>
          {data.map((item,index) => {
            return (
              <p key={index} className='cursor-pointer text-[#7f8180] font-bold'>
                {item.name}
              </p>
            );
          })}
        </div>
        <div className='grid grid-cols-4 mt-[15px] pl-6'>
          {COLORS.map((item,index) => {
            return (
              <div className='h-[30px] w-[30px]'style={{backgroundColor:item}} key={index}></div>
            );
          })}
        </div>
        </div>
      
    </div>
  )
}

export default Piechart
