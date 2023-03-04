import { useEffect, useState } from "react";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

import Main from "./Main";
import News from "./News";
import Profile from "./Profile";
import Login from "./Login";

const UA_CODE = "ua";
const EN_CODE = "en";

function App() {
  const { t, i18n, ready } = useTranslation();
  const [language, setLanguage] = useState(UA_CODE);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="App">
      {ready ? (
        <>
          <Box
            sx={{
              height: 80,
              paddingBottom: "20px",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "75%",
              margin: "auto",
            }}
          >
            <Link to="/">
              <Button variant="contained">{t("home")}</Button>
            </Link>

            <div>
              <Link to="/news">
                <Button>{t("news")}</Button>
              </Link>
              <Link to="/profile">
                <Button>{t("profile")}</Button>
              </Link>
            </div>

            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button
                color={language === UA_CODE ? "warning" : "primary"}
                onClick={() => setLanguage(UA_CODE)}
              >
                УКР
              </Button>
              <Button
                color={language === EN_CODE ? "warning" : "primary"}
                onClick={() => setLanguage(EN_CODE)}
              >
                EN
              </Button>
            </ButtonGroup>
          </Box>
          {/* <HashRouter> */}
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
              <Route path="news" element={<News />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
          {/* </HashRouter> */}
        </>
      ) : null}
    </div>
  );
}

export default App;
