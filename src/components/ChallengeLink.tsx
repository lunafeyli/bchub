import { IChallenge } from "@/@types/IChallenge";
import Image from "next/image";
import Link from "next/link";

interface Props {
	challenge: IChallenge;
}

export const ChallengeLink = ({ challenge }: Props) => {
	return (
		<Link
			href={`/challenges/${challenge.id}`}
			className="flex flex-col bg-[#2f2e38] p-3 rounded-lg w-[280px]"
		>
			<Image
				src="https://placehold.co/1280x720.png"
				width={1280}
				height={720}
				className="w-[256px] rounded-lg"
				alt={"prévia do desafio: " + challenge.info.name}
			/>
			<h2 className="mt-2 text-base text-white font-light">
				<strong className="text-fuchsia-300 font-medium">
					{challenge.info.name.split(" -")[0]}
				</strong>{" "}
				- {challenge.info.name.split("- ")[1]}
			</h2>
		</Link>
	);
};
