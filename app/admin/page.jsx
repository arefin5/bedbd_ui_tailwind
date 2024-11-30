// "use client";
// import { useEffect, useState } from 'react';
import {ArrowDownWideNarrow,TrendingUp,  LineChartIcon, LucideLineChart, BarChart, LucideGanttChartSquare, LucideCandlestickChart } from "lucide-react";
import dynamic from 'next/dynamic';
const RevenueChart = dynamic(() => import('./RevenueChart'), { ssr: false });
const DonutChart = dynamic(() => import('./DonutChart'), { ssr: false });



export default function Dashboard() {

    const data = [
        {
          date: "2023-10-01",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-02",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-03",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-04",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-05",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-06",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-07",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-08",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-09",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-10",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-11",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-12",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-13",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-14",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
        {
          date: "2023-10-15",
          booking: { count: Math.floor(Math.random() * 50) + 20, price: Math.floor(Math.random() * 500) + 100 },
          cancel: { count: Math.floor(Math.random() * 10), price: Math.floor(Math.random() * 100) + 30 },
        },
      ];

  return (
    <div className='w-full px-8 py-10'>
        {/* Top welcom bar */}
        <div className="w-full py-6 px-2 flex justify-between">
            <h2 className="font-semibold text-2xl text-neutral-600">Welcome</h2>
            <div className="flex gap-4 items-center">
                <label htmlFor="date-input-start" className="relative  py-1 px-3 rounded-md border border-neutral-400">
                    <input placeholder="input date from" 
                    type="date" id="date-input-start" name="date-input" min="2024-01-01" />
                </label>
                <span>
                    -
                </span>
                <label htmlFor="date-input-end" className="relative  py-1 px-3 rounded-md border border-neutral-400">
                    <input placeholder="input date from" 
                    type="date" id="date-input-end" name="date-input" min="2024-01-01" />
                </label>
            </div>
        </div>
        {/* Main Seciton */}
        <div className="flex gap-x-8 w-full  ">
            <div className=" w-full  ">
                <div className="bg-secondary-50 rounded-lg px-6 py-8 flex flex-wrap gap-4">
                    <div className="w-[197px] bg-green-400 bg-opacity-20 rounded-lg p-6">
                        <h4 className="text-xl font-medium text-neutral-600">Total Booking</h4>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-2xl font-medium text-neutral-600">1,230</div>
                            <div className="p-2 rounded-lg bg-white w-fit bg-opacity-50">
                                <LineChartIcon className="icon" color="#4785f1" />
                                {/* <ArrowDownWideNarrow color="#f22922" /> */}
                                {/* <TrendingUp color="#008000" /> */}
                            </div>  
                        </div>
                    </div>
                    
                    <div className="w-[197px] bg-purple-600 bg-opacity-20 rounded-lg p-6">
                        <h4 className="text-xl font-medium text-neutral-600">Cancle</h4>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-2xl font-medium text-neutral-600">124</div>
                            <div className="p-2 rounded-lg bg-white w-fit bg-opacity-50">
                                {/* <LineChartIcon className="icon" color="#4785f1" /> */}
                                <ArrowDownWideNarrow color="#f22922" />
                            </div>  
                        </div>
                    </div>

                    <div className="w-[197px] bg-blue-500 bg-opacity-20 rounded-lg p-6">
                        <h4 className="text-xl font-medium text-neutral-600">Revenue</h4>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-2xl font-medium text-neutral-600">$123,000</div>
                            <div className="p-2 rounded-lg bg-white w-fit bg-opacity-50">
                                {/* <ArrowDownWideNarrow color="#f22922" /> */}
                                <TrendingUp color="#008000" />

                            </div>  
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-100 flex items-center justify-center mt-8">
                    <RevenueChart data={data} />
                </div>

                <div className="bg-secondary-50 p-6 mt-8 text-neutral-500 text-base font-medium">
                    <div className="flex justify-between w-full">
                        <h3 className="text-neutal-600 font-semibold text-xl">Notificaiton</h3>
                        <button>see all</button>
                    </div>
                    <div className="space-y-2 font-medium mt-4">
                        <div className="flex justify-between">
                            <p> <span>.</span> Request for new property listing from Uttara, Dhaka. View to approve.</p>
                            <span className="text-neutral-400">12m ago</span>
                        </div>

                        <div className="flex justify-between">
                            <p> <span>.</span> A customer canceled booking.</p>
                            <span className="text-neutral-400">13m ago</span>
                        </div>

                        <div className="flex justify-between">
                            <p> <span>.</span> Lorem ipsum dolor sit amet consectetur.</p>
                            <span className="text-neutral-400">16m ago</span>
                        </div>

                        <div className="flex justify-between">
                            <p> <span>.</span> A user booked room for 2 days.</p>
                            <span className="text-neutral-400">1h ago</span>
                        </div>

                        <div className="flex justify-between">
                            <p> <span>.</span> A customer canceled booking.</p>
                            <span className="text-neutral-400">3h ago</span>
                        </div>

                        <div className="flex justify-between">
                            <p> <span>.</span>Lorem ipsum dolor sit amet consectetur.</p>
                            <span className="text-neutral-400">1w ago</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="min-w-[260px] h-full">

                {/* Demographic Chart  */}
                <div className="w-full bg-secondary-50 rounded-lg h-fit ">
                    <DonutChart/>
                </div>

                {/* Top City  */}
                <div className="w-full bg-secondary-50 rounded-lg h-fit mt-6 py-6 px-4">
                    <h4 className="text-neutral-600 font-semibold text-xl">Top 5 City </h4>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                </div>

                {/* Last 5 city      */}
                <div className="w-full bg-secondary-50 rounded-lg h-fit mt-6 py-6 px-4">
                    <h4 className="text-neutral-600 font-semibold text-xl">Top 5 City </h4>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                    <div className="text-neutral-500 text-base font-medium | mt-2 flex items-center justify-between space-y-2">
                        <p className="">Dhaka</p>
                        <span>3432</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}
