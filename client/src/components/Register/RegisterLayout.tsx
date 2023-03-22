import { useState } from "react"
import {auth, googleProvider, db} from '../../config/firebase';
import { createUserWithEmailAndPassword , signInWithPopup, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import TextField  from '@mui/material/TextField';
import Separator from '../Common/Form/FormElements/Separator';
import FormFooter from '../Common/Form/FormElements/FormFooter';

const RegisterLayout = () => {
  return (
    <div>RegisterLayout</div>
  )
}

export default RegisterLayout