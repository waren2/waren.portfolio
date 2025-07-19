
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwvFwek7WI6ZNYzFFfg6iQwHN8rysW-PbPqZs97vA/dev'; 
    const form = document.getElementById('myForm');

    form.addEventListener('submit', e => {
      e.preventDefault();

      const data = {
        name: form.name.value,
        email: form.email.value
      };

      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        alert('Data submitted!');
        form.reset();
      });
    });