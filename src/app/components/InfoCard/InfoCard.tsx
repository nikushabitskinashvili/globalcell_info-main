import styles from "./InfoCard.module.scss";
import { InfoCardPropsInterface } from "./interfaces/info-card-props.interfaces";
import Image from "next/image";

const InfoCard = (props: InfoCardPropsInterface) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} alt="coreimage" width={395} height={278} />
      <div className={styles.info}>
        <div className={styles.header}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.subtitle}>{props.subtitle}</span>
        </div>
        <span className={styles.description}>{props.description}</span>
      </div>
    </div>
  );
};

export default InfoCard;
