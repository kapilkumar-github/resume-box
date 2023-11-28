import { useAppSelector } from "@/redux/hooks";
import { TextHolder } from "./Text.styled";

const Text = () => {
    const { resumeData } = useAppSelector(store => store.ResumeReducer);
    return <TextHolder>{resumeData.name}</TextHolder>
}

export default Text