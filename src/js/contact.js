const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-form-require]');
const submit = document.querySelector('[data-form-submit]');
let successes = null;

export const Validation = (() => {

  window.addEventListener('load', () => {

    if (inputs === undefined || inputs === null) { return }

    inputs.forEach(input => {
      const successMessage = input.nextElementSibling;
      const errorMessage = successMessage.nextElementSibling;

      input.addEventListener('input', () => {
        switch (input.name) {
          case 'your-name':
            if (input.value.length === 0) {
              successMessage.classList.remove('js-success');
              errorMessage.classList.add('js-error');
            } else {
              successMessage.classList.add('js-success');
              errorMessage.classList.remove('js-error');
            }
            break;
          case 'your-email':
            if (!input.value.match(/^(([^<>()\[\]\.,;:\s@\"'#\*]+(\.[^<>()\[\]\.,;:\s@\"'#\*]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"'#\*]+\.)+[^<>()[\]\.,;:\s@\"'#\*]{2,})$/i) || input.value.length === 0) {
              successMessage.classList.remove('js-success');
              errorMessage.classList.add('js-error');
            } else {
              successMessage.classList.add('js-success');
              errorMessage.classList.remove('js-error');
            }
            break;
          case 'your-subject':
            if (input.value.length === 0) {
              successMessage.classList.remove('js-success');
              errorMessage.classList.add('js-error');
            } else {
              successMessage.classList.add('js-success');
              errorMessage.classList.remove('js-error');
            }
            break;
          case 'your-message':
            if (input.value.length === 0) {
              successMessage.classList.remove('js-success');
              errorMessage.classList.add('js-error');
            } else {
              successMessage.classList.add('js-success');
              errorMessage.classList.remove('js-error');
            }
            break;
          default:
            break;
        }
        setTimeout(() => {
          checkError();
        }, 300);
      });

      const checkError = () => {
        successes = document.querySelectorAll('.js-success');
        if (inputs.length === successes.length) {
          submit.disabled = false;
        } else {
          submit.disabled = true;
        }
      }

    });

  });

})();

export const Submit = (() => {

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    submit.disabled = true;
    postFetch();
  });

  const postFetch = () => {
    let formData = new FormData(form);
    const url_base = 'https://sushiboys350.com';
    const url = location.href;
    let id = null;

    if (url.includes('sushiboys350.com')) {
      id = 5;
    } else {
      id = 8;
    }

    const api_endpoint = `${url_base}/wordpress/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`;

    fetch(api_endpoint, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        console.log('error!');
        submit.disabled = false;
      } else {
        console.log('ok!');
      }
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.status === 'validation_failed') {
        submit.disabled = false;
      } else {
        submit.disabled = true;
        Array.from(document.querySelectorAll('input')).forEach(
          input => (input.value = '')
        );
        document.querySelector('textarea').value = '';
        setTimeout(() => {
          checkError();
        }, 300);
        const checkError = () => {
          successes = document.querySelectorAll('.js-success');
          successes.forEach(success => {
            success.classList.remove('js-success');
          });
        }
      }
    }).catch((error) => {
      console.log(error);
      submit.disabled = false;
    });
  };

})();
