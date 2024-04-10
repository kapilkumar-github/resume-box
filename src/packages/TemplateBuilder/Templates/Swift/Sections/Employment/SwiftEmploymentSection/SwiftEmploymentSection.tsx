import { useAppSelector } from "@/redux/hooks";
import { SwiftSectionContent, SwiftSectionLabels } from "../../../Swift.styled";

const SwiftEmploymentSection = () => {
    const { resumeData } = useAppSelector((store) => store.ResumeReducer);
    return <>
        <SwiftSectionLabels>Employment History</SwiftSectionLabels>
        <SwiftSectionContent>Content</SwiftSectionContent>
    </>
}

export default SwiftEmploymentSection