import { Button, Input, Textarea } from "@/shared";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./EmailMe.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Modal } from "@/shared/components/Modal/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	title?: string;
}

interface IFormInput {
	name: string;
	email: string;
	comment: string;
}

export const EmailMe: FC<Props> = ({
	isOpen,
	setIsOpen,
	title = "Написать мне!!!",
}) => {
	const {
		register,
		handleSubmit,
		reset,
		resetField,
		watch,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		// mutation.mutate(data);
		reset();
	};

	const form = (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h2>{title}</h2>
			<Input
				type="text"
				placeholder="Ваше имя"
				{...register("name", {
					required: "Напишите свое имя",
				})}
				error={errors.name}
				reset={() => resetField("name")}
				value={watch("name")}
			/>
			<Input
				type="text"
				placeholder="Ваша почта"
				{...register("email", {
					required: "email не введен",
				})}
				error={errors.email}
				reset={() => resetField("email")}
				value={watch("email")}
			/>
			<Textarea
				placeholder="Комментарий"
				{...register("comment")}
				reset={() => resetField("comment")}
				value={watch("comment")}
			/>
			<Button type="submit" className={styles.btn}>
				Отправить
				<Image
					src="/images/arrow-right.svg"
					alt="arrow"
					width={22}
					height={22}
				/>
			</Button>
		</form>
	);

	return (
		<Modal isOpen={isOpen} onClose={setIsOpen}>
			{form}
		</Modal>
	);
};
