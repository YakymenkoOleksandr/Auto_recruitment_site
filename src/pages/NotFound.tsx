import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ThePageDoesNotExist from "../components/ThePageDoesNotExist/ThePageDoesNotExist";
import style from "./NotFound.module.css";

const NotFound: React.FC = () => {

    return (
        <div className={style.wrapperForNotFoundElement}>
            <Header />
            <ThePageDoesNotExist />
            <Footer />
        </div>
    )
}
export default NotFound;