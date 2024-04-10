import { useAppSelector } from "@/redux/hooks";
import { SwiftSectionContent, SwiftSectionLabels } from "../../Swift.styled";
import { SwiftSkillWrapper } from "./Skills.styled";
import { Box } from "@mui/material";

const SwiftSkillsSection = () => {
  const { resumeData } = useAppSelector((store) => store.ResumeReducer);
  const { skills } = resumeData;
  return <>
    <SwiftSectionLabels>Skills</SwiftSectionLabels>
    <SwiftSectionContent>
      <SwiftSkillWrapper>
        {skills?.map(skill => {
          return <Box>{skill.name}</Box>
        })}
      </SwiftSkillWrapper>
    </SwiftSectionContent>
  </>
};

export default SwiftSkillsSection;
