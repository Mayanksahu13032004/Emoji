import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Flag() {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://emoji-api.com/categories/flags?access_key=298a43173d335457959e6be2a609eafbed0cb99e')
      .then(response => {
        setEmojis(response.data); // Assuming API returns an array of emoji objects
      })
      .catch(error => console.error(error));
  }, []);

  // Filter emojis based on search term
  const filteredEmojis = emojis.filter(emoji => 
    emoji.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to navigate to emoji detail page
  const goToEmojiDetail = (emoji) => {  
    navigate(`/emoji/${emoji.slug}`, { state: { character: emoji.character } });
  };

  // Function to copy emoji to clipboard
  const copyToClipboard = (character) => {
    navigator.clipboard.writeText(character)
      .then(() => alert('Emoji copied to clipboard!'))
      .catch(err => console.error('Failed to copy emoji:', err));
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
            key={emoji.slug} 
            className="cursor-pointer hover:bg-gray-200 p-2 rounded"
          >
            <p className="text-xs mb-1">{emoji.slug}</p>
            <p 
              onClick={() => goToEmojiDetail(emoji)} 
              title={`Go to ${emoji.slug} details`}
              className="cursor-pointer text-3xl"
            >
              {emoji.character}
            </p>
            <button 
              onClick={() => copyToClipboard(emoji.character)} 
              className="bg-blue-500 text-white p-1 mt-2 rounded"
            >
              Copy
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Flag;
