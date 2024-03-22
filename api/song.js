module.exports = async (app, req, res) => {
    if (req.offline) return res.sendError();

    const songID = req.params.song;
    req.gdRequest('getGJSongInfo', { songID }, (err, resp, body) => {
        if (err) return res.sendError(400);
        return res.send(!body.startsWith("-") && body.length > 10);
    });
};
