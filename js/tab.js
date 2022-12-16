let tabsBtn = document.querySelectorAll('.how-we-work__item-btn');
let tabsItem = document.querySelectorAll('.how-we-work__bottom-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how-we-work__item-btn_active')});
    e.currentTarget.classList.add('how-we-work__item-btn_active');

    tabsItem.forEach(function(element){ element.classList.remove('how-we-work__bottom-content_active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__bottom-content_active');
  });
});

