import React, { useState } from "react";
import {useEffect} from "react";
import axios from "axios";
import EventCard from "./EventCard";
import "../Style/dashboard.css";

const Dashboard = () => {
    const [info, setInfo] = useState([])

    const getData = async () => {
        await axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=austin&apikey=PmDhYDQyNilNmA5H7gb16M2NPuR6pyFP&sort=date,asc&size=100")
        .then( (res) => {
        setInfo(res.data._embedded.events)
        

        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData();

    },[])

console.log(info);
    return (
        <div className="Dashboard" >
            <h1> ATX Show Spot </h1>
            <div className="parentContainer" >
            {info.map((event) => {
                const newDate = new Date(event.dates.start.localDate).toString().slice(0,15)
                console.log(newDate)
                const newTime = new Date(event.dates.start.dateTime)
               // console.log(newTime.toLocaleTimeString("en-US"))
               return(
                <div className="eventContainer" key={event.id} >
                <p> {newDate} </p>
                <div> <img src={event.images[0].url} alt={event.name} className="eventPic" /> 
                     </div>
                <p className= "eventInfo" > {event.name} at {event._embedded.venues[0].name}, doors at {newTime.toLocaleTimeString("en-US").slice(0, -6) + newTime.toLocaleTimeString("en-US").slice(-2)} </p>
                <button> <a href={event.url}> More Info </a> </button>
                </div>

               )
                

            })}
            </div>
        </div>
    )
}

//{info.map(event => <EventCard event={event}/>)}
export default Dashboard;