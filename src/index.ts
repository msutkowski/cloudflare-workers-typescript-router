import Router, { isOptionsReq } from './router'
import { handleCORSOptions } from './utils/cors'
import { JSONResponse } from './utils/json-response'
// import { handlers as users } from './users'

addEventListener('fetch', (event) => {
  const handler = isOptionsReq(event) ? handleCORSOptions : handleRequest

  event.respondWith(handler(event.request))
})

async function handleRequest(request: Request) {
  const r = new Router()

  // r.get('/users', users.index)
  // r.post('/users', users.create)
  // r.put(`/users/:id`, users.update)
  // r.delete(`/users/:id`, users.delete)

  r.get('/json', () => JSONResponse({ great: 'api' }))
  r.get(
    '/',
    () =>
      new Response(
        'This is a default response, something should probably go here',
      ),
  )

  const resp = await r.route(request)
  return resp
}
