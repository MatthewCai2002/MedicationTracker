function Time(props) {
    const time = props.date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

    return (
        <div>
            {time}
        </div>
    )
}

export default Time;