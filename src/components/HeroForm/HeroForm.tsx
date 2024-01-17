"use client"
//libs
import Input from 'react-phone-number-input/input'
//styles
import styles from './styles.module.scss'
import { useState } from 'react'

const MyComponent = () => {
  const [name,setName] = useState<string>();
  const [phone,setPhone] = useState<string>();

  return (
    <div className={styles.hero_form}>
      <input
        className={styles.hero_formField}
        type="text"
        placeholder="Ім'я"
      />
      <Input
        className={styles.hero_formField}
        country={"UA"}
        international
        withCountryCallingCode
        value={phone}
        onChange={setPhone}
        placeholder="Номер телефону"
        maxLength={16}
      />
      <button className={styles.hero_button} type="button">
        Передзвоніть мені
      </button>
    </div>
  )
}

export default MyComponent
