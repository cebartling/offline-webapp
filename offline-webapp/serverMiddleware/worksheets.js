/* eslint-disable no-console */
import express from 'express'
const app = express()

app.post('/', (request, response) => {
  console.log('POST /worksheets')
  response.status(201)
  response.end()
})

app.put('/', (request, response) => {
  console.log('PUT /worksheets')
  response.status(204)
  response.end()
})

app.get('/', (request, response) => {
  console.log('GET /worksheets')
  const worksheets = [
    { id: 1, name: 'Bar area', item: [] },
    { id: 2, name: 'Kitchen', item: [] },
    { id: 3, name: 'Salad prep', item: [] }
  ]

  response.json(worksheets)
})

export default {
  path: '/worksheets',
  handler: app
}
