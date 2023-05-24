

// ======== ГЕНЕРАТОР ЦВЕТА (RGB) ===========

// const MIN_LIGHT = 30; //Светлость цвета от 1 до 255
// const MAX_LIGHT = 200; //Светлость цвета от 1 до 255

export const randomColor=(MIN_LIGHT = 0, MAX_LIGHT = 255)=>{
  // Генерируем случайные значения  (RGB)
 
  MIN_LIGHT = MIN_LIGHT > 250 ? 250 : MIN_LIGHT;
  MIN_LIGHT = MIN_LIGHT < 0 ? 0 : MIN_LIGHT;
  MAX_LIGHT = MAX_LIGHT > 255 ? 255 : MAX_LIGHT;
  MAX_LIGHT = MAX_LIGHT < 5 ? 5 : MAX_LIGHT;

  const red = Math.floor(Math.random() * (MAX_LIGHT - MIN_LIGHT) + MIN_LIGHT);
  const green = Math.floor(Math.random() * (MAX_LIGHT - MIN_LIGHT) + MIN_LIGHT);
  const blue = Math.floor(Math.random() * (MAX_LIGHT - MIN_LIGHT) + MIN_LIGHT);

  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return color;
}


// Math.random() * (10 - 1) + 3; // псевдовипадкове число від 3 до 10