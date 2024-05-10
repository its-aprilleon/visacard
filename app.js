//Get UI
const inputs = document.querySelectorAll("input");
//console.log(inputs);

let datas = [];

inputs.forEach(function (input) {
  //console.log(input);

  input.addEventListener("keyup", function (value) {
    // console.log(this.value);

    datas.push({
      digit: inputs[0].value,
      name: inputs[1].value,
      exp: inputs[2].value,
    });

    console.log(datas[datas.length - 1]);
  });
});
