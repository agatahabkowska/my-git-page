document.getElementById("moodForm").addEventListener("submit", function(event) {
    event.preventDefault()
    
    let selectedMood = document.querySelector('input[name="mood"]:checked').value;
    let moodMessage = "";

  
    if (selectedMood === "Content") {
        moodMessage = "Focus on this feeling and think of at least 2 thing you are grateful for today!";
    } else if (selectedMood === "Neutral") {
        moodMessage = "Take a deep breath on the count of 4. Hold for 7. Let out for 8. ";
    } else if (selectedMood === "Sad") {
        moodMessage = "Try belly breathing for a minute: put a hand on your stomach and feel it expand with every breath in....";
    }

    
    document.getElementById("moodOutput").textContent = moodMessage;
})
