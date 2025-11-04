// messages for the flowers
var messages = [
    {
      title: "You made class feel like community 🌿",
      text: "Thank you for creating a space where all of us felt seen and heard.",
      from: "— Selin",
      color: "pink"
    },
    {
      title: "Your guidance matters",
      text: "You never rushed us, and you always listened. That changed my semester.",
      from: "— your student",
      color: "gold"
    },
    {
      title: "You inspired me",
      text: "Your passion for the subject made me want to keep going.",
      from: "",
      color: "blue"
    },
    {
      title: "Happy birthday! 🎂",
      text: "We hope this shows how appreciated you are.",
      from: "— all of us",
      color: "pink"
    }
  ];
  
  var garden = document.getElementById("garden");
  var modalBackdrop = document.getElementById("modalBackdrop");
  var modalTitle = document.getElementById("modalTitle");
  var modalMessage = document.getElementById("modalMessage");
  var modalFrom = document.getElementById("modalFrom");
  var closeModalBtn = document.getElementById("closeModal");
  var intro = document.getElementById("intro");
  var enterBtn = document.getElementById("enterBtn");
  
  // build flowers
  for (var i = 0; i < messages.length; i++) {
    var m = messages[i];
    var flower = document.createElement("button");
    flower.className = "flower";
    if (m.color) {
      flower.className += " " + m.color;
    }
    flower.setAttribute("data-index", i);
    flower.setAttribute("aria-label", m.title);
  
    var shortTitle = m.title;
    if (shortTitle.length > 28) {
      shortTitle = shortTitle.slice(0, 25) + "...";
    }
  
    flower.innerHTML =
      '<div class="stem"></div>' +
      '<div class="leaf left"></div>' +
      '<div class="leaf right"></div>' +
      '<div class="bloom"><div>' + shortTitle + '</div><small>click</small></div>';
  
    flower.onclick = function () {
      var idx = this.getAttribute("data-index");
      openModal(parseInt(idx, 10));
    };
  
    garden.appendChild(flower);
  }
  
  // open modal
  function openModal(index) {
    var m = messages[index];
    modalTitle.textContent = m.title;
    modalMessage.textContent = m.text;
    modalFrom.textContent = m.from;
    modalBackdrop.style.display = "flex";
  }
  
  // close modal
  function closeModal() {
    modalBackdrop.style.display = "none";
  }
  
  closeModalBtn.onclick = closeModal;
  modalBackdrop.onclick = function (e) {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  };
  
  // fade out intro when "Enter the Garden" is clicked
  enterBtn.onclick = function () {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(function () {
      intro.style.display = "none";
    }, 400); // match the CSS transition timing
  };
  