import React from 'react'
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { createTimeSlot } from '@/store/slices/TimeSlots.slice'
import { useForm } from 'react-hook-form'
import { LibCategoryCreateDto } from '@/common/types'
import { useAppDispatch } from '@/store/hooks'
import { createLibCategory } from '@/store/slices/Library.slice'

const LibCategoryForm = ({close}: {close: () => void}) => {
  const {register,handleSubmit} = useForm<LibCategoryCreateDto>()
  const dispatch = useAppDispatch();


  const onSubmit = (data: LibCategoryCreateDto) => {
    dispatch(createLibCategory(data))
    close();
  }

  return (
    <form className={styles.modal} onSubmit={handleSubmit(onSubmit)}>
      <div className={global.inputField}>
        <label>Введіть назву</label>
        <input type="text" className={global.input} {...register('name',{required: true})} />
      </div>
      <button type={'submit'} className={global.primaryBtn}>Додати</button>
    </form>
  )
}

export default LibCategoryForm
