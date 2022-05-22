import React, { useEffect, useState, useRef } from "react"
import styles from "./modal.module.css"

const Modal = () => {
  const closeBtnRef = useRef()
  const openModalRef = useRef()
  const [showModal, setShowModal] = useState(false)

  // useEffect(() => {
  //   if (showModal) {
  //     closeBtnRef.current.focus()
  //   } else {
  //     openModalRef.current.focus()
  //   }
  // }, [showModal])

  return (
    <>
      <button ref={openModalRef} onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      <div className={`${styles.modal} ${showModal && styles.showModal}`}>
        <div className={styles.modalContent}>
          <p>Some text in the modal</p>
          <div className={styles.modalFooter}>
            <button
              ref={closeBtnRef}
              onClick={() => setShowModal(false)}
              className={styles.closeBtn}
            >
              Close
            </button>
            <button onClick={() => setShowModal(false)}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
