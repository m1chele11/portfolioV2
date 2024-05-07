const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ];
  
  let letterCount = 0;
  let word = '';
  
  let finished = false;
  
  export function startLoadingEffect() {
    const el = document.getElementById("loading");
    if (!el) return; // Check if the element exists
  
    word = el.textContent.trim();
  
    el.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
      el.innerHTML += "<span>"+word.charAt(i)+"</span>";
    }
  
    setTimeout(write, 65);
    setTimeout(inc, 410);
  }
  
  function write() {
    const spans = document.querySelectorAll("#loading span");
    if (!spans || spans.length === 0) return; // Check if elements are found
  
    for (let i = letterCount; i < word.length && i < spans.length; i++) {
      const c = Math.floor(Math.random() * 36);
      spans[i].innerHTML = alphabet[c];
    }
  
    if (!finished) {
      setTimeout(write, 95);
    }
  }
  
  function inc() {
    const spans = document.querySelectorAll("#loading span");
    if (!spans || spans.length === 0 || letterCount >= spans.length) return;
  
    spans[letterCount].innerHTML = word[letterCount];
    spans[letterCount].classList.add("glow");
    letterCount++;
  
    if (letterCount >= word.length) {
      finished = true;
      setTimeout(reset, 1000);
    } else {
      setTimeout(inc, 600);
    }
  }
  
  function reset() {
    letterCount = 0;
    finished = false;
    setTimeout(inc, 1000);
    setTimeout(write, 75);
    document.querySelectorAll("#loading span").forEach(span => span.classList.remove("glow"));
  }
  