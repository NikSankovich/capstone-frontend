const EventCard = (props) => {
//console.log(new Date(props.event.dates.start.localDate).toString().slice(0,15))

const newDate = new Date(props.event.dates.start.localDate).toString().slice(0,15)
    return (
        <div>
            <p> {newDate} - {props.event.name} at {props.event._embedded.venues[0].name}, doors at {props.event.dates.start.localTime} </p>
        </div>
    )
}


//{props._embedded.venues[0].name}</p>
export default EventCard;