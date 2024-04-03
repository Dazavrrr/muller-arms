//libs
import React from "react";
//styles
import styles from './styles.module.scss'
//icons
import SearchIcon from "../Icons/Search";
// import CheckIcon from "../Icons/Check";


const LibraryComponent = () => {
  return <section className={styles.library}>
    <div className={styles.library_wrapper}>
      <h2 className={styles.library_title}>Бібліотека</h2>

      <ul className={styles.library_categories}>
        <li className={styles.library_categories_item}>тактика</li>
        <li className={styles.library_categories_item}>фізичні вправи</li>
        <li className={styles.library_categories_item}>медицина</li>
      </ul>

      <div className={styles.library_content}>
        <div className={styles.library_filter}>
          <div className={styles.library_filter_search}>
            <h3 className={styles.library_filter_search_title}>Пошук</h3>
            <div className={styles.library_filter_search_input}>
              <SearchIcon />
              <input className={styles.library_filter_search_field} type="search" placeholder="Пошук" />
            </div>
            
          </div>

          <div className={styles.library_filter_sort}>
            <h3 className={styles.library_filter_sort_title}>Сортувати</h3>
            <div className={styles.library_filter_sort_by}>
              <div>
                <p className={styles.library_filter_sort_recommend}>Рекомендовані</p>
                <div className={styles.line}></div>
              </div>
              <p className={styles.library_filter_sort_alphabet}>За алфавітом (а-я)</p>
              <p className={styles.library_filter_sort_alphabet}>За алфавітом (я-а)</p>
            </div>
            
          </div>

          <div className={styles.library_filter_categories}>
            <h3 className={styles.library_filter_categories_title}>Категорії</h3>
            <div className={styles.library_filter_categories_inputs}>
              <label className={styles.library_filter_categories_label}>
                {/* <CheckIcon /> */}
                <input className={styles.library_filter_categories_input} type="checkbox" name="category" value="books" checked/>
                КНИГИ
              </label>
              
              <label className={styles.library_filter_categories_label}>
                <input className={styles.library_filter_categories_input} type="checkbox" name="category" value="audio" />
                АУДІО
              </label>
              
              <label className={styles.library_filter_categories_label}>
                <input className={styles.library_filter_categories_input} type="checkbox" name="category" value="video" />
                ВІДЕО
              </label>
            </div>
          </div>
        
        </div>

        <div></div>
      </div>
    </div>
  </section>
}

export default LibraryComponent