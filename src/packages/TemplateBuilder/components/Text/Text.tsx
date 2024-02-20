import { useAppSelector } from "@/redux/hooks";
import { TextHolder } from "./Text.styled";
import { TextPropType } from "./Text.type";

const Text = ({ templateNode }: TextPropType) => {
  const { resumeData } = useAppSelector((store) => store.ResumeReducer);

  const getDataFromResume = () => {
    if (!templateNode.dataKey) return "";
    const dataKey = templateNode.dataKey.split(".");
    let data: any = { ...resumeData };
    dataKey.forEach((key) => {
      if (data) data = data[key];
    });
    return data;
  };

  return (
    <TextHolder style={templateNode.styles} {...templateNode.props}>
      {templateNode.dataKey ? getDataFromResume() : templateNode.data?.label}
    </TextHolder>
  );
};

export default Text;
