/* eslint-disable camelcase */
const { Account } = require('../db/models');

const checkRights = async (res, initiator_id, arrayOfRoles) => {
  try {
    const initiator = await Account.findOne({ where: { user_id: initiator_id }, raw: true });
    if (!arrayOfRoles.includes(initiator.role)) res.json({ error: 'You have not rights for this action' });
  } catch (err) {
    console.log(err);
  }
};

module.exports = checkRights;
