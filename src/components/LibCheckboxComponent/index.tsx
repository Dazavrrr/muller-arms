//libs
import { SetStateAction, Dispatch } from 'react'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const LibCheckboxComponent = ({
  file,
  setFile,
}: {
  file: string[]
  setFile: Dispatch<SetStateAction<string[]>>
}) => {
  const handleFile = (value: string) => {
    if (file.includes(value)) {
      setFile((prev) => prev.filter((element) => element !== value))
    } else {
      setFile((prev) => [...prev, value])
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
