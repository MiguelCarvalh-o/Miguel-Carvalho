const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));




const looker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('up');
        }
    });
});

const downElements = document.querySelectorAll('.down');
downElements.forEach((e1) => looker.observe(e1));





const looking = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('zero');
        }
    });
});

const lineElements = document.querySelectorAll('.lines');
lineElements.forEach((e1) => looking.observe(e1));




window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });