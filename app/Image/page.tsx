// pages/gallery.tsx
import Image from 'next/image';
import styles from './gallery.module.css';

const imageUrls = [
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
  'https://images2.alphacoders.com/130/1309622.jpeg',
];

const GalleryPage: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
      {imageUrls.map((url, index) => (
        <div key={index} className={styles.gridItem}>
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={300}
            height={200}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
