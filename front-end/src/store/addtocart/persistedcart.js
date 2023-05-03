import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartConfig={
  key:'cart',
  storage:AsyncStorage,
  whilelist:['items']
}
const cartReducer = (state = { items: [] }, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, items: [...state.items, action.payload] };
      case 'REMOVE_ITEM':
        return { ...state, items: state.items.filter(item => item.id !== action.payload) };
      default:
        return state;
    }
  };
  
  const persistedCartReducer = persistReducer(cartConfig, cartReducer);
  export default persistedCartReducer;
  