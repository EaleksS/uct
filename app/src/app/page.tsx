import Image from "next/image";
import styles from "./page.module.scss";
import { About, Advantage, Header, Main, Products } from "@/widgets";
import { Button } from "@/shared";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<Main />
				<Products />
				<About />
				<Advantage />
			</main>
		</>
	);
}
