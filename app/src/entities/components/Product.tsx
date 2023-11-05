import { FC } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
	color?: string;
}

export const Product: FC<Props> = ({ color }) => {
	return (
		<article className={styles.product} style={{ background: color }}>
			<h2>Riksha</h2>

			<div className={styles.link}>
				<Link href="#">GitHub</Link>
				<Link href="#">Figma</Link>
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
				src="/images/riksha.png"
				alt="computer"
				width={200}
				height={125}
			/>
		</article>
	);
};
