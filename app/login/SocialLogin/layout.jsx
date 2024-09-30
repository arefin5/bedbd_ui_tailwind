import { AuthContextProvider } from "../../context/AuthContext";

export default function Layout({ children, session }) {
  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
  );
}