import { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Nav } from "./Nav/Nav";

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Image src="/images/Logotype.svg" alt="logo" height={26} width={142} />
			<Nav />
		</header>
	);
};
