const items = document.querySelectorAll(".item");

items.forEach((faq) => {
  const btn = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  btn.addEventListener("click", () => {
    //close all other items except the one clicked
    items.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
        item.querySelector(".answer").style.maxHeight = '0px';
      }
    });

    faq.classList.toggle("active");
    if (faq.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = '0px';
    }
  });

});
