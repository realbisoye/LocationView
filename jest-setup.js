jest.mock('./app/apiRequest', () => {
  const MockAdapter = require('axios-mock-adapter')
  const axios = require('axios')
  const mock = new MockAdapter(axios)
  return (path, method, data = null) => {
    const responses = [
      ['GET', '/markers', 200, [{
        longitude: -74.044502,
        latitude: 40.689247,
        description: 'Liberty is fine',
        title: 'Status Of Liberty',
      }]],
      ['POST', '/markers', 200, data],
      ['PATCH', '/markers/1', 200, {
        longitude: -73.968285,
        latitude: 40.785091,
        description: 'Central Park playground update',
        title: 'Central Park',
      }],
      ['DELETE', '/markers/1', 204],
    ]
    return mock.onAny().reply(config => {
      const [...response] = responses.shift()
      if (config.url === path && config.method.toUpperCase() === method) return response
      // Unexpected request, error out
      return [500, {}]
    })
  }
})

jest.mock('react-native-maps', () => ({
  __esModule: true,
  'default': () => 'MapView',
  Marker: () => 'Marker',
}))