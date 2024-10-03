
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { ShopItemResponseDto } from '@/common/types'
import Image from 'next/image'
import Link from 'next/link'

const ShopItemCard = ({item,isAdmin} : {item: ShopItemResponseDto, isAdmin: boolean}) => {
  return (
    <div className={styles.container}>
      <Image width={204} height={227} src={item.images[0]} alt={'item image'} className={styles.image}/>
      <p className={styles.title}>{item.name}</p>
      <p className={styles.id}>код товару: {item.id}</p>
      <div className={styles.footer}>
        <span className={styles.price}>₴{item.price.toFixed(2)}</span>
        {isAdmin ? <Link className={styles.btn} href={`/admin/shop/${item.slug}`}>Редагувати</Link> : <Link href={'/'} className={styles.btn} >Купити</Link> }
      </div>
    </div>
  )
}

export default ShopItemCard
