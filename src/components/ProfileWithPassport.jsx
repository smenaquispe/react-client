import { useAuth } from "../providers/AuthProvider";

export const ProfileWithPassport = () => {
    
    const { user } = useAuth();
    
    return (
    <div>
      <p>Profile with Passport</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};