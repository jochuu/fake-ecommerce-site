import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg m-4 p-4'>
      <div className='flex justify-center items-center rounded-lg'>
        <img
          className='object-contain w-48 h-48'
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{item.title}</div>
        <p className='text-gray-700 text-base line-clamp-2'>
          {item.description}
        </p>
        <p className='text-gray-600 text-sm'>{item.category}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='text-gray-900 text-2xl font-semibold'>
          ${item.price}
        </span>
      </div>
      <p className='px-6 py-2 text-gray-600 text-sm'>
        Rating: {item.rating.rate} ({item.rating.count} reviews)
      </p>
    </div>
  );
};

export default Item;
