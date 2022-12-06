export default function SentimentAnalysis(props) {
    return (
        <div className="rating">
            <h3>{props.title}</h3>
            <p>{props.number}</p>
        </div>
    )
}