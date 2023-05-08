'use strict'

const routes= {
    '/powerstats': '/pages/powerstats.html',
    '/biography': '/pages/biography.html',
    '/appearance': '/pages/appearance.html',
    '/connections': '/pages/connections.html'
}

 export const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('content_pages').innerHTML = html

}

window.route = route