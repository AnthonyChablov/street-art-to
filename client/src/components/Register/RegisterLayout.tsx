import { useState, useEffect } from "react";
import { auth, googleProvider, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import TextField from "@mui/material/TextField";
import Separator from "../Common/Form/FormElements/Separator";
import FormFooter from "../Common/Form/FormElements/FormFooter";
import StreetArtImage from "../Common/Image/StreetArtImage";
import FormError from "../Common/Form/FormElements/FormError";
import useWindowSize from "../../hooks/useWindowDimensions";

const registerVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.7,
      when: "",
    },
  },
};

const RegisterLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMessage] = useState("Invalid Register Details");

  const navigation = useNavigate();

  async function register() {
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      displayErrorMessage();
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation("/app");
      } catch (error) {
        console.error(error);
        displayErrorMessage();
      }
    }
  }

  async function loginWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigation("/app");
    } catch (error) {
      console.error(error);
      displayErrorMessage();
    }
  }

  async function displayErrorMessage() {
    setIsError(true);
    setTimeout(() => setIsError(false), 5000);
  }

  const windowHeight = useWindowSize().height;

  return (
    <div
      className={`bg-zinc-800  bg-gradient-to-r from-zinc-800 to-zinc-900 min-h-screen max-h-fit
        ${windowHeight > 650 && "max-h-full"} `}
    >
      <div
        className={`flex flex-row-reverse items-center lg:justify-end ${
          windowHeight > 650 && "h-screen"
        }`}
      >
        <StreetArtImage mode={3} />
        <div
          className=" bg-zinc-300 w-5/6 mx-auto p-10 rounded-xl h-fit md:max-w-xl 
            lg:mx-0 lg:h-screen lg:flex lg:flex-col lg:justify-center 
            lg:max-w-full lg:w-5/12 lg:rounded-none"
        >
          <motion.div
            className="lg:max-w-3xl mx-auto"
            variants={registerVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className="font-empire text-6xl text-zinc-900 text-center mb-11">
              StreetArt To
            </h1>
            <div className="flex flex-col">
              <div className=" pb-2">
                <TextField
                  id="standard-basic"
                  error={isError}
                  label="Email"
                  variant="filled"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    background: "#d4d4d8",
                    pb: 3,
                  }}
                />
                <TextField
                  id="outlined-password-input"
                  error={isError}
                  label="Password"
                  variant="filled"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    pb: 1,
                  }}
                />
              </div>
              {/* Error msg */}
              <div className={`${!isError && "pt-6"}`}>
                {isError && (
                  <div className="text-left">
                    <FormError message={errorMsg} />
                  </div>
                )}
              </div>
              <div className="flex flex-col pt-4">
                <Button
                  className="bg-gradient-to-tr from-zinc-400 to-zinc-500 hover:bg-gradient-to-bl "
                  onClick={register}
                  variant="contained"
                  sx={{ backgroundColor: "grey", borderRadius: 100, py: 1.1 }}
                >
                  Register
                </Button>
                <Separator />
                <Button
                  className="bg-gradient-to-tr from-zinc-400 to-zinc-500 hover:bg-gradient-to-bl "
                  variant="contained"
                  sx={{ backgroundColor: "grey", borderRadius: 100, py: 1.1 }}
                  onClick={loginWithGoogle}
                >
                  <GoogleIcon fontSize="small" />
                  <span className="ml-2.5">Register with google</span>
                </Button>
                {/* <button onClick={logout}>Logout</button> */}
              </div>
              <FormFooter
                title={"Have an account?"}
                buttonText={"Sign In"}
                link={"/login"}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
