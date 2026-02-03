"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Day 1", amount: 2000 },
  { name: "Day 2", amount: 4000 },
  { name: "Day 3", amount: 6500 },
  { name: "Day 4", amount: 9000 },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-10 py-12">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">
        Crowdfunding Platform
      </h1>
      <p className="text-center text-slate-400 mt-2">
        Support the project & get exclusive merchandise
      </p>

      {/* Rewards / Merchandise */}
      <div className="flex gap-6 justify-center mt-10 flex-wrap">

        <div className="bg-slate-800 rounded-2xl p-6 w-72">
          <h2 className="text-2xl font-bold text-indigo-400">₹500</h2>
          <h3 className="text-xl mt-2">Supporter</h3>
          <p className="text-slate-400 mt-2">Thank You Email</p>
          <button className="mt-4 w-full bg-indigo-500 py-2 rounded-xl">
            Contribute
          </button>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 w-72">
          <h2 className="text-2xl font-bold text-indigo-400">₹1000</h2>
          <h3 className="text-xl mt-2">Official T-Shirt</h3>
          <p className="text-slate-400 mt-2">
            Limited edition merchandise
          </p>
          <button className="mt-4 w-full bg-indigo-500 py-2 rounded-xl">
            Contribute
          </button>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 w-72">
          <h2 className="text-2xl font-bold text-indigo-400">₹2000</h2>
          <h3 className="text-xl mt-2">Premium Combo</h3>
          <p className="text-slate-400 mt-2">
            T-Shirt + Mug + Certificate
          </p>
          <button className="mt-4 w-full bg-indigo-500 py-2 rounded-xl">
            Contribute
          </button>
        </div>

      </div>

      {/* Analytics */}
      <div className="bg-slate-800 p-6 rounded-2xl mt-14">
        <h2 className="text-xl font-semibold mb-4">
          Funding Progress
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#6366f1"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}