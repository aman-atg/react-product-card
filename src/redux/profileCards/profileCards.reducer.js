import { profileCardsActionTypes } from "./profileCards.types";
import {
  addCardToProfileCards,
  updateCardInProfileCards,
  deleteCardFromProfileCards,
} from "./profileCards.utils";

const {
  ADD_PROFILE_CARD,
  UPDATE_PROFILE_CARD,
  DELETE_PROFILE_CARD,
} = profileCardsActionTypes;

const INITIAL_STATE = {
  profileCards: [],
};

const profileCardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROFILE_CARD:
      return {
        ...state,
        profileCards: addCardToProfileCards(state.profileCards, action.payload),
      };
    case UPDATE_PROFILE_CARD:
      return {
        ...state,
        profileCards: updateCardInProfileCards(
          state.profileCards,
          action.payload
        ),
      };

    case DELETE_PROFILE_CARD:
      return {
        ...state,
        profileCards: deleteCardFromProfileCards(
          state.profileCards,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default profileCardsReducer;
