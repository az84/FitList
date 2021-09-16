const newWorkout = async () => {
  event.preventDefault();
  
  const workoutName = document.querySelector('#workout_name').value.trim();
  
  // const name = document.querySelector('#excercise').value.trim(); //exercise name
  // const muscle = document.querySelector('#muscle').value.trim();
  // const reps = document.querySelector('#reps').value.trim();
  // const sets = document.querySelector('#sets').value.trim();
  // const distance = document.querySelector('#distance').value.trim();
  // const weight = document.querySelector('#weight').value.trim();

  const response = await fetch('/api/workouts/', {
    method: 'POST',
    body: JSON.stringify({ workoutName, type }),
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
