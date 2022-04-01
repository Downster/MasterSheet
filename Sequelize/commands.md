CREATE USER xxx WITH PASSWORD 'xyz' SUPERUSER;
CREATE DATABASE xxx WITH OWNER xxx;

--login to psql and drop tables and users
psql
DROP USER xxx
DROP DATABASE xxx

--Generate Models

--name <Singular with capital first> --attributes name:integer

--Example of editing migration file with foreign keys

```
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      level: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      campusId: {
        allowNull: false,
        references: { model: "Campuses" }, //singular model, plural Table name
        type: Sequelize.INTEGER,
      },
      departmentId: {
        allowNull: false,
        references: { model: "Departments" }, //singular model, plural Table name
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
```

--Run Migrations

npx sequelize-cli db:migrate

--Generate seeds
npx sequelize-cli seed:generate --name <descriptiveName>

-- Run all seeds
npx sequelize-cli db:seed:all

--Models cookie cutter w/ many to many

"use strict";
module.exports = (sequelize, DataTypes) => {
const Course = sequelize.define(
"Course",
{
name: DataTypes.STRING,
level: DataTypes.INTEGER,
campusId: DataTypes.INTEGER,
departmentId: DataTypes.INTEGER,
},
{}
);
Course.associate = function (models) {
Course.belongsToMany(models.Person, { //references plural models with singular model name
through: "Enrollment", //the tabe it accesses the relationship through
otherKey: "personId", //the key it accesses that table through
foreignKey: "courseId", // its key in the join table
});
Course.belongsTo(models.Campus, { foreignKey: "campusId" }); //belongs to
Course.belongsTo(models.Department, { foreignKey: "departmentId" }); //belongs to
};
return Course;
};

-- one to many

"use strict";
module.exports = (sequelize, DataTypes) => {
const Department = sequelize.define(
"Department",
{
name: DataTypes.STRING,
},
{}
);
Department.associate = function (models) {
Department.hasMany(models.Course, {
foreignKey: "departmentId",
});
};
return Department;
};

--Queries

const { Person, Course, Enrollment } = require("../models");

async function lookupPersonAndCourses(personId) {
// Find person and associated courses by `personId`
const guy = await Person.findByPk(personId, {
include: Course,
});
return guy;
}

async function lookupPersonByLastName(lastName) {
const guy = await Person.findAll({
where: {
lastName,
},
});
return guy;
}

async function lookupCoursesByPersonEmail(email) {
const guy = await Person.findAll({
where: {
email,
},
});

const things = await Enrollment.findAll({
where: {
personId: guy[0].dataValues.id,
},
});
return things;
}

-- Other runsheet

to start:
npm install
npm install pg

npm test

**model: capitalized singular nouns
tables: capitalized plural nouns**

psql
create user enrollment_app with password 'password' createdb;
create database enrollment_development with owner enrollment_app
create database enrollment_test with owner enrollment_app

terminal
npx sequelize model:generate --name Person --attributes firstName:string,lastName:string,email:string
npx sequelize model:generate --name Campus --attributes name:string
npx sequelize model:generate --name Department --attributes name:string
npx sequelize model:generate --name Course --attributes name:string,level:integer,campusId:integer,departmentId:integer
npx sequelize model:generate --name Enrollment --attributes personId:integer,courseId:integer

SEED FILE:
use this in down method
code given in the readme

generate seed files
npx sequelize seed:generate --name peopleData
npx sequelize seed:generate --name campusesData
npx sequelize seed:generate --name departmentsData
npx sequelize seed:generate --name coursesData
npx sequelize seed:generate --name enrollmentsData

to regenerate database:
npx sequelize db:drop: // destroys database and tables, resets the id's
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
to unseed:
npx sequelize db:seed:undo:all //unseed from table but does not reset the id's
npx sequelize db:migrate:undo:all // destroys tables which resets ids
npx sequelize db:migrate
npx sequelize db:seed:all

associations: going in our models files
Person belongsToMany Course
Course belongsToMany Person

Campus hasMany Course
Course belongsTo Campus

Department hasMany Course
Course belongsTo Department

QUERIES: the file that is given to us
1: await Person.findbyPK(personId, {
include: Course
}
(need to return this) ? either save to variable : return the await directly

2: await Person.findAll ({
where: {
lastName
}
})
(need to return this) ? either save to variable : return the await directly

3. const person = await Person.findOne({
   where: {
   email
   },
   include: Course
   })

console.log(person)
return person.Courses
