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

    res.json(users); // отправляет зарегестрированного юзера и id если такой залогинен
  } catch (err) {
    console.log('Не удалось проверить регистрацию', err);
  }
}); // проверка авторизации

router.post('/all-for-settings', async (req, res) => {
  const { initiator_id } = req.body;
  checkRights(res, initiator_id, ['admin', 'moderator']);
  try {
    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
        status: 'active',
      },
      attributes: ['user_id', 'nick', 'name', 'surname', 'role', 'status', 'createdAt'],
    });

    res.json(users); // отправляет зарегестрированного юзера и id если такой залогинен
  } catch (err) {
    console.log('Не удалось проверить регистрацию', err);
  }
}); // проверка авторизации

module.exports = router;
