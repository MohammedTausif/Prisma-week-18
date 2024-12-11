import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

//CRUD operations => Create, Read, Update, Delete
//1. Create a User
async function newUser() {
    const user = await client.user.create({
        data: {
            username: "iamtauseefofficial@gmail.com",
            password: "Random@123",
            age: 22,
            city: "Hyderabad",
        },
    })
    console.log("user created :", user.username)
} newUser();

//2. Read User

async function allUsers() {
    const users = await client.user.findMany()
    console.log("All Users: ", users)
} allUsers()


//3. Update User

async function updateUser() {
    const user = await client.user.update({
        where: { id: 1 },
        data: { age: 25 }
    })
    console.log("Data updated for user:", user.username)
} updateUser()


//4.Delete User
async function dropUser() {
    const user = await client.user.delete({
        where: { id: 7 },
    })
    console.log(`${user?.username} Deleted`)
} dropUser();

