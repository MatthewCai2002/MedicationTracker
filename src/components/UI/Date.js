function Date(props) {
    const date = props.date.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric"});
    
    return (
        <div>
            {date}
        </div>
    )
}

export default Date;