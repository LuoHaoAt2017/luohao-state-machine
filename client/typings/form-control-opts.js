import { ControlMap, ControlType } from './form-control-type';

export const ControlBaseOpts = {
  display_name: '',
  display: true,
  display_rule: '',
  control_code: '',
  control_type: '',
  default_value: ''
}

export const FormControlOpts = {
  [ControlMap.FormTextbox]: {
    control_type: ControlType.FormTextbox,
    display_name: '文本控件',
    default_value: '',
  },
  [ControlMap.FormNumber]: {
    control_type: ControlType.FormNumber,
    display_name: '数字控件',
    default_value: ''
  },
  [ControlMap.FormSelect]: {
    control_type: ControlType.FormSelect,
    display_name: '下拉选择控件',
    default_value: [
      '选择1', '选择2', '选择3', 
    ]
  },
}