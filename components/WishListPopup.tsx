import React from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

interface WishlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistPopup: React.FC<WishlistPopupProps> = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto mx-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Wishlist</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="space-y-4">
            {wishlist.map((item) => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.images?.[0] || '/default-placeholder.png'} // Replace with a valid placeholder URL
                  alt={item.name || 'Wishlist Item'}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body // Render the popup in the `body` of the document
  );
};

export default WishlistPopup;