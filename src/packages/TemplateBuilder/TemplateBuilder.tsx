"use client";
import Rows from "./components/Rows";
import { TemplateBuilderProps } from "./TemplateBuilder.type";
const TemplateBuilder = ({ templateJSON }: TemplateBuilderProps) => {
  return <Rows rows={templateJSON.rows} />;
};

export default TemplateBuilder;
