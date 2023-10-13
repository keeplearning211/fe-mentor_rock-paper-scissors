import { useEffect, useRef } from 'react'
import styles from './ruleModal.module.css'
import IconImage from '../IconImage/IconImage';
import Image from 'next/image';
const ESC_KEY = 'Escape'

interface RulesModalProps {
  onClose?: () => void;
}

const RulesModal = ({ onClose }: RulesModalProps) => {
  const modalContainerRef = useRef<HTMLDivElement>(null)

  // close modal when clicking outside modal
  const outSideModalClickHandler = (event: Event) => {
    if (modalRef.current && !(modalRef.current as HTMLDivElement).contains(event.target as HTMLDivElement)) {
      handleClose()
    }
  }

  // close modal when pressing ESCAPE
  const EscKeydownHandler = (event: KeyboardEvent) => {
    if (event.key === ESC_KEY) {
      handleClose()
    }
  }

  const modalRef = useRef(null)
  useEffect(() => {
    document.addEventListener('mousedown', outSideModalClickHandler)
    document.addEventListener('keydown', EscKeydownHandler)
    return () => {
      document.removeEventListener('keydown', EscKeydownHandler)
      document.removeEventListener('mousedown', outSideModalClickHandler)
    }
  })

  const handleClose = () => {
    onClose && onClose()
  };

  return (
    <div
      ref={modalContainerRef}
      role="dialog"
      className={styles.modalContainer}
    >
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>Rules</h1>
          <button onClick={handleClose} className={styles.closeBtn}>
            <IconImage name="close" size={20} />
          </button>
        </div>
        <Image src="/images/image-rules.svg" width={304} height={270} alt="rule of the game image" />
      </div>
    </div>
  );
};

export default RulesModal