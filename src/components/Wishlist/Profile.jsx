import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as faSolidUser,
  faCreditCard,
  faTags,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";

function Profile() {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-lg w-full max-w-sm">
      {/* My Orders */}
      <div className="flex items-center p-3 mb-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <FontAwesomeIcon icon={faSolidUser} className="mr-4 text-blue-500 text-xl" />
        <span className="text-lg font-semibold">My Orders</span>
      </div>

      {/* Account Settings */}
      <div className="text-gray-700 font-semibold mb-3 text-sm border-b pb-1">
        ACCOUNT SETTINGS
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faSolidUser} className="mr-3 text-gray-500" />
          <span>Profile Information</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faTags} className="mr-3 text-gray-500" />
          <span>Manage Addresses</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCreditCard} className="mr-3 text-gray-500" />
          <span>PAN Card Information</span>
        </div>
      </div>

      {/* Payments */}
      <div className="text-gray-700 font-semibold mb-3 text-sm border-b pb-1">
        PAYMENTS
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCreditCard} className="mr-3 text-gray-500" />
          <span>Gift Cards</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCreditCard} className="mr-3 text-gray-500" />
          <span>Saved UPI</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCreditCard} className="mr-3 text-gray-500" />
          <span>Saved Cards</span>
        </div>
      </div>

      {/* My Stuff */}
      <div className="text-gray-700 font-semibold mb-3 text-sm border-b pb-1">
        MY STUFF
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faTags} className="mr-3 text-gray-500" />
          <span>My Coupons</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faHeart} className="mr-3 text-gray-500" />
          <span>My Reviews & Ratings</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faBell} className="mr-3 text-gray-500" />
          <span>All Notifications</span>
        </div>
        <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faHeart} className="mr-3 text-gray-500" />
          <span>My Wishlist</span>
        </div>
      </div>

      {/* Logout */}
      <div className="flex items-center p-3 text-red-500 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-xl" />
        <span className="font-semibold">Logout</span>
      </div>
    </div>
  );
}

export default Profile;
