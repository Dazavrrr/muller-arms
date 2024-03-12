//libs
import Image from 'next/image'
import moment from 'moment/moment'
//styles
import styles from './styles.module.scss'

//images
import logo from '../../../public/icons/180x180.png'
import ios from './icons/ios.svg'
import android from './icons/android.svg'


const MobileInstallPromt = ({close,isIOS}:{close: () => void,isIOS: boolean}) => {
  return (
    <div className={styles.container}>
      <div className={styles.close}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
          close();
          localStorage.setItem('showedPromt', JSON.stringify(moment(Date.now()).add(1, 'M')));
        }}>
          <path d="M8 8L16.4853 16.4853" stroke="#FEC401" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 16.4854L16.4853 8.00007" stroke="#FEC401" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={styles.body}>
        <Image src={logo} alt={'logo'} className={styles.logo}/>
        <p className={styles.title}>Вітаємо в Muller Arms</p>
        <p className={styles.desc}>Встановіть додаток на домашній екран для швидкого та зручного доступу.</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons}>
          <p>Натисніть на</p>
          {isIOS ?
            <Image src={ios} alt={'ios'} />
            :
            <Image src={android} alt={'android'} />
          }
          {isIOS ?
            <p>потім “На початковий екран”</p>
            :
            <p>потім “Додати на початковий екран”</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MobileInstallPromt
