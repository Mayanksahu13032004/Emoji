import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FoodDrink() {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api.github.com/emojis')
      .then(response => {
        const emojisArray = Object.entries(response.data).map(([name, url]) => ({
          name,
          url
        }));
        console.log(response.data);
        
        setEmojis(emojisArray);
      })
      .catch(error => console.error(error));
  }, []);

  // Filter emojis based on search term
  const filteredEmojis = emojis.filter(emoji => 
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to navigate to emoji detail page
  const goToEmojiDetail = (emoji) => {  
    // navigate(`/EmojiDetail`);
    navigate(`/emoji/${emoji.name}`, { state: { url: emoji.url } });
  };

  return (
    <div>
      <h2>Emoji Search</h2>
      <input 
        type="text" 
        placeholder="Search emojis..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border p-2 mb-4 w-full"
      />
      
      
      
      <div className="flex flex-wrap gap-4 font-bold text-2xl">
        {filteredEmojis.map((emoji) => (
          <span 
            key={emoji.name} 
            title={`Go to ${emoji.name} details`}
            onClick={() => goToEmojiDetail(emoji)}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded"
          >
            <p className="text-xs mb-1">{emoji.name}</p>
            <img src={emoji.url} alt={emoji.name} width="32" height="32" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default FoodDrink;
