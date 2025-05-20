import styles from "./card.module.scss";
import { CardProps } from "../interfaces/card.interface";
import Image from "next/image";

const Card = ({
  image,
  title,
  description,
  items,
  footer,
  highlight,
  subscribers,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.txt}>{description}</p>
        <span className={styles.text}>{subscribers}</span>
        <div className={styles.listContainer}>
          <ul className={styles.txt}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <Image
                  src={"/arrowDown.svg"}
                  alt={"arrowDown"}
                  width={24}
                  height={24}
                />
                {item}
              </li>
            ))}
          </ul>
          {highlight && <div className={styles.highlight}>{highlight}</div>}
        </div>

        {footer && (
          <p className={styles.text}>
            <strong>{footer}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
