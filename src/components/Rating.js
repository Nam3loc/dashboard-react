import Reviews from "./Reviews";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";

export default function Rating(props) {
    return (
        <>
            <Reviews title={props.title} number={props.number} />
            {/* <AverageRating title={props.title} number={props.number} />
            <SentimentAnalysis title={props.title} number={props.number} /> */}
        </>
    )
}