import { CoreCardPropsInterface } from "../../interfaces/core-card-props.interface";
import styles from "./CoreCard.module.scss";
import Image from "next/image";

const CoreCard = (props: CoreCardPropsInterface) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} alt="coreimage" width={88} height={82}/>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default CoreCard;
