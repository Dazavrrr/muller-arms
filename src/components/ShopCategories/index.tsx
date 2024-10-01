//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { changeSelectedCategories, fetchAllCategories } from '@/store/slices/Shop.slice'
import { GroupedCategory, ShopCategoryResponseDto } from '@/common/types'

const ShopCategories = () => {

  const categories = useAppSelector(state => state.Shop.categories)
  const selectedCategories = useAppSelector(state => state.Shop.selectedCategories)
  const dispatch = useAppDispatch()

  function groupCategories(categories: ShopCategoryResponseDto[]): GroupedCategory[] {
    const groupedMap = new Map<string, { id: number; name: string }[]>()

    categories.forEach((category) => {
      const { categorySection, id, name } = category
      if (!groupedMap.has(categorySection)) {
        groupedMap.set(categorySection, [])
      }
      groupedMap.get(categorySection)!.push({ id, name })
    })

    return Array.from(groupedMap.entries()).map(([categorySection, categories]) => ({
      categorySection,
      categories,
    }))
  }

  const handleChangeCategory = (id: number) => {
    if (selectedCategories.includes(id)){
      dispatch(changeSelectedCategories(selectedCategories.filter(c => c != id)))
    } else {
      dispatch(changeSelectedCategories([...selectedCategories,id]))
    }
  }

  return (
    <>
      {groupCategories((categories)).map((category, i) => (
        <div className={styles.section} key={i}>
          <h2 className={styles.title}>{category.categorySection}</h2>
          <div className={styles.checkboxes}>
            {category.categories.map(c => (
              <div className={styles.checkbox} key={c.id}>
                <div className={global.checkbox_wrapper}>
                  <input type="checkbox" value={c.id} id={`checkbox-${c.id}`}
                         checked={selectedCategories.includes(c.id)}
                         onChange={() => handleChangeCategory(c.id)}
                  />
                  <label htmlFor={`checkbox-${c.id}`}>
                    <svg viewBox="0,0,50,50">
                      <path d="M5 30 L 20 45 L 45 5"></path>
                    </svg>
                  </label>
                </div>
                <label htmlFor={`checkbox-${c.id}`}>{c.name}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default ShopCategories
