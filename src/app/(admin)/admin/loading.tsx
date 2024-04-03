'use client'
import React from 'react'
import Image from 'next/image'
import spinner from '../../../../public/images/spinner.svg'
import global from '@/styles/global.module.scss'


export default function Loading() {
  return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
}
