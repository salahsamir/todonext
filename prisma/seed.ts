import { PrismaClient } from '@prisma/client'
import {faker} from "@faker-js/faker"
const prisma = new PrismaClient()

async function main() {

//   await prisma.todo.createMany(
//     {
//       data:Array.from({length:10},(_,i)=>(
//         {
//             title:faker.lorem.word(),
//             body:faker.lorem.paragraph()
//       }))
//     }
// )
//   await prisma.user.createMany(
//     {
//       data:Array.from({length:10},(_,i)=>(
//         {
//             name:faker.internet.userName(),
//             email:faker.internet.email(),
//             created_at: new Date(),
//       }))
//     }
// )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })