export const removeEmptyProperties = (obj, ...args) => {
  const objCopy = Object.assign({}, obj);
  args.map(key => {
    console.log('>>>>>>>', objCopy.hasOwnProperty(key) , objCopy[key] === '');
    if (objCopy.hasOwnProperty(key) && objCopy[key] === '') {
      console.log('Removing ', key);
      delete objCopy[key];
    }
    return null;
  })
  return objCopy;
}