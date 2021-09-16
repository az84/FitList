const newWorkout = async () => {
  event.preventDefault();
  
  const workoutName = document.querySelector('#workout_name').value.trim();
  const name = document.querySelector('#excercise').value.trim(); //exercise name
  const category = document.querySelector('#category').value.trim();
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
    body: JSON.stringify({ workoutName, name, equipment, type, muscle, sets, reps, weight,
      distance, duration, sets, reps }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#newWorkoutbtn').addEventListener('click', newWorkout);
