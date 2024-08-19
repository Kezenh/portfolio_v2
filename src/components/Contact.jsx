import "../styles/contact.css"
import { ReactComponent as Phone} from "../assets/icons/phone.svg";
import { ReactComponent as Mail} from "../assets/icons/mail.svg";
import { ReactComponent as House} from "../assets/icons/house.svg";
import { ReactComponent as Linkedin} from "../assets/icons/linkedin.svg";
import { ReactComponent as Github} from "../assets/icons/github.svg";

function Contact() {
    return (
        <div className="contact">
            <h2 className="contactH2">Me contacter</h2>
            <div className="line"></div>
            <ul>
                <li><Phone className="contactIcon" />06 15 03 64 40</li>
                <li><Mail className="contactIcon" />quentin425@hotmail.fr</li>
                <li><House className="contactIcon" />35 route d'Angouleme, 16150 Chabanais</li>
                <a href="https://www.linkedin.com/in/quentin-rampteau/"><li><Linkedin className="contactIcon" />linkedin.com/in/quentin-rampteau/</li></a>
                <a href="https://github.com/Kezenh"><li><Github className="contactIcon" />github.com/Kezenh</li></a>
            </ul>
        </div>
    )
}

export default Contact