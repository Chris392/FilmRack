
const allLinks = document.querySelectorAll('a')
const pageContent = document.getElementById('content')

  window.onload = (event) => {
    console.log('reloaded')
    event.preventDefault()
    onRouteChange()
  }

  window.onunload = (event) => {
    console.log('unloaded')
    event.preventDefault()
  }
  
  

Array.from(allLinks).forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault()
      history.pushState(null, 'Quiz', evt.target.href)
      onRouteChange()
    })
  })
  
  const onRouteChange = () => {
    const pathName = new URL(window.location).pathname

    if (pathName === '/einleitung') {
        const content = `
            <h1> Einleitung </h1>
            <h2> MovieNights </h2>
            <p>Dieser Styleguide stellt die Grundlage für die Website <a href="#"> MovieNights </a> dar. MovieNights ist eine Plattform auf der Filmliebhaber gemeinsam mit ihren Freunden Filmabende organisieren können. </p>
            <h2> Ziele des Styleguides </h2>
            <ul>
                <li>konsitentes Design</li>
                <li>konsistentes und skalierbares CSS</li>
                <li>schneller und effizienter Einsatz von UI-Komponenten</li>
            </ul>
            <h2>Bereiche des Styleguides</h2>
            <h3>Brand Guide</h3>
            <p> Beschreibt Richtlinien bezüglich der Typographie und der Farbgestaltung. </p>
            <h3>CSS-Methodologie</h3>
            <p> Beschreibt wie wir CSS modular, wiederverwendbar und skalierbar gestaltet werden kann. </p>
            <h3>Component Library</h3>
            <p> Zeigt verschiedenste UI-Komponenten mit Code-Beispielen, Visueller Darstellung und Erläuterung der Anwendung  </p>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }



    else if (pathName === '/farben') {
        const content = `
            <h1> Farben </h1>
            <p>
            <span>
            </span>
            </p>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/typographie') {
        const content = `
            <h1> Typographie </h1>
            <h2>Überschriften</h2>
            <p>
                Als überschrift Font wird lato verwendet.
                In SCSS unter $heading-font
            </p>
            <h2>Fliestext</h2>
            <p>
                Als überschrift Font wird Open Sans verwendet.
                In SCSS unter $main-font
            </p>
            <h2>Überschriften</h2>
            <p>
                Als überschrift Font wird Monoton verwendet. Diese Strahlt den alten Kino Vibe aus
                In SCSS unter $brand-font
            </p>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/code') {
        const content = `
            <h1> Code-Konventionen </h1>

            <h2> Datei Struktur </h2>
            <p> Die Dateistruktur orientiert sich an dem 7-1 Pattern.
            Das bedeutet wir haben eine main.scss Datei, welche 
            mehrere andere scss-Datein importiert, welche sich
            in verschiedenen Ordnern befinden. </p>

            <p>Da MovieNights ein eher kleineres Projekt ist, müssen
            nicht alle 7 Folder exakt übernommen werden.
            Nicht verzichtet wird jedoch auf folgende Ordner: </p>

            <h3>base</h3>
            <p>Beinhaltet styles, die für das gesamte Projekt gelten (zB reset.scss, typography.scss)</p>
            <h3>components</h3>
            <p>Beinhaltet Stylesheets für die einzelnen Komponenten</p>
            <h3>layout</h3>
            <p>Beinhaltet Styles für footer/header oder Navigation</p>
            <h3>utils</h3>
            <p>Beinhaltet alle sass variablen und somit auch vordefinierte Farben/Schriften etc.</p>

            <h2>Reset.css</h2>
            <p> Wir verwenden ein Reset CSS von https://meyerweb.com/eric/tools/css/reset/</p>
            <p> Das Reset.css dient dazu, einige vordefinierten Styles der verschiedenen Browser zurückzusetzten,
            um so universalität zu erreichen und selbstständig styles erstellen zu können.</p>

            <h2>box-sizing: border-box</h2>
            <p>Wir verwenden box-sizing: border-box, damit werden bei der Breite und bei der Höhe der Elemente
            die paddings/margins/borders mit berücksichtigt. Das kann das Styling sehr erleichtern.</p>

            <h2>SASS</h2>
            <p>Wir verwenden Sass aufgrund der vielen Vorteile, die Sass bietet. Vorteile sind vor allem
            das erstellen von Variablen und das Verschachteln von Selektoren.</p>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    else if (pathName === '/naming') {
        const content = `
            <h1> Naming Conventions </h1>
            <p>Um ein einheitliches Naming zu garantieren, werden die <a href="http://getbem.com/introduction/">BEM</a> Naming Conventions befolgt. 
            BEM (Block-Element-Modifiers) ist ein simpler, leicht verständlicher und Intuitive Variante für Naming Conventions.
            Hierbei wird in blöcke, Elemente der Blöcke und Modifiers unterteilt.</p>
            <h2>Blöcke</h2>
            <p>Blöcke sind einzelstehende Komponenten</p>
            <h2>Elemente</h2>
            <p>Elemente sind teile von Bläcken. Als Elemente können einzelne Punke(<li>) von Menüs bezeichnet werden</p>
            <h2>Modifiers</h2>
            <p>Modifiers sind Zustände der Elemente. Man kann diese nutzen, um beispielweise ein element den Zustand "hidden zu geben"</p>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    else if (pathName === '/ueberschriften') {
        const content = `
            <h1> Überschriften </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/navigation') {
        const content = `
            <h1> Navigation </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    else if (pathName === '/links') {
        const content = `
            <h1> Links </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/buttons') {
        const content = `
            <h1> Buttons </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/movie-Cards') {
        const content = `
            <h1> Movie Cards </h1>

            <div class="container">
            <div class="moviecard">
                <h3 class="moviecard__rank">Platz 6</h3>
                <div class="moviecard__background">
                    <img class="moviecard__media" src="images/Jumpstreet.PNG" alt="Movie">
                    <div class="moviecard__content">
                        <p class="moviecard__time">1 Std. 49 Min.</p>
                        <h1 class="moviecard__title">21 Jumpstreet</h1>
                        <p class="moviecard__data">2012 FSK-12 Action-Comedy-Crime</p>
                        <p class="moviecard__short_description moviecard__shortdescription--visible">A pair of underachieving cops are sent back to a local high school
                        to blend in. </p> 
                        <div class="moviecard__extended moviecard__extended--invisible">
                            <p class="moviecard__long_description">A pair of underachieving cops are sent back to a 
                            local high school to blend in and bring down a synthetic drug ring. 
                            The pair plays police officers who must go undercover in a high school to bust a drug ring, just like Johnny Depp in the original series.
                            <p class="moviecard__directors">Directors: Phil Lord, Christopher Miller</p>
                            <p class="moviecard__actors">Actors: Jonah Hill, Channing Tatum, Brie Larson </p>
                        </div>
                    </div>
                    <div class="moviecard__folder moviecard__folder--upfolded">AUSKLAPPEN</div>
                </div>
            </div>
    
    
            <div class="moviecard">
                <h3 class="moviecard__rank">Platz 6</h3>
                <div class="moviecard__background">
                    <img class="moviecard__media" src="images/Jumpstreet.PNG" alt="Movie">
                    <div class="moviecard__content">
                        <p class="moviecard__time">1 Std. 49 Min.</p>
                        <h1 class="moviecard__title">21 Jumpstreet</h1>
                        <p class="moviecard__data">2012 FSK-12 Action-Comedy-Crime</p>
                        <p class="moviecard__short_description moviecard__shortdescription--visible">A pair of underachieving cops are sent back to a local high school
                        to blend in. </p> 
                        <div class="moviecard__extended moviecard__extended--invisible">
                            <p class="moviecard__long_description">A pair of underachieving cops are sent back to a 
                            local high school to blend in and bring down a synthetic drug ring. 
                            The pair plays police officers who must go undercover in a high school to bust a drug ring, just like Johnny Depp in the original series.
                            <p class="moviecard__directors">Directors: Phil Lord, Christopher Miller</p>
                            <p class="moviecard__actors">Actors: Jonah Hill, Channing Tatum, Brie Larson </p>
                        </div>
                    </div>
                    <div class="moviecard__folder moviecard__folder--upfolded">AUSKLAPPEN</div>
                </div>
            </div>
        </div>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)

        cardAnimation()
    }
  }

 
