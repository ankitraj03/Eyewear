import React from 'react';
import Profile from './Profile';
import WishlistItems from './WishlistItems';

function Wishlist() {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-[25%] bg-gray-100 items-center">
          <Profile />
        </div>
        <div className="w-[75%] bg-gray-200">
          <WishlistItems />
        </div>
      </div>
    </>

  )
}

export default Wishlist