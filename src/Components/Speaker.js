import {useState, useContext} from "react"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

const Session = ({title, room}) => {
    return (
      <span className="session w-100">
        {title} <strong> Room: {room}</strong>
      </span>
    );
  }
  
  const Sessions = ({sessions}) => {
    return (
      <div className="sessionBox card h-250">
        <Session title={sessions[0].title} room={sessions[0].room.name} />
      </div>
    );
  }
  
  const SpeakerImage = ({id, first, last}) => {
    return (
      <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
        <img
          className="contain-fir"
          src={`/images/speaker-${id}.jpg`}
          width="200"
          alt={`${first} ${last}`}
          />
      </div>
    );
  }

  const Favorite = ({favorite, onFavoriteToggle}) => {

    const [inTransition, setInTransation] = useState(false);

    function doneCallback( ){
      setInTransation(false);
      console.log("done callback:")
    }

    return (
      <div className="action padB1">
        <span onClick={() => {
            setInTransation(true);
            onFavoriteToggle(doneCallback)
          }}>
          <i className={favorite?"fa fa-star orange": "fa fa-star-o orange"}/>
        {" "} Favorite {" "}
        {inTransition && <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}
        </span>
      </div>
    )
  }
  
  const SpeakerDemographics = ({speaker, onFavoriteToggle}) => {
    const {first, last, bio, company, twitterHandle, favorite} = speaker;
    return (
      <div className="speaker-info">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="text-truncate w-200">
            {first} {last}
          </h3>
        </div>
        <Favorite favorite={favorite} onFavoriteToggle={onFavoriteToggle}/>
        <div>
          <p className="cart-descriptoin">{bio}</p>
          <div className="social d-flex flex-row mt-4">
            <div className="company">
              <h5>company</h5> 
              <h6>{company}</h6>
            </div>
            <div className="twitter">
              <h5>Twitter</h5>
              <h6>{twitterHandle}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const Speaker = ({speaker, onFavoriteToggle}) => {
    const {id, first, last, sessions} = speaker;
    const {showSessions} = useContext(SpeakerFilterContext)


    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last}/>
        <SpeakerDemographics speaker={speaker} onFavoriteToggle={onFavoriteToggle} />
      </div>
      {showSessions && <Sessions sessions={sessions} />}
    </div>
    )
  }

  export default Speaker;