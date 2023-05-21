"use client";

import * as c from "@/challenges";
import { useSelectedLayoutSegments } from "next/navigation";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  GithubLogo,
  House,
  MagnifyingGlass,
  RocketLaunch,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { IChallenge } from "@/@types/IChallenge";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segments = useSelectedLayoutSegments();

  let title = "Inicio";
  let isChallenge = false;
  let challenge: IChallenge | undefined = undefined;

  if (segments[0] === "challenges") {
    const challenges = Object.values(c);

    challenge = challenges.find((cha) => cha.id === Number(segments[1]));

    title = challenge?.info.name || "Desconhecido";
    isChallenge = true;
  }

  const homeTab = (
    <div className="flex w-56 cursor-pointer items-center rounded-md bg-grayish-200 p-1 pl-3">
      <House size={20} color="#fff" className="min-w-[20px]" />
      <span className="ml-2 mr-auto overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light text-white">
        Inicio
      </span>
      <button className="rounded-md p-2 transition-all ease-in-out hover:bg-[#55545f]">
        <X size={16} color="#fff" />
      </button>
    </div>
  );

  const challengeTabs = (
    <>
      <div className="flex w-56 cursor-pointer items-center rounded-md bg-grayish-200 p-1 pl-3">
        <Code size={20} color="#fff" className="min-w-[20px]" />
        <span className="ml-2 mr-auto overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light text-white">
          {title.replace(/\s-.+/g, "")}
        </span>
        <button className="rounded-md p-2 transition-all ease-in-out hover:bg-[#55545f]">
          <X size={16} color="#fff" />
        </button>
      </div>
      <Link
        target="_blank"
        href={
          challenge?.id
            ? `https://github.com/lunafeyli/bchub/tree/main/src/challenges/${challenge?.id}`
            : "https://github.com/lunafeyli/bchub/tree/main/src/challenges"
        }
        className="group flex w-56 cursor-pointer items-center rounded-md p-1 pl-3 transition-all ease-in-out hover:bg-[#34343a] active:bg-grayish-200"
      >
        <GithubLogo size={20} color="#fff" className="min-w-[20px]" />
        <span className="ml-2 mr-auto overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light text-white">
          Github do Desafio
        </span>
        <button className="rounded-md p-2 transition-all ease-in-out hover:bg-[#48484e] group-active:bg-[#55545f]">
          <X size={16} color="#fff" />
        </button>
      </Link>
      <Link
        target="_blank"
        href={
          challenge?.info.original || "https://www.rocketseat.com.br/boracodar"
        }
        className="group flex w-56 cursor-pointer items-center rounded-md p-1 pl-3 transition-all ease-in-out hover:bg-[#34343a] active:bg-grayish-200"
      >
        <RocketLaunch size={20} color="#fff" className="min-w-[20px]" />
        <span className="ml-2 mr-auto overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light text-white">
          Desafio original
        </span>
        <button className="rounded-md p-2 transition-all ease-in-out hover:bg-[#48484e] group-active:bg-[#55545f]">
          <X size={16} color="#fff" />
        </button>
      </Link>
    </>
  );

  const tab = isChallenge ? challengeTabs : homeTab;

  return (
    <html lang="en" className="h-full w-full">
      <Script src="https://unpkg.com/@phosphor-icons/web"></Script>
      <body
        className={`${poppins.className} flex h-full w-full items-center justify-center bg-gradient-to-br from-fuchsia-300 to-lime-200`}
      >
        <main className="flex aspect-video h-[90%] max-w-[90%] flex-col overflow-hidden rounded-xl bg-grayish-800">
          <header className="relative flex w-full items-center">
            <div className="flex gap-2 px-5 py-4">
              <span className="h-3 w-3 cursor-pointer rounded-full bg-[#fc5753]"></span>
              <span className="h-3 w-3 cursor-pointer rounded-full bg-[#fdbc40]"></span>
              <span className="h-3 w-3 cursor-pointer rounded-full bg-[#31c346]"></span>
            </div>
            <h1 className="absolute left-1/2 max-w-[70%] -translate-x-1/2 overflow-hidden text-ellipsis whitespace-nowrap font-light text-white opacity-50">
              boraCodar Hub | {title}
            </h1>
          </header>
          <div className="flex gap-2 px-3 py-2">{tab}</div>
          <div className="flex w-full items-center bg-[#2b2a33] px-5 py-3">
            <div className="flex gap-5">
              {isChallenge && (
                <Link href="/">
                  <ArrowLeft
                    size={24}
                    color="#fff"
                    className="cursor-pointer"
                  />
                </Link>
              )}
              {!isChallenge && (
                <ArrowLeft
                  size={24}
                  color="#7e7e84"
                  className="cursor-pointer"
                />
              )}
              <ArrowRight
                size={24}
                color="#7e7e84"
                className="cursor-pointer"
              />
            </div>
            <div className="absolute left-1/2 flex w-[60%] -translate-x-1/2 cursor-text gap-3 rounded-md bg-[#1c1b22] px-3 py-2">
              <MagnifyingGlass
                size={20}
                color="#fff"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#929298]">
                https://bchub.vercel.app/{segments.join("/")}
              </span>
            </div>
          </div>
          <div className="flex flex-1 overflow-auto border-t border-t-[#0c0c0d]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
