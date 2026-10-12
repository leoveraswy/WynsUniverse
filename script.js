
const themeButton = document.getElementById("theme-toggle");

// Apply a theme and update the button label
function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    themeButton.textContent = isDark
        ? "☀️ Light mode"
        : "🌙 Dark mode";
}

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("theme");

setTheme(savedTheme === "dark");

// Change the theme when the button is clicked
themeButton.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");

    setTheme(isDark);

    // Remember the user's choice
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

const typingText = document.getElementById("typing-text");

if (typingText) {
    const fullText = typingText.textContent.trim();
    let characterIndex = 0;

    typingText.textContent = "";

    const typingInterval = setInterval(() => {
        typingText.textContent += fullText[characterIndex];
        characterIndex++;

        if (characterIndex >= fullText.length) {
            clearInterval(typingInterval);
        }
    }, 35);
}
