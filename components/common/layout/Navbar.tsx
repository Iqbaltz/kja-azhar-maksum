"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../button";

const menuList = [
  {
    label: "Layanan",
    url: "/services",
  },
  {
    label: "Pelatihan",
    url: "#",
  },
  {
    label: "Tim Kami",
    url: "/team",
  },
  {
    label: "Tentang",
    url: "/about",
  },
  {
    label: "Hubungi Kami",
    url: "/contact",
  },
];

export default function Navbar() {
  const [openLang, setOpenLang] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);
  return (
    <>
      <header
        className={`bg-primary fixed top-0 text-white w-full py-4 z-50 ${
          scrollingDown ? "-translate-y-full opacity-0" : ""
        } transition-all duration-300 delay-75`}
      >
        <nav className="flex justify-between items-center max-w-[1080px] 2xl:max-w-[1280px] mx-auto px-4 md:px-8 lg:px-0">
          <Link href="/">
            <img src="/images/logo.png" className="h-16" alt="logo" />
          </Link>
          <ul className="hidden lg:flex items-center">
            {menuList.map(({ label, url }, i) => (
              <Link className="mr-6" href={url} key={i}>
                <li>{label}</li>
              </Link>
            ))}
            <Button className="ml-10">Registrasi Member</Button>
          </ul>
          <div className="flex items-center">
            <div className="relative group">
              <div
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center cursor-pointer px-2 py-1"
              >
                <p>ID</p>
                <img
                  src="/svg/chevron-down.svg"
                  className="w-[16px] ml-3"
                  alt="chevron-down"
                />
              </div>
              <div className="invisible group-hover:visible bg-secondary w-full absolute -bottom-full z-10">
                <p className="hover:bg-primary/50 cursor-pointer px-2 py-1">
                  EN
                </p>
              </div>
            </div>
            <div
              className="ml-4 lg:hidden flex flex-col items-end cursor-pointer"
              onClick={() => setIsNavOpen(true)}
            >
              <div className="w-8 h-0.5 bg-white mb-1.5 transition-[width] duration-300 ease-in-out"></div>
              <div className="w-8 h-0.5 bg-white mb-1.5 transition-[width] duration-300 ease-in-out"></div>
              <div className="w-8 h-0.5 bg-white transition-[width] duration-300 ease-in-out delay-75"></div>
            </div>
          </div>
        </nav>
      </header>
      <nav
        style={{ right: isNavOpen ? "0" : "100%" }}
        className="bg-primary pt-8 px-4 md:px-6 text-white fixed w-full h-full z-50 top-0 right-full transition-all duration-500"
      >
        <div className="mb-4 text-right">
          <img
            src="/svg/x-cross.svg"
            alt="cross"
            className="cursor-pointer w-6 ml-auto"
            id="cross-btn"
            onClick={() => setIsNavOpen(false)}
          />
        </div>
        <ul>
          {menuList.map(({ label, url }, i) => (
            <li className="mb-6 text-xl" key={i}>
              <Link
                className="block"
                href={url}
                onClick={() => setIsNavOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Button>Registrasi Member</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
