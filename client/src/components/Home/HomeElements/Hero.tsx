import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-600 to-zinc-800 px-6 lg:px-8 min-h-screen flex items-center">
      <div className="mx-auto max-w-2xl py-32 sm:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Explore Street Art Across Toronto
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Welcome to StreetArt-To! Here, you can explore the vibrant and
            ever-changing street art scene across Toronto.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Link to={"/app"}>
              <Button
                variant="contained"
                sx={{
                  py: 1.1,
                  backgroundColor: "#4682B4",
                  "&:hover": { backgroundColor: "#4682B4" },
                }}
              >
                Get Started
              </Button>
            </Link>
            <Link to={"/about"}>
              <Button
                variant="outlined"
                sx={{
                  py: 1.1,
                  borderColor: "#4682B4",
                  color: "#4682B4",
                  "&:hover": { backgroundColor: "#4682B4", color: "white" },
                }}
              >
                <span className="flex items-center">
                  <p className="pr-1 ">Learn More</p>
                  <ArrowForwardIcon fontSize="small" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
