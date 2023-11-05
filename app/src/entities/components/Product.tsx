import { FC } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";

interface Props {
	color?: string;
}

export const Product: FC<Props> = ({ color }) => {
	return (
		<article className={styles.product} style={{ background: color }}>
			<h2>
				Ремонт ПК <br /> и Ноутбуков
			</h2>

			<div className={styles.price}>
				<h3>от</h3>
				<h3>500 ₽</h3>
			</div>

			<div className={styles.arrow}>
				<Image
					src="/images/arrow-right.svg"
					alt="arrow"
					width={20}
					height={20}
				/>
			</div>

			<Image
				className={styles.img}
				src="/images/comp.png"
				alt="computer"
				width={180}
				height={180}
			/>
		</article>
	);
};
