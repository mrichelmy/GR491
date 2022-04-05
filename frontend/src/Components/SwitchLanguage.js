import { Typography, Switch, Stack } from "@mui/material";

export default function SwitchLanguage(props) {
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>En</Typography>
        <Switch
          defaultChecked
          onChange={(event) => props.handleSwitch(event.target.checked)}
        />
        <Typography>Fr</Typography>
      </Stack>
    </>
  );
}
