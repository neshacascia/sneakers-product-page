import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { sneakersImagesArr } from '../../pages/sneakersData';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

export default function CartItem(props) {
  const cartContext = useContext(CartContext);

  function removeItemFromCartHandler() {
    cartContext.removeItem(props.id);
  }

  function decreaseItemQtyHandler() {
    cartContext.decreaseQty(props.id);
  }

  return (
    <li>
      <div className="flex items-center p-6">
        <img
          src={sneakersImagesArr[0]}
          className="w-cartItem h-cartItem rounded mr-4"
        />

        <div className="font-display font-normal mr-auto">
          <span>{props.name}</span>
          <div>
            <span className="pr-4">{`$${props.price}.00 x ${props.amount}`}</span>
            <span className="font-bold">{`$${
              props.price * props.amount
            }.00`}</span>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faPlus}
          className="text-grey hover:text-orange-500 mr-4"
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faMinus}
          className="text-grey hover:text-orange-500 mr-4"
          onClick={decreaseItemQtyHandler}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-grey hover:text-orange-500"
          onClick={removeItemFromCartHandler}
        ></FontAwesomeIcon>
      </div>
    </li>
  );
}
