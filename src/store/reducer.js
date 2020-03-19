const initialValues = {
  counter: 0
};

export const reducer = (state = initialValues, action) => {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1
      };
    case "SUB":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
