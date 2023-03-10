import { createContext, useState, useEffect } from 'react';

import { sneakersImagesArr } from '../sneakersData';

const Context = createContext();

function ContextProvider(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [imageGallery, setImageGallery] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sneakersImage, setSneakersImage] = useState(
    sneakersImagesArr[activeIndex]
  );

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setSneakersImage(sneakersImagesArr[activeIndex]);
  }, [activeIndex]);

  function nextImage() {
    setActiveIndex(prevState => prevState + 1);
  }

  function prevImage() {
    setActiveIndex(prevState => prevState - 1);
  }

  function openModal() {
    setToggleMenu(true);
  }

  function closeModal() {
    setToggleMenu(false);
    setIsCartOpen(false);
  }

  function changeMainImage(e) {
    setSneakersImage(sneakersImagesArr[e]);
  }

  function openImageModal() {
    setImageGallery(true);
  }

  function closeImageModal() {
    setImageGallery(false);
  }

  function openCart() {
    setIsCartOpen(true);
  }

  if (activeIndex < 0) {
    setActiveIndex(sneakersImagesArr.length - 1);
  }

  if (activeIndex > sneakersImagesArr.length - 1) {
    setActiveIndex(0);
  }

  return (
    <Context.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        openModal,
        closeModal,
        activeIndex,
        sneakersImage,
        nextImage,
        prevImage,
        changeMainImage,
        imageGallery,
        openImageModal,
        closeImageModal,
        isCartOpen,
        openCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
