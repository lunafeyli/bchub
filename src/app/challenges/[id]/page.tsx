import * as c from "@/challenges";

interface Props {
	params: {
		id: string;
	};
}

const challenges = Object.values(c);

export default function Challenge({ params: { id } }: Props) {
	const challenge = challenges.find((cha) => cha.id === Number(id));

	return challenge?.element();
}

export async function generateMetadata({ params: { id } }: Props) {
	const challenge = challenges.find((cha) => cha.id === Number(id));

	return {
		title: "boraCodar Hub | " + challenge?.info.name || "Desconhecido",
	};
}

export async function generateStaticParams() {
	return challenges.map((cha) => ({
		id: String(cha.id),
	}));
}
