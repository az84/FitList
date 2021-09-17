const newWorkout = async (event) => {
  event.preventDefault();

  const noteList = document.querySelectorAll('#exerciseForm.input');
  const workoutName = document.querySelector('#workout_name').value.trim();
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



  const response = await fetch('/api/workouts/', {
    method: 'POST',
    body: JSON.stringify({ workoutName, category, date, name, equipment, type, muscle, sets, reps, weight, distance, duration, sets, reps } ),
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
  console.log("eList", eList);
            if (eList) //!== null
            {
            const exerciseArray = Array.from(eList).forEach((userItem) => {
                console.log("userItem", userItem);
                });
            }

  const workoutName = document.querySelector('#workout_name').value.trim();
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

  var insert = document.getElementById("addStuff");
  let msg = document.createElement("div");
  msg.innerHTML = `<div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <p class="card-header">${name}
        </p>
        <p class="card-text">
          <ul class="list-group"></ul>
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
  if(exerciseArray) console.log("exerciseArray");
};


document.querySelector('#newWorkoutbtn').addEventListener('click', newWorkout);
//document.querySelector('form').addEventListener('submit', AddExercise);
document.querySelector('#AddExercise').addEventListener('click', AddExercise);