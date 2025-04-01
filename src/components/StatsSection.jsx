
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
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      title: "Recycling Rate",
      value: "17.4",
      unit: "%",
      subtext: "of e-waste recycled globally",
      icon: RefreshCcw,
      color: "bg-primary-100 text-primary-600",
    },
    {
      id: 3,
      title: "Users Joined",
      value: "1,240",
      unit: "+",
      subtext: "in the last month",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 4,
      title: "Devices Classified",
      value: "34,582",
      unit: "",
      subtext: "by our AI system",
      icon: BarChart2,
      color: "bg-purple-100 text-purple-600",
    }
  ];
  
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-poppins text-gray-900 sm:text-4xl">
            E-Waste Impact Statistics
          </h2>
          <p className="mt-4 text-gray-600">
            Understanding the scale of the e-waste problem helps drive better recycling practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="stat-card card-hover"
              onMouseEnter={() => setHovered(stat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                  <div className="flex items-baseline mt-1">
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="ml-1 text-sm font-medium text-gray-500">{stat.unit}</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{stat.subtext}</p>
                </div>
                <div className={`p-2 rounded-lg ${stat.color} transition-transform ${hovered === stat.id ? 'scale-110' : ''}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500`}
                      style={{ width: `${Math.random() * 60 + 30}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-xs text-gray-500">vs last year</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
