var i = 0;
document.getElementsByName('addAchievement')[0].onclick = clickAchievement;

function clickAchievement() {
  i++;
  var options = {
    className: 'achievement-blue',
    number: i,
    img: 'owl-blue.png'
  };

  if (i % 2) {
    options.className = '';
  }
  if (i % 3) {
    options.img = '';
  }
  if (!(i % 4)) {
    options.img = 'owl-default.png';
  }
  addAchievement(options);
}

function addAchievement(options) {
  var className = options.className || '';
  var number = options.number || '';
  var img = options.img || '';

  document.getElementById('achievements-area').innerHTML += '<div class="achievement ' + className + '">' +
    '<div class="achievement-count-border"></div>' +
    '<div class="achievement-background"><img src="' + img + '"/></div>' +
    '<div class="achievement-count-area"><div class="achievement-count-number">' +
    '' + number + '</div></div>' +
    '</div>';
}