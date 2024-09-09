import { useCallback } from 'react';
import Styles from './dialog.module.scss'

const Dialog = (props: {
  open: boolean,
  onClose?(action: any): void,
  children: string | React.ReactNode,
}) => {
  const {open = false, onClose = (action) => {}, children} = props
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <div className={Styles.dialog} data-open={open} >
      <div className={Styles.bg} />
      <div className={Styles.body} onClick={onClose}>
        <div className={Styles.inner} onClick={handleClick}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dialog