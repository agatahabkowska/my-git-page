document.getElementById("moodForm").addEventListener("submit", function(event) {
    event.preventDefault()
    
    let selectedMood = document.querySelector('input[name="mood"]:checked').value;
    let moodMessage = "";

  
    if (selectedMood === "Content") {
        moodMessage = "That's great! Keep shining! 🌞";
    } else if (selectedMood === "Neutral") {
        moodMessage = "Stay balanced, take a deep breath. 🌿";
    } else if (selectedMood === "Sad") {
        moodMessage = "Sending you a virtual hug! 💙";
    }

    
    document.getElementById("moodOutput").textContent = moodMessage;
})
