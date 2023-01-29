/* eslint-disable camelcase */
const router = require('express').Router();
const Sequelize = require('sequelize');

const { Op } = Sequelize;

const { Account } = require('../db/models');
const checkRights = require('./helpers');

router.get('/all', async (req, res) => {
  try {
    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
        status: 'active',
      },
      attributes: ['user_id', 'nick', 'name', 'surname'],
    });

    res.json(users);
  } catch (err) {
    console.log('Не удалось проверить регистрацию', err);
  }
});

router.post('/all-for-settings', async (req, res) => {
  const { initiator_id } = req.body;
  checkRights(res, initiator_id, ['admin', 'moderator']);
  try {
    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
      },
      attributes: ['user_id', 'nick', 'name', 'surname', 'role', 'status', 'createdAt'],
    });

    res.json(users);
  } catch (err) {
    console.log('Не удалось проверить регистрацию', err);
  }
});

module.exports = router;
