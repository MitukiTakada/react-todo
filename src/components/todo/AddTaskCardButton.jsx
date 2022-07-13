import { v4 as uuid } from 'uuid';
import React from 'react'

const AddTaskCardButton = (props) => {
  const {cardList, setCardList} = props;
  const handleAddCard = () => {
    const cardId = uuid();
    setCardList([
      ...cardList,
      {
        id: cardId,
        draggableId: `card-${cardId}`
      }
    ])
  }
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={handleAddCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
