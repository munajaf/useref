import React, {useRef} from 'react';

function App() {
  const initialRef = useRef({});

  const alertMe = () => {
    alert(initialRef.current.value);
  }

  return (
    <>
      <input ref={initialRef}/>
      <button onClick={alertMe}>Click</button>
    </>
  );
}

export default App;
