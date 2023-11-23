import { Grid, Stack } from "@mui/material";
import { RowProps } from "./Row.type";
import { RowContainer } from "./Row.styled";
import Columns from "../../Columns/Columns";

const Row = ({ row }: RowProps) => {
  const getRowUI = () => {
    return <Columns columns={row.columns} />;
  };

  return (
    <Grid container sx={{ ...row.styles }}>
      {getRowUI()}
    </Grid>
  );
};

export default Row;
