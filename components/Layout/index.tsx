import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
    <>
    <Head>
                <title> Coba | {''} {pageTitle}</title>
        <meta name="description" content="Mencoba NextJS Basic" />
    </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>  
    );
}