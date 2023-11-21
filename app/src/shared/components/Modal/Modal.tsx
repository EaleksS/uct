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
import { CSSTransition } from "react-transition-group";

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

	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				setIsActive(true);
			}, 1);
		} else {
			setTimeout(() => {
				setIsActive(false);
			}, 1);
		}
	}, [isOpen]);

	const modal = (
		<CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
			<div
				className={clsx(styles.overlay, className, {
					[styles.active]: isActive,
				})}
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
		</CSSTransition>
	);

	return createPortal(modal, wrapper.current);
};
