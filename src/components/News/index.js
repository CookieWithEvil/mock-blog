import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getPosts } from "../../redux/actions";

import { Box, Button, Card, Grid, styled, Typography } from "@mui/material";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function News() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { posts, pagesAmount } = useSelector((store) => store);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);

  useEffect(() => {
    if (posts) setData(posts);
  }, [posts]);

  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        paddingBottom: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {data?.map((item) => (
          <Grid item xs={9} key={item.key}>
            <Item>
              <Typography variant="h4" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {item.body}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{ margin: "30px auto", display: "block" }}
        disabled={page === pagesAmount}
        color="warning"
        onClick={() => setPage(page + 1)}
      >
        {t("loadMore")}
      </Button>
    </Box>
  );
}

export default News;
