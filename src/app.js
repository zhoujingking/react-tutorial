import React, { memo, useEffect, useMemo, useState } from 'react';
import axios from 'axios'

const squareFn = (n) => {
  console.log('squareFn update')
  return n * n;
}
const CompB = ({n}) => {
  console.log('comp B update')
  return (
    <div>comp b - { n * n} </div>
  )
}




function App() {
  console.log('app')

  const [value, setValue] = useState(0);

  const [n, setN] = useState(100);


  const square = useMemo(() => squareFn(n), [n]);
  const CompBMemo = useMemo(() => CompB, []);

  const onClick = () => {
    setValue(val => val + 1);
  }

  const sendRequest = () => {
    // axios.post('/api/user', {
    //   name: 'godking',
    //   age: 10
    // })

    axios.post('/api/login', {
      username: 'godking',
      password: 'pwd'
    })

    // axios.get('/api/user/1', {
    //   headers: {
    //     Authorization: 'test'
    //   }
    // })

    // // axios.delete('/api/user/2')

    // axios.get('/api/book/23jlsf-sfda-asfdasdf', {
    //   headers: {
    //     Authorization: 'test'
    //   }
    // })
  }

  return (
    <div>
      <CompBMemo n={100}/>
      <button onClick={onClick}> click - {square}</button>
      <button onClick={() => setN(n => n + 1)}> change n</button>
      <button onClick={sendRequest} >send request</button>
    </div>
  )
}

export default App;