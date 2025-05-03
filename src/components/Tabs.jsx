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
      icon = (
        <div className="w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 rounded-md">
          <CheckCircle className="w-6 h-6" />
        </div>
      );
      break;
    case "Due":
      badgeColor = "bg-red-100 text-red-800";
      icon = (
        <div className="w-12 h-12 flex items-center justify-center bg-red-50 text-red-600 rounded-md">
          <AlertCircle className="w-6 h-6" />
        </div>
      );
      break;
    case "In progress":
      badgeColor = "bg-blue-100 text-blue-800";
      icon = null;
      break;
    case "To do":
      badgeColor = "bg-yellow-100 text-yellow-800";
      icon = null;
      break;
  }

  return (
    <div className="flex items-start justify-between p-4 rounded-2xl shadow bg-white border border-gray-200">
      <div className="flex items-center gap-4">
        {icon ? (
          icon
        ) : (
          <div className="w-12 h-12 flex flex-col items-center justify-center border rounded-md text-xs font-medium text-center">
            <div>{daysLeft}</div>
            <div className="text-[10px]">Days Left</div>
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
  {/* Image as Icon */}
  <img src="/Mask group.png" alt="Icon" className="w-6 h-6" />
  Tasks
</h2>

        <Button variant="outline" className="text-red-600 border-red-400">View All</Button>
      </div>
      <div className="space-y-2">
  {tasks.map((task, index) => (
    <TaskCard key={index} {...task} />
  ))}
</div>

    </div>
  );
};

export default TaskSection;