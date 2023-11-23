import { Box } from "@mui/material";
import { ColumnsProps } from "./Columns.type";
import Column from "./Column";

const Columns = ({ columns }: ColumnsProps) => {
  const getColumnsUI = () => {
    return columns.map((column) => <Column column={column} />);
  };

  return getColumnsUI();
};

export default Columns;
