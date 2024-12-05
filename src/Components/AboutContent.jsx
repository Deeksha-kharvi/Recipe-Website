import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={
              "https://images.unsplash.com/photo-1605926637512-c8b131444a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmVyfGVufDB8fDB8fHww"
            }
            style={{ width: "100%", height: "100%" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }} sx={{p:2}} backgroundColor="#3E2723">
          <Typography variant="h2" sx={{ fontWeight: "600", }} color="white">
            About <span style={{ color: "white" }}>Us</span>
          </Typography>
          <Typography color="white">
            Welcome to Recipe Restaurant, where culinary artistry meets
            delightful flavors! Nestled in the heart of the city, our restaurant
            is a haven for food enthusiasts seeking an unforgettable dining
            experience. At Recipe Restaurant, we believe in crafting dishes that
            not only satisfy your appetite but also tell a story of tradition,
            creativity, and passion. Our menu features a diverse selection of
            gourmet recipes, from hearty comfort food to elegant international
            cuisines, all prepared with the freshest ingredients sourced
            locally.
          </Typography>
          <Typography color="white">
            {" "}
            Whether you’re in the mood for a wholesome breakfast, a light lunch,
            or an indulgent dinner, our chefs work tirelessly to ensure every
            bite is a harmonious blend of taste and texture. Step into our warm
            and inviting ambiance, where every detail is designed to make you
            feel at home. At Recipe Restaurant, every meal is more than just
            food—it's an experience. Come and savor the flavors that bring
            people together!
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
