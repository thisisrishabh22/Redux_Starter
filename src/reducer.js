import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }

  //   implementation of reducer with if else

  //   if (action.type === "bugAdded") {
  //     return [
  //       ...state,
  //       {
  //         id: ++lastId,
  //         description: action.payload.description,
  //         resolved: false,
  //       },
  //     ];
  //   } else if (action.type === "bugRemoved") {
  //     return state.filter((bug) => bug.id !== action.payload.id);
  //   } else {
  //     return state;
  //   }
}
