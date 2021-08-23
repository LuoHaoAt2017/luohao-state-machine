export function isEmpty(value) {
  if (
    isFalsy(value) ||
    value instanceof Array && value.length === 0 ||
    typeof value === 'object' && Object.keys(value).length
  ) {
    return true;
  }
  return false;
}

export function isFalsy(value) {
  if (value === '' || value === undefined || value === false) {
    return true;
  }
  return false;
}

export function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

export function identity(args) {
  return args;
};

export const RuleType = {
  displayRule: 'displayRule',
  computationRule: 'computationRule',
  linkMappingRule: 'linkMappingRule',
  mappingRule: 'mappingRule',
  customEvent: 'customEvent',
};
