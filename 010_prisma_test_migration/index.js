const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()



async function main() {
  /*
    await prisma.user.create({
      data: {
        name: "Alice",
        email: "ciao@demo.it",
        posts: {
          create: { title: "Hello World" },
        },
        profile: {
          create: { bio:  "I like turtles" }
        }
      }
    })
  */
    const allUsers = await prisma.user.findMany({
      include: { 
        posts: true,
        profile: true 
      },
    })
    console.dir(allUsers, { depth: null })
    
    await prisma.company.create({
      data: {
        name: "ciao xxxx",
        email: "company@test.com",
        vat: "000000000002",
        workers: {
          create: [
            {
              firstName: "Napoleone Bonaparte",
              lastName: "Bonaparte",
              email: "napo@test.com"
            },
            {
              firstName: "Giuseppe",
              lastName: "Garibaldi",
              email: "argo@test.it"
            }
          ]
        }
        
      }
    })

    const allCompany = await prisma.company.findMany({
      include: {
        workers: true
      }
    })
    console.dir(allCompany, { depth: null })
  }


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })