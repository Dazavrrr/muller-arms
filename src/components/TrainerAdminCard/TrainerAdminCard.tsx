'use client'
//libs
import { FC } from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import instagram from '../../../public/images/booking/instagram.svg'
//types
import { TrainerAdminResponse } from '@/common/adminTypes'
import Link from 'next/link'

interface Props {
  trainer: TrainerAdminResponse,
}

const TrainerAdminCard: FC<Props> = ({ trainer }) => {


  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image width={196} height={392} src={window.innerWidth > 760 ? trainer.tallImage : trainer.wideImage} alt={`trainer card`} />
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.info_header}>
            <a href={trainer.instagramLink}
               target={'_blank'} rel="noreferrer">{trainer.instagramName} <Image src={instagram}
                                                                                 alt={'instagram icon'} /></a>
          </div>
          <p className={styles.name}>{trainer.firstName} {trainer.lastName}</p>
          <p className={styles.desc}>{trainer.description}</p>
        </div>
        <Link href={`/admin/trainers/${trainer.id}`} className={global.primaryBtn}>Редагувати</Link>
      </div>
    </div>
  )
}

export default TrainerAdminCard
