$(document).ready(function () {
  $("a#pageLink").click(function () {
    $("a#pageLink").removeClass("active");
    $(this).addClass("active");
  });

  $(".btn-show-left-area").click(function () {
    $(".left-area").removeClass("show");
    $(".left-area").addClass("show");
  });

  $(".btn-show-right-area").click(function () {
    $(".right-area").removeClass("show");
    $(".right-area").addClass("show");
  });

  $(".btn-close-right").click(function () {
    $(".right-area").removeClass("show");
  });

  $(".btn-close-left").click(function () {
    $(".left-area").removeClass("show");
  });
});

$('.main-area').scroll(function () {
  if ($('.main-area').scrollTop() >= 88) {
    $('div.main-area-header').addClass('fixed');
  }
  else {
    $('div.main-area-header').removeClass('fixed');
  }
});

document.querySelector('.more-action').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
  // Get the button and SVG element
  const toggleButton = document.querySelector('.btn-toggle');
  const toggleSvg = toggleButton.querySelector('.feather');

  // Add a click event listener to the button
  toggleButton.addEventListener('click', function () {
    // Toggle the class for the SVG
    toggleSvg.classList.toggle('toggle-left');
    toggleSvg.classList.toggle('toggle-right');

    // Toggle the SVG content
    if (toggleSvg.classList.contains('toggle-left')) {
      toggleSvg.innerHTML = `
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="8" cy="12" r="3"></circle>
    `;
      toggleButton.title = "Dark";
    } else {
      toggleSvg.innerHTML = `
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="16" cy="12" r="3"></circle>
    `;
      toggleButton.title = "Light";
    }

    // You may want to add more logic here based on your requirements
  });

  const body = document.body;
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  // Check if it's daytime (before noon) and enable dark mode
  const currentTime = new Date();
  const isDaytime = currentTime.getHours() > 16;

  if (isDaytime && isDarkMode) {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    toggleButton.checked = false;
  } else if (!isDaytime && !isDarkMode) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    toggleButton.checked = true;
  }
  // Add a change event listener to the dark mode toggle switch
  toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});

function spinOnClick() {
  const button = document.querySelector('.btn-setting');

  // Toggle the spinning class on the button
  button.classList.toggle('spinning');

  // Reset the spinning class after the animation completes
  button.addEventListener('animationend', () => {
    button.classList.remove('spinning');
  });
}
