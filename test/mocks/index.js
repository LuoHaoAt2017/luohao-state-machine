import ControlTypes from '@/control/types';
export default {
  ObjectId: 'a562b22a-3cc0-4c8b-8562-653422dc92ad',
  ReturnData: {
    F00001: {
      data: {
        visible: true,
        value: ''
      },
      opts: {
        controlKey: ControlTypes.FormTextbox,
        dataField: 'F00001',
        displayName: '文本控件1'
      }
    },
    F00002: {
      data: {
        visible: true,
        value: ''
      },
      opts: {
        controlKey: ControlTypes.FormTextbox,
        dataField: 'F00002',
        displayName: '文本控件2'
      }
    },
    F00003: {
      data: {
        visible: true,
        value: '',
        computeRule: '{F00001} + {F00002}',
        computeRuleFields: ['F00001', 'F00002']
      },
      opts: {
        controlKey: ControlTypes.FormTextbox,
        dataField: 'F00003',
        displayName: '文本控件3'
      }
    }
  }
}