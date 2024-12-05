
import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import ProductCard from "../Components/Recipe";
import axios from "axios";

export default function Menu() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((result) => {
        console.log(result.data.recipes); // Verify API response
        setRecipes(result.data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const filteredRecipes = search
    ? recipes.filter((item) =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      )
    : recipes;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <TextField
          placeholder="Search recipes by name"
          label="Search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredRecipes?.length > 0 ? (
          filteredRecipes.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <Box>
            <center>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Z0nNcwPrE1JRCOYl5Zody3mkXvygbCuV1w&s"
                alt="No Results"
              />
            </center>
            <Typography
              sx={{
                fontSize: "30px",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              Sorry, no results found!
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Please check your spelling or try again.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
