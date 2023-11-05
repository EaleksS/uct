"use client";

import { FC, useState } from "react";
import styles from "./Products.module.scss";
import { Product } from "@/entities";
import Link from "next/link";
import Image from "next/image";
import { Search } from "@/shared";

interface Props {
	all?: "yes";
}

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export const Products: FC<Props> = ({ all }) => {
	const [value, setValue] = useState<string>("");

	switch (all) {
		case "yes":
			return (
				<section className={styles.products}>
					<Search value={value} setValue={setValue}>
						Поиск
					</Search>
					<div className={styles.items}>
						{data.map((product) => (
							<Product key={product} />
						))}
					</div>
				</section>
			);

		default:
			return (
				<section className={styles.products}>
					<Link href="/projects" className={styles.link}>
						Смотреть все
						<Image
							src="/images/arrow-right.svg"
							alt="arrow"
							width={25}
							height={25}
						/>
					</Link>
					<div className={styles.items}>
						{data.slice(0, 6).map((product) => (
							<Product key={product} />
						))}
					</div>
				</section>
			);
	}
};
