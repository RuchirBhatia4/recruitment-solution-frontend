import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Search from "./components/search";
import Search2 from "./components/search2";
import { useEffect } from "react";

function App() {
  // Main application component with routing and navigation handling
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Recruitment Solution - Home";
        metaDescription = "Modern recruitment and hiring management platform";
        break;
      case "/signup":
        title = "Sign Up - Recruitment Solution";
        metaDescription = "Create your account to get started";
        break;
      case "/login":
        title = "Login - Recruitment Solution";
        metaDescription = "Sign in to your account";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search2" element={<Search2 />} />
    </Routes>
  );
}
export default App;
