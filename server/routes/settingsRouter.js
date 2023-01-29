/* eslint-disable camelcase */
const router = require('express').Router();
const Sequelize = require('sequelize');
const { Account, Block } = require('../db/models');
const checkRights = require('./helpers');

const { Op } = Sequelize;

router.post('/block', async (req, res) => {
  const {
    user_id, initiator_id, date_before, reason,
  } = req.body;

  await checkRights(res, initiator_id, ['admin', 'moderator']);

  try {
    await Block.create({
      user_id,
      initiator_id,
      date_before,
      reason,
    });

    await Account.update(
      { status: 'inactive' },
      { where: { user_id } },
    );

    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
      },
      attributes: ['user_id', 'nick', 'name', 'surname', 'role', 'status', 'createdAt'],
      order: [
        ['nick', 'DESC'],
      ],
    });

    res.json(users);
  } catch (err) {
    console.log('Не удалось заблокировать пользователя');
  }
});

router.post('/unblock', async (req, res) => {
  const {
    user_id, initiator_id,
  } = req.body;

  await checkRights(res, initiator_id, ['admin', 'moderator']);

  try {
    await Block.destroy({
      where: { user_id },
    });

    await Account.update(
      { status: 'active' },
      { where: { user_id } },
    );

    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
      },
      attributes: ['user_id', 'nick', 'name', 'surname', 'role', 'status', 'createdAt'],
      order: [
        ['nick', 'DESC'],
      ],
    });

    res.json(users);
  } catch (err) {
    console.log('User was not blocked');
  }
});

router.post('/appoint-a-moderator', async (req, res) => {
  const {
    user_id, initiator_id,
  } = req.body;

  await checkRights(res, initiator_id, ['admin']);

  try {
    await Account.update(
      { role: 'moderator' },
      { where: { user_id } },
    );
    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
      },
      attributes: ['user_id', 'nick', 'name', 'surname', 'role', 'status', 'createdAt'],
      order: [
        ['nick', 'DESC'],
      ],
    });

    res.json(users);
  } catch (err) {
    console.log('It is impossible to make a user a moderator');
  }
});

router.post('/demote', async (req, res) => {
  const {
    user_id, initiator_id,
  } = req.body;

  await checkRights(res, initiator_id, ['admin']);

  try {
    await Account.update(
      { role: 'user' },
      { where: { user_id } },
    );
    const users = await Account.findAll({
      where: {
        role: { [Op.in]: ['user', 'moderator'] },
      },
      attributes: ['user_id', 'nick', 'name', 'surname', 'role', 'status', 'createdAt'],
      order: [
        ['nick', 'DESC'],
      ],
    });

    res.json(users);
  } catch (err) {
    console.log('It is impossible to depote a moderator');
  }
});

module.exports = router;
