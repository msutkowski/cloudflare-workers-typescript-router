/**
 * readRequestBody reads in the incoming request body
 * Use await readRequestBody(..) in an async function to get the string
 * @param {Request} request the incoming request to read from
 */
export const readRequestBody = async (request: Request) => {
  const { headers } = request
  const contentType = headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    return await request.json()
  } else if (contentType.includes('application/text')) {
    return await request.text()
  } else if (contentType.includes('text/html')) {
    return await request.text()
  } else if (contentType.includes('form')) {
    const formData = await request.formData()
    const body = {} as Record<any, any>
    for (const entry of formData.entries()) {
      body[entry[0]] = entry[1]
    }
    return JSON.stringify(body)
  } else {
    const myBlob = await request.blob()
    const objectURL = URL.createObjectURL(myBlob)
    return objectURL
  }
}
