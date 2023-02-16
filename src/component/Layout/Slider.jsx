import { useState, useEffect } from "react";
import styles from "./slider.module.css";
const DATA = [
  {
    id: 1,
    imagez: require("../wigPictures/wig-6.webp"),
  },
  {
    id: 2,
    imagez: require("../wigPictures/wig-15.webp"),
  },
  {
    id: 3,
    imagez: require("../wigPictures/wig-19.webp"),
  },
  {
    id: 4,
    imagez: require("../wigPictures/wig-8.webp"),
  },
];
function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (imageIndex >= 3) {
        return setImageIndex(0);
      }
      setImageIndex(imageIndex + 1);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [imageIndex]);

  return (
    <>
      <div className={styles.container}>
        {DATA.filter((item) => Number(item.id) - 1 === imageIndex).map(
          (image) => (
            <div key={image.id} className={styles.images}>
              <img src={image.imagez} alt="" />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Slider;
