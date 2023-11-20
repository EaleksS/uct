"use client";

import { FC, useState } from "react";
import styles from "./Main.module.scss";
import { Button } from "@/shared";
import Image from "next/image";
import { EmailMe } from "@/entities";

export const Btns: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string>("");

	return (
		<>
			<div className={styles.btns}>
				<Button
					className={styles.btn}
					onClick={() => {
						setTitle("Написать мне!!!");
						setIsOpen(true);
					}}
				>
					Написать мне!!!
					<Image
						src="/images/arrow-right.svg"
						alt="arrow"
						width={22}
						height={22}
					/>
				</Button>
				<Button
					btn="v2"
					onClick={() => {
						setTitle("Консультация");
						setIsOpen(true);
					}}
				>
					<Image src="/images/consul.svg" alt="arrow" width={22} height={22} />
					Консультация
				</Button>
			</div>
			<EmailMe isOpen={isOpen} setIsOpen={setIsOpen} title={title} />
		</>
	);
};
