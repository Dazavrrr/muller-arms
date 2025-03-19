'use client'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//components
import SearchComponent from '../SeachComponent'
import ShopSortComponent from '../ShopSortComponent'
import ShopPriceComponent from '../ShopPriceComponent'
import ShopCategories from '../ShopCategories'
import ShopItemComponent from '../ShopItemComponent'
//libs
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
//img
import Image from 'next/image'
import spinner from '../../../public/images/spinner.svg'
import filterIcon from '../../../public/icons/filter.svg'
import { Shop as IShop } from '@/models/shop'
import { useDebounce } from '@/hooks/useDebounce'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'

export type OnChangeFilters = (key: string, value: string) => void
export type Filter = Record<string, string | string[]>

const initialFilters = {
  category: [],
  ordering: 'asc',
  price_ordering: '',
  search: '',
  min_price: '',
  max_price: '',
}

const Shop = ({ initialShop }: { initialShop: IShop }) => {
  const [shop, setShop] = useState(initialShop)
  const [showFilers, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<Filter>(initialFilters)
  const [filtersIsTouched, setFiltersIsTouched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const [prices, setPrices] = useState<{
    min_price: string
    max_price: string
  }>({ min_price: '0', max_price: '50000' })

  const debounceSearchValue = useDebounce(
    (value: string) => setFilters((state) => ({ ...state, search: value })),
    500
  )
  const debouncePrice = useDebounce(
    ([key, value]: [string, string]) =>
      setFilters((state) => ({ ...state, [key]: value })),
    500
  )

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value)
    debounceSearchValue(value)
    setFiltersIsTouched(true)
  }, [])

  const handleChangePrice = useCallback((key: string, value: string) => {
    setPrices((state) => ({ ...state, [key]: value }))
    debouncePrice([key, value])
    setFiltersIsTouched(true)
  }, [])

  useEffect(() => {
    const fetchShop = async () => {
      setIsLoading(true)
      try {
        const params = new URLSearchParams()
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            if (Array.isArray(value)) {
              value.forEach((value) => params.append(key, value))
            } else {
              params.set(key, value)
            }
          }
        })
        const data = await getData<IShop>(
          `${ApiPath.SHOP}?${params.toString()}`
        )
        if (data.data) {
          setShop(data.data)
          setIsLoading(false)
        }
      } catch (err) {
        setShop(initialShop)
      }
    }
    if (filtersIsTouched) {
      fetchShop()
    }
  }, [filters, filtersIsTouched])

  const handleChangeFilters = useCallback(
    (key: string, value: string | string[]) => {
      if (key === 'category') {
        setFilters((state) => {
          const prevCategories = state.category
          if (Array.isArray(prevCategories) && typeof value === 'string') {
            return {
              ...state,
              category: prevCategories.includes(value)
                ? prevCategories.filter((item) => item !== value)
                : [...prevCategories, value],
            }
          }
          return state
        })
      } else {
        setFilters((state) => ({ ...state, [key]: value }))
      }
      setFiltersIsTouched(true)
    },
    []
  )

  const toggleFilter = () => {
    setShowFilters((state) => {
      if (state) {
        setFilters(initialFilters)
        setSearchValue('')
        setPrices({ min_price: '0', max_price: '50000' })
        return false
      }
      return true
    })
  }

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>магазин</h1>
        <div className={styles.content}>
          <div className={styles.filters__wrapper}>
            <button onClick={toggleFilter} className={styles.filter_btn}>
              <Image src={filterIcon} alt="icon" />
              Фільтри
            </button>
            <div
              className={`${styles.filter} ${showFilers && styles.filter_show}`}
            >
              <SearchComponent
                isShop
                value={searchValue}
                setValue={handleSearch}
              />
              <ShopSortComponent
                filters={filters}
                onChangeFilters={handleChangeFilters}
              />
              <ShopPriceComponent value={prices} setValue={handleChangePrice} />
              <ShopCategories
                categories={initialShop.categories}
                filters={filters}
                onChangeFilters={handleChangeFilters}
              />
              {/* <ShopCheckboxCertificates /> */}
            </div>
          </div>
          <div className={styles.cards}>
            {isLoading && (
              <Image
                src={spinner}
                alt={'spinner'}
                className={global.spinnerAbsolute}
              />
            )}
            {shop?.items?.map((item) => (
              <ShopItemComponent item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
