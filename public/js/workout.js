let x = 1

const AddExercise = async (event) => {
  //event.preventDefault();
  //resets the form for next exercise.
  labels = document.getElementsByTagName('label');
  for (var i = 0; i < labels.length; i++) {
    labels[i].removeAttribute('hidden', 'hidden');
  }
  document.getElementById('distance').type = 'text';
  document.getElementById('duration').type = 'text';
  document.getElementById('weight').type = 'text';
  document.getElementById('sets').type = 'text';
  document.getElementById('reps').type = 'text';


  //  const eList = document.querySelectorAll('#exerciseForm.input');
  //let workoutname = document.getElementById('workout_name').value.trim();
  //let date = document.getElementById('date').value;
  let category = document.getElementById('category').value.trim();
  let name = document.getElementById('excercise').value.trim(); //exercise name
  let equipment = document.getElementById('equipment').value.trim();
  let type = document.getElementById('type').value.trim();
  let muscle = document.getElementById('muscle').value.trim();
  let reps = document.getElementById('reps').value.trim();
  let sets = document.getElementById('sets').value.trim();
  let distance = document.getElementById('distance').value.trim();
  let duration = document.getElementById('duration').value.trim();
  let weight = document.getElementById('weight').value.trim();
  //let exercise = [workoutname, category, date, name, equipment, type, muscle, sets, reps, weight, distance, duration];
  var insert = document.getElementById('addStuff');
  let msg = document.createElement('div');

msg.innerHTML =
`<div class='col'>
<div class='card shadow-sm'>
<div class='card-body'>
<p class='card-text'>
<ul class='list-group' id='exerciselist'>
<li class='list-group-item e' name='anothername' id='anothername'>${name}</li>
<li class='list-group-item e' id='moreequipment'>${equipment}</li>
<li class='list-group-item e' id='anothercategory'>${category}</li>
<li class='list-group-item e' id='anothertype'>${type}</li>
<li class='list-group-item e' id='anothermuscle'>${muscle}</li>
<li class='list-group-item e' id='moresets'>${sets}</li>
<li class='list-group-item e' id='morereps'>${reps}</li>
<li class='list-group-item e' id='moreweight'>${weight}</li>
<li class='list-group-item e' id='moredistance'>${distance}</li>
<li class='list-group-item e' id='moreduration'>${duration}</li>
</ul></p></div></div></div>`
  insert.appendChild(msg);

  let allE = document.querySelectorAll('.e'); 

  Array.from(allE).forEach((userItem) => {
    //userItem.classList.add( `${x}` );
    userItem.setAttribute('data-index', x);
  });

  x++;
};


function updateValue(e) {
  let cardioCat = [distance, duration];
let weightCat = [weight, sets, reps];
  if (cat.value === 'Weight') // selecting weight for category hides distance and duration
  {
    cardioCat.forEach(e => {
      console.log("e", e);
      e.previousElementSibling.setAttribute("hidden", "hidden");
      e.type = 'hidden';
    });
    weightCat.forEach(e => {
      e.previousElementSibling.removeAttribute("hidden", "hidden");
      e.type = 'text';
    });
  }
  if (cat.value === 'Cardio') // selecting cardio hides weight, sets, reps
  {
    weightCat.forEach(e => {
      e.previousElementSibling.setAttribute("hidden", "hidden");
      e.type = 'hidden';
    });
    cardioCat.forEach(e => {
      e.previousElementSibling.removeAttribute("hidden", "hidden");
      e.type = 'text';
    });
  }
}

var cat = document.getElementById("category");
cat.addEventListener('change', updateValue);

document.querySelector('#exerciseForm').addEventListener('reset', AddExercise);

//document.querySelector('#AddExercise').addEventListener('click', AddExercise);
//document.querySelector('#exerciseForm').addEventListener('sumbit', testing);