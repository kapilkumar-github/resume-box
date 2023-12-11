import { Grid } from "@mui/material";
import { ColumnProps } from "./Column.type";
import Rows from "../../Rows/Rows";
import COMPONENTS from '../../index';

const Column = ({ column }: ColumnProps) => {
  const renderColumnItems = () => {
    if (column.component) {
      const Component = (COMPONENTS as any)[column.component]
      return <Component templateNode={column} />;
    }
  };

  return (
    <Grid item sx={{ ...column.styles }} {...column.props}>
      {column.rows ? <Rows rows={column.rows} /> : renderColumnItems()}
    </Grid>
  );
};

export default Column;
