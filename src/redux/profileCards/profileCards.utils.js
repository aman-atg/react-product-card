export const addCardToProfileCards = (profileCards, card) => {
  return profileCards.push(card);
};

export const updateCardInProfileCards = (profileCards, updatedCard) => {
  return profileCards.map(card =>
    card.id === updatedCard.id ? { ...card, ...updatedCard } : card
  );
};

export const deleteCardFromProfileCards = (profileCards, id) => {
  return profileCards.filter(card => card.id !== id);
};
