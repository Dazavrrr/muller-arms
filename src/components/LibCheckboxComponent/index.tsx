//libs
import { useEffect } from 'react'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handleCheckbox } from '@/store/slices/Library.slice'

const LibCheckboxComponent = () => {
  const file = useAppSelector((state) => state.Library.checkbox)

  const handleFile = (value: string) => {
    if (file.includes(value)) {
      dispatch(handleCheckbox(file.filter((element) => element !== value)))
    } else {
      dispatch(handleCheckbox([...file, value]))
    }
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(handleCheckbox(file))
  }, [file])

  return (
    <div className={styles.categories}>
      <h3 className={styles.categories_title}>Категорії</h3>
      <div className={styles.categories_inputs}>
        <div className={styles.checkbox_container}>
          <div className={global.checkbox_wrapper}>
            <input
              type="checkbox"
              id={'BOOK'}
              checked={file.includes('BOOK')}
              onChange={() => handleFile('BOOK')}
            />
            <label htmlFor={'BOOK'}>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>КНИГИ</p>
        </div>

        <div className={styles.checkbox_container}>
          <div className={global.checkbox_wrapper}>
            <input
              type="checkbox"
              id={'AUDIO'}
              checked={file.includes('AUDIO')}
              onChange={() => handleFile('AUDIO')}
            />
            <label htmlFor={'AUDIO'}>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>АУДІО</p>
        </div>

        <div className={styles.checkbox_container}>
          <div className={global.checkbox_wrapper}>
            <input
              type="checkbox"
              id={'VIDEO'}
              checked={file.includes('VIDEO')}
              onChange={() => handleFile('VIDEO')}
            />
            <label htmlFor={'VIDEO'}>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>ВІДЕО</p>
        </div>
      </div>
    </div>
  )
}

export default LibCheckboxComponent
