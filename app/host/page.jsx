import Sidebar from './Sidebar'
import InputRadioIcon from './InputRadioIcon'
import PendingRequestNotification from './PendingRequestNotification'
import PropertyList from './PropertyList'
import Calendar from './Calendar'
import Chart from './Chart'
import RevenueChart from './RevenueChart'

export default function Dashboard() {
  const data = [
    { value: 45, title: 'Booked' },
    { value: 20, title: 'Canceled' },
  ];
  const dailyRevenue = [
    { date: '2024-07-01', value: 150 },
    { date: '2024-07-02', value: 200 },
    { date: '2024-07-03', value: 250 },
    { date: '2024-07-04', value: 300 },
    { date: '2024-07-05', value: 350 },
    { date: '2024-07-06', value: 400 },
    { date: '2024-07-07', value: 450 },
    { date: '2024-07-08', value: 500 },
    // Add more daily revenue data as needed
  ];
  return (
    <div className=' w-full'>
      <>
        <PendingRequestNotification/>
        <PropertyList/>
        <Calendar/>
        <Chart data={data} title={'Booked & Canceled'} totalValue='11254'/>
        <RevenueChart dailyRevenue={dailyRevenue}/>
      </>
    </div>
  )
}
