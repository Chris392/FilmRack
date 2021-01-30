
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


    
    if (pathName === '/repository/FilmRack_Styleguide/listen') {
        const content = `
            <h1> Listen </h1>
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

  