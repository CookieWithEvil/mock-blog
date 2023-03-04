import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAutorised } = useSelector((store) => store);

  useEffect(() => {
    if (!isAutorised) {
      navigate("/login");
    }
  }, [isAutorised]);

  return <>Довільний контент</>;
}

export default Profile;
