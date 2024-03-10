import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='main-container'>
      <h1 className='header'>Brewery Explorer</h1>
      <input
        type="search"
        placeholder="Search for beers..."
        value={searchTerm}
        onChange={handleSearch}
        className='searchInput'
      />
      <div className='main-container--content'>
        {filteredBeers.map((beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
