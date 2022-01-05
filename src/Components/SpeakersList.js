import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay, { REQUEST_STATUS }  from "../Hooks/useRequestDelay";
import {data} from "../../SpeakerData"


const SpeakersList = () => {
    const {data: speakersData, status, error, updateRecord} = useRequestDelay(2000, data);

    if(status === REQUEST_STATUS.FAILURE) return <div>Error... {error}</div>

    return (
        <div className="container speaker-list">
        <div className="row">
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={status === REQUEST_STATUS.SUCCESS}
            >
                {speakersData.map(function (speaker){
                    return (
                        <Speaker key={speaker.id}  speaker={speaker}  
                        onFavoriteToggle={(doneCallback) => updateRecord(
                            {
                                ...speaker,
                                favorite: !speaker.favorite
                            }, doneCallback) }/>
                        )
                    })}
            </ReactPlaceholder>
        </div>      
    </div>
    )
}

export default SpeakersList;