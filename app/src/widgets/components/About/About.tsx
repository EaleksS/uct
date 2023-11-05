import { FC } from "react";
import styles from "./About.module.scss";
import { Button } from "@/shared";
import Image from "next/image";

export const About: FC = () => {
	return (
		<section className={styles.about}>
			<h1>О нашей компании</h1>
			<p>
				Наш сервис центр профессионально занимается оказанием компьютерной
				помощи и ремонтом компьютеров. Если у вас возникли сложности с
				компьютером и сопутствующим оборудованием, мы рады быть Вам полезными.
				Наш мастер сможет приехать к Вам на дом или в офис для устранения
				неисправности уже в течении 1 часа.
			</p>
			<div className={styles.social}>
				<h3>
					Присоединяйтесь к нам <br /> в социальных сетях:
				</h3>

				<div className={styles.btns}>
					<Button className={styles.social_btn}>
						<Image src="/images/vk.svg" alt="vk" width={24} height={24} />
						ВКонтакте
					</Button>
					<Button className={styles.social_btn}>
						<Image src="/images/inst.svg" alt="inst" width={24} height={24} />
						Instagram
					</Button>
					<Button className={styles.social_btn}>
						<Image src="/images/yt.svg" alt="youtube" width={24} height={24} />
						YouTube
					</Button>
				</div>
			</div>
		</section>
	);
};
