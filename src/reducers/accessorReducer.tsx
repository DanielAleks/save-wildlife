import { ADD_ACCESSOR } from "./types"


interface accessorT {
  id: number
}

const initialState = 0

export default (state = initialState, { type, payload }) => {


  switch (type) {


    case ADD_ACCESSOR:
      return state + 1

    default:
      return state
  }
}

