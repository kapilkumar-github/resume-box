import Rows from "./components/Rows";
import { TemplateContainer } from "./TemplateBuilder.styled";
import { TemplateBuilderProps } from "./TemplateBuilder.type";

const TemplateBuilder = ({ templateJSON }: TemplateBuilderProps) => {
  return <TemplateContainer>
    <Rows rows={templateJSON.rows} />
  </TemplateContainer>;
};

export default TemplateBuilder;
