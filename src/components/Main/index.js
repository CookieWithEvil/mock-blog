import { Box, styled } from "@mui/system";
import SeaImg from "../../assets/sea.jpg";

const Item = styled("img")(() => ({
  height: "100%",
  width: "100%",
}));

function Main() {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "60%",
      }}
    >
      <Item src={SeaImg} alt="" />
    </Box>
  );
}

export default Main;
