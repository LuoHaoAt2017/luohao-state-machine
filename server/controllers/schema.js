const Schema = require('../models/index').Schema;

async function search(req, res) {
  if (req.query.schema_code) {
    return findOne(req, res);
  }
  try {
    const data = await Schema.findAll();
    res.status(200).send(data);
  } catch {
    res.status(500).send();
  }
}

async function findOne(req, res) {
  const code = req.query.schema_code;
  const app = await Schema.findOne({
    where: {
      schema_code: code
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
    await Schema.create({
      schema_name: req.body.schema_name,
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