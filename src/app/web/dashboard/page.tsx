import { TORONTO } from "@/assets/data/template.data";
import TemplateBuilder from "@/packages/TemplateBuilder";
import React from "react";

const Dashboard = () => {
  return <TemplateBuilder templateJSON={TORONTO} />;
};

export default Dashboard;
