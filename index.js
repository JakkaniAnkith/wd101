
function showUserData(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;

  document.getElementById('displayUsername').innerText = username;
  document.getElementById('displayEmail').innerText = email;
  document.getElementById('displayDOB').innerText = dob;

  document.getElementById('userInfoContainer').style.display = 'block';
}
