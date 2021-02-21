const User = require('./userModel');

exports.getUsers = function()
{
    return new Promise((resolve,reject) =>
    {
        User.find({},function(err, usersData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(usersData)
            }
        })
    })
}

exports.getUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findById(id,function(err, userData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(userData)
            }
        })
    })
}

exports.addNewUser = function(usr) 
{   
    return new Promise((resolve, reject)=> 
    {
        let newUSer = new User(
            {
                userName : usr.userName,
                email : usr.email,
                street: usr.street,
                city: usr.city,
                zipcode: usr.zipcode,
                tasks: usr.tasks,
                posts: usr.posts

            });
            
        newUSer.save(function(err) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("User Created Successfully")
            }
            
        })
    }) 
}

exports.updateUser = function(id, userData)
{
    return new Promise((resolve,reject)=>
    {
        User.findByIdAndUpdate(id,
            {
                userName : userData.userName,
                email : userData.email,
                street: userData.street,
                city: userData.city,
                zipcode: userData.zipcode,
                tasks: userData.tasks,
                posts: userData.posts
            }, function (err) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("User Upated Successfully")
                }
                
            })
    })
}

exports.deleteUser = function(id) 
{
    return new Promise((resolve,reject)=>
    {
        User.findByIdAndDelete(id, function(err) 
        {
            if(err)
            {
                reject(err); 
            }
            else
            {
                resolve ("User Deleted Successfully")
            }
        })
    })
    
}


