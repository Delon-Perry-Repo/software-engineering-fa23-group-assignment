User = require('../models/user');

const getAllUsers = async (req, res, next) => {

    try{
        const [users, _] = await User.getAll();

        res.status(200).json({success: true, message: 'Users found', users});
    } catch (error){
        console.log(error);
        
    }
    next();
}
const getUser = async (req, res, next) => {
    const id = req.params.id;
    

    try{
        let [user, _] = await User.getById(id);
        console.log(user)

        if (user.length === 0 ){
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        res.status(200).json({success: true, message: 'User found', user});
    } catch (error){
        console.log(error);
    }
    next();
    
}
const createUser = async (req, res, next) => {
    

    // Pulling parameters from the URL
    const name = req.body.name;
    const type = req.body.type;
    const password = req.body.password;
    const email = req.body.email;

    try{
        // Create a new User
        let newUser = new User( null, name, type, password, email );
        console.log(newUser);

        // Run method that adds the user to the database
        [newUser, _] = await newUser.saveUser();
        res.status(201).json({ success: true, message: "User Successfully created"});
    } catch (error){
        console.log(error);
        
    }
    next();
}
const updateUser = async (req, res, next) => {

    // Pulling parameters from the URL
    const id = req.params.id;
    const name = req.body.name;
    const type = req.body.type;
    const password = req.body.password;
    const email = req.body.email;

    try{
        // validating user
        let [user, _] = await User.getById(id);
        console.log(user)
        
        if (user.length === 0 ){
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        
        

        [newUser, _] = await User.updateUser(id, name, type, password, email);

        res.status(200).json({success: true, message: 'User updated'});

    } catch(error){
        console.log(error);
        
    }
    next();
}
const deleteUser = async (req, res, next) => {
    
    const id = req.params.id;

    try{
        const [ user, _] = await User.deleteUser(id);
        res.status(200).json({success: true, message: 'User successfully deleted'});
    } catch(error){
        console.log(error);
    }
    next();
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};