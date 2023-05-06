import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  
  React.useEffect(()=>{
    fetch('https://645508b4f803f34576386a0e.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) =>{
    setCartItems(prev=>[...prev, obj])
  }
  return (
    <div className="wrapper clear">
      {cartOpen && <Drawer items={cartItems} onClose={() => setCartOpen(false)} />}
      <Header onClickCart={() => setCartOpen(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className='ml-35'>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/lupa.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj)=>onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
