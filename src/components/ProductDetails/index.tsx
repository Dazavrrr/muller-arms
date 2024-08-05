//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'

const ProductDetails = ({ product }: { product: any }) => {
  const { image, productName, text, price, slug } = product
  return (
    <section className={styles.product}>
      <div className={styles.wrapper}>
        <Image src={image} className={styles.image} alt="MullerArms patch" />

        <div className={styles.details}>
          <h1 className={styles.title}>{productName}</h1>
          <p className={styles.price}>{price}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
