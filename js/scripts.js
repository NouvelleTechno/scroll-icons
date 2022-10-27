window.onload = () => {
    // On va chercher les sections du document
    let sections = document.querySelectorAll("section");

    // On va chercher la div "scroll-icons"
    let icons = document.querySelector(".scroll-icons");

    // On initialise l'Intersection Observer
    let observer = new IntersectionObserver(observables => {
        for(let observable of observables){
            if(observable.intersectionRatio > 0.5){
                // Plus de la moitié de la section est visible à l'écran
                // On récupère tous les cercles pour les désactiver
                let circles = document.querySelectorAll(".scroll-icons .circle");

                // On boucle sur les cercles pour les désactiver
                for(let circle of circles){
                    circle.classList.remove("active");
                }

                // On va chercher le cercle correspondant à la section active
                let circle = document.querySelector(`[data-id=${observable.target.id}]`);

                // On active le cercle
                circle.classList.add("active");
            }
        }
    }, {
        threshold: [0.5]
    });

    // On boucle sur les sections
    sections.forEach((section, index) => {
        // On crée une icône
        let icon = document.createElement("div");

        // On lui donne la classe "circle"
        icon.classList.add("circle");

        // On ajoute la classe "active" à la 1ère icône
        if(index === 0){
            icon.classList.add("active");
        }

        // On ajoute le data-id à l'icône
        icon.dataset.id = section.id;

        // On ajoute les icônes dans le document
        icons.appendChild(icon);

        // On ajoute la section à l'Intersection Observer
        observer.observe(section);
    });
}