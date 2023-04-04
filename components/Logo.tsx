import React from 'react'
import styles from '@/styles/Home.module.sass'
import cn from 'classnames';
import { Jua } from 'next/font/google'

const jua = Jua({
  subsets: ['latin'],
  weight: '400'
})

export const Logo = () => {

  return (
    <div className={cn(styles.logo, jua.className)}>
        <span className={styles.Tut}>Tut</span>
        <span className={styles.lo}>lo.</span>
    </div>
  )
}
