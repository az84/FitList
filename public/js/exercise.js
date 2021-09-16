const newExercise = async () => {
    event.preventDefault();

const name = document.querySelector('#excercise').value.trim(); //exercise name
const muscle = document.querySelector('#muscle').value.trim();
const reps = document.querySelector('#reps').value.trim();
const sets = document.querySelector('#sets').value.trim();
const weight = document.querySelector('#weight').value.trim();

const response = await fetch('/api/exercise/', {
  method: 'POST',
  body: JSON.stringify({ name, muscle, sets, reps, weight,
    distance }),
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

document.querySelector('#newExercisetbtn').addEventListener('click', newExercise);