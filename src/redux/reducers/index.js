const initialState = {
  favourite: {
    list: [],
  },
  joblist:{
    list:[]
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      }
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      }
      case 'SHOW_JOBS_LIST':
      return {
        ...state,
        joblist: {
          list:action.payload ,
        },
      }
    default:
      return state
  }
}

export default mainReducer
