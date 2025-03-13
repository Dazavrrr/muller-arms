import { Filter, OnChangeFilters } from '../LibraryComponent'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const LibCheckboxComponent = ({
  onChangeFilters,
  filters,
}: {
  onChangeFilters: OnChangeFilters
  filters: Filter
}) => {
  const file = filters.file_type || []

  const handleFile = (value: string) => {
    if (Array.isArray(file)) {
      if (file.includes(value)) {
        onChangeFilters(
          'file_type',
          file.filter((item) => item !== value)
        )
      } else {
        onChangeFilters('file_type', [...file, value])
      }
    }
  }

  return (
    <div className={styles.categories}>
      <h3 className={styles.categories_title}>Категорії</h3>
      <div className={styles.categories_inputs}>
        <div className={styles.checkbox_container}>
          <div className={global.checkbox_wrapper}>
            <input
              type="checkbox"
              id={'book'}
              checked={file.includes('book')}
              onChange={() => handleFile('book')}
            />
            <label htmlFor={'book'}>
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
              id={'audio'}
              checked={file.includes('audio')}
              onChange={() => handleFile('audio')}
            />
            <label htmlFor={'audio'}>
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
              id={'video'}
              checked={file.includes('video')}
              onChange={() => handleFile('video')}
            />
            <label htmlFor={'video'}>
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
