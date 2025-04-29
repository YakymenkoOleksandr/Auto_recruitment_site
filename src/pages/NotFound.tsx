import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ThePageDoesNotExist from "../components/ThePageDoesNotExist/ThePageDoesNotExist";
import style from "./NotFound.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={style.wrapperForNotFoundElement}>
      <Header />
      <ThePageDoesNotExist />
      <Footer />
    </div>
  );
};
export default NotFound;
