import { FC } from "react";
import styles from "./Products.module.scss";
import { Product } from "@/entities";
import Link from "next/link";
import Image from "next/image";

export const Products: FC = () => {
	return (
		<section className={styles.products}>
			<Link href="#" className={styles.link}>
				Смотреть все
				<Image
					src="/images/arrow-right.svg"
					alt="arrow"
					width={25}
					height={25}
				/>
			</Link>
			<div className={styles.items}>
				{[0, 1, 2, 3, 4, 5].map((product) => (
					<Product key={product} />
				))}
			</div>
		</section>
	);
};
