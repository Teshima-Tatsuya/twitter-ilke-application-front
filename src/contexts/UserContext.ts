import { createContext } from 'react';
import { UserInterface } from '../interfaces/UserInterface';

interface UserContextType {
    user: UserInterface | null;
    loading: boolean;
    error: Error | null;
    updateUser: (user: UserInterface) => void;
}
  
const UserContext = createContext<UserContextType>({
    user: null,
    loading: true,
    error: null,
    updateUser: () => {},
});

export default UserContext;