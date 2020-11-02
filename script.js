function newStyle() {
  let newColor = '';
  let newFont = '';
  let x = Math.floor(Math.random()*3);
  switch (x){
    case 0:
      newColor = 'red';
      newFont = 'Times New Roman';
      break;
    case 1:
      newColor = 'green';
      newFont = 'Verdana';
      break;
    case 2:
      newColor = 'blue';
      newFont = 'Helvetica';
      break;
  }
  var elem = document.getElementById('logo')
  elem.style.color = newColor;
  elem.style.fontFamily = newFont;
}


