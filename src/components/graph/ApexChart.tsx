import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllLocationsByTypeApiCall } from "../../services/general.services";

const ApexChart: React.FC = () => {
  const hasMounted = useRef(false);
  const [seriesData, setSeriesData] = useState<any>([]);
  const graphItems = [
    "walking-route",
    "dog-walk",
    "toilet",
    "entrance",
    "amenities",
    "view_point",
    "nature",
    "play_park",
    "garden",
    "picnic_tables_benches",
    "water_safety",
    "castle",
    "exit",
  ];
  useEffect(() => {
    if (!hasMounted.current) {
      for (let item of graphItems) {
        getAllLocationsByTypeApiCall(item)
          .then((response) => {
            setSeriesData((prev: any) => [
              ...prev,
              response?.data?.result?.length,
            ]);
          })
          .catch((error) => {
            console.log("error:", error);
          });
      }
      return () => {
        hasMounted.current = true;
      };
    }
  }, []);
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    series: [
      {
        name: "Users",
        data: seriesData,
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.001,
        opacityFrom: 0.2,
        opacityTo: 0.14,
      },
    },
    colors: ["green"],
    xaxis: {
      labels: { hideOverlappingLabels: false },
      categories: [
        "Walking",
        "Dog walk",
        "Toilets",
        "Entrance",
        "Amenities",
        "View point",
        "Nature",
        "Play park",
        "Garden",
        "Table benches",
        "Water safety",
        "Castle",
        "Exit",
      ],
    },
    yaxis: {
      tickAmount: 5,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={400}
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
