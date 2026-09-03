function describeValue(value) {
  if (value === null) {
    return 'null';  
  } else if (value === undefined) {
    return 'undefined';  
  } else if (typeof value === 'string') {
    return 'string';  
  } else if (typeof value === 'number') {
    return 'number';  
  } else if (typeof value === 'boolean') {
    return 'boolean';  
  } else if (typeof value === 'object') {
    return 'object';  
  }
}