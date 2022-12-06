import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Checkout = () => {
  return (
    return (
      <Box
        display={isCartOpen ? "block" : "none"}
        backgroundColor="rgba(0, 0, 0, 0.4)"
        position="fixed"
        zIndex={10}
        width="100%"
        height="100%"
        left="0"
        top="0"
        overflow="auto"
      >
        <Box
          position="fixed"
          right="0"
          bottom="0"
          width="max(400px, 30%)"
          height="100%"
          backgroundColor="white"
        >
          <Box padding="30px" overflow="auto" height="100%">
            {/* HEADER */}
            <FlexBox mb="15px">
              <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
              <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                <CloseIcon />
              </IconButton>
            </FlexBox>
  )
}

export default Checkout