import { signOut } from "../useCase/signOut";
import { googleCallback } from "./googleCallback";
import { register } from "./register";
import { signInEmail } from "./signInEmail";
import { signInGoogle } from "./signInGoogle";

export default {
  register,
  signInEmail,
  signInGoogle,
  googleCallback,
  signOut,
};
