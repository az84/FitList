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

  console.log(allE.length);
  let ex = allE.length;

  let fullArr = Array.from(allE);
  console.log('fullArr', fullArr);

  fullArr.forEach(element => console.log(element));
console.log("ex", ex);
  switch (ex) {

case 10:
  var nameone = document.getElementById('anothername').textContent;
  var equipmentone = document.getElementById('moreequipment').textContent;
  var categoryone = document.getElementById('anothercategory').textContent
  var typeone = document.getElementById('anothertype').textContent;
  var muscleone = document.getElementById('anothermuscle').textContent;
  var setsone = document.getElementById('moresets').textContent;
  var repsone = document.getElementById('morereps').textContent;
  var weightone = document.getElementById('moreweight').textContent;
  var distanceone = document.getElementById('moredistance').textContent;
  var durationone = document.getElementById('moreduration').textContent;

    let response = await fetch('/api/we', {
      method: 'POST',
      body: JSON.stringify({ workoutname, date, category, name, equipment, type, muscle, sets, reps, weight, distance, duration, categoryone, nameone, equipmentone, typeone, muscleone,
        setsone, repsone, weightone, distanceone, durationone } ),
      headers: { 'Content-Type': 'application/json'},
    }); 
    //if (response.ok) { document.location.replace('/profile');
    if (response.ok) { document.location.replace('/profile')
    console.log('response', response);
    } else { alert(response.statusText);
    }

break;
//if (ex==20)
//if (ex==30)
case 0:
{
    console.log('name', name);
    let response = await fetch('/api/workout/', {
      method: 'POST',
      body: JSON.stringify({ workoutname, date, category, name, equipment, type, muscle, sets, reps, weight, distance, duration } ),
      headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) { document.location.replace('/profile');
    console.log('response', response);
    } else { alert(response.statusText);
    }
    break;
}
  }
};

document.querySelector('#newWorkoutbtn').addEventListener('click', newWorkout);