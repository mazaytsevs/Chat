/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        id: 1,
        user_id: 1,
        nick: 'admin',
        password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
        name: 'Admin',
        surname: 'Adminov',
        role: 'admin',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        user_id: 2,
        nick: 'moderator1',
        password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
        name: 'Moderator',
        surname: 'MODERATOVICH',
        role: 'moderator',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        user_id: 3,
        nick: 'JohnDoe',
        password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
        name: 'John',
        surname: 'Doe',
        role: 'user',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        user_id: 4,
        nick: 'mazaytsevs',
        password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
        name: 'Maria',
        surname: 'Zaytseva',
        role: 'user',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        user_id: 5,
        nick: 'kukareku',
        password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
        name: 'Ben',
        surname: 'Stiller',
        role: 'user',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ];

    await queryInterface.bulkInsert('Accounts', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};
