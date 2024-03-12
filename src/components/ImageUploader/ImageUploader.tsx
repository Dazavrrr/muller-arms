//libs
import React, { createRef, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Cropper, ReactCropperElement } from 'react-cropper'
import { UseFormSetValue, UseFormTrigger } from 'react-hook-form'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import 'cropperjs/dist/cropper.css'

const ImageUploader = ({ setValue, previewClass, inputName,trigger }: {
  setValue: UseFormSetValue<any>,
  previewClass: string,
  inputName: string,
  trigger: UseFormTrigger<any>
}) => {
  const [image, setImage] = useState<string>()
  const [modal, setModal] = useState<boolean>(false)
  const cropperRef = createRef<ReactCropperElement>()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setModal(true)
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result) {
        setImage(reader.result as string)
      }
    }
    reader.readAsDataURL(acceptedFiles[0])
  }, [])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': [],
    },
    onDrop: onDrop,
  })

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setValue(inputName, cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      trigger();
    }
  }

  return (
    <section className={styles.container}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Перетягніть фото або клікніть в цю область</p>
        <em>(Підтримка тільки для *.jpeg, *.jpg, *.png)</em>
      </div>
      {modal && <div className={styles.modal}>
        <Cropper
          ref={cropperRef}
          style={{ height: 350, width: 350 }}
          preview={`.${previewClass}`}
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={false}
          autoCropArea={2}
          checkOrientation={false}
        />
        <div className={global.primaryBtn} onClick={() => {
          getCropData()
          setModal(false)
        }}>Зберегти
        </div>
      </div>}
    </section>
  )
}

export default ImageUploader
