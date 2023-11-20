import {
	InputHTMLAttributes,
	DetailedHTMLProps,
	forwardRef,
	TextareaHTMLAttributes,
} from "react";
import styles from "./Textarea.module.scss";
import { FieldError } from "react-hook-form";
import Image from "next/image";

interface Props
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	icon?: string;
	error?: FieldError;
	reset?: () => void;
	value?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
	({ icon, error, reset, value, ...props }, ref) => {
		return (
			<>
				<label className={`${styles.label} ${error && styles.error}`}>
					<textarea {...props} ref={ref} />

					{value && value.length > 0 && (
						<Image
							src="/images/icons8-delete-48.png"
							alt="delete"
							width={30}
							height={30}
							onClick={() => reset && reset()}
							className={styles.delete}
						/>
					)}
				</label>
				{error && <span className={styles.error}>{error.message}</span>}
			</>
		);
	}
);

Textarea.displayName = "Textarea";

export { Textarea };
