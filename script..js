const wrapper = document.querySelector(".wrapper");
const signUpLink = document.querySelector(".signUp-link");
const signInLink = document.querySelector(".signIn-link");
const toggleletlogin = document.querySelector(".toggle-login");
const Close = document.querySelector(".close");

signUpLink.addEventListener('click', () =>{
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});



signInLink.addEventListener('click', () =>{
    wrapper.classList.toggle('show-sign');
      wrapper.classList.add('show-bg');
});


toggleletlogin.addEventListener('click', () =>{
    toggleletlogin.classList.toggle('active');
      wrapper.classList.toggle('active');
});

Close.addEventListener('click', () =>{
    toggleletlogin.classList.toggle('active');
      wrapper.classList.toggle('active');
       wrapper.classList.remove('show-bg');
});