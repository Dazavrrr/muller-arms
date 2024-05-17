//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import { SectionResponse } from '@/common/types'

const ArticleSection = ({ section }: { section: SectionResponse }) => {
  const { title, text, images } = section
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.images_wrapper_mob}>
          {images.map((image, key) => (
            <div className={styles.image_wrapper} key={key}>
              <Image
                className={styles.image}
                src={image}
                alt="MullerArms"
                width={280}
                height={311}
              />
            </div>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <div className={styles.images_wrapper}>
          {images.map((image, key) => (
            <div className={styles.image_wrapper} key={key}>
              <Image
                className={styles.image}
                src={image}
                alt="MullerArms"
                width={280}
                height={311}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleSection
