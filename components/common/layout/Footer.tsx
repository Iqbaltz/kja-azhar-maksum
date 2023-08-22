import React from "react";
import { InstagramIcon, LinkedinIcon } from "../shapes";

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

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-4 lg:px-0">
      <div className="mx-auto max-w-[1080px] 2xl:max-w-[1280px]">
        <div className="flex flex-col lg:flex-row justify-between text-lg mb-8 lg:mb-4">
          <div className="lg:w-2/3 flex flex-col lg:flex-row justify-between">
            <div className="lg:max-w-[50%]">
              <div className="mb-6 lg:mb-12">
                <h3 className="mb-4 text-xl 2xl:text-2xl">Kantor Pusat</h3>
                <address className="opacity-60">
                  Jl. Karya Wisata, Komplek Perumahan Dosen Ekonomi Universitas
                  Sumatera Utara No. 21 Kel. Gedung Johor, Medan 20144
                </address>
              </div>
              <div className="mb-6 lg:mb-12">
                <h3 className="mb-4 text-xl 2xl:text-2xl">Hubungi Kami</h3>
                <div className="opacity-60">
                  <p>kjaazharmaksumdanrekan@gmail.com</p>
                  <p>+62 813 6205 8121</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between lg:justify-start w-full">
              <div className="mb-6 lg:mb-12 lg:ml-20">
                <h3 className="mb-4 text-xl 2xl:text-2xl">Link Cepat</h3>
                <ul>
                  {menuList?.map(({ label, url }, i) => (
                    <li
                      className="mb-3 opacity-60 hover:opacity-100 transition-opacity duration-200"
                      key={i}
                    >
                      <a href={url}>{label}</a>
                    </li>
                  ))}
                  <li className="mb-3 opacity-60 hover:opacity-100 transition-opacity duration-200">
                    <a href="#">Registrasi</a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 lg:ml-20">
                <h3 className="mb-4 text-xl 2xl:text-2xl">Sumber</h3>
                <ul>
                  <li className="mb-3 opacity-60 hover:opacity-100 transition-opacity duration-200">
                    <a href="#">Berita</a>
                  </li>
                  <li className="mb-3 opacity-60 hover:opacity-100 transition-opacity duration-200">
                    <a href="#">Karir</a>
                  </li>
                  <li className="mb-3 opacity-60 hover:opacity-100 transition-opacity duration-200">
                    <a href="#">Ketentuan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-between items-center lg:items-end">
            <div className="flex mb-8 lg:mb-0">
              <a href="#" className="mr-4">
                <LinkedinIcon className="fill-white hover:fill-lightsecondary transition-colors duration-200" />
              </a>
              <a href="#">
                <InstagramIcon className="fill-white hover:fill-lightsecondary transition-colors duration-200" />
              </a>
            </div>
            <img src="/images/logo-footer.png" alt="logo" />
          </div>
        </div>
        <p className="text-xs text-white/30 text-center lg:text-left">
          Copyright © 2023 Kantor Jasa Akuntansi Azhar Maksum dan Rekan. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}
