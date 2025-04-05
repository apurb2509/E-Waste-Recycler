import React, { useState } from 'react';
import { BarChart2, Users, Trash2, RefreshCcw } from 'lucide-react';

const StatsSection = () => {
  const [hovered, setHovered] = useState(null);

  const stats = [
    {
      id: 1,
      title: "E-waste Generated",
      value: "53.6M",
      unit: "tons",
      subtext: "generated globally in 2023",
      icon: Trash2,
      color: "text-red-600",
      bgColor: "bg-red-100",
      lineColor: "bg-red-600",
      hoverColor: "hover:bg-red-50",
      hoverTextColor: "group-hover:text-red-600"
    },
    {
      id: 2,
      title: "Recycling Rate",
      value: "17.4",
      unit: "%",
      subtext: "of e-waste recycled globally",
      icon: RefreshCcw,
      color: "text-green-600",
      bgColor: "bg-green-100",
      lineColor: "bg-green-600",
      hoverColor: "hover:bg-green-50",
      hoverTextColor: "group-hover:text-green-600"
    },
    {
      id: 3,
      title: "Users Joined",
      value: "1,240",
      unit: "+",
      subtext: "in the last month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      lineColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-50",
      hoverTextColor: "group-hover:text-blue-600"
    },
    {
      id: 4,
      title: "Devices Classified",
      value: "34,582",
      unit: "",
      subtext: "by our AI system",
      icon: BarChart2,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      lineColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-50",
      hoverTextColor: "group-hover:text-purple-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          E-Waste Impact Statistics
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Understanding the scale of the e-waste problem helps drive better recycling practices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"> {/* Increased gap for zoom effect */}
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`group relative p-6 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out ${stat.hoverColor} hover:scale-105 transform-gpu hover:shadow-xl`}
            onMouseEnter={() => setHovered(stat.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ willChange: 'transform' }} // Optimize for animation
          >
            {/* Colored line matching the text color */}
            {hovered === stat.id && (
              <div className={`absolute top-0 left-0 right-0 h-1 ${stat.lineColor} animate-line`}></div>
            )}
            
            <div className="relative flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`ml-3 text-lg font-medium ${stat.hoverTextColor} ${stat.color}`}>
                    {stat.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <p className={`text-3xl font-bold ${stat.hoverTextColor} ${stat.color}`}>
                    {stat.value}
                    <span className="text-xl">{stat.unit}</span>
                  </p>
                  <p className={`mt-1 ${stat.hoverTextColor} ${stat.color}`}>
                    {stat.subtext}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm">
                  <div className={`flex-shrink-0 mr-1.5 h-2 w-2 rounded-full ${stat.hoverTextColor} ${stat.color}`}></div>
                  <span className={`${stat.hoverTextColor} ${stat.color}`}>vs last year</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-line {
          animation: lineAnimation 0.3s ease-out;
        }
        @keyframes lineAnimation {
          0% { width: 0; opacity: 0; }
          100% { width: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default StatsSection;