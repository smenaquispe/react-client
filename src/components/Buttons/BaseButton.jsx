const colorClasses = {
  blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 text-white',
  green: 'bg-green-600 hover:bg-green-700 focus:ring-green-300 text-white',
  gray: 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-300 text-black',
  red: 'bg-red-600 hover:bg-red-700 focus:ring-red-300 text-white',
};

const BaseButton = ({ children, onClick, color = 'blue' }) => {
  const baseClasses = `w-full py-3 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition`;
  const selectedColorClasses = colorClasses[color] || colorClasses.blue;

  return (
    <button
      className={`${baseClasses} ${selectedColorClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;
