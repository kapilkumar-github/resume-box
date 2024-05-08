import { Typography } from "@mui/material";
import { SwiftSectionWrapper, SwiftTemplateWrapper } from "./Swift.styled";
import { useAppSelector } from "@/redux/hooks";
import { Links, SwiftProfileSection } from "./Sections";
import SwiftSkillsSection from "./Sections/Skills";
import SwiftEmploymentSection from "./Sections/Employment/SwiftEmploymentSection";
import SwiftEducationSection from "./Sections/Education";
import SwiftHobbiesSection from "./Sections/Hobbies";

const Swift = () => {
  const { resumeData } = useAppSelector(store => store.ResumeReducer);
  const { basics } = resumeData
  return (
    <SwiftTemplateWrapper>
      <Typography variant="h6" textAlign={"center"} fontWeight={600}>
        {basics.name}, {basics.designation}
      </Typography>
      <Typography variant="body2" textAlign={"center"} fontWeight={500} mt={1.5}>
        {basics.location.city}, {basics.phone}, {basics.email}
      </Typography>

      <SwiftSectionWrapper>
        <Links />
      </SwiftSectionWrapper>

      <SwiftSectionWrapper>
        <SwiftProfileSection />
      </SwiftSectionWrapper>

      <SwiftSectionWrapper>
        <SwiftSkillsSection />
      </SwiftSectionWrapper>

      <SwiftSectionWrapper sx={{ flexDirection: 'column' }}>
        <SwiftEmploymentSection />
      </SwiftSectionWrapper>

      <SwiftSectionWrapper sx={{ flexDirection: 'column' }}>
        <SwiftEducationSection />
      </SwiftSectionWrapper>

      <SwiftSectionWrapper >
        <SwiftHobbiesSection />
      </SwiftSectionWrapper>
    </SwiftTemplateWrapper>
  );
};

export default Swift;
