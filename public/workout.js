const newWorkout = async () => {
  event.preventDefault();
  
  const workoutName = document.querySelector('#workout_name').value.trim();
  const excercise = document.querySelector('#excercise').value.trim();
  const sets = document.querySelector('#sets').value.trim();
  const reps = document.querySelector('#reps').value.trim();

  const response = await fetch('/api/workouts/', {
    method: 'POST',
    body: JSON.stringify({ workoutName, excercise, sets, reps }),
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
