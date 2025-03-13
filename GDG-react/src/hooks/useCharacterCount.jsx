import { useReducer, useCallback } from "react";

const initialState = { text: "", count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { text: action.payload, count: action.payload.length };
    default:
      return state;
  }
};

const useCharacterCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setText = useCallback((text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  }, []);

  return { text: state.text, count: state.count, setText };
};

export default useCharacterCount;
