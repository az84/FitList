let x = 1

const newWorkout = async (event) => {
  event.preventDefault();

  //const eList = document.querySelectorAll('#exerciseForm.input');
  const workoutname = document.querySelector('#workout_name').value.trim();
  const date = document.querySelector('#date').value.trim();
  const category = document.querySelector("#category").value.trim();
  const name = document.querySelector('#excercise').value.trim(); //exercise name
  const equipment = document.querySelector('#equipment').value.trim();
  const type = document.querySelector('#type').value.trim();
  const muscle = document.querySelector('#muscle').value.trim();
  const reps = document.querySelector('#reps').value.trim();
  const sets = document.querySelector('#sets').value.trim();
  const distance = document.querySelector('#distance').value.trim();
  const duration = document.querySelector('#duration').value.trim();
  const weight = document.querySelector('#weight').value.trim();

  let allE = document.querySelectorAll('.e'); 
  console.log(allE.length);
  let fullArr = Array.from(allE);
  //console.log("fullArr", fullArr);
  //fullArr.forEach(element => console.log(element.textContent));


switch (allE.length) {

  case ex=10:
    const categoryone = document.querySelector('.category','.1').textContent
    const nameone = document.querySelector('.name','.1').textContent; //exercise name
    const equipmentone = document.querySelector('.equipment','.1').textContent;
    const typeone = document.querySelector('.type','.1').textContent;
    const muscleone = document.querySelector('.muscle','.1').textContent;
    const repsone = document.querySelector('.reps','.1').value;
    const setsone = document.querySelector('.sets','.1').value;
    const distanceone = document.querySelector('.distance','.1').value;
    const durationone = document.querySelector('.duration','.1').value;
    const weightone = document.querySelector('.weight','.1').value;
    const r = await fetch('/api/we', {
      method: 'POST',
      body: JSON.stringify({ workoutname, date, category, name, equipment, type, muscle, sets, reps, weight, distance, duration, categoryone, nameone, equipmentone, typeone, muscleone,
        setsone, repsone, weightone, distanceone, durationone  } ),
      headers: { 'Content-Type': 'application/json'},
    }); 
    if (r.ok) { document.location.replace('/profile');
    console.log("r", r);
    } else { alert(r.statusText);
    }
  break;

  case ex=20:
    
  break;

  case ex=30:
    
  break;
  
  default:
    console.log("name", name);
    let response = await fetch('/api/workout/', {
      method: 'POST',
      body: JSON.stringify({ workoutname, date, category, name, equipment, type, muscle, sets, reps, weight, distance, duration } ),
      headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) { document.location.replace('/profile');
    console.log("response", response);
    } else { alert(response.statusText);
    }
    break;
}

};


const AddExercise = async (event) => {
  event.preventDefault();
  
//  const eList = document.querySelectorAll("#exerciseForm.input");
  let workoutname = document.querySelector('#workout_name').value.trim();
  let date = document.querySelector('#date').value.trim();
  let category = document.querySelector("#category").value.trim();
  let name = document.querySelector('#excercise').value.trim(); //exercise name
  let equipment = document.querySelector('#equipment').value.trim();
  let type = document.querySelector('#type').value.trim();
  let muscle = document.querySelector('#muscle').value.trim();
  let reps = document.querySelector('#reps').value.trim();
  let sets = document.querySelector('#sets').value.trim();
  let distance = document.querySelector('#distance').value.trim();
  let duration = document.querySelector('#duration').value.trim();
  let weight = document.querySelector('#weight').value.trim();

   let exercise = [workoutname, category, date, name, equipment, type, muscle, sets, reps, weight, distance, duration];
  console.log(exercise);


  // this should be done with a partial 
  var insert = document.getElementById("addStuff");
  let msg = document.createElement("div");
  msg.innerHTML = `<div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <p class="card-text">
          <ul class="list-group">
          <li class='list-group-item e name'>${name}</li>
          <li class='list-group-item e equipment'>${equipment}</li>
          <li class="list-group-item e category">${category}</li>
          <li class="list-group-item e type">${type}</li>
          <li class="list-group-item e muscle">${muscle}</li>
          <li class="list-group-item e sets">${sets}</li>
          <li class="list-group-item e reps">${reps}</li>
          <li class="list-group-item e weight">${weight}</li>
          <li class="list-group-item e distance">${distance}</li>
          <li class="list-group-item e duration">${duration}</li>
          </ul>
        </p>
      </div>
    </div>
  </div>`
  insert.appendChild(msg);

  let temp = document.querySelectorAll('.e', '.1');
  console.log(temp.length);
  //let allE = document.querySelectorAll('.e');
  //console.log(allE.length);
  let fullArr = Array.from(temp);
  //console.log("fullArr", fullArr);
//  console.log(fullArr.length);

  Array.from(temp).forEach((userItem) => {
    userItem.classList.add( `${x}` );
    console.log(userItem);
  });

  fullArr.forEach(element => console.log(element));

  x++;
};

document.querySelector('#newWorkoutbtn').addEventListener('click', newWorkout);
//document.querySelector('.exerciseForm') .addEventListener('reset', newWorkout);
document.querySelector('#AddExercise').addEventListener('click', AddExercise);