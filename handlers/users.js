import { client, connectToDatabase } from "../database/db.js"


export const getUsers = async(req, res) => {

  // DB Connection
  try {
    await connectToDatabase()

    const database = client.db('users')
    const coll = database.collection('user_info')

    const cursor = coll.find({ /* empty query */ })

    let resultedUsers = [];
    for await (const doc of cursor) {
      resultedUsers.push(doc)
    }
    res.send(resultedUsers)
    
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

export const createUser = async(req, res) => {
  
  try {
    await connectToDatabase(); 

    const database = client.db('users')
    const coll = database.collection('user_info')

    const userData = [
      {
        name: "Swapna",
        age: 18,
        designation: "Student",
      },
    ]

    const user = await coll.insertMany(userData)

    res.send(user) 
  } catch (error) {
    console.log(error)
    res.send(error)
  }

}