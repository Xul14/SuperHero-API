'use strict'

const routes = {
    '/favorites': '/pages/favorites.html',
}

const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

}

window.route = route


const routes_container= {
    '/powerstats': '/pages/powerstats.html',
    '/biography': '/pages/biography.html',
    '/appearance': '/pages/appearance.html',
    '/connections': '/pages/connections.html'
}

const route_containers = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes_container[path])
    const html = await response.text()

    document.getElementById('content_pages').innerHTML = html

}

window.route = route_containers