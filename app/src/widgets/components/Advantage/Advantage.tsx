import { FC } from "react";
import styles from "./Advantage.module.scss";
import Image from "next/image";
import { Button } from "@/shared";

interface IData {
	title: string;
	description: string;
	images_url: string;
}

const data: IData[] = [
	{
		title: "Языки",
		description: "TypeScript, NodeJs, JavaScript",
		images_url: "/images/target 1.svg",
	},
	{
		title: "Базы данных",
		description: "SQLite, PostgreSQL, Mongo",
		images_url: "/images/target 1.svg",
	},
	{
		title: "Инструменты",
		description: "VSCode, Figma, Git",
		images_url: "/images/target 1.svg",
	},
	{
		title: "Фреймворки",
		description: "React, NextJs, NestJs",
		images_url: "/images/target 1.svg",
	},
];

export const Advantage: FC = () => {
	return (
		<section className={styles.advantage}>
			<div className={styles.title}>
				<h1>Навыки</h1>
				<p>
					Хард-скиллы необходимы для успешного выполнения технических задач
					вашей работы и являются обязательными для любой роли веб-разработчика.
					<br />
					<br />
					Это технические знания, полученные в результате обучения.
				</p>
				<div className={styles.btns}>
					<Button className={styles.btn}>Написать мне!!!</Button>
					<Button btn="v2">Консультация</Button>
				</div>
			</div>
			<div className={styles.items}>
				{data.map((item) => (
					<article key={item.description}>
						<Image
							src={item.images_url ? item.images_url : ""}
							alt={item.title ? item.title : ""}
							width={56}
							height={56}
						/>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};
