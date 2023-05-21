import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
});

const Challenge19 = () => {
	return (
		<div
			className={
				"flex-1 flex items-center justify-center bg-[#242424] " +
				inter.className
			}
		>
			<div className="px-8 py-4 bg-white rounded-3xl w-[396px] flex flex-col items-center">
				<span className="bg-[#e5d8ea] w-20 h-2 rounded-full block"></span>
				<section className="w-full mt-12">
					<h1 className="text-xl text-[#372D3B] font-bold">
						Encontre{" "}
						<strong className="text-[#864293] font-bold">
							Boris
						</strong>{" "}
						no local de partida
					</h1>
					<p className="text-xs font-medium -mt-1 text-[#372D3B]">
						Chega em 3 minutos (800 metros)
					</p>
				</section>
				<section className="mt-12 w-full flex justify-between relative items-center">
					<div>
						<div className="flex flex-col items-center z-10 relative">
							<div className="relative">
								<Image
									width={64}
									height={64}
									src="https://this-person-does-not-exist.com/img/avatar-gen8e730b587fad7d4f1f9f648190cf7053.jpg"
									alt="imagem de Boris"
									className="rounded-full"
								/>
								<div className="px-3 py-1 absolute rounded-full bg-[#372D3B] flex items-center justify-center gap-[6px] left-1/2 -translate-x-1/2 -bottom-2">
									<i className="ph-fill ph-star text-[10px] text-[#FBF8FC]"></i>
									<span className="text-[10px] leading-3 font-semibold text-[#FBF8FC]">
										5.0
									</span>
								</div>
							</div>
							<span className="text-xs font-bold mt-3">
								Boris C.
							</span>
						</div>
						<Image
							width={286}
							height={111.42}
							className="w-36 absolute top-1/2 -translate-y-1/2 left-10"
							src="https://i.ibb.co/JF6Kfpn/image-3769.png"
							alt="honda civic roxo"
						/>
					</div>
					<div>
						<h2 className="text-xl font-bold text-[#372D3B]">
							BCD0D19
						</h2>
						<p className="text-xs font-medium text-[#372D3B]">
							Honda Civic Roxo
						</p>
					</div>
				</section>
				<section className="mt-12 flex gap-4 w-full">
					<div className="py-1 px-4 bg-[#F5EDF7] rounded-xl flex-1">
						<label htmlFor="send-message" className="sr-only">
							Enviar mensagem para Boris
						</label>
						<input
							type="text"
							name="send-message"
							id="send-message"
							placeholder="Enviar mensagem para Boris..."
							className="text-xs outline-none bg-transparent placeholder-[#372D3B] placeholder-opacity-100 text-[#372D3B] font-medium"
						/>
					</div>
					<div className="flex gap-4">
						<button>
							<i className="ph-fill ph-phone text-2xl"></i>
						</button>
						<button>
							<i className="ph-fill ph-shield-plus text-2xl"></i>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

const info = {
	name: "Desafio #19 - um widget de transporte",
	figma: "https://www.figma.com/community/file/1238132190532383264",
	original:
		"https://www.rocketseat.com.br/boracodar/desafios-anteriores/um-widget-de-transporte-desafio-19",
};

export const challenge19 = {
	element: Challenge19,
	info,
	id: 19,
};
