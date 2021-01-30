
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
  
  const onRouteChange = async () => {
    const pathName = new URL(window.location).pathname

    if (pathName === '/repository/FilmRack_Styleguide/einleitung') {
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



    if (pathName === '/repository/FilmRack_Styleguide/farben') {
        const content = `
            <h1> Farben </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    if (pathName === '/repository/FilmRack_Styleguide/methodologie-Einleitung') {
        const content = `
            <h1> Methodolgie </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    if (pathName === '/repository/FilmRack_Styleguide/ueberschriften') {
        const content = `
            <h1> Überschriften </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    
    if (pathName === '/repository/FilmRack_Styleguide/navigation') {
        const content = `
            <h1> Navigation </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    if (pathName === '/repository/FilmRack_Styleguide/links') {
        const content = `
            <h1> Links </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    if (pathName === '/repository/FilmRack_Styleguide/buttons') {
        const content = `
            <h1> Buttons </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    if (pathName === '/repository/FilmRack_Styleguide/movie-Cards') {
        const content = `
            <h1> Movie Cards </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }
  }

  