import { TemplateContainer } from "./TemplateBuilder.styled";
import { TemplateBuilderProps } from "./TemplateBuilder.type";

const TemplateBuilder = ({ templateJSON }: TemplateBuilderProps) => {
  return <TemplateContainer>
    <templateJSON.template />
  </TemplateContainer>;
};

export default TemplateBuilder;
