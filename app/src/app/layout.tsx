import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "@/globalStyles/globals.css";
import "@/globalStyles/normalize.css";

const fira = Fira_Code({
	subsets: ["greek"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Портфолио | Frontend",
	description:
		"Я фронтенд-разработчик-самоучка, живущий в Якутске, Россия. Я могу разрабатывать отзывчивые веб-сайты с нуля и превращать их в современные удобные для пользователей веб-страницы.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={fira.className}>{children}</body>
		</html>
	);
}
