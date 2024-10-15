'use client'
//libs
import Image from 'next/image'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
//styles
import spinner from '../../../../../public/images/spinner.svg'
import trash from '../../../../../public/icons/trash.svg'
import global from '@/styles/global.module.scss'
import styles from '../styles.module.scss'
import { useEffect } from 'react'
import { createCategory, deleteCategory, fetchAllCategories, fetchAllItemsAdmin } from '@/store/slices/Shop.slice'
import { useForm } from 'react-hook-form'
import { ShopCategoryCreateDto } from '@/common/types'
import ShopItemCard from '@/components/ShopItemCard/ShopItemCard'
import Link from 'next/link'

const ShopPage = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.Shop.categories)
  const items = useAppSelector(state => state.Shop.items)
  const itemsFetchStatus = useAppSelector(state => state.Shop.itemsFetchStatus)
  const categorySections = Array.from(new Set(categories.map(item => item.categorySection)))
  useEffect(() => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllItemsAdmin())
  }, [])

  const {
    register, handleSubmit, reset,
    formState: { isValid },
  } = useForm<ShopCategoryCreateDto>()
  const onSubmit = (data: ShopCategoryCreateDto) => {
    dispatch(createCategory(data))
    reset()
  }

  if (itemsFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Категорії</h1>
      <form className={styles.categoryForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={global.inputField}>
          <label>Секція категорії</label>
          <input type="text" className={global.input} {...register('categorySection', { required: true })} />
        </div>
        <div className={global.inputField}>
          <label>Назва категорії</label>
          <input type="text" className={global.input} {...register('name', { required: true })} />
        </div>
        <button type={'submit'} disabled={!isValid} className={global.primaryBtn}>Додати нову</button>
      </form>

      {categorySections.map((s,key) => (
        <div key={key}>
          <h2 className={styles.title}>{s}</h2>
          <div className={styles.categorySection}>
            {categories.filter(item => item.categorySection === s).map((c,i) => (
              <div className={styles.timeSlot} key={i}>
                <p>{c.name}</p>
                <Image src={trash} alt={'trash'} className={styles.trashWrapper}
                onClick={() => dispatch(deleteCategory(c.id))} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.shopItemsWrapper}>
        <h2 className={styles.title}>Товари</h2>
        <Link href={'shop/new'} className={global.primaryBtn}>Додати новий</Link>
        <div className={styles.shopItems}>
          {
            //@ts-ignore
            items.map(i => (
            <ShopItemCard item={i} key={i.id} isAdmin={true}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
