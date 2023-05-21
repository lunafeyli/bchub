/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "this-person-does-not-exist.com",
				port: "",
				pathname: "/img/**",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
