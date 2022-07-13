 const DeleteCard = () => {
  const useDeleteCard = (props) => {
    const {cardList, setCardList, id } = props;
    setCardList(cardList.filter((card) => (
      card.id !== id
    )))
  }
  return {useDeleteCard}
}