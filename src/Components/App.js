import { data } from "../../SpeakerData";
import Layout from "./Layout";
import Speakers from "./Speakers";
import Header from "./Header";

const App = () => {


    return (
        <Layout startTheme={"light"}>
            <>
                <Header/>
                <Speakers data={data}/>
            </>
        </Layout>
    );
}

export default App; 