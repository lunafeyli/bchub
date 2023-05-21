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
		<div className="bg-grayish-200 rounded-md p-1 pl-3 flex items-center w-56 cursor-pointer">
			<House size={20} color="#fff" className="min-w-[20px]" />
			<span className="text-white font-light text-sm ml-2 mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
				Inicio
			</span>
			<button className="p-2 rounded-md hover:bg-[#55545f] transition-all ease-in-out">
				<X size={16} color="#fff" />
			</button>
		</div>
	);

	const challengeTabs = (
		<>
			<div className="bg-grayish-200 rounded-md p-1 pl-3 flex items-center w-56 cursor-pointer">
				<Code size={20} color="#fff" className="min-w-[20px]" />
				<span className="text-white font-light text-sm ml-2 mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
					{title.replace(/\s-.+/g, "")}
				</span>
				<button className="p-2 rounded-md hover:bg-[#55545f] transition-all ease-in-out">
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
				className="active:bg-grayish-200 rounded-md p-1 pl-3 flex items-center w-56 transition-all ease-in-out cursor-pointer hover:bg-[#34343a] group"
			>
				<GithubLogo size={20} color="#fff" className="min-w-[20px]" />
				<span className="text-white font-light text-sm ml-2 mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
					Github do Desafio
				</span>
				<button className="p-2 rounded-md hover:bg-[#48484e] transition-all ease-in-out group-active:bg-[#55545f]">
					<X size={16} color="#fff" />
				</button>
			</Link>
			<Link
				target="_blank"
				href={
					challenge?.info.original ||
					"https://www.rocketseat.com.br/boracodar"
				}
				className="active:bg-grayish-200 rounded-md p-1 pl-3 flex items-center w-56 transition-all ease-in-out cursor-pointer hover:bg-[#34343a] group"
			>
				<RocketLaunch size={20} color="#fff" className="min-w-[20px]" />
				<span className="text-white font-light text-sm ml-2 mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
					Desafio original
				</span>
				<button className="p-2 rounded-md hover:bg-[#48484e] transition-all ease-in-out group-active:bg-[#55545f]">
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
				className={`${poppins.className} h-full w-full bg-gradient-to-br from-fuchsia-300 to-lime-200 flex items-center justify-center`}
			>
				<main className="aspect-video h-[90%] max-w-[90%] bg-grayish-800 rounded-xl flex flex-col overflow-hidden">
					<header className="w-full flex items-center relative">
						<div className="flex gap-2 px-5 py-4">
							<span className="rounded-full bg-[#fc5753] w-3 h-3 cursor-pointer"></span>
							<span className="rounded-full bg-[#fdbc40] w-3 h-3 cursor-pointer"></span>
							<span className="rounded-full bg-[#31c346] w-3 h-3 cursor-pointer"></span>
						</div>
						<h1 className="absolute left-1/2 -translate-x-1/2 font-light opacity-50 text-white overflow-hidden whitespace-nowrap text-ellipsis max-w-[70%]">
							boraCodar Hub | {title}
						</h1>
					</header>
					<div className="flex py-2 px-3 gap-2">{tab}</div>
					<div className="w-full bg-[#2b2a33] py-3 px-5 flex items-center">
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
						<div className="flex bg-[#1c1b22] px-3 py-2 gap-3 rounded-md absolute left-1/2 -translate-x-1/2 w-[60%] cursor-text">
							<MagnifyingGlass
								size={20}
								color="#fff"
								className="cursor-pointer"
							/>
							<span className="text-[#929298] text-sm">
								https://bchub.vercel.app/{segments.join("/")}
							</span>
						</div>
					</div>
					<div className="flex flex-1 border-t border-t-[#0c0c0d] overflow-auto">
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
