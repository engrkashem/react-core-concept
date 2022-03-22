import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  /*  const products = [
     { name: 'Laptop', price: '140000' },
     { name: 'Cell Phone', price: '90000' },
     { name: 'Watch', price: '32000' },
     { name: 'Sunglass', price: '12000' },
     { name: 'Shoe', price: '8000' },
   ] */
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Users></Users>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
  )
}
function User(props) {
  return (
    <div className='products'>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Incease</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

/* function App() {
  const products = [
    { name: 'Laptop', price: '140000' },
    { name: 'Cell Phone', price: '90000' },
    { name: 'Watch', price: '32000' },
    { name: 'Sunglass', price: '12000' },
    { name: 'Shoe', price: '8000' },
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
} */

function Product(props) {
  return (
    <div className='products'>
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
