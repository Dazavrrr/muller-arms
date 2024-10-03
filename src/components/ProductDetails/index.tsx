//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { ShopItemResponseDto } from '@/common/types'
import { useState } from 'react'

const ProductDetails = ({ product }: { product: ShopItemResponseDto }) => {
  const { name,description,images,price,sizes } = product;

  const [image,setImage] = useState(images[0]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Image width={738} height={738} src={image} className={styles.image} alt="MullerArms patch" />

        <div className={styles.details}>
          <div className={styles.details__wrapper}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.price}>₴{price}.00</p>
            <p className={styles.desc}>{description}</p>
            {images.length > 1 &&
              <>
                <label>Фото</label>
                <div className={styles.images}>
                  {images.map((img, i) => (
                    <Image width={120} height={120} src={img} alt={'image'} key={i}
                           className={`${styles.small_image} ${image === img && styles.small_image__active}`}
                           onClick={() => setImage(img)} />
                  ))}
                </div>
              </>
            }
            {!!sizes.length && <div className={styles.size}>
              <label>розмір</label>
              <select>
                <option value="">виберіть розмір</option>
                {sizes.map((size, i) => (
                  <option value={size} key={i}>{size}</option>
                ))}
              </select>
            </div>}
          </div>
          <div className={styles.button_wrapper}>
            <a href="#" className={global.primaryBtn}>Купити</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
