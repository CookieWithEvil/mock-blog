import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useTranslation, withTranslation } from "react-i18next";

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
    console.log("language", language);
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
            <Link to="/mock-site/main">
              <Button variant="contained">{t("home")}</Button>
            </Link>

            <div>
              <Link to="/mock-site/news">
                <Button>{t("news")}</Button>
              </Link>
              <Link to="/mock-site/profile">
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
          <Routes>
            <Route path="/mock-site/main" element={<Main />} />
            <Route path="/mock-site/news" element={<News />} />
            <Route path="/mock-site/profile" element={<Profile />} />
            <Route path="/mock-site/login" element={<Login />} />
            <Route
              path="/mock-site/*"
              element={<Navigate to="/mock-site/main" replace />}
            />
          </Routes>
        </>
      ) : null}
    </div>
  );
}

export default withTranslation()(App);
