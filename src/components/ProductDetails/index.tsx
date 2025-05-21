'use client'

//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { ShopItemResponseDto } from '@/common/types'
import { useState } from 'react'
import { ShopItem } from '@/models/shop'
import { ENV_URL } from '@/api'

const ProductDetails = ({ product }: { product: ShopItem }) => {
  const { name, description, images, price, sizes, colors } = product

  const [mainImage, setMainImage] = useState(images[0]?.image)

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          {!!mainImage && (
            <Image fill src={`${ENV_URL}${mainImage}`} alt="MullerArms patch" />
          )}
        </div>

        <div className={styles.details}>
          <div className={styles.details__wrapper}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.price}>₴{price}.00</p>
            <p
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            {images.length > 1 && (
              <>
                <label>Фото</label>
                <div className={styles.images}>
                  {images.map(({ image: img }, i) => (
                    <div
                      className={`${styles.small_image} ${
                        mainImage === img && styles.small_image__active
                      }`}
                      key={i}
                      onClick={() => setMainImage(img)}
                    >
                      <Image src={`${ENV_URL}${img}`} alt={'image'} fill />
                    </div>
                  ))}
                </div>
              </>
            )}
            {!!sizes.length && (
              <div className={styles.size}>
                <label>розмір</label>
                <select>
                  <option value="">виберіть розмір</option>
                  {sizes.map(({ size }, i) => (
                    <option value={size} key={i}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {!!colors.length && (
              <div className={styles.size}>
                <label>колір</label>
                <select>
                  <option value="">виберіть колір</option>
                  {colors.map(({ name }, i) => (
                    <option value={name} key={i}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className={styles.button_wrapper}>
            <a href="#" className={global.primaryBtn}>
              Купити
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
