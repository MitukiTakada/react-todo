import React from 'react'
import {SmallCloseIcon} from "@chakra-ui/icons"


const TaskCardDeleteButton = (props) => {
  const {cardList, setCardList, id} = props;
  const handleDeleteCard = (id) => {
    setCardList(cardList.filter((card) => (
      card.id !== id
    )))
  }
  return (
    <div>
      <SmallCloseIcon  color="red" cursor="pointer" onClick={()=> handleDeleteCard(id)}/>
    </div>
  )
}
export default TaskCardDeleteButton
