"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import GoogleIcon from "../public/google.svg";

function GoogleLoginButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="Google icon" className="w-6 h-6" />
    </Button>
  );
}

export default GoogleLoginButton;
