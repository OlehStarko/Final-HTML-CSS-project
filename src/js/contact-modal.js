const children = document.querySelector('.contact-div').children;
const contactcard1 = document.querySelector('.modal-window');
const contactcard2 = document.querySelector('.modal-window1');
const contactcard3 = document.querySelector('.modal-window2');
const modalclose = document.querySelector('.modal-close');
const modalclose1 = document.querySelector('.modal-close1');
const modalclose2 = document.querySelector('.modal-close2');
const modalbtn = document.querySelector('.contact-button__margin');
const contacttel = document.querySelector('.contact-tel');
const contactmail = document.querySelector('.contact-mail');
console.log(children);
console.log(contactcard1);
console.log(contactmail);

for (let i = 0; i < children.length; i += 1) {
  if (i === 0) {
    children[i].addEventListener('click', function () {
      contactcard1.classList.toggle('card-visible');
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.right = 0;
      document.body.style.left = 0;
      document.body.style.position = 'fixed';
    });
  }

  if (i === 1) {
    children[i].addEventListener('click', function () {
      contactcard2.classList.toggle('card-visible');
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.right = 0;
      document.body.style.left = 0;
      document.body.style.position = 'fixed';
    });
  }
  if (i === 2) {
    children[i].addEventListener('click', function () {
      contactcard3.classList.toggle('card-visible');
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.right = 0;
      document.body.style.left = 0;
      document.body.style.position = 'fixed';
    });
  }
}

modalclose.addEventListener('click', function () {
  contactcard1.classList.toggle('card-visible');
  const scrollY = document.body.style.top;
  document.body.style.position = 'static';
  window.scrollTo(0, parseInt(scrollY) * -1);
});

modalclose1.addEventListener('click', function () {
  contactcard2.classList.toggle('card-visible');
  const scrollY = document.body.style.top;
  document.body.style.position = 'static';
  window.scrollTo(0, parseInt(scrollY) * -1);
});

modalclose2.addEventListener('click', function () {
  contactcard3.classList.toggle('card-visible');
  const scrollY = document.body.style.top;
  document.body.style.position = 'static';
  window.scrollTo(0, parseInt(scrollY) * -1);
});

modalbtn.addEventListener('click', function () {
  contactcard1.classList.toggle('card-visible');
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.right = 0;
  document.body.style.left = 0;
  document.body.style.position = 'fixed';
});

contacttel.addEventListener('click', function () {
  contactcard1.classList.toggle('card-hidden');
});
contactmail.addEventListener('click', function () {
  contactcard1.classList.toggle('card-hidden');
});
