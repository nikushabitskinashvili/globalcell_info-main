import Image from "next/image";
import styles from "./Brand.module.scss";

const Brand = () => {
  return (
    <>
      <span className={styles.titleMobile}>Brand</span>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.title}>Brand</span>
          <span className={styles.text}>
            GlobalCell owns its identifying marks, visual images and elements,
            which help to increase brand awareness and popularization and with
            which the company can be easily identified in any information
            source, database, payment channel, search engine, etc.
            <br />
            <br />
            The company GlobalCell has received the intellectual property
            certificate (M20766) of the National Intellectual Property Center of
            Georgia - "Sakpatenti" for its trademark.
          </span>
        </div>
        <Image src="/brand.png" alt="brand" width={351} height={349} />
      </div>
    </>
  );
};

export default Brand;
