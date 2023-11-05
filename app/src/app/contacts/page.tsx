import Image from "next/image";
import styles from "./page.module.scss";
import { About, Advantage, Header, Products } from "@/widgets";
import { Button } from "@/shared";

export default function Contacts() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<Header  />
			</section>

			<Products />
		</main>
	);
}
