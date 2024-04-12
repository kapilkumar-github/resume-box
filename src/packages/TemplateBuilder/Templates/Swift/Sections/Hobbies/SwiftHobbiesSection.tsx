import { useAppSelector } from "@/redux/hooks";
import { SwiftSectionContent, SwiftSectionLabels } from "../../Swift.styled";
import { Box, Stack, Typography } from "@mui/material";
import { DefaultStack } from "@/assets/styles/common.styles";
import { stringToDate } from "@/common/utility/date&time";

const SwiftHobbiesSection = () => {
    const { resumeData } = useAppSelector((store) => store.ResumeReducer);
    const { interests } = resumeData
    return <>
        <SwiftSectionLabels>Hobbies</SwiftSectionLabels>
        <SwiftSectionContent >
            <Typography variant="body2">
                {interests?.map((interest, index) => {
                    return index === interests.length - 1 ? interest.name : `${interest.name}, `
                })}</Typography>
        </SwiftSectionContent>
    </>
}

export default SwiftHobbiesSection