module.exports = (res, error) => {
    res.status(500).json({
        error,
        shortCode: 'INTERNAL_SERVER_ERROR'
    })
}
