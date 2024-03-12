"use client"
//libs
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
//types
import {  LoginInputs } from '@/common/adminTypes'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import logo from '../../../../public/icons/180x180.png';
import spinner from '../../../../public/images/spinner.svg';
import hide from './icons/hide.png'
import show from './icons/show.png'
//api
import { BASE_URL, guestInstance } from '@/api'


const LoginPage = () => {
  const [isPassHide, setIsHide] = useState<boolean>(true);
  const [error,setError] = useState<boolean>(false);
  const { push } = useRouter();
  useEffect(() => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');

    if (access != null && refresh != null){
      push("/admin/bookings");
    }
    //eslint-disable-next-line
  }, [])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting,isValid },
  } = useForm<LoginInputs>();


  const onSubmit = async (data: LoginInputs) => {
    try{
      const response = await guestInstance.post(`${BASE_URL}/auth/access`,JSON.stringify(data));
      const res = await response.data;
      localStorage.setItem('access',res.access);
      localStorage.setItem('refresh',res.refresh);
      push('/admin')
    }catch(err){
      setError(true);
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Image src={logo} alt={"Muller arms logo"} className={styles.logo}/>
      <div className={styles.field}>
        <label htmlFor={'email'} className={styles.label}>Логін</label>
        <input type="text" id={'email'} className={`${global.input} ${styles.input}`} placeholder={'Введіть логін'}
               {...register('email', {
                 required: true, pattern: {
                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   message: 'invalid email address',
                 }})} />
      </div>

      <div className={styles.field}>
        <label htmlFor={'password'} className={styles.label}>Пароль</label>
        <div className={styles.pass}>
          <input type={isPassHide ? 'password' : 'text'} id={'password'} className={`${global.input} ${styles.input}`}
                 placeholder={'Введіть пароль'}
                 {...register('password', { required: true })} />

          <Image src={isPassHide ? hide : show} alt={'password icon'} onClick={() => setIsHide(prev => !prev)}/>
        </div>

      </div>

      {isSubmitting ? <Image src={spinner} alt={'spinner'} className={styles.spinner}/> :<button type={'submit'} className={`${global.primaryBtn} ${styles.submit}`} disabled={!isValid}>Увійти</button>}
      {error && <p className={styles.error}>Логін або пароль не вірні</p>}
    </form>
  )
}

export default LoginPage
