import { useAppSelector } from "@/redux/hooks";
import { SwiftSectionContent, SwiftSectionLabels } from "../../Swift.styled"

const SwiftProfileSection = () => {
    const { resumeData } = useAppSelector(store => store.ResumeReducer);
    const { basics } = resumeData
    return <>
        <SwiftSectionLabels>Profile</SwiftSectionLabels>
        <SwiftSectionContent>{basics.intro}</SwiftSectionContent>
    </>
}

export default SwiftProfileSection