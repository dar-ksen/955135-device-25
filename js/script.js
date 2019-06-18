if (document.querySelector('.modal-write-us')) {
  var writeUs = document.querySelector('.modal-write-us'),
      form    = writeUs.querySelector('form'),
      userName = document.getElementById('user-name'),
      userEmail = document.getElementById('user-email'),
      userLetter = document.getElementById('user-letter'),
      openWriteUs = document.querySelector('.btn-write-us'),
      closeWriteUs = writeUs.querySelector('.modal-close');
  var modalMap = document.querySelector('.modal-map'),
      openModalMap = document.querySelector('.btn-map'),
      closeModalMap = modalMap.querySelector('.modal-close');

  var isStorageSupport = true;
  var storage = "";
  try {
    storage = localStorage.getItem("userName");
  } catch (err) {
      isStorageSupport = false;
  }

  openWriteUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUs.classList.add('modal-show');
    if (isStorageSupport&&localStorage.getItem("userName")) {
      userName.value = localStorage.getItem("userName");
      userEmail.value = localStorage.getItem("userEmail");
      userLetter.focus();
    } else {
      userName.focus();
    }
  });

  closeWriteUs.addEventListener('click', function () {
    writeUs.classList.remove('modal-show');
  });

  form.addEventListener('submit', function (evt){
    if (!userName||!userEmail) {
      evt.preventDefault();
      console.log('Введите имя и email');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userEmail', userEmail.value);
      }
    }
  })


  openModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
  });

  closeModalMap.addEventListener('click', function () {
    modalMap.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains('modal-show')) {
      writeUs.classList.remove('modal-show');
    }
    if (modalMap.classList.contains('modal-show')) {
      modalMap.classList.remove('modal-show');
    }
  }
});
}


var search = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search-btn');

search.addEventListener('focus', function (evt) {
  searchBtn.classList.remove('visually-hidden');
})

search.addEventListener('blur', function (evt) {
  if (!search.value) {
    searchBtn.classList.add('visually-hidden');
  }
})

