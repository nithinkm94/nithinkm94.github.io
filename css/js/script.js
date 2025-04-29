// Typing effect
const typedText = ["Web Developer", "UI/UX Designer", "Freelancer"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  const el = document.getElementById("typed");
  if (i < typedText.length) {
    if (!isDeleting && j <= typedText[i].length) {
      currentText = typedText[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = typedText[i].substring(0, j--);
    }

    el.textContent = currentText;

    if (!isDeleting && j === typedText[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % typedText.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}

type();

// Scroll animation
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
