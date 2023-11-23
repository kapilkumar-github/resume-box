import Row from "./Row/Row";
import { RowsProps } from "./Rows.type";

const Rows = ({ rows }: RowsProps) => {
  const getRowsUI = () => {
    return rows.map((row) => <Row row={row} />);
  };

  return getRowsUI();
};

export default Rows;
