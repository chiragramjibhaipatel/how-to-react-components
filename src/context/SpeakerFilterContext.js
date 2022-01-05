import { createContext } from "react";
import useSpeakerFilter from "../Hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext()

function SpeakerFilterProvider(
        {
            startingShowSession, 
            startingEventYear = "2019", 
            children
        }
    ) {

    const {
        showSessions, 
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS
    } = useSpeakerFilter(
        startingShowSession, 
        startingEventYear
        );

    return(
        <SpeakerFilterContext.Provider value={{showSessions, setShowSessions}}>
            {children}
        </SpeakerFilterContext.Provider>
    )

}

export default SpeakerFilterProvider;