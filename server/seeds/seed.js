const db = require('../config/connection');
const { User, Department } = require('../models');

const userData = require('./userData.json');
const departmentData = require('./departmentData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Department.deleteMany({});
  const users = await User.insertMany(userData);
  const departments = await Department.insertMany(departmentData);
  console.log(users, departments);
  console.log('Database seeded!');
  process.exit(0);
});
