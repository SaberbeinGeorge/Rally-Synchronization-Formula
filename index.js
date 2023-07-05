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

}
function compareNumbers(a, b) {
  return b - a;
}
function separate(a){
  var sec;

  if(a.indexOf(':') == -1){
    sec = Number(a);
  }else{
    let split =  a.split(":");
    sec = (Number(split[0]) * 60) + Number(split[1]);
  }
  
  return sec;
}
function calcularC() {
  let rally1 = document.getElementById("rally1").value;
  let rally2 = document.getElementById("rally2").value;
  let rally3 = document.getElementById("rally3").value;
  let interval = Number(document.getElementById("D").value);
  let mitin = Number(output) * 60;



  
  let rally1_sec = separate(rally1);
  
  let rally2_sec = separate(rally2);

  let rally3_sec = separate(rally3);

  var rallys = {
    rally1: {
      name: "A",
      origin: rally1,
      distance: rally1_sec,

    },
    rally2: {
      name: "B",
      origin: rally2,
      distance: rally2_sec,

    },
    rally3: {
      name: "C",
      origin: rally3,
      distance: rally3_sec,
    }
  }

  let num = [rally1_sec, rally2_sec, rally3_sec];
  num = num.sort(compareNumbers);
  rallys = checkfor(rallys, num);



  printresult(rallys);
  function checkfor(rallys, num) {
    // if(num.length == 3){
    let C1 = mitin - (num[0] - num[1]) + (interval);
    let C2 = mitin - (num[0] - num[2]) + (interval * 2);
    let convert1_min = Math.floor(C1 / 60);
    let convert2_min = Math.floor(C2 / 60);

    let convert1_sec = Math.floor(C1 % 60);
    let convert2_sec = Math.floor(C2 % 60);
    Object.keys(rallys).forEach((i) => {
      if (num[0] == rallys[i].distance) {
        rallys[i].queue = "1";
        rallys[i].start_min = mitin / 60;
        rallys[i].start_sec = mitin % 60;


      } else if (num[1] == rallys[i].distance) {
        rallys[i].queue = "2";
        rallys[i].start_min = convert1_min;
        rallys[i].start_sec = convert1_sec;

      } else {
        rallys[i].queue = "3";
        rallys[i].start_min = convert2_min;
        rallys[i].start_sec = convert2_sec;
      }
    });
    return rallys;
    // }








  }
}


function printresult(obj) {
  Object.keys(obj).forEach((i) => {

    if (obj[i].queue == 1) {
      let text = "march " + obj[i].name + " will start the first rally";
      document.getElementById("march " + obj[i].queue).innerHTML = text;
    } else {
      let text = "march " + obj[i].name + " will start at " + obj[i].start_min + " minutes and " + obj[i].start_sec + " seconds of the first rally"
      document.getElementById("march " + obj[i].queue).innerHTML = text;
    }

  }
  );
}
