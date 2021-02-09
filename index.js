
const allLinks = document.querySelectorAll('a')
const pageContent = document.getElementsByClassName('content')[0]

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
      history.pushState(null, 'Style', evt.target.href)
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
            <h1 class="spacing"> Farben </h1>

            <img src="images/Colors.PNG" alt="Colors">
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/typographie') {
        const content = `
            <h1> Typographie </h1>
            <h2 class="brand">Branding</h2>
            <p>
                Als Brand-Font wird Monoton verwendet. Die Farbe soll ein bisschen den alten Kino Vibe vermitteln.
                In SCSS unter $brand-font
            </p>
            <h2>Überschriften</h2>
            <p>
                Als überschrift Font wird Lato verwendet.
                In SCSS unter $heading-font
            </p>
            <h2 class="os">Fließtext</h2>
            <p class="os">
                Als Fließtext Font wird Open Sans verwendet. 
                In SCSS unter $main-font
            </p>
            <h2 class="os">Icons</h2>
            <p>
                Als Icons dient die Material-IO Font. <a href="http://google.github.io/material-design-icons/">Hier</a> mehr zur verwendung.
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

            <h1> Überschriften & Absätze </h1>

            <h2> Erklärung </h2>

            <p> Überschrift mit Fließtext. Kontrast ensteht vor allem durch die Größe der Schrift und den 
            Unterschieden in der Farbe. Line-Height des Fließtextes ist 1.3 für bessere Lesbarkeit.
            Max-Width ist auf 800 px gesetzt um übertrieben lange Zeilen zu vermeiden.</p>

            <h2> Beispiel </h2>

            <h2> At vero eos et accusam et justo duo dolores et ea rebum. </h2>

            <p> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>

            <h2> Code </h2>

            <iframe height="500" style="width: 100%;" scrolling="no" title="ExNyGjQ" src="https://codepen.io/chris392/embed/ExNyGjQ?height=265&theme-id=dark&default-tab=html" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/chris392/pen/ExNyGjQ'>ExNyGjQ</a> by Chris392
            (<a href='https://codepen.io/chris392'>@chris392</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/button') {
        const content = `
            <h1> Buttons </h1>
            <h2> Erklärung </h2>
            <p> Buttons/Input & Link Elements in 5 unterschiedlichen Zuständen anhand unserer Design-Richtlinien.</p>
            
            <h2 class="spacing"> Beispiel </h2>
            <div id="grid">
                <p></p>
                <p>Normal</p>
                <p>Hover</p>
                <p>Active</p>
                <p>Loads</p>
                <p>Disabled</p>
                
                <p>Button Elements</p>
                <div><button type="button" class="btn">Sign Up</button></div>
                <div><button type="button" class="btn btn--hover">Sign Up</button></div>
                <div><button type="button" class="btn btn--active">Sign Up</button></div>
                <div><button type="button" class="btn btn--loading">Sign Up</button></div>
                <div><button type="button" class="btn btn" disabled>Sign Up</button></div>
                
                <p>Input Elements</p>
                <div><input type="button" class="btn" value="Sign Up"></div>
                <div><input type="button" class="btn btn--hover" value="Sign Up"></div>
                <div><input type="button" class="btn btn--active" value="Sign Up"></div>
                <div><input type="button" class="btn btn--loading" value="Sign Up"></div>
                <div><input type="button" class="btn btn--disabled" value="Sign Up"></div>
                
                <p>Link Elements</p>
                <div><a href="#" class="btn">Sign Up</a></div>
                <div><a href="#" class="btn btn--hover">Sign Up</a></div>
                <div><a href="#" class="btn btn--active">Sign Up</a></div>
                <div><a href="#" class="btn btn--loading">Sign Up</a></div>
                <div><a href="#" class="btn btn--disabled">Sign Up</a></div>
                </div>

                <h2 class="spacing"> Code </h2>

                <iframe height="500" style="width: 100%;" scrolling="no" title="Button Component - Styleguide" src="https://codepen.io/chris392/embed/vYXyyvM?height=265&theme-id=dark&default-tab=html" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/chris392/pen/vYXyyvM'>Button Component - Styleguide</a> by Chris392
  (<a href='https://codepen.io/chris392'>@chris392</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
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
            <h2> Erklärung </h2>
            <p> Moviecards, nach BEM Naming Convention. Orientiert sich an Material Design und verwendet
            mehrere States für das Up- bzw. Downvoting.</p>

            <h2 class="spacing"> Beispiel </h2>

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
                            </p><p class="moviecard__directors">Directors: Phil Lord, Christopher Miller</p>
                            <p class="moviecard__actors">Actors: Jonah Hill, Channing Tatum, Brie Larson </p>
                        </div>
                        <div class="vote">
                            <span class="material-icons vote__upvote vote__upvote">
                            thumb_up_off_alt
                            </span>
                            <p class="vote__number_upvotes">4</p>
                            <span class="material-icons vote__downvote">
                            thumb_down_off_alt
                            </span>
                            <p class="vote__number_downvotes">10</p>
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
                            </p><p class="moviecard__directors">Directors: Phil Lord, Christopher Miller</p>
                            <p class="moviecard__actors">Actors: Jonah Hill, Channing Tatum, Brie Larson </p>
                        </div>
                        <div class="vote">
                            <span class="material-icons vote__upvote">
                            thumb_up_off_alt
                            </span>
                            <p class="vote__number_upvotes">4</p>
                            <span class="material-icons vote__downvote">
                            thumb_down_off_alt
                            </span>
                            <p class="vote__number_downvotes">10</p>
                        </div>
                    </div>
                    <div class="moviecard__folder moviecard__folder--upfolded">AUSKLAPPEN</div>
                </div>
            </div>
    </div>

    <h2 class="spacing"> Code </h2>

    <iframe height="500" style="width: 100%;" scrolling="no" title="Movie Card" src="https://codepen.io/chris392/embed/dyOXZzm?height=265&theme-id=dark&default-tab=html" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/chris392/pen/dyOXZzm'>Movie Card</a> by Chris392
    (<a href='https://codepen.io/chris392'>@chris392</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

        `
        
        pageContent.innerHTML = content
        console.log(pageContent)

        cardAnimation()
    }
    else if (pathName === '/event-cards') {
        const content = `
            <h1>Event Card</h1>
            <h2> Erklärung </h2>
            <p> Dies ist das beispiel einer Event Card. Sie ist ausgelegt Für Mobile Screens bis 450px Breite. BEM Naming Conventions wurden befolgt, und der Style orinetiert sich an Material Design</p>
            <h2> Beispiel </h2>
            <div class="mobile_component">
            <div class="event">
            <div class="event__host">
            <img src="./assets/sgratkx3xj731.png" alt="hostpic">
            </div>
            <div class="event__info">
            <h3 class="event__name">Max Movie Night</h3>
            <div class="event__detail">
            <span class="event__time"> <img src="./assets/schedule-white-18dp.svg" alt="time"> 20:00</span>
            <span class="event__date"> <img src="./assets/event-white-18dp.svg" alt="date"> 19.12 </span>
            </div>
            </div>
            <a class="event__arrow">
            <img src="./assets/outline_arrow_back_ios_white_18dp.png" alt="arrow">
            </a>
            </div>
            </div>
            <h2 class="spacing"> Code </h2>
            <iframe height="500" style="width: 80%;" scrolling="no" title="Event Card" src="https://codepen.io/YouckFou46/embed/ExNgjGj" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/YouckFou46/pen/ExNgjGj'>Movie Card</a> by YouckFou46
            (<a href='https://codepen.io/YouckFou46'>@YouckFou46</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
            

        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }
    else if (pathName === '/listitem-cards') {

        const content = `
            <h1>Ranking List Item</h1>
            <h2> Erklärung </h2>
            <p> Hier die Karten des Rankings. Diese Besteht aus der Platzierung, Die dynamish angepasst werden muss. Das Erste Child hat die Font Open Sans, die Restlichen Lato. Auch hier wird BEM befolgt und sich an Material-IO orientiert</p>
            <h2> Beispiel </h2>
            <div class="mobile_component">
                <div class="listcard">
                    <a href="#" class="listcard__link">
                        <span class="listcard__rank listcard__rank--first">
                            1
                        </span>
                    </a>
                </div>
                <div class="listcard">
                    <a href="#" class="listcard__link">
                        <span class="listcard__rank">
                            2
                        </span>
                    </a>
                </div>
            </div>
            <h2 class="spacing"> Code </h2>
            <iframe height="500" style="width: 80%;" scrolling="no" title="Event Card" src="https://codepen.io/YouckFou46/embed/qBqaONr" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/YouckFou46/pen/qBqaONr'>Movie Card</a> by YouckFou46
            (<a href='https://codepen.io/YouckFou46'>@YouckFou46</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
        `
        pageContent.innerHTML = content
        console.log(pageContent)
    }
    else if (pathName === '/bottom-nav') {

        const content = `
                <h1>Bottom Navigation</h1>
                <h2> Erklärung </h2>
                <p> Eine fixierte Navigation welche mittels Bottom-Padding von Baody erziehlt wird. Auch hier wird BEM befolgt und MaterialIo Icons verwendet.</p>
                <h2> Beispiel </h2>
                <div class="mobile_component">
                    <nav class="bottom_nav">
                        <a href="#" class="bottom_nav__link bottom_nav__link--active">
                            <i class="material-icons bottom_nav__icon">assessment</i>
                            <span class="bottom_nav__text bottom_nav__text--active">Ranking</span>
                        </a>
                        <a href="#" class="bottom_nav__link">
                            <i class="material-icons">theaters</i>
                            <span class="bottom_nav__text">Details</span>
                        </a>
                        <a href="#" class="bottom_nav__link">
                            <i class="material-icons">chat</i>
                            <span class="bottom_nav__text">Chat</span>
                        </a>
                        <a href="#" class="bottom_nav__link">    
                            <i class="material-icons">assignment</i>
                            <span class="bottom_nav__text">Organisation</span>
                        </a>
                    </nav>
                </div>
                <h2 class="spacing"> Code </h2>
                <iframe height="500" style="width: 80%;" scrolling="no" title="Event Card" src="https://codepen.io/YouckFou46/embed/JjbRYYb" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href='https://codepen.io/YouckFou46/pen/JjbRYYb'>Movie Card</a> by YouckFou46
                (<a href='https://codepen.io/YouckFou46'>@YouckFou46</a>) on <a href='https://codepen.io'>CodePen</a>.
                </iframe>
        `
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    else if(pathName === '/') {
        history.pushState(null, 'Style', '/einleitung')
        onRouteChange()
    }
}

 
function cardAnimation(){

//Script for the movie-card & Up-Down Votes

const card = document.getElementsByClassName('moviecard__folder')
const shortDescription = document.getElementsByClassName('moviecard__short_description')
const extended = document.getElementsByClassName('moviecard__extended')
const actors = document.getElementsByClassName('moviecard__actors')

const upvote = document.getElementsByClassName('vote__upvote')
const downvote = document.getElementsByClassName('vote__downvote')

const upvoteNumber = document.getElementsByClassName('vote__number_upvotes')
const downvoteNumber = document.getElementsByClassName('vote__number_downvotes')


let state = "neutral";

console.log(shortDescription)

for (let i = 0; i < card.length; i++){
    let count = i;
    //Die Anzahl der Aktuellen Up- und Downvotes wird gespeichert
    let currentUpvotes = upvoteNumber[count].innerHTML
    let currentDownvotes = downvoteNumber[count].innerHTML

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

    //Wenn Upvote geklickt wird...
    upvote[count].addEventListener("click", () => {


        // ... und der State liked ist:
        // ... wird upvote auf inaktive gesetzt
        if(state === "upvoted"){
            upvote[count].classList.remove('vote__upvote--active')

            state = "neutral"
        }

        // ... und der State neutral ist:
        // ... wird upvote auf active gesetzt und der state auf liked:
        else if(state === "neutral"){
            upvote[count].classList.add('vote__upvote--active')

            state = "upvoted"
        }

        // ... und der State downvoted ist:
        // ... wird upvote auf active und downvote auf inactive und der state auf upvoted gesetzt
        else if(state === "downvoted"){
            upvote[count].classList.add('vote__upvote--active')
            downvote[count].classList.remove('vote__downvote--active')

            state = "upvoted"
        }

        changeNumbers()
    })


    //Wenn Downvote geklickt wird...
    downvote[count].addEventListener("click", () => {

        // ... und der State downvoted ist:
        // ... wird downvoted auf inactive gesetzt
        if(state === "downvoted"){
            downvote[count].classList.remove('vote__downvote--active')

            state="neutral"
        }


        // ... und der State neutral ist:
        // ... wird downvote auf active gesetzt und der state auf downvoted:
        else if(state === "neutral"){
            downvote[count].classList.add('vote__downvote--active')

            state="downvoted"
        }

        // ... und der State upvoted ist:
        // ... wird downvoted auf active und upvoted auf inactive und der state auf downvoted gesetzt
        else if(state === "upvoted"){
            downvote[count].classList.add('vote__downvote--active')
            upvote[count].classList.remove('vote__upvote--active')

            state="downvoted"
        }


        changeNumbers()
    })



    function changeNumbers(){

        if(state === "neutral"){
            upvoteNumber[count].innerHTML = currentUpvotes
            downvoteNumber[count].innerHTML = currentDownvotes
        }
        else if(state === "upvoted"){
            let newNr = currentUpvotes   
            newNr++       
            upvoteNumber[count].innerHTML = newNr++
            downvoteNumber[count].innerHTML = currentDownvotes
            
        }
        else if(state === "downvoted"){
            let newNr = currentDownvotes
            newNr++
            upvoteNumber[count].innerHTML = currentUpvotes
            downvoteNumber[count].innerHTML = newNr
        }
    }

}

}