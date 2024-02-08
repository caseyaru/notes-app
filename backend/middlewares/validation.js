const { celebrate, Joi } = require('celebrate');

const regex = /^https?:\/\/.+\.[a-z]+/;

const celebrateSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const celebrateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const celebrateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
});

module.exports = {
  celebrateSignUp,
  celebrateSignIn,
  celebrateUpdateUser,
};
