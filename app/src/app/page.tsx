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
					src="/images/main.jpg"
					alt="main pc"
					width={800}
					height={500}
				/>
				<Header />
				<div className={styles.title}>
					<h1>
						Компьютерный <br /> сервис <br /> с выездом домой
					</h1>
					<div className={styles.btns}>
						<Button>
							Запись в сервис
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
