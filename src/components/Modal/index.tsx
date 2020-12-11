import React from 'react'

import * as Styles from './styles'

interface ModalProps {
  visible?: boolean,
  onClickOutside?: () => void
}

function Modal (props: ModalProps) {
  if (!props?.visible) return null

  return (
    <Styles.Container onClick={props?.onClickOutside}>
      <Styles.Card onClick={event => event.stopPropagation()}></Styles.Card>
    </Styles.Container>
  )
}

export default Modal
