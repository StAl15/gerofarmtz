import {Header} from "./components/Header/Header";
import {LeftPanel} from "./components/LeftPanel/LeftPanel";
import {Content} from "./components/Content/Content/Content";
import {RightPanel} from "./components/RightPanel/RightPanel";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={'w-auto h-screen'}>
            <Header/>
            <div className={'flex overflow-auto justify-between h-[calc(100%-150px)]'}>
                <LeftPanel/>
                <Content/>
                <RightPanel/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
