import {useState, useEffect} from "react"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "faulure"
}

function useRequestDelay(delayTime=1000, initialData=[]){
    const [data, setData] = useState([]);
    const [error, setError] = useState("")
    const [status, setStatus] = useState(REQUEST_STATUS.LOADING)

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function makeDelay(){
            try{
                await delay(delayTime);
                setStatus(REQUEST_STATUS.SUCCESS)
                setData(initialData)   
            } catch (e){
                setStatus(REQUEST_STATUS.FAILURE)
                setError(e)
            }
        }
        makeDelay();
    }, [])

    function updateRecord(recordUpdated, doneCallback){
        const originalRecords = [...data];
        const newRecords = data.map(function(rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        async function delayFunction(){
            try{
                setData(newRecords);
                await delay(delayTime);
                doneCallback();
            } catch(error){
                setData(originalRecords);
                console.log("error: ", error);
            }
        }
        delayFunction();
    }

    return {data, status, error, updateRecord};
}

export default useRequestDelay;