document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const status = document.getElementById('status');
  status.textContent = `Thank you, ${name}! We will contact you soon.`;
});
