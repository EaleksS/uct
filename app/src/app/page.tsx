import Image from "next/image";
import styles from "./page.module.scss";
import { About, Advantage, Header, Products } from "@/widgets";
import { Button } from "@/shared";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<Image
					className={styles.img}
					src="/images/main3.jpg"
					alt="main pc"
					width={1600}
					height={1000}
					priority={true}
				/>
				<Header />
				<div className={styles.title}>
					<h1>
						Эрнест <br /> front-end разработчик
					</h1>
					<p>
						Я создаю отзывчивые веб-сайты, <br /> где технологии сочетаются с
						креативностью.
					</p>
					<div className={styles.btns}>
						<Button className={styles.btn}>
							Написать мне!!!
							<Image
								src="/images/arrow-right.svg"
								alt="arrow"
								width={22}
								height={22}
							/>
						</Button>
						<Button btn="v2">
							<Image
								src="/images/consul.svg"
								alt="arrow"
								width={22}
								height={22}
							/>
							Консультация
						</Button>
					</div>
				</div>
			</section>
			<Products />
			<About />
			<Advantage />
		</main>
	);
}
