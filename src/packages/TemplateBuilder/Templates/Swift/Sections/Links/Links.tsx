import { DefaultStack } from "@/assets/styles/common.styles";
import { Stack } from "@mui/material";
import { SwiftSectionContent, SwiftSectionLabels } from "../../Swift.styled";
import { useAppSelector } from "@/redux/hooks";

const Links = () => {
    const { resumeData } = useAppSelector(store => store.ResumeReducer);
    const { basics } = resumeData

    return <>
        <SwiftSectionLabels>LINKS</SwiftSectionLabels>
        <SwiftSectionContent>
            <Stack flexDirection={'row'} width={'100%'} columnGap={'0.25cm'}>
                {basics.profiles.map((profile, index) => {
                    return <a style={{ display: 'block' }} href={profile.url} key={profile.network}>{profile.network}</a>
                })}
            </Stack>
        </SwiftSectionContent>
    </>
}

export default Links;