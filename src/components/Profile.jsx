const Profile = ({user}) => {
  return (
    <>
      {user?.picture && (
        <img
          src={user.picture}
          alt="User Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
        />
      )}
      
      <p className="text-xl text-gray-700 font-semibold mb-2">{user?.name}</p>
      <p className="text-md text-gray-600 mb-6">{user?.email}</p>
    </>
  );
};

export default Profile;