import { Metadata } from "next";
import Link from "next/link";
import * as c from "@/challenges";
import { ChallengeLink } from "@/components/ChallengeLink";

export const metadata: Metadata = {
	title: "boraCodar Hub | Inicio",
};

export default function Home() {
	const challenges = Object.values(c);

	return (
		<div className="flex flex-col w-full items-center justify-between py-4">
			<div className="flex flex-wrap">
				{challenges.map((cha) => (
					<ChallengeLink challenge={cha} key={cha.id} />
				))}
			</div>
			<footer className="text-sm text-white">
				Feito com <i className="ph-fill ph-heart text-fuchsia-300"></i>{" "}
				por{" "}
				<Link
					href="https://github.com/lunafeyli/"
					target="_blank"
					className="underline decoration-wavy underline-offset-2 text-fuchsia-300"
				>
					Luna Santos
				</Link>
			</footer>
		</div>
	);
}
