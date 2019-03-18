import request from '../../app/apiRequest'

describe('API Fetch', () => {
  it('successfully ', async() => {
    const response = await request('/markers', 'GET')

    expect(response).not.toBeNull()
    expect(response).not.toBeUndefined()
  })
})
