import Image from "next/image";

import LoginBackground from "../../public/login_background.jpeg";
import Logo from "../../public/netflix_logo.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={LoginBackground}
        alt="background"
        priority
        fill
        className="hidden sm:flex sm:objet-cover -z-10 brightness-50"
      />
      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}
