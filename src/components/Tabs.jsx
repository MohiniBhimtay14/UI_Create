import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

const TaskCard = ({ status, daysLeft, title }) => {
    let badgeColor, icon, dateDisplay;
  
    switch (status) {
      case "Completed":
        badgeColor = "bg-green-100 text-green-800";
        icon = <CheckCircle className="text-green-600" />;
        break;
      case "Due":
        badgeColor = "bg-red-100 text-red-800";
        icon = <AlertCircle className="text-red-600" />;
        break;
      case "In progress":
        badgeColor = "bg-blue-100 text-blue-800";
        icon = null;
        dateDisplay = `${daysLeft} Days Left`;
        break;
      case "To do":
        badgeColor = "bg-yellow-100 text-yellow-800";
        icon = null;
        dateDisplay = `${daysLeft} Days Left`;
        break;
    }
  
    return (
      <div className="flex items-start justify-between p-4 rounded-2xl shadow bg-white border border-gray-200">
        <div className="flex items-center gap-4">
          {icon ? (
            <div className="text-2xl">{icon}</div>
          ) : (
            <div className="text-center text-xs font-medium border rounded-full px-2 py-1">
              <div>{daysLeft}</div>
              <div>Days Left</div>
            </div>
          )}
          <div>
            <h4 className="font-semibold">{title}</h4>
            <Badge className={badgeColor}>{status}</Badge>
          </div>
        </div>
        <div className="text-gray-500 text-xl">⋮</div>
      </div>
    );
  };
  

const TaskSection = () => {
  const tasks = [
    { title: "Sangathan Yatra", status: "Completed" },
    { title: "Sangathan Yatra", status: "Due" },
    { title: "Sangathan Yatra", status: "In progress", daysLeft: 25 },
    { title: "Sangathan Yatra", status: "To do", daysLeft: 25 },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
          <span className="text-2xl">🪷</span> Tasks
        </h2>
        <Button variant="outline" className="text-red-600 border-red-400">View All</Button>
      </div>
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </div>
  );
};

export default TaskSection;