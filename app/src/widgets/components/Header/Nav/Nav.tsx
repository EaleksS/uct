import  { FC } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>Работы</li>
				<li>О компании</li>
				<li>Акции</li>
				<li>Контакты</li>
				<li>
					<Link href="tel:74952077570">+7 495 207-75-70</Link>
				</li>
			</ul>
		</nav>
	);
};
