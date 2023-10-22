const items = document.querySelectorAll('.list-item a');

items.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    item.style.color = 'black';

    for (let i = 0; i < items.length; i++) {
      if (i !== index) {
        items[i].style.color = 'rgb(57, 151, 57)';
      }
    }
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = 'black';
    for (let i = 0; i < items.length; i++) {
      if (i !== index) {
        items[i].style.color = 'black';
      }
    }
  });
});

