import { FC } from "react";
import styles from "./Products.module.scss";
import { Product } from "@/entities";

export const Products: FC = () => {
	return (
		<section className={styles.products}>
			<div className={styles.items}>
				{[0, 1, 2, 3, 4, 5].map((product) => (
					<Product key={product} color={product === 4 ? "#ff001d" : ""} />
				))}
			</div>
		</section>
	);
};
