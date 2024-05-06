//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import image from '../../../public/images/blog/blog-image.webp'
import bgTop from '../../../public/images/blog/blog-image-bg-top.webp'
import bgBottom from '../../../public/images/blog/blog-image-bg-bottom.webp'

const BlogImage = () => {
  return (
    <div className={styles.image}>
      <Image className={styles.image_bg} src={image} alt="MullerArms" />
      <Image className={styles.image_bg_top} src={bgTop} alt="MullerArms" />
      <Image
        className={styles.image_bg_bottom}
        src={bgBottom}
        alt="MullerArms"
      />
    </div>
  )
}

export default BlogImage
