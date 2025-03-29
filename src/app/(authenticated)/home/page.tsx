"use client"
import { NavBar } from "@/components";
import { Accounts, Entries, Subscriptions } from "@/components/PageComponents/Home";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      Amount: 100,
      maxAmount: 300,
    },
    {
      name: 'Feb',
      Amount: 80,
      maxAmount: 300,
    },
    {
      name: 'Mar',
      Amount: 95,
      maxAmount: 300,
    },
    {
      name: 'Apr',
      Amount: 150,
      maxAmount: 300,
    },
    {
      name: 'May',
      Amount: 250,
      maxAmount: 300,
    },
    {
      name: 'Jun',
      Amount: 200,
      maxAmount: 300,
    },
    {
      name: 'Jul',
      Amount: 300,
      maxAmount: 300,
    },
  ];

export default function page() {
    return (
        <div className="p-8 flex flex-col gap-6 h-screen overflow-auto">
            <NavBar />
            <div className="bg-white rounded-md shadow-md px-4 py-2 h-full">
                <p className="text-lg">Summary</p>
                <ResponsiveContainer width="100%" height="90%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid  />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="maxAmount" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Amount" stroke="#5700c2" fill="#5700c2" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <Entries />
            <div className="flex flex-row gap-4 w-full">
                <Subscriptions />
                <Accounts />
            </div>
        </div>
    )
}