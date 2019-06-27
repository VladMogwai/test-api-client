# Development Challenge: Simple REST Client

So happy you’re interested in working at [Weld](https://www.weld.io)!

## The Task

1. Pick a JavaScript framework of your choice.
2. Build a GUI similar to this prototype: [www.weld.io/namechanger](https://www.weld.io/namechanger)
3. Perform REST requests against the server `https://simple-rest-weld.herokuapp.com` (see API below).
4. Write the code in a way so someone could continue working on it later.
5. Try to impress us!

## Server API

Do requests to `https://simple-rest-weld.herokuapp.com`, e.g. `https://simple-rest-weld.herokuapp.com/users/1`

The server is answering any GET, POST, PUT, DELETE requests with 20X responses:

    app.get('/users/:userId', (req, res) => res.json({}))
    app.get('/users', (req, res) => res.json([...]))
    app.post('*', (req, res) => res.sendStatus(201))
    app.put('*', (req, res) => res.sendStatus(204))
    app.delete('*', (req, res) => res.sendStatus(204))

**NOTE:** the API is static, i.e. a POST/PUT/DELETE won’t change the data.
