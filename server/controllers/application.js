const Application = require('../models/index').Application;
// const sequelize = require('../models/index').sequelize;
module.exports = {
  async search(req, res) {
    try {
      const data = await Application.findAll();
      res.status(200).send(data);
    } catch {
      res.status(500).send();
    }
  },
  // async query1(req, res) {
  //   try {
  //     const data = await Application.findAll({
  //       attributes: {
  //         include: [
  //           'px', 'py', ['radius', 'r'],
  //           // 使用聚合函数时,必须为它提供一个别名,以便能够从模型中访问它.
  //           [sequelize.fn('COUNT', sequelize.col('px')), 'n_px'],
  //           [sequelize.fn('COUNT', sequelize.col('py')), 'n_py'],
  //         ],
  //         exclude: [
  //           'id','radius',
  //           'createdTime',
  //           'updatedTime',
  //         ]
  //       }
  //     });
  //     res.status(200).send({
  //       response: {
  //         successful: true,
  //         returnData: data
  //       }
  //     });
  //   } catch(error) {
  //     console.error(error.toString());
  //     res.status(500).send({
  //       response: {
  //         successful: false,
  //         returnData: [],
  //         errorMesg: error
  //       }
  //     });
  //   }
  // },
  async update(req, res) {
  },
  async delete(req, res) {
  },
  async create(req, res) {
    console.log(req.body);
    try {
      await Application.create({
        app_name: req.body.app_name,
        app_info: req.body.app_info,
      });
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
}