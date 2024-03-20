//libs
import { ArticleResponse, ArticleSmallResponse } from '@/common/types'
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import moment from 'moment'
//images



const ArticleAdminCard = ({article}: {article: ArticleSmallResponse}) => {
  return (
    <Link className={styles.container} href={`/admin/topics/${article.id}`}>
     <div className={styles.image}>
       <Image width={300} height={205} src={article.imagePath} alt={'article image'}/>
     </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.desc}>{article.text}</p>
        <div className={styles.meta}>
          <div className={styles.meta_block}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                fill="#868686" />
              <path
                d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                fill="#868686" />
            </svg>
            {article.author}
          </div>
          <div className={styles.meta_block}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#868686" />
              <path
                d="M15.7096 15.93C15.5796 15.93 15.4496 15.9 15.3296 15.82L12.2296 13.97C11.4596 13.51 10.8896 12.5 10.8896 11.61V7.51001C10.8896 7.10001 11.2296 6.76001 11.6396 6.76001C12.0496 6.76001 12.3896 7.10001 12.3896 7.51001V11.61C12.3896 11.97 12.6896 12.5 12.9996 12.68L16.0996 14.53C16.4596 14.74 16.5696 15.2 16.3596 15.56C16.2096 15.8 15.9596 15.93 15.7096 15.93Z"
                fill="#868686" />
            </svg>
            {moment(article.creationDate).format("DD.MM.YYYY")}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleAdminCard
