export default function Reviews(props) {
    return (
        <div className="rating">
            <h3>{props.title}</h3>
            <p>{props.number}</p>
        </div>
    )
}