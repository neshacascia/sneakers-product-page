import { createContext, useState, useEffect } from 'react';

import { sneakersImagesArr } from '../pages/sneakersImagesData';

const Context = createContext();

function ContextProvider(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sneakersImage, setSneakersImage] = useState(
    sneakersImagesArr[activeIndex]
  );

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
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
