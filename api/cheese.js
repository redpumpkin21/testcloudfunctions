module.export = (req, res) => {
    res.json({
        body: req.body,
        headers: req.headers,
        query: req.query,
        cookies: req.cookies,
        method: req.method
    })
}