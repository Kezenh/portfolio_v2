import Experience from "./Experience"

function Career() {
    return (
        <>
            <h2>PARCOURS :</h2>
            <Experience title="Formation" texts={["Après une année de licence en informatique, j'ai préféré me tourner vers une formation plus concrète, via des projets professionnalisants.", "Cette formation m'a permis d'avoir de bonnes bases en développement web notamment en HTML, CSS, JavaScript et React."]} />
            <Experience title="Acelys" texts={["J'ai ensuite travaillé pendant une année chez Acelys pour concevoir des solutions sur mesure qui répondent aux besoins uniques de nos clients.", "Pour mon premier client, je devais m'occuper de leur système de gestion électronique des documents (GED). Je travaillais par tickets Jira, distribués entre les différents membres de l'équipe en fonction de leurs compétences. Ce projet m'a donné de grandes connaissances en SQL (DB2).", "Pour mon deuxième client, j'ai mis en place un système de courriers qui se créaient à partir d'une base de données (ex : un bail qui remplit automatiquement les données du bailleur social, du locataire, etc.). Je travaillais par lot de courriers à réaliser. Ce projet m'a permis d'affûter mes compétences en HTML et CSS, et m'a donné des bases en gestion de projet."]} />
            <Experience title="Et depuis" texts={["J'ai depuis continué à me former et j'ai appris à utiliser Node.js, j'ai également affûté  mes compétences  en PHP et en Symfony. Tout cela dans le but d'être le plus complet possible, pour atteindre mes objectifs."]} />
        </>
    )
}

export default Career