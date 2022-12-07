export default function SentimentAnalysis(props) {
    return (
        <div className="rating">
            <h5>{props.title}</h5>
            <p>{props.number}</p>
        </div>
    )
}