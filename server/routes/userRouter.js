/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Account } = require('../db/models');

router.post('/reg', async (req, res) => {
  const {
    firstName,
    secondName,
    nick,
    email,
    password,
  } = req.body;
  try {
    if (firstName && secondName && nick && email && password) {
      const newUser = await Account.create({
        name: firstName,
        surname: secondName,
        nick,
        email,
        password: await bcrypt.hash(password, Number(process.env.SALTROUNDS)),
        role: 'user',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      req.session.user = {
        id: newUser.account_id,
        name: newUser.nick,
      };
      res.json(newUser);
    } else {
      console.log('Введите все данные для пользователя');
    }
  } catch (err) {
    console.log('Не получилось зарегистрировать', err);
  }
});

router.post('/login', async (req, res) => {
  const {
    nick,
    password,
  } = req.body;
  try {
    if (nick && password) {
      const currentUser = await Account.findOne({
        where: {
          nick,
        },
        raw: true,
      });
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.nick,
        };
        delete currentUser.password;
        return res.json(currentUser);
      }
    } else {
      console.log('Введите все данные для пользователя');
    }
  } catch (err) {
    console.log('Не удалось загрузить игровые элементы', err);
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('sid');
    res.sendStatus(200);
  } catch (err) {
    console.log('Не удалось выйти из системы', err);
  }
});

router.post('/check', async (req, res) => {
  const { user_id } = req.body;
  try {
    const user = await Account.findOne({ where: { user_id }, raw: true });
    delete user.password;
    res.json(user);
  } catch (err) {
    console.log('Не удалось проверить регистрацию', err);
  }
});

module.exports = router;
