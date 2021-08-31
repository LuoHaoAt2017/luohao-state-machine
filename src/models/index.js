import formActions from './actions';
import formMutations from './mutations';
import formGetters from './getter';

const namespace = 'form';

// 查看一条数据时，数据不存在，加载该条数据，将数据存储在 store 中。
// 编辑一条数据时，没有必要重新加载这条数据，直接从 store 中读取数据。
// 编辑完成之后，使用编辑成功后的数据替换编辑前的数据。

// 删除一条数据时，首先将该条数据从 database 删除，删除成功后，从 store 中删除。

function registerModule(store, state) {
  const objectId = state.id;
  if (store) {

  }
  store.registerModule([namespace, objectId], {
    namespace: true,
    state: state,
    getters: formGetters,
    mutations: formMutations,
    actions: formActions
  });
}