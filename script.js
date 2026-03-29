  function openDetail() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('detail-page').style.display = 'block';
    window.scrollTo(0, 0);
  }

  function goBack() {
    document.getElementById('detail-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
  }

  function setFilter(btn) {
    var btns = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
    }
    btn.classList.add('active');
  }

  function setDay(btn) {
    var days = document.querySelectorAll('.day');
    for (var i = 0; i < days.length; i++) {
      days[i].classList.remove('active');
    }
    btn.classList.add('active');
  }

  function bookPlace() {
    alert('Бронирование подтверждено!');
  }

  if (window.Telegram) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
  }
