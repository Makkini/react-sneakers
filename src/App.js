import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
const cards = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/0.jpg',
  },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/1.jpg' },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 19900,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Puma Aka Boku Future Rider',
    price: 17999,
    imageUrl: '/img/sneakers/3.jpg',
  },
];
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/lupa.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          {cards.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
