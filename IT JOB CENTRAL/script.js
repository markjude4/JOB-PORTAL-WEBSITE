const devInfo = [
    "Name: Lily Bear\nRole: Frontend Developer\nEmail: lily@itcentral.com\nPhone: 123-456-7890",
    "Name: Benny Banana\nRole: Backend Developer\nEmail: benny@itcentral.com\nPhone: 987-654-3210",
    "Name: Cherry Choco\nRole: Full Stack Developer\nEmail: cherry@itcentral.com\nPhone: 555-666-7777",
    "Name: Ricky Rat\nRole: DevOps Engineer\nEmail: ricky@itcentral.com\nPhone: 444-333-2222",
    "Name: Strawberry Sue\nRole: UI/UX Designer\nEmail: sue@itcentral.com\nPhone: 222-888-9999"
  ];
  
  function showInfo(index) {
    const bubble = document.getElementById("bubble");
    const text = document.getElementById("bubble-text");
    bubble.style.display = "block";
    text.innerHTML = ""; // Clear previous text
    typeWriter(devInfo[index], 0, text);
  }
  
  function toggleMeaning(id) {
    const meaning = document.getElementById(id);
    meaning.classList.toggle('show-meaning'); // Toggle visibility of the meaning
  }
  