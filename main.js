let 
    clicks = document.querySelector('.Clicks');
    keys = document.querySelector(".Keys");
    clkCount = 0;
    keyCount = 0;
    restart = document.querySelector(".Restart");

window.addEventListener('click', () => {
    clkCount ++;
    clicks.textContent = "You've clicked this page for "+ clkCount +" times!";
});

window.addEventListener("keydown", (event) => {
  keyCount++;
  keys.textContent = "You've typed "+ event.key +" now. You have pressed keys for " + keyCount + " times!";
});

restart.addEventListener('click', () => {
  clkCount = 0;
  keyCount = 0;
  clicks.textContent = "You've clicked this page for 0 times!";
  keys.textContent = "You've typed nothing now. You have pressed keys for 0 times!";
})