import { useState } from "react"
import reservia from "../assets/images/reservia.png"
import hrnet from "../assets/images/hrnet.png"
import kasa from "../assets/images/kasa.png"
import lespetitsplats from "../assets/images/lespetitsplats.png"
import ohmyfood from "../assets/images/ohmyfood.png"
import vision from "../assets/images/vision.png"
import { ReactComponent as ChevronRight} from "../assets/icons/chevronRight.svg";
import { ReactComponent as ChevronLeft} from "../assets/icons/chevronLeft.svg";
import "../styles/projectsGallery.css"

function ProjectsGallery() {

    const [galleryIndex, setGalleryIndex] = useState(0);

    const projects = [
        {
            name: "Reservia",
            image: reservia,
            url: "https://kezenh.github.io/QuentinRampteau_2_02092021/",
            description: "Reservia est une vitrine en ligne dédiée à la location de logements pour des vacances. C'est seulement de la pure intégration, mais j'en suis très fier, étant donné que c'est le premier site que j'ai développé. J'ai utilisé seulement du HTML/CSS."
        },
        {
            name: "Ohmyfood",
            image: ohmyfood,
            url: "https://kezenh.github.io/QuentinRampteau_3_02092021/",
            description: "Ohmyfood représente une plateforme web élégante offrant aux utilisateurs la possibilité d'explorer les restaurants disponibles dans leur ville. En naviguant sur ce site, les visiteurs peuvent consulter les menus des restaurants répertoriés et même passer des commandes en ligne, offrant ainsi une expérience culinaire pratique et immersive. Comme vous pouvez le voir avec le chargement (moche, on peut le dire), c'est ici que j'ai appris à faire des animations CSS."
        },
        {
            name: "Les petits plats",
            image: lespetitsplats,
            url: "https://kezenh.github.io/QuentinRampteau_7_02092021/",
            description: "Les petits plats est une plateforme sophistiquée dédiée à l'exploration culinaire, offrant un accès convivial à une riche base de données de recettes. Les utilisateurs peuvent aisément parcourir et découvrir des recettes en utilisant une barre de recherche intuitive, tout en ayant la possibilité de raffiner leurs résultats en spécifiant les ustensiles, les ingrédients ou les appareils disponibles. Je trouve ce projet plutôt cool, et je suis content de la logique mise en place pour la barre de recherche."
        },
        {
            name: "Kasa",
            image: kasa,
            url: "https://kezenh.github.io/P11/",
            description: "Kasa est un projet de développement web axé sur le secteur immobilier, offrant une interface sophistiquée permettant aux utilisateurs de parcourir une base de données complète de logements. En mettant en valeur des galeries d'images raffinées et des descriptions détaillées pour chaque appartement, ce site propose une expérience immersive et convaincante. Ce site m'a permis d'apprendre à intégrer des bases de données à mes appliactions, pour qu'elles se gênèrent dynamiquement."
        },
        {
            name: "HRnet",
            image: hrnet,
            url: "https://kezenh.github.io/P14/",
            description: "HRnet représente une solution professionnelle conçue pour simplifier la gestion des ressources humaines au sein des entreprises. Cet outil offre aux professionnels des RH la possibilité de saisir efficacement les informations des nouveaux employés dans une base de données sécurisée. Ce n'est pas un site très attrayant visuellement, mais il m'a appris à ajouter des données en base de données, en récupérant les inputs des utilisateurs."
        },
        {
            name: "Vision",
            image: vision,
            url: "https://kezenh.github.io/vision/",
            description: "Vision représente une plateforme d'entraînement pour League of Legends où les utilisateurs peuvent simuler le placement précis de 'wards', renforçant ainsi leur expertise tactique dans le jeu. C'est le dernier site que j'ai codé, sans modèle, et avec mes idées. J'ai codé en React un système de hitbox, ce qui a été plus compliqué que prévu, mais très satisfaisant une fois terminé. Pour la carte en fond, j'ai dû faire beaucoup (beaucoup) de captures d'écrans."
        }
    ]

    function goLeftOnGallery() {
        if (galleryIndex > 0) {
            setGalleryIndex(galleryIndex - 1);
        } else {
            setGalleryIndex(projects.length - 1);
        }
    }

    function goRightOnGallery() {
        if (galleryIndex === projects.length - 1) {
            setGalleryIndex(0);
        } else {
            setGalleryIndex(galleryIndex + 1);
        }
    }

    return (
        <>
            <h2>MES RÉALISATIONS</h2>
            <a href={projects[galleryIndex].url}><h3 className="projectsGalleryH3">{projects[galleryIndex].name}</h3></a>
            <div className="projectsGallery">
                <ChevronLeft onClick={goLeftOnGallery} className="projectsGalleryIcon" />
                <a href={projects[galleryIndex].url}><img className="projectImg" src={projects[galleryIndex].image} alt={projects[galleryIndex].name} /></a>
                <ChevronRight onClick={goRightOnGallery} className="projectsGalleryIcon" />
            </div>
            <p className="projectsGalleryDescription">{projects[galleryIndex].description}</p>
        </>
    )
}

export default ProjectsGallery