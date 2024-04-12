import { useAppSelector } from "@/redux/hooks";
import { SwiftSectionContent, SwiftSectionLabels } from "../../Swift.styled";
import { Box, Stack, Typography } from "@mui/material";
import { DefaultStack } from "@/assets/styles/common.styles";
import { stringToDate } from "@/common/utility/date&time";

const SwiftEducationSection = () => {
    const { resumeData } = useAppSelector((store) => store.ResumeReducer);
    const { education } = resumeData
    return <>
        <SwiftSectionLabels>Education</SwiftSectionLabels>
        <SwiftSectionContent sx={{ width: '100%', marginTop: '0.5cm' }}>
            {education?.map(degree => {
                return <Stack direction={'row'} alignItems={'baseline'}>
                    <Box width={'5.5cm'}>
                        {stringToDate(degree.startDate)} - {stringToDate(degree.endDate)}
                    </Box>
                    <DefaultStack flex={1} sx={{ alignItems: 'baseline' }}>
                        <Typography fontWeight={'bold'} fontSize={'0.39cm'}>{degree.studyType} ({degree.courses}), {degree.institution}</Typography>
                        <Typography variant="caption">{degree.location}</Typography>
                    </DefaultStack>
                </Stack>

            })}
        </SwiftSectionContent>
    </>
}

export default SwiftEducationSection