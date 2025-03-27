import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import RouteComponent from "./Routes";

export default function App() {
  
  interface IUserData {
    name: string;
    uuid: string;
  }

  const store = createStore<IUserData>({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
    //debug: true,
  });

  return (
    <>
      <AuthProvider store={store}>
        <RouteComponent />
      </AuthProvider>
    </>
  );
}
