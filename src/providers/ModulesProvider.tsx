'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { initFlowbite } from 'flowbite'
import { useEffect } from 'react'
import { useStore } from '@/store/store'

export const ModulesProvider = ({ children }: { children: React.ReactNode }) => {

  const { isLogged } = useStore(state => {
    return {
      isLogged: state.isLogged
    }
  })

  useEffect(() => {
    initFlowbite()
  }, [isLogged])

  return (
    <>
      <ProgressBar color='#FFFFFF' options={{
        showSpinner: false,
      }} />
      {children}
    </>
  )
}
