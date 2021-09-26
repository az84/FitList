const newWorkout = async (event) => {
  event.preventDefault();

  //const eList = document.querySelectorAll('#exerciseForm.input');
  let workoutname = document.getElementById('workout_name').value.trim();
  let date = document.getElementById('date').value.trim();
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

  let allE = document.querySelectorAll('.e'); 
  let ex = allE.length;

  console.log('ex', ex);
switch (ex) 
{
  case 10:
    var nameone = document.getElementById('anothername').textContent;
    var equipmentone = document.getElementById('moreequipment').textContent;
    var categoryone = document.getElementById('anothercategory').textContent
    var typeone = document.getElementById('anothertype').textContent;
    var muscleone = document.getElementById('anothermuscle').textContent;
    var repsone = document.getElementById('morereps').textContent;
    var weightone = document.getElementById('moreweight').textContent;
    var distanceone = document.getElementById('moredistance').textContent;
    var durationone = document.getElementById('moreduration').textContent;
    var setsone = document.getElementById('moresets').textContent;

      let response = await fetch('/api/we/', {
        method: 'POST',
        body: JSON.stringify({ workoutname, date, category, name, equipment, type, muscle, sets, reps, weight, distance, duration, categoryone, nameone, equipmentone, typeone, muscleone, repsone, setsone, weightone, distanceone, durationone } ),
        headers: { 'Content-Type': 'application/json'},
      }); 
      if (response.ok) { document.location.replace('/profile')
      console.log('response', {response});
      } else { alert(response.statusText);
      }

break;

//case 20:
  //break;

  default:
  {
      let response = await fetch('/api/workout/', {
        method: 'POST',
        body: JSON.stringify({ workoutname, date, category, name, equipment, type, muscle, sets, reps, weight, distance, duration } ),
        headers: { 'Content-Type': 'application/json'},
      });
      if (response.ok) {
      document.location.replace('/profile');
      console.log('response', response);
      } else { alert(response.statusText);
      }
      break;
  }
  }
};

/*const test = async (event) => {       // was going to try to switch from fetch using json to using formdata
  let exerciseForm = document.getElementById('exerciseForm');
  let exerciseFormData = new FormData(exerciseForm);
  console.log('exerciseFormData', exerciseFormData);
  console.log('FormData.entries()', exerciseFormData.entries());
  console.log('FormData.values()', exerciseFormData.values());
  console.log('FormData.keys()', exerciseFormData.keys());
} */
//document.querySelector('#exerciseForm').addEventListener('submit', test);

document.querySelector('#newWorkoutbtn').addEventListener('click', newWorkout);
