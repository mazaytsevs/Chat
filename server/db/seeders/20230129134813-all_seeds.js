/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        id: 999,
        user_id: 999,
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
        id: 222,
        user_id: 222,
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
        id: 333,
        user_id: 333,
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
        id: 444,
        user_id: 444,
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
        id: 555,
        user_id: 555,
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
