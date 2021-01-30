
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



    else if (pathName === '/repository/FilmRack_Styleguide/farben') {
        const content = `
            <h1> Farben </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/repository/FilmRack_Styleguide/code') {
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

    else if (pathName === '/repository/FilmRack_Styleguide/naming') {
        const content = `
            <h1> Naming Conventions </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    else if (pathName === '/repository/FilmRack_Styleguide/ueberschriften') {
        const content = `
            <h1> Überschriften </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/repository/FilmRack_Styleguide/navigation') {
        const content = `
            <h1> Navigation </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }

    else if (pathName === '/repository/FilmRack_Styleguide/links') {
        const content = `
            <h1> Links </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/repository/FilmRack_Styleguide/buttons') {
        const content = `
            <h1> Buttons </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }


    else if (pathName === '/repository/FilmRack_Styleguide/movie-Cards') {
        const content = `
            <h1> Movie Cards </h1>
        `
        
        pageContent.innerHTML = content
        console.log(pageContent)
    }
  }

  