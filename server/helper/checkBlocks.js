/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');
const { Block, Account } = require('../db/models');

const { Op } = Sequelize;

const checkBlocks = async () => {
  try {
    const blocks = await Block.findAll({
      where: { date_before: { [Op.lte]: new Date() } },
      attributes: ['user_id'],
      raw: true,
    });

    if (blocks.length !== 0) {
      const blockedUsers = [];
      blocks.forEach((element) => {
        blockedUsers.push(element.user_id);
      });
      await Account.update(
        { status: 'active' },
        { where: { user_id: blockedUsers } },
      );

      await Block.destroy({
        where: { user_id: blockedUsers },
      });
    }
  } catch (error) {
    console.log('Cant unblock users');
  }
};

module.exports = { checkBlocks };
