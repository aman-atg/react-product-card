import { profileCardsActionTypes } from "./profileCards.types";

const {
  ADD_PROFILE_CARD,
  UPDATE_PROFILE_CARD,
  DELETE_PROFILE_CARD,
} = profileCardsActionTypes;

export const addProfileCard = card => ({
  type: ADD_PROFILE_CARD,
  payload: card,
});

export const deleteProfileCard = id => ({
  type: DELETE_PROFILE_CARD,
  payload: id,
});

//updatedCardDetails should contain an id
export const updateProfileCard = updatedCardDetails => ({
  type: UPDATE_PROFILE_CARD,
  payload: updatedCardDetails,
});
