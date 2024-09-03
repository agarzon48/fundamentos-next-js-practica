"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSession, signOut } from "next-auth/react";

export const LoginButton = () => {
  const { data, status } = useSession();
  const router = useRouter();

  console.log("session data", data);

  const handleLogout = () => {
    signOut();
    router.push("/");
  };

  if (status === "authenticated") {
    return (
      <Button onClick={handleLogout} color="danger" variant="flat">
        Logout
      </Button>
    );
  }

  return (
    <Button
      as={Link}
      color="primary"
      href="/api/auth/signin"
      variant="flat"
      isLoading={status === "loading"}
    >
      Login
    </Button>
  );
};
