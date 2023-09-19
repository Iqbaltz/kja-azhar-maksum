import React, { useEffect, useState } from "react";
import { InstagramIcon, LinkedinIcon } from "../shapes";
import { useRouter } from "next/router";
import { languageList } from "./Navbar";
import { getContactInformation, getSimpleNews } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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

const resourceList = [
  {
    label: {
      id: "Berita",
      en: "News",
    },
    url: "#",
  },
  {
    label: {
      id: "Karir",
      en: "Career",
    },
    url: "#",
  },
  {
    label: {
      id: "Ketentuan",
      en: "Terms",
    },
    url: "#",
  },
];

export default function Footer() {
  const { locale } = useRouter();
  const [data, setData] = useState<any>();
  const fetchContact = async () => {
    const res = await getContactInformation(client);
    setData(res);
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <footer className="bg-primary text-white py-20 px-4 lg:px-0">
      <div className="mx-auto max-w-[1080px] 2xl:max-w-[1280px]">
        <div className="flex flex-col lg:flex-row justify-between 2xl:text-lg mb-8 lg:mb-4">
          <div className="lg:w-2/3 flex flex-col lg:flex-row justify-between">
            <div className="lg:max-w-[50%]">
              <div className="mb-6 lg:mb-12">
                <h3 className="mb-4 text-xl 2xl:text-2xl">
                  {locale == "id" ? "Kantor Pusat" : "Head Office"}
                </h3>
                <address className="opacity-60 text-base max-w-[484px] 2xl:max-w-[720px] xl:text-sm 2xl:text-lg not-italic">
                  {data?.location}
                </address>
              </div>
              <div className="mb-6 lg:mb-12">
                <h3 className="mb-4 text-xl 2xl:text-2xl">
                  {locale == "id" ? "Hubungi Kami" : "Contact Us"}
                </h3>
                <div className="opacity-60 text-base xl:text-sm 2xl:text-lg">
                  <p>{data?.email}</p>
                  <p>{data?.number}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between lg:justify-start w-full">
              <div className="mb-6 lg:mb-12 lg:ml-20">
                <h3 className="mb-4 text-xl 2xl:text-2xl">
                  {locale == "id" ? "Link Cepat" : "Quick Links"}
                </h3>
                <ul>
                  {menuList?.map(({ label, url }, i) => (
                    <li
                      className="mb-3 opacity-60 text-base xl:text-sm 2xl:text-lg hover:opacity-100 transition-opacity duration-200"
                      key={i}
                    >
                      <a href={url}>
                        {languageList.includes(locale || "id")
                          ? label[(locale as "id") || "en"]
                          : label["id"]}
                      </a>
                    </li>
                  ))}
                  <li className="mb-3 opacity-60 text-base xl:text-sm 2xl:text-lg hover:opacity-100 transition-opacity duration-200">
                    <a href="#">
                      {locale == "id" ? "Registrasi" : "Registration"}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 lg:ml-20">
                <h3 className="mb-4 text-xl 2xl:text-2xl">
                  {locale == "id" ? "Sumber" : "Source"}
                </h3>
                <ul>
                  {resourceList.map(({ label, url }, i) => (
                    <li
                      className="mb-3 opacity-60 text-base xl:text-sm 2xl:text-lg hover:opacity-100 transition-opacity duration-200"
                      key={i}
                    >
                      <a href={url}>
                        {languageList.includes(locale || "id")
                          ? label[(locale as "id") || "en"]
                          : label["id"]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-between items-center lg:items-end">
            <div className="flex mb-8 lg:mb-0">
              {data?.socialMedia?.map(
                ({ icon, title, url }: any, i: number) => (
                  <a
                    href={url}
                    className="mr-4 w-10 h-10 flex justify-center items-center bg-white hover:bg-lightsecondary transition-colors duration-200 rounded-full"
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="max-w-[24px]"
                      src={urlForImage(icon).url()}
                      alt={title}
                    />
                  </a>
                )
              )}
            </div>
            <img src="/images/logo-footer.png" alt="logo" />
          </div>
        </div>
        <p className="text-xs text-white/30 text-center lg:text-left">
          Copyright © 2023{" "}
          {locale == "id"
            ? "Kantor Jasa Akuntansi Azhar Maksum dan Rekan"
            : "Azhar Maksum Accounting Service Office and Partners"}
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
