import './App.css';
import Item from './components/Item';
import { useState, useEffect } from 'react';

function App() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        const data = await response.json();
        setAllItems(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchItems();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-4xl font-bold'>My E-commerce Site</h1>
        <div className='flex justify-center flex-wrap mt-8'>
          {allItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
