"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../button";
import { useRouter } from "next/router";

const menuList = [
  {
    label: {
      id: "Layanan",
      en: "Services",
    },
    url: "/services",
  },
  {
    label: {
      id: "Pelatihan",
      en: "Training",
    },
    url: "#",
  },
  {
    label: {
      id: "Tim Kami",
      en: "Our Team",
    },
    url: "/team",
  },
  {
    label: {
      id: "Tentang",
      en: "About",
    },
    url: "/about",
  },
  {
    label: {
      id: "Hubungi Kami",
      en: "Contact Us",
    },
    url: "/contact",
  },
];

export const languageList = ["id", "en"];

export default function Navbar() {
  const { locale, asPath } = useRouter();
  const [openLang, setOpenLang] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [currLang, setCurrLang] = useState<string>(locale || "id");

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 40) {
        setTimeout(() => {
          setScrollingDown(true);
        }, 150);
      } else {
        setTimeout(() => {
          setScrollingDown(false);
        }, 150);
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

  useEffect(() => {
    setCurrLang(locale || "id");
  }, [locale]);
  return (
    <>
      <header
        className={`bg-primary fixed top-0 text-white w-full py-3 z-50 ${
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
                <li>
                  {languageList.includes(locale || "id")
                    ? label[(locale as "id") || "en"]
                    : label["id"]}
                </li>
              </Link>
            ))}
            <Button className="ml-10">
              {locale == "id" ? "Registrasi Member" : "Member Registration"}
            </Button>
          </ul>
          <div className="flex items-center">
            <div className="relative group">
              <div
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center cursor-pointer px-2 py-1"
              >
                <p>{currLang.toUpperCase()}</p>
                <img
                  src="/svg/chevron-down.svg"
                  className="w-[16px] ml-3"
                  alt="chevron-down"
                />
              </div>
              <div className="invisible group-hover:visible bg-secondary w-full absolute top-full z-10">
                <ul>
                  {languageList
                    .filter((lang) => lang != currLang)
                    .map((lang) => (
                      <li key={lang}>
                        <Link href={asPath} locale={lang}>
                          <p className="hover:bg-primary/50 cursor-pointer px-2 py-1">
                            {lang.toUpperCase()}
                          </p>
                        </Link>
                      </li>
                    ))}
                </ul>
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
                {languageList.includes(locale || "id")
                  ? label[(locale as "id") || "en"]
                  : label["id"]}
              </Link>
            </li>
          ))}
          <li>
            <Button>
              {locale == "id" ? "Registrasi Member" : "Member Registration"}
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
