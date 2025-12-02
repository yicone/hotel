const fetch = require('node-fetch')
const conf = require('../conf')

const api = exports

api.host = `http://${conf.host}:${conf.port}`
api.root = `${api.host}/_/`

/**
 * Fetch something from the API
 * @param  {string} route          The route to fetch data from
 * @param  {string} [method="GET"] The method to request with
 * @return {Promise<any>}          The JSON data
 */
api.fetch = (route, method = 'GET') => {
  return fetch(api.root + route, { method }).then(res => {
    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`)
    }
    const contentType = res.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return res.json()
    }
    return res.text()
  })
}

api.servers = () => {
  return api.fetch('servers').then(serverJSON => {
    return Object.keys(serverJSON).map(key => [key, serverJSON[key]])
  })
}

api.server = id => ({
  start: () => api.fetch(`servers/${id}/start`, 'POST'),
  stop: () => api.fetch(`servers/${id}/stop`, 'POST')
})
