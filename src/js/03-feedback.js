import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const inputValues = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(inputValues));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
  //   console.log(JSON.stringify(inputValues));
}

function populateFormData(e) {
  try {
    const savedData = JSON.parse(localStorage.getItem(FORM_KEY));

    if (savedData) {
      form.elements.email.value = savedData.email;
      form.elements.message.value = savedData.message;
    }
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}
populateFormData();
