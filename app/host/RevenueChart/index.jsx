'use client'
import { useState , useEffect} from 'react';

export default function RevenueChart() {
    const [view, setView] = useState('Day');

    const data = {
        Day: [
            { label: '1', value: 1500 },
            { label: '2', value: 2000 },
            { label: '3', value: 3000 },
            { label: '4', value: 2000 },
            { label: '5', value: 1500 },
            { label: '6', value: 1000 },
            { label: '7', value: 2500 },
            { label: '8', value: 1500 },
            { label: '9', value: 2000 },
            { label: '10', value: 1000 },
            { label: '11', value: 1500 },
            { label: '12', value: 3000 },
            { label: '13', value: 2000 },
            { label: '14', value: 1000 },
            { label: '15', value: 1500 },
        ],
        Week: [
            // Add week data here
        ],
        Month: [
            // Add month data here
        ]
    };

    const renderBars = () => {
        return data[view].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
                <div
                    className="bg-blue-500"
                    style={{ height: `${(item.value / 3000) * 100}%`, width: '20px' }}
                ></div>
                <span className="text-xs mt-2">{item.label}</span>
            </div>
        ));
    };

    const scaleBasis = 100
    const scaleStep = 6





    useEffect(() => {
        // Function to enable horizontal scrolling with mouse wheel
        const container = document.getElementById('revenue-bar-chart');
    
        const handleWheel = (event) => {
          if (event.deltaY !== 0) {
            // Prevent vertical scrolling
            event.preventDefault();
    
            // Scroll horizontally instead
            container.scrollLeft += event.deltaY;
          }
        };
    
        container.addEventListener('wheel', handleWheel);
    
        // Cleanup function to remove event listener when component unmounts
        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
      }, []);











    return (

        <div className=' pt-4 pb-6 pl-4 w-full'>
            <div>
                <h3 className='text-neutral-500 text-lg font-semibold'>Revenue</h3>
            </div>
            <div className='flex justify-between w-full text-neutral-300 text-md font-medium max-w-sm mb-6 ml-auto mr-auto'>
                <button>Day</button>
                <button>Week</button>
                <button>Month</button>
            </div>


                <div className='relative w-full'>
                    <div className='relative h-48 flex flex-col-reverse justify-between '>
                        <span className='text-xs absolute text-neutral-400' style={{ bottom: `-8px`, right:'calc(100% - 36px)' }}>0</span>
                        <div className='bg-neutral-100 w-full absolute h-px right-0' style={{ width:`calc(100%)`, bottom: '0%', right:'0px' }}></div>    
                            {
                                Array.from({length: scaleStep})
                                    .map((_, idx)=> 
                                        <>
                                            <span className='text-xs absolute text-neutral-400' style={{ bottom: `calc(${(idx+1) *(100/6)}% - 8px)`, right:'calc(100% - 36px)' }}>{ (idx+1) * scaleBasis }</span>
                                            <div className='bg-neutral-100 w-full absolute h-px right-0 ' style={{ width:`calc(100% - 48px)`, bottom: `${(idx+1) *(100/6)}%`, right:'0px' }}></div>
                                        </>
                                )
                            }
                    </div>
                    {/* BarChart */}
                    <div className='absolute top-0 left-0 ml-12 max-w-full pr-12'>
                        <div id='revenue-bar-chart' className='h-full flex flex-row gap-x-9 ml-4 overflow-x-auto no-scrollbar'>
                            {
                                Array.from({length:30}).map((_,idx)=>   
                                        <div className='min-w-2'>
                                            <div className=' h-48 bg-neutral-50 pt-auto rounded-t-lg relative'>
                                                <div 
                                                    className='bg-secondary-400 absolute bottom-0 w-full rounded-t-lg' 
                                                    style={{ height: '40%'}}>
                                                </div>
                                                {/* */}

                                            </div>
                                            <span className=' text-xs text-neutral-400'>{idx+1}</span> 
                                        </div>
                                )
                            }
                        </div>


                        {/* <div className=' h-full flex flex-row gap-x-9 ml-4  '>
                            {
                                Array.from({length:30}).map((_,idx)=> 
                                    
                                        <span className='min-w-2     top-full text-xs text-neutral-400'>{idx+1}</span>
                                )
                            }
                        </div> */}
                            
                    </div>
                    
                </div>
            
            <div className='mt-8 flex items-center justify-center gap-4'>
                <div className='min-h-2 min-w-4 h-2 w-4 bg-secondary-400 '/><span className='text-neutral-500 text-xs font-medium'>Revenue</span>
            </div>
            <span className='text-neutral-500 text-lg font-semibold'>Today:25564$</span>
        </div>
        
    );
}








// const [timeFrame, setTimeFrame] = useState('daily');
// const [revenueData, setRevenueData] = useState([]);
// const maxRevenue = Math.max(...dailyRevenue.map(entry => entry.value));

// useEffect(() => {
//   const calculateRevenueData = () => {
//     switch (timeFrame) {
//       case 'weekly':
//         return calculateWeeklyRevenue(dailyRevenue);
//       case 'monthly':
//         return calculateMonthlyRevenue(dailyRevenue);
//       case 'yearly':
//         return calculateYearlyRevenue(dailyRevenue);
//       default:
//         return dailyRevenue.map((entry) => ({
//           label: new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short' }),
//           value: entry.value,
//         }));
//     }
//   };
//   setRevenueData(calculateRevenueData());
// }, [timeFrame, dailyRevenue]);

// const calculateWeeklyRevenue = (dailyRevenue) => {
//   const weeklyRevenue = [];
//   for (let i = 0; i < dailyRevenue.length; i += 7) {
//     const weekRevenue = dailyRevenue.slice(i, i + 7).reduce((acc, day) => acc + day.value, 0);
//     weeklyRevenue.push({ label: `Week ${Math.floor(i / 7) + 1}`, value: weekRevenue });
//   }
//   return weeklyRevenue;
// };

// const calculateMonthlyRevenue = (dailyRevenue) => {
//   const monthlyRevenue = [];
//   let monthRevenue = 0;
//   let currentMonth = new Date(dailyRevenue[0].date).getMonth();
//   dailyRevenue.forEach((day) => {
//     const dayMonth = new Date(day.date).getMonth();
//     if (dayMonth !== currentMonth) {
//       monthlyRevenue.push({ label: `Month ${currentMonth + 1}`, value: monthRevenue });
//       currentMonth = dayMonth;
//       monthRevenue = 0;
//     }
//     monthRevenue += day.value;
//   });
//   monthlyRevenue.push({ label: `Month ${currentMonth + 1}`, value: monthRevenue });
//   return monthlyRevenue;
// };

// const calculateYearlyRevenue = (dailyRevenue) => {
//   const yearlyRevenue = [];
//   let yearRevenue = 0;
//   let currentYear = new Date(dailyRevenue[0].date).getFullYear();
//   dailyRevenue.forEach((day) => {
//     const dayYear = new Date(day.date).getFullYear();
//     if (dayYear !== currentYear) {
//       yearlyRevenue.push({ label: `${currentYear}`, value: yearRevenue });
//       currentYear = dayYear;
//       yearRevenue = 0;
//     }
//     yearRevenue += day.value;
//   });
//   yearlyRevenue.push({ label: `${currentYear}`, value: yearRevenue });
//   return yearlyRevenue;
// };
