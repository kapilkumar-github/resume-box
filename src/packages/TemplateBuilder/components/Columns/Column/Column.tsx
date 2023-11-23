import { Grid } from "@mui/material";
import { ColumnProps } from "./Column.type";
import Rows from "../../Rows/Rows";
import { COMPONENT_NAME } from "../../const";

const Column = ({ column }: ColumnProps) => {
  const renderColumnItems = () => {
    switch (column.component) {
      case COMPONENT_NAME.AVATAR:
        return "Avatar";
      case COMPONENT_NAME.TYPOGRAPHY:
        return "Text";
      default:
        return "column";
    }
  };

  return (
    <Grid item sx={{ ...column.styles }} {...column.props}>
      {column.rows ? <Rows rows={column.rows} /> : renderColumnItems()}
    </Grid>
  );
};

export default Column;
