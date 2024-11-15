import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function smiley() {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://emoji-api.com/categories/smileys-emotion?access_key=298a43173d335457959e6be2a609eafbed0cb99e')
      .then((response) => {
        setEmojis(response.data); // Assuming API returns an array of emoji objects
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch emojis. Please try again later.');
      });
  }, []);

  
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const goToEmojiDetail = (emoji) => {
    navigate(`/emoji/${emoji.slug}`, { state: { url: emoji.character } });

  };

  
  const copyToClipboard = (character) => {
    navigator.clipboard
      .writeText(character)
      .then(() => alert('Emoji copied to clipboard!'))
      .catch((err) => console.error('Failed to copy emoji:', err));
  };

  return (
    <div className="p-4">x``
      <h2 className="text-2xl font-bold mb-4">Emoji Search</h2>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      {error && <p className="text-red-500">{error}</p>}

      {filteredEmojis.length > 0 ? (
        <div className="flex flex-wrap gap-4 font-bold text-2xl">
          {filteredEmojis.map((emoji) => (
            <span
              key={emoji.slug}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded text-center"
            >
              <p className="text-xs mb-1">{emoji.slug}</p>
              <p
                onClick={() => goToEmojiDetail(emoji)}
                title={`Go to ${emoji.slug} details`}
                className="cursor-pointer text-3xl"
              >
                {emoji.character}
              </p>
            
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No emojis found.</p>
      )}
    </div>
  );
}

export default smiley  ;
