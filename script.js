const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);

  if (window.scrollY >= menu.offsetTop) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
});

const startCount = (el) => {
  let max = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === max) {
      clearInterval(count);
    }
  }, 2000 / nums);
};
 
(function() {
        // Initialize EmailJS with your user ID
        emailjs.init("xK2WhOUgBcZ4s5JlT"); // Replace with your EmailJS user ID
    })();

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        // Send the form data using EmailJS
        emailjs.sendForm("service_6fb1v5r", "template_2wv44jb", this)
            .then(function(response) {
                console.log("Success:", response);
                alert("Message sent successfully!");  // Alert on successful submission
                document.getElementById("contactForm").reset();  // Reset the form after submission
            }, function(error) {
                console.log("Error:", error);
                alert("Failed to send message. Please try again later.");  // Alert on failure
            });
    });


