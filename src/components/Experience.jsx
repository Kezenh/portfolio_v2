import { useState } from "react";
import { ReactComponent as ChevronDown} from "../assets/icons/chevronDown.svg";
import { ReactComponent as ChevronUp} from "../assets/icons/chevronUp.svg";
import "../styles/experience.css"

function Experience(props) {

    const title = props.title;
    const texts = props.texts;

    const [isVisible, setIsVisible] = useState(false);

    function displayTexts() {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <h3 onClick={displayTexts}>{title} {isVisible ? <ChevronDown className="experienceIcon" />: <ChevronUp className="experienceIcon" />}</h3>
            {isVisible ?
                <>
                    {texts.map((text, index) => 
                        <p key={index}>{text}</p>
                    )}
                </> :
                null
            }
        </>
    )
}

export default Experience