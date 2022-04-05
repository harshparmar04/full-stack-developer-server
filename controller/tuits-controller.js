import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    console.log("Create called");
    console.log(req)
    const newTuit = {};
    const profile = req.body.profile;
    newTuit.postedBy = {
        "username": profile.firstName + ' ' + profile.lastName
    };
    newTuit.handle = profile.handle;
    newTuit.time = 'now';
    newTuit['logo-image'] = profile.profilePicture;
    newTuit['avatar-image'] = profile.profilePicture;
    newTuit.tuit = req.body.data.tuit;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.stats = {
        "comments": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes": 0
    };
    tuits.unshift(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => res.json(tuits);
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


const tuitController =  (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default tuitController;
