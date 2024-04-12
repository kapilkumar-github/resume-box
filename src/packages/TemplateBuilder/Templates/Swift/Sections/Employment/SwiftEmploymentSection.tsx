import { useAppSelector } from "@/redux/hooks";
import { SwiftSectionContent, SwiftSectionLabels } from "../../Swift.styled";
import { Box, Stack, Typography } from "@mui/material";
import { stringToDate } from "@/common/utility/date&time";
import { DefaultStack } from "@/assets/styles/common.styles";

const SwiftEmploymentSection = () => {
    const { resumeData } = useAppSelector((store) => store.ResumeReducer);
    const { work } = resumeData
    return <>
        <SwiftSectionLabels>Employment History</SwiftSectionLabels>
        <SwiftSectionContent sx={{ width: '100%', marginTop: '0.5cm' }}>
            {work?.map(job => {
                return <><Stack direction={'row'} alignItems={'baseline'}>
                    <Box width={'5.5cm'}>
                        {stringToDate(job.startDate)} - {job.current ? 'Present' : stringToDate(job.endDate)}
                    </Box>
                    <DefaultStack flex={1} sx={{ alignItems: 'baseline' }}>
                        <Typography fontWeight={'bold'} fontSize={'0.39cm'}>{job.position}, {job.organization}</Typography>
                        <Typography variant="caption">{job.location}</Typography>
                    </DefaultStack>
                </Stack>
                    <Box sx={{ marginTop: '0.25cm', width: 'calc(100% - 5.5cm)', marginLeft: 'auto' }} dangerouslySetInnerHTML={{ __html: job.summary }}>
                        {/* {job.summary} */}
                    </Box>
                </>
            })}
        </SwiftSectionContent>
    </>
}

export default SwiftEmploymentSection