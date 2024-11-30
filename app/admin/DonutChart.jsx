"use client"
import React from "react";
// import dynamic from "next/dynamic";
import CanvasJSReact from '@canvasjs/react-charts';

// // Dynamically import CanvasJSChart to avoid SSR issues
// const CanvasJSChart = dynamic(
//   () => import('@canvasjs/react-charts').then((mod) => mod.CanvasJSChart),
//   { ssr: false }
// );

const DonutChart = () => {
    // const data = [
    //     { label: "18-25 Age Group", value: 25, color: "#4F81BD" },
    //     { label: "26-35 Age Group", value: 30, color: "#F44336" },
    //     { label: "36-45 Age Group", value: 20, color: "#8BC34A" },
    //     { label: "45+ Age Group", value: 25, color: "#FFEB3B" },
    //     { label: "Male", value: 50, color: "#3F51B5" },
    //     { label: "Female", value: 45, color: "#E91E63" },
    //     { label: "Unmentioned", value: 5, color: "#9E9E9E" }
    //   ];

// fill="#A0E77D"  fill="#82B6D9" fill="#EF8677" fill="#EF8677"
      const ageData = [
        { label: "18-25", value: 40, color: "#EF8677" },
        { label: "26-35", value: 32, color: "#A0E77D" },
        { label: "36-45", value: 16, color: "#B1D6FD" },
        { label: "45+", value: 12, color: "#82B6D9" }
      ];
    
      // Sample data for gender distribution
      const genderData = [
        { label: "Male", value: 50, color: "#3F51B5" },
        { label: "Female", value: 45, color: "#E91E63" },
        { label: "Unmentioned", value: 5, color: "#9E9E9E" }
      ];

      const genderDataPoints = genderData.map((item) => ({
        y: item.value,
        label: item.label,
        color: item.color
      }));

    //   const ageDataPoints = ageData.map((item) => ({
    //     y: item.value,
    //     label: item.label,
    //     color: item.color
    //   }));
    const MIN_THRESHOLD = 5
      const ageDataPoints = ageData.map((item) => ({
        y: item.value,
        label: item.label,
        color: item.color,
        indexLabel: "{label}: {y}%",
        indexLabelFontSize: 16,
        indexLabelFontWeight: "bold",
        // exploded: 0.2
        // exploded: item.value >= MIN_THRESHOLD, // Explode if value is greater than or equal to threshold
      }));




    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    theme: "light2", // Optional theme
    data: [
      {
        type: "doughnut", // Donut chart type
        innerRadius: 50, // Inner radius (for the inner donut)
        outerRadius: 100,  // Size of the hole
        showInLegend: false, // Show legend
        toolTipContent: "<b>{label}</b>: {y}%", // Tooltip customization
        dataPoints: ageDataPoints,
        indexLabelFontSize: 16,
        indexLabelFontWeight: "bold",
        exploded: true,
        hoverEffect: true,
      },
    //   {
    //     type: "doughnut", // Second dataset for gender distribution
    //     innerRadius: 80, // Inner radius (for the outer donut)
    //     outerRadius: 100, 
    //     showInLegend: true,
    //     toolTipContent: "<b>{label}</b>: {y}%",
    //     dataPoints: genderDataPoints
    //   }
    ],
    // width: 300, // Chart width
    height: 300, // Chart height
    margin: { top: 0, left: 0, right: 0, bottom: 0 },

  };

  return (
    <div className="bg-secondary-50 rounded-lg overflow-hidden p-4 ">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default DonutChart;
