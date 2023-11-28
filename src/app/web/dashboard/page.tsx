"use client"
import { ResumeData } from "@/assets/data/resume.data";
import { TORONTO } from "@/assets/data/template.data";
import TemplateBuilder from "@/packages/TemplateBuilder";
import { useAppDispatch } from "@/redux/hooks";
import { setResumeData } from "@/redux/slices/resume/resume.slice";
import React from "react";

const Dashboard = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    // Fetch Resume Data
    dispatch(setResumeData(ResumeData))
  }, [])

  return <TemplateBuilder templateJSON={TORONTO} />;
};

export default Dashboard;
