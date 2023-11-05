import { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Nav } from "./Nav/Nav";
import clsx from "clsx";
import Link from "next/link";

interface Props {
	line?: boolean;
}

export const Header: FC<Props> = ({ line = false }) => {
	return (
		<header
			className={clsx({
				[styles.header]: true,
				[styles.line]: line,
			})}
		>
			<Link href="/">
				<Image src="/images/Logotype.svg" alt="logo" height={26} width={142} />
			</Link>
			<Nav />
		</header>
	);
};
