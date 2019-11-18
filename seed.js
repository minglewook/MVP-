const faker = require('faker');
const Job = require('./database/models/jobs.js')


let thingsToSeed = [];

for (let i = 0; i < 50; i++) {
  thingsToSeed.push({
    id: i, 
    companyName: faker.lorem.word(),
    phoneNumber: faker.lorem.sentence(), 
    followUp: faker.lorem.word()
  })

}
console.log(thingsToSeed)
// id: Number,
//   companyName: String,
//   phoneNumber: String,
//   followUp: Boolean
 
Job.deleteMany((err) => {
  if(err){
    console.error(err)
  } else {
    Job.insertMany(thingsToSeed)
  }
})