import { useAppSelector } from "@/redux/hooks";
import { TextHolder } from "./Text.styled";
import { TextPropType } from "./Text.type";

const Text = ({ templateNode }: TextPropType) => {
    const { resumeData } = useAppSelector((store) => store.ResumeReducer);

    return (
        <TextHolder style={templateNode.styles} {...templateNode.props}>
            {templateNode.dataKey ? resumeData[templateNode.dataKey] : templateNode.data?.label}
        </TextHolder>
    );
};

export default Text;
