export const removeEmptyProperties = (obj, ...args) => {
  const objCopy = Object.assign({}, obj);
  args.map(key => {
    if (objCopy.hasOwnProperty(key) && objCopy[key] === '') {
      delete objCopy[key];
    }
    return null;
  })
  return objCopy;
}