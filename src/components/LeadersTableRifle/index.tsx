//libs
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import NavArrow from '../Icons/NavArrow'
import bgBottom from '../../../public/images/leaders-table-bg-bottom.webp'
//components
import LeadersTableOne from '../LeadersTableOne'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { LeadersTable } from '@/models/leaders-table'
import { Exercise } from '@/models/exercise'

const LeadersTableRifle = async ({ tab }: { tab: string }) => {
  const exercisesData = getData<Exercise[]>(ApiPath.RIFLE_EXERCISES)
  const tableData = getData<LeadersTable[]>(
    `${ApiPath.LEADERS_TABLE_RIFLE}${tab}`
  )
  const [exercises, table] = await Promise.all([exercisesData, tableData])

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <div>
            <NavArrow />
          </div>
          <Link href="/records" className={styles.nav_prev}>
            рекорди КЛУБУ
          </Link>
          <div>
            <NavArrow />
          </div>
          <Link href="/rifle-exercises" className={styles.nav_prev}>
            завдання з карабіну
          </Link>
          <div>
            <NavArrow />
          </div>
          <p className={styles.nav_current}>таблиця лідерів</p>
        </div>

        <div className={styles.exercises}>
          <h1 className={styles.title}>ТАБЛИЦЯ лідерів учасників З КАРАБІНУ</h1>
          <div className={styles.exercises_wrapper}>
            <div className={styles.exercise_items}>
              {exercises.data?.map((item) => (
                <Link
                  key={item.pk}
                  href={`/leaders-table-rifle/${item.pk}`}
                  className={`${styles.exercise_item} ${
                    parseInt(tab) === item.pk && styles.active
                  }`}
                >
                  / {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <LeadersTableOne
              performers={table.data?.length ? table.data[0].performer : []}
              exercise={
                !!table.data?.length ? table.data[0].exercise : undefined
              }
            />
          </div>
        </div>
      </div>

      <Image className={styles.bg_bottom} src={bgBottom} alt="Muller Arms" />
    </div>
  )
}

export default LeadersTableRifle
