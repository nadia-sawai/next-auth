import React, { useCallback, useState } from 'react'
import Dialog from '../dialog/dialog'
import Button from '../button/button'
import SignInGoogle from '../auth/signInGoogle'
import SignInGithub from '../auth/gitHub'
import Styles from './login.module.scss'

const Login = (props:{text: string}) => {
  const {text} = props
  const [dialogOpen, setDialogOpen] = useState(false)
  
  const handleClose = useCallback(() => {
    setDialogOpen(prev => !prev)
  },[])

  const handleDialog = useCallback(() => {
    setDialogOpen(prev => !prev)
  },[])

  
  return (
    <>
      <Button onClick={handleDialog} type='primary'>{text}</Button>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <div className={Styles.inner}>
          <SignInGoogle />
          <SignInGithub />
        </div>
        <div className={Styles.buttonBlock}>
          <Button type="cancel" onClick={handleClose}>閉じる</Button>
        </div>
      </Dialog>
    </>
  )
}

export default Login