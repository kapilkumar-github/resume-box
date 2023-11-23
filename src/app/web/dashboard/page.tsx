import { TemplateData } from "@/assets/data/template.data";
import TemplateBuilder from "@/packages/TemplateBuilder";
import React from "react";

const Dashboard = () => {
  return <TemplateBuilder templateJSON={TemplateData} />;
};

export default Dashboard;
