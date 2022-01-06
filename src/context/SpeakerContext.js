import {createContext} from "react";

export const SpeakerContext = createContext();

function SpeakerProvider(
    {
        speaker,
        updateRecord,
        children
    }
) {
    return(
        <SpeakerContext.Provider value={
            {
                speaker,
                updateRecord
            }
        }>
            {children}
        </SpeakerContext.Provider>
    )
}

export default SpeakerProvider