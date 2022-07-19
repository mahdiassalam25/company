import Link from 'next/Link';
import styles from './Header.module.css';
export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
                <li className={styles.item}><Link href="/Karir"><a>Karir</a></Link></li>
                <li className={styles.item}><Link href="/users"><a>detail</a></Link></li>
            </ul>
        </header>
    );
}