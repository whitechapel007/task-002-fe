"use client";

import Header from "@/components/Header";
import "./globals.css";

import { Providers } from "./Providers";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import DarkModeSwitch from "@/components/DarkModeSwitch";

// Import the useRouter hook

import { usePathname } from "next/navigation";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Providers>
          {pathname === "/" ? (
            ""
          ) : (
            <div className="flex items-center justify-around overlay pt-5">
              <div>
                <Link href={"/"}>
                  <Image
                    src="/Logo.svg"
                    width="200"
                    height="200"
                    alt=""
                    layout="intrinsic"
                  />
                </Link>
              </div>

              <SearchBar />

              <div className="flex items-center gap-2  ">
                <p className=" text-white">sign in</p>
                <Image
                  src="/Menu.svg"
                  alt=""
                  layout="intrinsic"
                  width="50"
                  height="50"
                />
              </div>
              <DarkModeSwitch />
            </div>
          )}

          {children}
        </Providers>
      </body>
    </html>
  );
}
