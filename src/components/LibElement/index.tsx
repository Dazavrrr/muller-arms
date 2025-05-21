//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'

const LibElement = ({
  name,
  downloadUrl,
  imagePath,
}: {
  name: string
  downloadUrl: string
  imagePath: string
}) => {
  return (
    <div className={styles.libElement}>
      <div>
        <Image
          src={imagePath}
          alt={name}
          width={203}
          height={288}
          className={styles.image}
        />
        <p className={styles.libElement_title}>{name}</p>
      </div>

      <div className={styles.libElement_content}>
        <div className={styles.line}></div>
        <a
          target="_blank"
          rel="noreferrer"
          href={downloadUrl}
          className={styles.libElement_download_btn}
        >
          Завантажити
        </a>
      </div>
    </div>
  )
}

export default LibElement
