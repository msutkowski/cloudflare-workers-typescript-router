export const JSONResponse = (body: object, options?: ResponseInit) =>
  new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
    },
    ...options,
  })
