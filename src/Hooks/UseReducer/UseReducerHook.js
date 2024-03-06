import React, { useReducer } from 'react';


// Reducer function for managing state
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};


const ExampleComponent = () => {

  // useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [stateTwo, dispatchTwo] = useReducer(reducer, { count: 0 });

   return (
    <div>

      <p>useReducer: Count is {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      <p>useReducer2: Count is {stateTwo.count}</p>
      <button onClick={() => dispatchTwo({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatchTwo({ type: 'decrement' })}>Decrement</button>

</div>
  );
};

export default ExampleComponent;
