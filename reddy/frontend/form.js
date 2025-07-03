function fetchPhoneNumber() {
  fetch('https://your-vercel-backend.vercel.app/whatsapp')
    .then(res => res.json())
    .then(data => {
      phoneNumber = data.number;
    });
}
