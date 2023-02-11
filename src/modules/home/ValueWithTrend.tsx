import { Grid, Typography } from "@mui/material";
import NewIcon from "@mui/icons-material/FiberNew";

export const ValueWithTrend = (props: any) => {
  const { value, percent } = props.data;
  return (
    <Grid container wrap="nowrap">
      <Grid item xs="auto">
        <Typography variant="h6">
          {props.formatter ? props.formatter(value, props.precission) : value}
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs="auto">
        {percent === null ? (
          <NewIcon color="primary" className="value_new" />
        ) : percent === 0 ? null : (
          <Typography
            variant="h6"
            className={`value_${percent > 0 ? "growth" : "decrease"}`}
          >
            {percent} %
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
