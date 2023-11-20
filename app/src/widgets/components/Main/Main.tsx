import { FC } from "react";
import styles from "./Main.module.scss";
import Image from "next/image";
import { Header } from "../Header/Header";
import { Btns } from "./Btns";

export const Main: FC = () => {
	return (
		<section className={styles.section}>
			<Image
				className={styles.img}
				src="/images/main4.png"
				alt="main pc"
				width={1000}
				height={685}
				priority={true}
			/>
			<Header line />
			<div className={styles.main}>
				<div className={styles.title}>
					<h1>
						Эрнест <br /> front-end разработчик
					</h1>
					<p>
						Я создаю отзывчивые веб-сайты, <br /> где технологии сочетаются с
						креативностью.
					</p>
					<Btns />
				</div>
				{/* <div className={styles.me}>
    <Image src="/images/me.jpg" alt="me" width={200} height={356} />
  </div> */}
			</div>
		</section>
	);
};
