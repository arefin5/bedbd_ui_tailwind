"use client"
import CanvasJSReact from '@canvasjs/react-charts';

const BarChart = ({ data }) => {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  // Transform data for CanvasJS
  const dataPointsBooking = data.map((entry) => ({
    label: new Date(entry.date).toLocaleDateString("en-US", { day: "numeric" }),
    y: entry.booking.price,
  }));

  const dataPointsCancel = data.map((entry) => ({
    label: new Date(entry.date).toLocaleDateString("en-US", { day: "numeric" }),
    y: entry.cancel.price,
  }));

  // CanvasJS chart options
  const options = {
    animationEnabled: true,
    height: 300,  
    theme: "light2", // Try light2 or dark1 for different themes
    title: {
      text: "Revenue",
    },
    axisX: {
      interval: 5,
      title: "Date",
  
      labelFontColor: "#6B7280", // Tailwind gray-500
    },
    axisY: {
      // title: "Price",
      labelFontColor: "#6B7280", // Tailwind gray-500
      gridColor: "#E5E7EB", // Tailwind gray-200
    },
    toolTip: {
      shared: true,
      contentFormatter: (e) =>
        e.entries
          .map(
            (entry) =>
              `${entry.dataSeries.name}: ${entry.dataPoint.y} ৳`
          )
          .join("<br>"),
    },
    data: [
      {
        type: "column",
        name: "Booking",
        showInLegend: true,
        dataPoints: dataPointsBooking,
        dataPointWidth: 40,
        barWidth: 10, 
        groupWidth: "20%",
        color: "rgba(59, 130, 246, 0.8)", // Blue
      },
      {
        type: "column",
        name: "Cancel",
        showInLegend: true,
        dataPoints: dataPointsCancel,
        barWidth: 1, 
        color: "rgba(249, 115, 22, 0.8)", // Orange
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md w-full shadow-md">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">Revenue</h2>
      <div className="flex space-x-4">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">Day</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded">
            Week
          </button>
          <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded">
            Month
          </button>
        </div>
      {/* Bar Chart */}
      <CanvasJSChart options={options} />

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">
          Today: <span className="font-bold">25,564 ৳</span>
        </div>
        
      </div>
    </div>
  );
};

export default BarChart;



  // // Maximum price for scaling
  // const maxPrice = Math.max(...data.map(({booking, cancel})=> Math.max(booking?.price || 0, cancel.price || 0)), 1)
