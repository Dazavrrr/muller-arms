//libs
// import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
// import bgBottom from '../../../public/images/leaders-table-bg-bottom.webp'
//components
import ArchiveCard from '../ArchiveCard'

const Archive = () => {
  return (
    <div className={styles.section}>
      <div className={styles.nav}>
        <div className={styles.nav_content}>
          <div className={styles.icons}>
            <ArrowLeft />
            <ArrowRight />
          </div>
          <p className={styles.nav_date}>грудень 2023</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Архів</h1>
          <div className={styles.cards}>
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
          </div>
        </div>
      </div>
      {/* <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" /> */}
    </div>
  )
}

export default Archive
