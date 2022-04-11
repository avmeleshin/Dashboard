import Header from "../header/Header";
import Tabs from "../tabs/Tabs";
import './app.scss';

const App = () => {
    return (
        <div className="dashboard">
            <Header />
            <Tabs />
        </div>
    );
}

export default App;
