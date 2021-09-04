const Application = require('../models/index').Application;
// const sequelize = require('../models/index').sequelize;

async function search(req, res) {
  console.log('query: ', req.query);
  if (req.query.app_code) {
    return findOne(req, res);
  }
  try {
    const data = await Application.findAll();
    res.status(200).send(data);
  } catch {
    res.status(500).send();
  }
}

async function findOne(req, res) {
  const code = req.query.app_code;
  const app = await Application.findOne({
    where: {
      app_code: code
    },
    include: 'schemas'
  });
  if (app) {
    res.status(200).send(app);
  } else {
    res.status(404).send("没有找到目标对象");
  }
}

async function update(req, res) {
}

async function remove(req, res) {
}

async function create(req, res) {
  try {
    await Application.create({
      app_name: req.body.app_name,
      app_info: req.body.app_info,
    });
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  search,
  update,
  remove,
  create
}