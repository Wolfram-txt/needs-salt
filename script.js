document.getElementById("inputText").addEventListener("input", function() {
    var text = this.value;
    var charCount = text.length;
    document.getElementById("charCount").textContent = "Character Count: " + charCount;
});