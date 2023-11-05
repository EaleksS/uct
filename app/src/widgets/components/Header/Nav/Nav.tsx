import { FC } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/404">404</Link>
				</li>
				<li>
					<Link href="/">Главная</Link>
				</li>
				<li>
					<Link href="/projects">Работы</Link>
				</li>
				<li>
					<Link href="/contacts">Контакты</Link>
				</li>
				<li>
					<Link href="tel:+79659943654">+7 965 994-36-54</Link>
				</li>
			</ul>
		</nav>
	);
};
