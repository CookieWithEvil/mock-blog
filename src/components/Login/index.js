import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import {
  Alert,
  Button,
  Card,
  Grid,
  TextField,
  Stack,
  Snackbar,
} from "@mui/material";

const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "12345";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAutorised } = useSelector((store) => store);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [usernameIsEmpty, setUsernameIsEmpty] = useState(false);
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("reduxState"));

    if (localState.isAutorised) {
      navigate("/mock-site/profile");
    }
  }, [isAutorised]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      dispatch(login({ username, password }));
    } else {
      if (!username || !password) {
        setAlertMessage(t("login.fillFields"));
      } else {
        setAlertMessage(t("login.incorrectFields"));
      }
      setOpen(true);
    }
    setUsernameIsEmpty(!username);
    setPasswordIsEmpty(!password);
  };

  return (
    <>
      <Card sx={{ width: "45%", margin: "auto", padding: "30px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              error={usernameIsEmpty}
              id="outlined-basic"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label={t("login.username")}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={passwordIsEmpty}
              id="outlined-basic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label={t("login.password")}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{ display: "block", margin: "auto" }}
              variant="contained"
              size="large"
              onClick={onSubmit}
            >
              {t("login.submit")}
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          spacing={2}
          sx={{ maxWidth: 600, margin: "20px auto 0" }}
        >
          <Alert severity="error" onClose={handleClose}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default Login;
