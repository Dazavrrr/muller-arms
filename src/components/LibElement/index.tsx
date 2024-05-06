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
        <Image src={imagePath} alt={name} width={203} height={288} className={styles.image} />
      </div>
      <div className={styles.libElement_content}>
        <p className={styles.libElement_title}>{name}</p>
        <div className={styles.line}></div>
        <a
          target="_blank"
          rel="noreferrer"
          href={downloadUrl}
          className={styles.libElement_download}
        >
          Завантажити
        </a>
      </div>
    </div>
  )
}

export default LibElement
