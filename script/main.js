//   const scriptURL = 'https://script.google.com/macros/s/AKfycbxT9sVl_t6E9Z-DBzUX2mH0S0vOmusvjksFmzAnwU84eVwIXtKS4msOTKkNGNNwje2c/exec';
//     const form = document.getElementById('myForm');
//     const responseMessage = document.getElementById('responseMessage');

//     form.addEventListener('submit', e => {
//       e.preventDefault();
//       const data = { name: form.name.value, email: form.email.value };

//       fetch(scriptURL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       })
//       .then(response => response.json())
//       .then(result => {
//         responseMessage.innerHTML = '<div class="alert alert-success">Your data has been submitted!</div>';
//         form.reset();
//       })
//       .catch(error => {
//         responseMessage.innerHTML = '<div class="alert alert-danger">Error! Please try again.</div>';
//         console.error('Error!', error.message);
//       });
//     });
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbxT9sVl_t6E9Z-DBzUX2mH0S0vOmusvjksFmzAnwU84eVwIXtKS4msOTKkNGNNwje2c/exec';

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const data = {
//     name: form.name.value,
//     email: form.email.value
//   };
//   fetch(scriptURL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   })
//   .then(r => r.json())
//   .then(res => {
//     console.log('Success:', res);
//     responseMessage.innerHTML = '<div class="alert alert-success">Submitted!</div>';
//     form.reset();
//   })
//   .catch(err => {
//     console.error('Error:', err);
//     responseMessage.innerHTML = '<div class="alert alert-danger">Error!</div>';
//   });
// });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzM9yBX3CeOzScba_1y4hwIbYBY_P6TiLSH9eW9i92GyWbcJ11uHIPcLi0XHMMUn3Hk/exec';  // must end with /exec
  const form = document.getElementById('myForm');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop normal submit / page jump

    const formData = new FormData(form);  // sends name & email

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        responseMessage.innerHTML =
          '<div class="alert alert-success">Submitted!</div>';
        form.reset();
      })
      .catch(err => {
        console.error(err);
        responseMessage.innerHTML =
          '<div class="alert alert-danger">Error submitting.</div>';
      });
  }); 