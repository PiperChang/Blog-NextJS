import styled from "@emotion/styled";
import { createTheme } from "@mui/material";
import React, { useMemo } from "react";
import { atom } from "recoil";
import { useState } from "react";

const useMUITheme = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return { theme, mode, toggleColorMode };
};

export default useMUITheme;
