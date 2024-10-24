
const colorClasses = {
  blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 text-white',
  red: 'bg-red-500 hover:bg-red-600 focus:ring-red-300 text-white',
  green: 'bg-green-500 hover:bg-green-600 focus:ring-green-300 text-white',
  yellow: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 text-black',
};

const BaseButton = ({ children, onClick, color = 'blue' }) => {
  const baseClasses = `px-4 py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition`;
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
