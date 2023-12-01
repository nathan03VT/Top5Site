let userTop5s = [];

function getIndexPage(req, res) {
    res.sendFile(__dirname + '/../public/index.html');
}

function addTop5(req, res) {
    const newTop5 = req.body.top5;

    // Limit the number of elements to 5
    if (userTop5s.length >= 5) {
        userTop5s.shift(); // Remove the oldest element
    }

    userTop5s.push(newTop5);
    res.redirect('/');
}

function getTop5s(req, res) {
    res.json(userTop5s);
}

module.exports = {
    getIndexPage,
    addTop5,
    getTop5s
};
