let output = '5';


function handleCheckbox(checkboxId) {
  // Deactivate other checkboxes
  if (checkboxId === 1) {
    document.getElementById('checkbox2').checked = false;
    document.getElementById('checkbox3').checked = false;
  } else if (checkboxId === 2) {
    document.getElementById('checkbox1').checked = false;
    document.getElementById('checkbox3').checked = false;
  } else if (checkboxId === 3) {
    document.getElementById('checkbox1').checked = false;
    document.getElementById('checkbox2').checked = false;
  }

  // Output a certain value based on the selected checkbox
  
  if (document.getElementById(`checkbox${checkboxId}`).checked) {
    if (checkboxId === 1) {
      output = '5';
    } else if (checkboxId === 2) {
      output = '15';
    } else if (checkboxId === 3) {
      output = '30';
    }
  }
  console.log(output); // Modify this line to display the output in your desired way
}
function compareNumbers(a, b) {
  return b - a;
}
function calcularC() {

  let rally1 = document.getElementById("rally1").value;
  let rally2 = document.getElementById("rally2").value;
  let rally3 = document.getElementById("rally3").value;
  let interval = Number(document.getElementById("D").value);
  let mitin = Number(output) * 60 ;

  let rally1_split = rally1.split(":");
  let rally1_sec = (Number(rally1_split[0]) * 60) + Number(rally1_split[1]);

  let rally2_split = rally2.split(":");
  let rally2_sec = (Number(rally2_split[0]) * 60) + Number(rally2_split[1]);

  let rally3_split = rally3.split(":");
  let rally3_sec = (Number(rally3_split[0]) * 60) + Number(rally3_split[1]);

  let num = [rally1_sec, rally2_sec, rally3_sec];
  num = num.sort(compareNumbers);
  console.log(num);

  let C1 = (num[0] - num[1]) + (interval);
  let C2 = (num[0] - num[2]) + (interval * 2);

  let x1 = mitin - C1;
  let x2 = mitin - C2;

  let convert1_min = Math.floor(x1 / 60);
  let convert2_min = Math.floor(x2 / 60);

  let convert1_sec = Math.floor(x1 % 60);
  let convert2_sec = Math.floor(x2 % 60);

  console.log("rally 2 starts at " + convert1_min + " min " + convert1_sec + " sec ");
  console.log("rally 3 starts at " + convert2_min + " min " + convert2_sec + " sec ");
}
