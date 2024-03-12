import styles from './style/acceuil.module.css'

export default function Footer({darkMode}) {
  return (
    <div className={styles.footer}>
            <hr />
            <p align="center" className={`${darkMode ? styles.darkFooter : styles.F}`}>FotoFlex&copy;2024</p>
    </div>
  )
}
