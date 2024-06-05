export const Validation = (() => {
  window.addEventListener(`load`, () => {
    const inputs = document.querySelectorAll(`[data-form-require]`);
    let successes = null;

    if (inputs === undefined || inputs === null) {
      return;
    }

    inputs.forEach((input) => {
      const successMessage = input.nextElementSibling;
      const errorMessage = successMessage.nextElementSibling;

      input.addEventListener(`input`, () => {
        switch (input.name) {
          case `your-name`:
            if (input.value.length === 0) {
              successMessage.classList.remove(`js-success`);
              errorMessage.classList.add(`js-error`);
            } else {
              successMessage.classList.add(`js-success`);
              errorMessage.classList.remove(`js-error`);
            }
            break;
          case `your-email`:
            if (
              !input.value.match(
                /^(([^<>()\[\]\.,;:\s@\"'#\*]+(\.[^<>()\[\]\.,;:\s@\"'#\*]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"'#\*]+\.)+[^<>()[\]\.,;:\s@\"'#\*]{2,})$/i,
              ) ||
              input.value.length === 0
            ) {
              successMessage.classList.remove(`js-success`);
              errorMessage.classList.add(`js-error`);
            } else {
              successMessage.classList.add(`js-success`);
              errorMessage.classList.remove(`js-error`);
            }
            break;
          case `your-subject`:
            if (input.value.length === 0) {
              successMessage.classList.remove(`js-success`);
              errorMessage.classList.add(`js-error`);
            } else {
              successMessage.classList.add(`js-success`);
              errorMessage.classList.remove(`js-error`);
            }
            break;
          case `your-message`:
            if (input.value.length === 0) {
              successMessage.classList.remove(`js-success`);
              errorMessage.classList.add(`js-error`);
            } else {
              successMessage.classList.add(`js-success`);
              errorMessage.classList.remove(`js-error`);
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
        const submit = document.querySelector(`[data-form-submit]`);
        successes = document.querySelectorAll(`.js-success`);
        if (inputs.length === successes.length) {
          submit.disabled = false;
        } else {
          submit.disabled = true;
        }
      };
    });
  });
})();

export const Submit = (() => {
  const submit = document.querySelector(`[data-form-submit]`);
  const form = document.querySelector(`[data-form]`);

  const postFetch = () => {
    let formData = new FormData(form);
    const base_url = `https://sushiboys350.com`;
    const page_url = location.href;
    let id = null;
    const toaster = document.querySelector(`[data-form-toaster]`);
    let successes = null;

    if (page_url.includes(`sushiboys350.com`)) {
      id = `35`;
    } else {
      id = `36`;
    }

    const api_endpoint = `${base_url}/wordpress/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`;

    fetch(api_endpoint, {
      method: `POST`,
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // console.log(`error!`);
          toaster.innerHTML = `入力内容を確認して、もう一度試すんだお…`;
          toaster.classList.add(`js-error`);
          submit.disabled = false;
          setTimeout(() => {
            toaster.classList.remove(`js-error`);
          }, 3000);
        } else {
          // console.log(`ok!`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === `validation_failed`) {
          toaster.innerHTML = `入力内容を確認して、もう一度試すんだお…`;
          toaster.classList.add(`js-error`);
          submit.disabled = false;
          setTimeout(() => {
            toaster.classList.remove(`js-error`);
          }, 3000);
        } else {
          toaster.innerHTML = `送信完了だお！<br>自動返信メールを確認するんだお！`;
          toaster.classList.add(`js-success`);
          submit.disabled = true;
          Array.from(document.querySelectorAll(`input`)).forEach(
            (input) => (input.value = ``),
          );
          document.querySelector(`textarea`).value = ``;
          setTimeout(() => {
            checkError();
          }, 3000);
          const checkError = () => {
            successes = document.querySelectorAll(`.js-success`);
            successes.forEach((success) => {
              success.classList.remove(`js-success`);
            });
          };
        }
      })
      .catch((error) => {
        // console.log(error);
        toaster.innerHTML = `入力内容を確認して、もう一度試すんだお…`;
        toaster.classList.add(`js-error`);
        submit.disabled = false;
        setTimeout(() => {
          toaster.classList.remove(`js-error`);
        }, 3000);
      });
  };

  submit.addEventListener(`click`, (e) => {
    e.preventDefault();
    submit.disabled = true;
    postFetch();
  });
})();
