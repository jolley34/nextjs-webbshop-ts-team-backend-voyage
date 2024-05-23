"use client";

import { Box } from "@mui/material";
import React from "react";

interface BarProps {
  name: string;
  onClick: () => void;
}

const CategoryBar: React.FC<BarProps> = ({ name, onClick }) => {
  return (
    <Box
      sx={{ cursor: "pointer", padding: "10px" }}
      onClick={onClick}
    >
      {name}
    </Box>
  );
};

export default CategoryBar;