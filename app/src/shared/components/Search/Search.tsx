"use client";

import React, {
	DetailedHTMLProps,
	Dispatch,
	FC,
	InputHTMLAttributes,
	SetStateAction,
} from "react";
import styles from "./Search.module.scss";
import Image from "next/image";

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	children: string;
	classNameInput?: string;
	classNameLabel?: string;
	value?: string;
	setValue?: Dispatch<SetStateAction<string>>;
}

export const Search: FC<Props> = ({
	children,
	classNameInput,
	classNameLabel,
	value = "",
	setValue,
	...props
}) => {
	return (
		<label className={`${classNameLabel} ${styles.label}`}>
			<Image src="/images/search.png" alt="search" width={30} height={30} />
			<input
				type="text"
				placeholder={children}
				{...props}
				className={`${classNameInput} ${styles.input}`}
				value={value}
				onChange={(e) => setValue && setValue(e.target.value)}
			/>
			{value.length > 0 && (
				<Image
					src="/images/icons8-delete-48.png"
					alt="search"
					width={30}
					height={30}
					onClick={() => setValue && setValue("")}
				/>
			)}
		</label>
	);
};
