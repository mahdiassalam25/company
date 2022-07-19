import Layout from "../components/Layout";
import styles from '../styles/Karir.module.css';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface KarirProps {
    dataKarir: Post[]
}
export default function Karir(props: KarirProps) {
    const { dataKarir } = props;
    return (
        <Layout pageTitle="Karir Page">
            {dataKarir.map((karir) => (
                <div key={karir.id} className={styles.card}>
                    <h3>{karir.title}</h3>
                    <p>{karir.body}</p>
                </div>
            ))}
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataKarir = await res.json();
    return {
        props: {
            dataKarir,
        },
    };
}