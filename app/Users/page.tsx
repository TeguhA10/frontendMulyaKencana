import Link from 'next/link';
import styles from './users.module.css';
import Image from 'next/image';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });
  const data: User[] = await response.json();
  return data;
};

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>List of Users</h1>
      <div className={styles.gridrows}>
        {users.map((user, index) => (
          <div key={user.id} className={styles.listItem}>
            <Link href={`/Users/${user.id}`}>
              <div>
                <Image
                  src={'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}
                  alt={`Image ${index + 1}`}
                  layout="intrinsic"
                  width={50}
                  height={50}
                  className=' rounded-full mb-3'
                />
              </div>
              <h6>{user.name}</h6>
              <h6>{user.username}</h6>
              <h6>{user.email}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
