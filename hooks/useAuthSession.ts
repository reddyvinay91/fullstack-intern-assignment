import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setToken, clearAuth } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  //  implement the logic here to check user session
  useEffect(() => {
    // Example: Replace with actual logic to check if user session exists
    const checkUserSession = () => {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      if (storedUser && storedToken) {
        dispatch(setUser(JSON.parse(storedUser)));
        dispatch(setToken(storedToken));
      } else {
        dispatch(clearAuth());
      }
    };
    checkUserSession();
    
  }, [dispatch]);
  return user;
};

export default useAuthSession;
