import { useState } from 'react';
import { IconLeftRow, IconRighRow } from '../../icons/others';
import styles from './verticalSlider.module.css';

interface VerticalImageSliderProps {
  images: Array<{ src: string; notes: string[] }>;
  alt: string;
  onImageChange: (index: number) => void;
}

export function VerticalImageSlider({ images, alt, onImageChange }: VerticalImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (newIndex: number) => {
    setCurrentIndex(newIndex);
    onImageChange(newIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Main image */}
      <div className={styles.mainImageContainer}>
        <img 
          src={images[currentIndex].src} 
          alt={alt} 
          className={styles.mainImage}
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className={styles.thumbnailStrip}>
          <button 
            onClick={() => {
              const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
              changeImage(prevIndex);
            }}
            className={styles.navigationButton}
            aria-label="Previous image"
          >
            <IconLeftRow className={styles.navigationIcon} />
          </button>
          
          <div className={styles.thumbnailScroll}>
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`${styles.thumbnailButton} ${currentIndex === index ? styles.thumbnailButtonActive : ''}`}
              >
                <img 
                  src={img.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>

          <button 
            onClick={() => {
              const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
              changeImage(nextIndex);
            }}
            className={styles.navigationButton}
            aria-label="Next image"
          >
            <IconRighRow className={styles.navigationIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
