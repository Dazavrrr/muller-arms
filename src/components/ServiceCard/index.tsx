//libs
import React from "react";
import Image from "next/image";
import Link from "next/link";
//styles
import styles from './styles.module.scss'

const ServiceCard = ({ training }: { training: any }) => {
  const { trainingName, image, smallDescription, price, slug } = training;
  return (
          <div className={styles.services_card}>
            <div className={styles.services_photo}>
              <Image
                className={styles.services_image}
                src={image}
                alt={trainingName}
                width={267}
                height={200}
              />
            </div>
            <div className={styles.services_info}>
              <h3 className={styles.services_infoTitle}>
                {trainingName}
              </h3>
              <p className={styles.services_infoDesc}>
                {smallDescription}
              </p>
              <div className={styles.services_infoPrice}>
                <p className={styles.services_infoPriceOrange}>{price}</p>
              </div>
                <Link className={styles.services_infoBtn} href={`/trainings/${slug}`}>ЗАРЕЄСТРУВАТИСЯ</Link>
            </div>
          </div>
  )
}

export default ServiceCard