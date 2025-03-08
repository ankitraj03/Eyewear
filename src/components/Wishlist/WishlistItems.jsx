import React, { useEffect, useState } from "react";

function WishlistItems() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
      const userWishlistKey = `wishlist_${username}`;
      const storedWishlist = JSON.parse(localStorage.getItem(userWishlistKey)) || [];
      setWishlist(storedWishlist);
    }
  }, []);

  const removeFromWishlist = (title) => {
    const username = localStorage.getItem("loggedInUser");
    if (!username) return;

    const userWishlistKey = `wishlist_${username}`;
    let storedWishlist = JSON.parse(localStorage.getItem(userWishlistKey)) || [];

    storedWishlist = storedWishlist.filter((item) => item.title !== title);
    localStorage.setItem(userWishlistKey, JSON.stringify(storedWishlist));
    setWishlist(storedWishlist);
  };

  return (
    <div className="p-4 m-3 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">My Wishlist ({wishlist.length})</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index} className="flex bg-gray-100 p-4 m-3 rounded-lg items-center">
            <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-green-600 text-lg font-semibold">{item.price}</p>
              <p className="text-gray-400 text-sm line-through">{item.original}</p>
              <button
                onClick={() => removeFromWishlist(item.title)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default WishlistItems;
