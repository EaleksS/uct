"use client";

import { Header } from "@/widgets";
import React from "react";
import styles from "./NotFound.module.scss";
import { Button } from "@/shared";
import { useRouter } from "next/navigation";

const notFound = () => {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<Header />
			</section>
			<div className={styles.not_found}>
				<h1>404</h1>
				<h2>Такой страницы нету</h2>
				<br />
				<Btn />
			</div>
		</main>
	);
};

export default notFound;

export const Btn = () => {
	const router = useRouter();

	return (
		<Button btn="v2" onClick={() => router.push("/")}>
			На главную
		</Button>
	);
};
