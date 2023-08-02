 const getstatus = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    return [max,min,sum]
    
}
module.exports = {
    getstatus
  };

