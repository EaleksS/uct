import { FC } from "react";
import styles from "./About.module.scss";
import { Button } from "@/shared";
import Image from "next/image";

export const About: FC = () => {
	return (
		<section className={styles.about}>
			<h1>Обо мне</h1>
			<p>
				Здравствуйте, я Эрнест!
				<br />
				<br />
				Я фронтенд-разработчик-самоучка, живущий в Якутске, Россия. Я могу
				разрабатывать отзывчивые веб-сайты с нуля и превращать их в современные
				удобные для пользователей веб-страницы.
				<br />
				<br />
				Преобразование моих творческих способностей и знаний в веб-сайты
				является моей страстью уже более года. Я помогаю различным клиентам
				обеспечить свое присутствие в Интернете. Я всегда стремлюсь изучать
				новейшие технологии и фреймворки.
			</p>
			<div className={styles.social}>
				<h2>
					Присоединяйтесь к нам <br /> в социальных сетях:
				</h2>

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
						<Image src="/images/yt.svg" alt="yt" width={24} height={24} />
						YouTube
					</Button>
				</div>
			</div>
		</section>
	);
};
