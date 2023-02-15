import ShopSection from "./Shop";
import classes from "./shop.module.css";

const SHOP_DATA = [
  {
    id: 1,
    imagez: require("../wigPictures/wig-1.png"),
    title: " Double Draw 64inch, Black",
    price: 350,
    formerPrice: 400,
  },
  {
    id: 2,
    imagez: require("../wigPictures/wig-2.webp"),
    title: " Double Draw 64inch, Transparent",
    price: 380,
    formerPrice: 420,
  },
  {
    id: 3,
    imagez: require("../wigPictures/wig-3.webp"),
    title: " Double Draw 64inch, Burgundy",
    price: 330,
    formerPrice: 380,
  },
  {
    id: 4,
    imagez: require("../wigPictures/wig-4.png"),
    title: "Brazilian Hair with Frontal 14inch, Brown",
    price: 180,
    formerPrice: 230,
  },
  {
    id: 5,
    imagez: require("../wigPictures/wig-5.webp"),
    title: "Natural Draw 18inch, White",
    price: 190,
    formerPrice: 240,
  },
  {
    id: 6,
    imagez: require("../wigPictures/wig-7.webp"),
    title: " Curly Draw 18inch, Brown",
    price: 270,
    formerPrice: 320,
  },
  {
    id: 7,
    imagez: require("../wigPictures/wig-9.webp"),
    title: " Double Draw 64inch, Mixed-Colour",
    price: 350,
    formerPrice: 400,
  },
  {
    id: 8,
    imagez: require("../wigPictures/wig-10.webp"),
    title: " Peruvian Hair with Frontal 12inch, Grey",
    price: 180,
    formerPrice: 230,
  },
  {
    id: 9,
    imagez: require("../wigPictures/wig-11.webp"),
    title: " Full Draw 22inch, Brown",
    price: 290,
    formerPrice: 340,
  },
  {
    id: 10,
    imagez: require("../wigPictures/wig-12.webp"),
    title: " Full Draw 22inch, Brown",
    price: 310,
    formerPrice: 360,
  },
  {
    id: 11,
    imagez: require("../wigPictures/wig-13.webp"),
    title: " Nigerian Full Draw 12inch, Brown",
    price: 270,
    formerPrice: 320,
  },
  {
    id: 12,
    imagez: require("../wigPictures/wig-14.webp"),
    title: " Curly wig 18inch, Brown",
    price: 350,
    formerPrice: 400,
  },
  {
    id: 13,
    imagez: require("../wigPictures/wig-16.webp"),
    title: " Annointed Curly Hair 22inch, Burgundy",
    price: 400,
    formerPrice: 450,
  },
  {
    id: 14,
    imagez: require("../wigPictures/wig-17.webp"),
    title: " Special Edition Single Draw, Pink",
    price: 200,
    formerPrice: 250,
  },
  {
    id: 15,
    imagez: require("../wigPictures/wig-18.webp"),
    title: " Bone Straight 22inch, Brown",
    price: 350,
    formerPrice: 400,
  },
  {
    id: 16,
    imagez: require("../wigPictures/wig-20.webp"),
    title: " Nigerian Original Bone Straight 22inch, Black",
    price: 400,
    formerPrice: 450,
  },
  {
    id: 17,
    imagez: require("../wigPictures/wig-21.webp"),
    title: " Full Draw 22inch, White",
    price: 350,
    formerPrice: 400,
  },
];
function ShopItem() {
  return (
    <div>
      <h3> Latest Arrival</h3>
      <div className={classes["shop-container"]}>
        {SHOP_DATA.map((shopData) => {
          return (
            <div key={shopData.id}>
              <ShopSection
                shop={{
                  id: shopData.id,
                  title: shopData.title,
                  formerPrice: shopData.formerPrice,
                  imagez: shopData.imagez,
                  price: shopData.price,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopItem;