//function cardAnimation(){

//Script for the movie-card & Up-Down Votes

const card = document.getElementsByClassName('moviecard__folder')
const shortDescription = document.getElementsByClassName('moviecard__short_description')
const extended = document.getElementsByClassName('moviecard__extended')
const actors = document.getElementsByClassName('moviecard__actors')

const upvote = document.getElementsByClassName('vote__upvote')
const downvote = document.getElementsByClassName('vote__downvote')

console.log(shortDescription)

for (let i = 0; i < card.length; i++){
    let count = i;
    card[count].addEventListener("click", () => {

        if(card[count].innerHTML === "AUSKLAPPEN"){
        
        shortDescription[count].classList.remove("moviecard__short_description--visible")
        shortDescription[count].classList.add("moviecard__short_description--invisible")

        extended[count].classList.remove("moviecard__extended--invisible")
        extended[count].classList.add("moviecard__extended--visible")

        actors[count].style.display = "block"

        card[count].innerHTML = "EINKLAPPEN"

        }else{

        shortDescription[count].classList.add("moviecard__short_description--visible")
        shortDescription[count].classList.remove("moviecard__short_description--invisible")

        extended[count].classList.add("moviecard__extended--invisible")
        extended[count].classList.remove("moviecard__extended--visible")

        card[count].innerHTML = "AUSKLAPPEN"

        actors[count].style.display = "none"

        }
        
        
    })



}

//}