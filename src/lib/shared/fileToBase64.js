// @ts-nocheck
function fileToBytes(file, callback) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const result = event.target.result;
    callback(result);
  };

  reader.readAsDataURL(file);
}

export default fileToBytes