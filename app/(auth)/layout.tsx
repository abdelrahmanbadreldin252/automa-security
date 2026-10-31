import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-automa-bg bg-cyber-grid px-4 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href={ROUTES.home} className="flex items-center justify-center gap-2.5">
          <Image src="/logo.jpeg" alt="Automa Security" width={224} height={112} className="h-20 w-56 object-contain" />
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
    </div>
  );
}
