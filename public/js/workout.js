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

  const response = await fetch('/api/workout/w', {
    method: 'POST',
    body: JSON.stringify({ workoutname, category, date, name, equipment, type, muscle, sets, reps, weight, distance, duration } ),
    headers: { 'Content-Type': 'application/json'},
  });

  if (response.ok) { document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
};

const AddExercise = async (event) => {
  //event.preventDefault();

  const eList = document.querySelectorAll("#exerciseForm.input");
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


  const response = await fetch('/api/workout/', {
    method: 'POST',
    body: JSON.stringify({ workoutname, category, date, name, equipment, type, muscle, sets, reps, weight, distance, duration } ),
    headers: { 'Content-Type': 'application/json'},
  });

  if (response.ok) { console.log("is ok", response);
  } else {
    alert(response.statusText);
  }

  // this should be done with a partial 
  var insert = document.getElementById("addStuff");
  let msg = document.createElement("div");
  msg.innerHTML = `<div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <p class="card-header">${name}
        </p>
        <p class="card-text">
          <ul class="list-group">
          <li class='list-group-item'>Equipment ${equipment}</li>
          <li class="list-group-item">Category: ${category}</li>
          <li class="list-group-item">Type: ${type}</li>
          <li class="list-group-item">Muscle: ${muscle}</li>
          <li class="list-group-item">Sets: ${sets}</li>
          <li class="list-group-item">Reps: ${reps}</li>
          <li class="list-group-item">Weight: ${weight}</li>
          <li class="list-group-item">Distance: ${distance}</li>
          <li class="list-group-item">Duration: ${duration}</li>
          </ul>
        </p>
      </div>
    </div>
  </div>`
  insert.appendChild(msg);
};


document.querySelector('#newWorkoutbtn').addEventListener('click', newWorkout);
//document.querySelector('.exerciseForm').addEventListener('reset', newWorkout);
document.querySelector('#AddExercise').addEventListener('click', AddExercise);