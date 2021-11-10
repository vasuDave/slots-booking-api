module.exports=(app)=>{
    const users=require('../controllers/user.controller');
    //book Slot by user
    app.post('/user',users.create);

    //retrive user info using id
    app.get('/user/:userId',users.findOne);

    //update user slot by its id
    app.put('/user/:userId',users.update);
}