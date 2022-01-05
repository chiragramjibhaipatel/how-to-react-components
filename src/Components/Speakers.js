import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList"
import SpeakerFilterProvider, {SpeakerFilterContext} from "../context/SpeakerFilterContext";

const Speakers = () => {
    
    return (
        <SpeakerFilterProvider startingShowSession={true}>
            <SpeakersToolbar />
            <SpeakersList  />
        </SpeakerFilterProvider>
    )
}

export default Speakers;