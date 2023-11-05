import { FC } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">Главная</Link>
				</li>
				<li>
					<Link href="/">Работы</Link>
				</li>
				<li>
					<Link href="/">Контакты</Link>
				</li>
				<li>
					<Link href="tel:+79659943654">+7 965 994-36-54</Link>
				</li>
			</ul>
		</nav>
	);
};
