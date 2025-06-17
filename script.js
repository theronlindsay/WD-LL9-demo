// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

//const cannot be changed later
const songs = [
    "No Body European Tour Intro",
    "A Marrow Escape",
    "The Final Pulse",
    "Shadow Over the Stage",
    "Encore: Lights Out"
  ];
  
  function generateSetlist() {
    const shuffledSongs = songs.sort(() => Math.random() - 0.5);
  
    // This line updates the webpage by adding new HTML content using JavaScript.
    // Think of it like telling JavaScript: “Print this list onto the page.”
    document.getElementById("setlist").innerHTML =
      shuffledSongs.map(song => `<li>${song}</li>`).join('');
  }
  
  document.getElementById("generateSetlist").addEventListener("click", generateSetlist);
  
  // ----------------------------
  // ⏳ Countdown Timer
  // ----------------------------

  const tourStart = new Date("2025-08-01T20:00:00");
  const countdown = document.getElementById("countdown");
  
  function updateCountdown() {
    const now = new Date();
    const diff = tourStart - now;
  
    if (diff <= 0) {
      countdown.textContent = "The tour has started!";
      clearInterval(timer);
      return;
    }
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    countdown.textContent = `⏰ ${hours}h ${minutes}m ${seconds}s until showtime`;
  }
  
  const timer = setInterval(updateCountdown, 1000);
  
  // ----------------------------
  // 🛠️ Feature Scaffolds
  // ----------------------------
  
  // 1️⃣ VIP Ticket Winner Generator
  document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;
  
  document.getElementById("pickWinner").addEventListener("click", () => {
    // Add your code here
  });
  
  // 2️⃣ Fan Favorite Showdown
  document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;
    document.getElementById("vote").addEventListener("click", () => {
    // Add your code here
  });
    // 3️⃣ Tour Date Spotlight
  document.getElementById("tourHighlight").innerHTML = `
    <h3>Tour Date Spotlight</h3>
    <div class="tour-cities-container">
      <div class="city-card" id="cityOslo">Oslo</div> 
      <div class="city-card" id="cityBerlin">Berlin</div>
      <div class="city-card" id="cityLondon">London</div>
    </div>
    <div class="tourDetails hidden"></div>
  `;  // Event listener for Oslo - shows/hides date and venue info when clicked
  document.getElementById("cityOslo").addEventListener("click", () => {
    const tourDetails = document.getElementsByClassName("tourDetails")[0];
    
    // Check if Oslo details are already showing
    if (tourDetails.innerHTML.includes("Oslo, Norway") && !tourDetails.classList.contains("hidden")) {
      // Hide the details if Oslo is already selected
      tourDetails.classList.add("hidden");
    } else {
      // Show Oslo details
      tourDetails.classList.remove("hidden");
      tourDetails.innerHTML = `
        <p><strong>Oslo, Norway</strong></p>
        <p>📅 Date: August 8th, 2025</p>
        <p>🕘 Time: 9:15 PM</p>
        <p>🏟️ Venue: Oslo Spektrum</p>
      `;
    }
  });
    // Event listener for Berlin - shows/hides date and venue info when clicked
  document.getElementById("cityBerlin").addEventListener("click", () => {
    const tourDetails = document.getElementsByClassName("tourDetails")[0];
    
    // Check if Berlin details are already showing
    if (tourDetails.innerHTML.includes("Berlin, Germany") && !tourDetails.classList.contains("hidden")) {
      // Hide the details if Berlin is already selected
      tourDetails.classList.add("hidden");
    } else {
      // Show Berlin details
      tourDetails.classList.remove("hidden");
      tourDetails.innerHTML = `
        <p><strong>Berlin, Germany</strong></p>
        <p>📅 Date: August 15th, 2025</p>
        <p>🕘 Time: 8:30 PM</p>
        <p>🏟️ Venue: Mercedes-Benz Arena</p>
      `;
    }
  });
  
  // Event listener for London - shows/hides date and venue info when clicked
  document.getElementById("cityLondon").addEventListener("click", () => {
    const tourDetails = document.getElementsByClassName("tourDetails")[0];
    
    // Check if London details are already showing
    if (tourDetails.innerHTML.includes("London, UK") && !tourDetails.classList.contains("hidden")) {
      // Hide the details if London is already selected
      tourDetails.classList.add("hidden");
    } else {
      // Show London details
      tourDetails.classList.remove("hidden");
      tourDetails.innerHTML = `
        <p><strong>London, UK</strong></p>
        <p>📅 Date: August 22nd, 2025</p>
        <p>🕘 Time: 7:45 PM</p>
        <p>🏟️ Venue: The O2 Arena</p>
      `;
    }
  });
  
  // 4️⃣ On the Road Again
  document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;
  
  // This logic can run on page load or refresh
  function displayNextTourStop() {
    // Add your code here
  }
  
  // 5️⃣ Entry Checkpoint
  document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;
  
  document.getElementById("checkEmail").addEventListener("click", () => {
    // Add your code here
  });
  
  // 6️⃣ Band Bio Toggle
  document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

  document.getElementById("toggleBio").addEventListener("click", () => {
    // Add your code here
  });  