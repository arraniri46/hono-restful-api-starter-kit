import { Context, Hono } from 'hono'

const app = new Hono()

app.get('/', (c: Context) => {
  return c.json({
    status: true,
    message: 'Hello World',
  })
})

app.post('/api/v1/posts', async (c: Context) => {
  const req = await c.req.parseBody()

  return c.json(
    {
      status: true,
      data: req,
    },
    200
  )
})

export default app
