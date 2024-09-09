import React, { useCallback, useState } from 'react'
import Dialog from '../dialog/dialog'
import Button from '../button/button'
import SignInGoogle from '../auth/signInGoogle'
import SignInGithub from '../auth/gitHub'
import { signOut } from "next-auth/react"
import Styles from './logout.module.scss'

const Logout = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  
  const handleClose = useCallback(() => {
    setDialogOpen(prev => !prev)
  },[])

  const handleDialog = useCallback(() => {
    setDialogOpen(prev => !prev)
  },[])

  return (
    <>
      
      <Button onClick={handleDialog} type='primary'>Sign Out</Button>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <div className={Styles.inner}>
          <p>サインアウトしますか？</p>
        </div>
        <div className={Styles.buttonBlock}>
          <Button type="cancel" onClick={handleClose}>閉じる</Button>
          <Button onClick={signOut} type="primary" >Sign Out</Button>
        </div>
      </Dialog>
    </>
  )
}

export default Logout