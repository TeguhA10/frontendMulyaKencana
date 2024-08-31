import styles from './index.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  });
  const data: Post[] = await response.json();
  return data.slice(0, 10);
};

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Articles</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.body}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
