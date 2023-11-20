import { InputHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import styles from "./Input.module.scss";
import { FieldError } from "react-hook-form";
import Image from "next/image";

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	icon?: string;
	error?: FieldError;
	reset?: () => void;
	value?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ icon, error, reset, value, ...props }, ref) => {
		return (
			<>
				<label className={`${styles.label} ${error && styles.error}`}>
					{icon && <Image src={icon} alt={icon} width={30} height={30} />}

					<input {...props} ref={ref} />

					{value && value.length > 0 && (
						<Image
							src="/images/icons8-delete-48.png"
							alt="search"
							width={30}
							height={30}
							onClick={() => reset && reset()}
						/>
					)}
				</label>
				{error && <span className={styles.error}>{error.message}</span>}
			</>
		);
	}
);

Input.displayName = "Input";

export { Input };
