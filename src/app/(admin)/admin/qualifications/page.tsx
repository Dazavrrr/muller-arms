'use client'
import * as XLSX from 'xlsx'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
import React, { useEffect, useState } from 'react'
import { TableSlot, TableSlotCreateDto, TableSlotsType } from '@/common/types'
import moment from 'moment/moment'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  createTableSlotsFromList,
  deleteTableSlot,
  fetchAllClassifications,
  fetchAllTableSlotsByType,
  updateTableSlot,
} from '@/store/slices/TableSlots.slice'
import edit from '../../../../../public/icons/edit.svg'
import accept from '../../../../../public/icons/accept.svg'
import reject from '../../../../../public/icons/reject.svg'
import Image from 'next/image'


const QualificationsPage = () => {
  const [selectedType, setSelectedType] = useState<TableSlotsType>('CLASSIFICATION')
  const [selectedTask, setSelectedTask] = useState<number>(1)
  const [editRow, setEditRow] = useState<TableSlot | null>(null)
  const slots = useAppSelector(state => state.TableSlots.slots)
  const dispatch = useAppDispatch()

  const fetchItems = () => {
    if (selectedType === 'CLASSIFICATION') {
      dispatch(fetchAllClassifications())
    } else {
      dispatch(fetchAllTableSlotsByType({ type: selectedType, task: selectedTask }))
    }
  }


  useEffect(() => {
    fetchItems()
  }, [selectedType, selectedTask])

  const handleUpload = (event: any) => {
    const file = event.target.files[0]

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const body: TableSlotCreateDto[] = parsedData.map(p => {
          return {
            name: (p[0] as string),
            finishTime: (p[1] as number),
            lastTryDate: moment.utc(p[2], 'DD-MM-YYYY').toDate(),
            description: (p[3] as string),
            task: selectedType === 'CLASSIFICATION' ? null : selectedTask,
            type: selectedType,
          }
        });
        dispatch(createTableSlotsFromList(body));
      }

      reader.onload = null;
    }

    reader.readAsBinaryString(file);
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectWrapper}>
        <p className={styles.title}>Оберіть вид: </p>
        <select onChange={(e) => setSelectedType(e.target.value as TableSlotsType)}>
          <option value="CLASSIFICATION">Класифікація</option>
          <option value="PISTOL">Пістолет</option>
          <option value="CARBINE">Карабін</option>
        </select>
      </div>
      {selectedType != 'CLASSIFICATION' &&
        <div className={styles.selectWrapper}>
          <p className={styles.title}>Оберіть вправу: </p>
          <select onChange={e => setSelectedTask(parseInt(e.target.value))}>
            <option value="1">Вправа №1</option>
            <option value="2">Вправа №2</option>
            <option value="3">Вправа №3</option>
            <option value="4">Вправа №4</option>
            <option value="5">Вправа №5</option>
          </select>
        </div>}

      <table className={styles.table}>
        <thead>
        <tr>
          <th className={styles.head}></th>
          <th className={styles.head}>ІМ’Я ТА ПРІЗВИЩЕ</th>
          <th className={styles.head}>ЧАС ВИКОНАННЯ ВПРАВИ</th>
          <th className={styles.head}>ДАТА ОСТАННЬОГО ВИКОНАННЯ ВПРАВИ</th>
          <th className={styles.head}>ПРИМІТКИ</th>
          <th className={styles.head}></th>
        </tr>
        </thead>
        <tbody>
        {[...slots].sort((a, b) => a.finishTime - b.finishTime).map(s => (
          <tr key={s.id} className={styles.tr}>
            <th className={styles.value}>
              {editRow?.id == s.id ?
                <>
                  <Image src={accept} alt={'accept'} onClick={() => {
                    dispatch(updateTableSlot({ id: s.id, data: editRow })).then(() => {
                      setTimeout(() => {
                        fetchItems()
                      }, 100)
                    })
                    setEditRow(null)
                  }} />
                  <Image src={reject} alt={'reject'} onClick={() => {
                    setEditRow(null)
                    fetchItems()
                  }} />
                </> : <Image src={edit} alt={'edit icon'} onClick={() => setEditRow(s)} />}
            </th>
            <th className={styles.value}>
              <input disabled={editRow?.id != s.id} type="text"
                     value={editRow && editRow.id == s.id ? editRow.name : s.name}
                     onChange={e => {
                       //@ts-ignore
                       setEditRow(prev => ({
                         ...prev,
                         name: e.target.value,
                       }))
                     }} />
            </th>
            <th className={styles.value}>
              <input disabled={editRow?.id != s.id} type="text"
                     value={editRow && editRow.id == s.id ? editRow.finishTime : s.finishTime}
                     onChange={e => {
                       //@ts-ignore
                       setEditRow(prev => ({
                         ...prev,
                         finishTime: e.target.value,
                       }))
                     }} />
            </th>
            <th className={styles.value}>
              {moment(s.lastTryDate).format('DD-MM-YYYY')}
            </th>
            <th className={styles.value}>
              <input disabled={editRow?.id != s.id} type="text"
                     value={editRow && editRow.id == s.id ? editRow.description : s.description}
                     onChange={e => {
                       //@ts-ignore
                       setEditRow(prev => ({
                         ...prev,
                         description: e.target.value,
                       }))
                     }} />
            </th>
            <th className={styles.value}>
              <span onClick={() => {
                dispatch(deleteTableSlot(s.id))
              }}>X</span>
            </th>
          </tr>
        ))}
        </tbody>
      </table>

      <div className={styles.upload}>
        <input type="file" accept={'.xlsx, .xls'} hidden onChange={handleUpload} id="list" />
        <label htmlFor="list" className={global.primaryBtn}>Завантажити</label>
      </div>

    </div>
  )
}

export default QualificationsPage
