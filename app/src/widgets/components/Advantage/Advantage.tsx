import { FC } from "react";
import styles from "./Advantage.module.scss";
import Image from "next/image";
import { Button } from "@/shared";

export const Advantage: FC = () => {
	return (
		<section className={styles.advantage}>
			<div className={styles.title}>
				<h1>Наши преимущество</h1>
				<p>
					Мы — это гарантия не только качества, но и стиля! Доверь свой
					компьютер профессионалам!
				</p>
				<div className={styles.btns}>
					<Button className={styles.btn}>
						Запись в сервис
					</Button>
					<Button btn="v2">
						Консультация
					</Button>
				</div>
			</div>
			<div className={styles.items}>
				{[0, 1, 2, 3].map((item) => (
					<article key={item}>
						<Image
							src="/images/target 1.svg"
							alt="item"
							width={56}
							height={56}
						/>
						<h3>Цены</h3>
						<p>Лучшие цены и качество на рынке. Довольным будет каждый!</p>
					</article>
				))}
			</div>
		</section>
	);
};
