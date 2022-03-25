CREATE USER xxx WITH PASSWORD 'xyz' SUPERUSER;
CREATE DATABASE xxx WITH OWNER xxx;

--login to psql and drop tables and users
psql
DROP USER xxx
DROP DATABASE xxx

--Generate Models
npx sequelize-cli model:generate --name <Singular with capital first> --attributes name:integer

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
