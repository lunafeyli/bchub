import { ImageResponse } from "@vercel/og";
import * as c from "@/challenges";

export const runtime = "nodejs";

export function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	const challenges = Object.values(c);
	const challenge = challenges.find((cha) => cha.id === Number(id));

	return new ImageResponse(<>{challenge?.element()}</>, {
		width: 1280,
		height: 720,
	});
}
