import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./Button.module.scss";

interface Props
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	className?: string;
	btn?: "v1" | "v2";
}
export const Button: FC<Props> = ({
	className,
	children,
	btn = "v1",
	...props
}) => {
	switch (btn) {
		case "v2":
			return (
				<button
					className={`${className} ${styles.btn} ${styles.v2}`}
					{...props}
				>
					{children}
				</button>
			);

		default:
			return (
				<button
					className={`${className} ${styles.btn} ${styles.v1}`}
					{...props}
				>
					{children}
				</button>
			);
	}
};
