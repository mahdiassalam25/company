import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Image src="/profil.png" width={200} height={200} alt="p1" />
      <h1 className={styles['title-homepage']}>Haitoko</h1>
      <p>haitoko merupakan aplikasi belanja online untuk sembako, kebutuhan harian, buah, hingga frozen food.</p>
        <p>
        Pembeli cukup belanja dari rumah secara mudah dan cepat.</p>
      <Image src="/01.png" width={200} height={200} alt="p1" />
      <h3>Lebih Murah dan Hemat</h3>
      <p>Belanja kapan saja di haitoko lebih murah sehingga belanja jadi lebih hemat..</p>
      
      <Image src="/02.png" width={200} height={200} alt="p1" />
      <h3>Promo Setiap Hari</h3>
      <p>Ada beragam promo dan diskon yang bisa dinikmati setiap hari. .</p>
      </Layout>
  );
}
