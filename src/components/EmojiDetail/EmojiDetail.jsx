import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EmojiDetail() {
  const { name } = useParams();
  const location = useLocation();
  const { url } = location.state || {};
  

  return (
    <div>
      <h2 className='text-2xl font-bold'>Emoji Detail</h2>
      {url ? (
        <div className='flex py-5 px-5'>
          
          <img src={url} alt={name} width="64" height="64" />
          <p className='text-2xl ml-20 font-bold'>Name: {name}</p>
          <div className='mt-10 -ml-32'>
        <button className='bg-slate-200'>Favourite</button>
        </div>
        </div>
      ) : (
        <p>No emoji data available</p>
      )}
    </div>
  );
}

export default EmojiDetail;
