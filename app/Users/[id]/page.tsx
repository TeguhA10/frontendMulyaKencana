// app/users/[id]/page.tsx
import { notFound } from 'next/navigation';
import styles from './detailusers.module.css';
import Link from 'next/link';

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
};

export default async function UserDetail({ params }: { params: { id: string } }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    if (!res.ok) {
        notFound();
    }
    const user: User = await res.json();

    return (
        <div className='h-screen'>
            <div className={styles.card}>
                <div className=' mb-5'>
                    <h1 className={styles.cardTitle}>User Detail</h1>
                    <p className={styles.cardContent}><strong>Name:</strong> {user.name}</p>
                    <p className={styles.cardContent}><strong>Email:</strong> {user.email}</p>
                    <p className={styles.cardContent}><strong>Phone:</strong> {user.phone}</p>
                    <p className={styles.cardContent}><strong>Website:</strong> {user.website}</p>
                    <p className={styles.cardContent}><strong>Company:</strong> {user.company.name}</p>
                </div>
                <Link href="/Users" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Back to Users
                </Link>
            </div>
        </div>
    );
}
