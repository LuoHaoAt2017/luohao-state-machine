import Mock from "mockjs";

Mock.setup({
  timeout: '500-1000'
});

const Random = Mock.Random;

Random.extend({
  app_code: () => Random.guid(),
  app_name: () => Random.cname(),
  app_name: () => Random.sentence()
});

Mock.mock("/search", function(options) {
  return Mock.mock({
    'list|100': [
      {
        app_code: "@app_code",
        app_name: "@app_name",
        app_info: "@app_name",
      }
    ]
  }).list;
});

Mock.mock('/update', 'POST', function(options) {

});

Mock.mock('/delete', 'DELETE', function(options) {

});

Mock.mock('/create', 'PUT', function(options) {

});

Mock.mock('/column', 'GET', function(options) {
  const columns = [
    {
      objectId: '0001',
      name: '基础科学',
      parentId: ''
    },
    {
      objectId: '0002',
      name: '语言学',
      parentId: '0001'
    },
    {
      objectId: '0003',
      name: '数学',
      parentId: '0001'
    },
    {
      objectId: '0004',
      name: '哲学',
      parentId: '0001'
    },

    {
      objectId: '0006',
      name: '自然科学',
      parentId: ''
    },
    {
      objectId: '0007',
      name: '物理学',
      parentId: '0006'
    },
    {
      objectId: '0008',
      name: '化学',
      parentId: '0006'
    },
    {
      objectId: '0009',
      name: '生物学',
      parentId: '0006'
    },

    {
      objectId: '0010',
      name: '牛顿力学',
      parentId: '0007'
    },
    {
      objectId: '0011',
      name: '电磁学',
      parentId: '0007'
    },
    {
      objectId: '0012',
      name: '光学',
      parentId: '0007'
    },
    {
      objectId: '0013',
      name: '热力学',
      parentId: '0007'
    },
    {
      objectId: '0014',
      name: '相对论',
      parentId: '0007'
    },
    {
      objectId: '0015',
      name: '人文学说',
      parentId: ''
    }
  ];
  return columns;
});