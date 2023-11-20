"use client";

import clsx from "clsx";
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import Image from "next/image";

interface Props {
	children: ReactNode;
	className?: string;
	classNameContent?: string;
	isOpen?: boolean;
	onClose?: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({
	children,
	className,
	classNameContent,
	onClose,
	isOpen = false,
}) => {
	const el = global.window && document.createElement("div");
	const wrapper: React.RefObject<HTMLElement> = useRef(el);

	const [isOpens, setIsOpens] = useState<boolean>(false);

	useEffect(() => {
		const current = wrapper.current as HTMLElement;
		current.setAttribute("id", "overlay");
		global.window && document.body.appendChild(current);

		return () => {
			global.window && document.body.removeChild(current);
		};
	}, []);

	if (!wrapper.current) {
		return <>{null}</>;
	}

	const handleClose = () => {
		onClose && onClose((prev) => !prev);
	};

	useEffect(() => {
		if (isOpen) {
			setIsOpens(true);
		} else {
			setIsOpens(false);
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	const modal = (
		<div
			className={clsx(styles.overlay, className, { [styles.active]: isOpens })}
			onClick={handleClose}
		>
			<div
				className={clsx(styles.content, classNameContent)}
				onClick={(e) => e.stopPropagation()}
			>
				<div
					onClick={() => onClose && onClose((prev) => !prev)}
					className={styles.close}
				>
					<Image src="/images/close.png" alt="close" width={20} height={20} />
				</div>

				{children}
			</div>
		</div>
	);

	return createPortal(modal, wrapper.current);
};
