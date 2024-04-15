function submitComment() {
    var name = document.getElementById("comment-name").value;
    var comment = document.getElementById("comment-text").value;

    var commentList = document.getElementById("comment-list");
    var listItem = document.createElement("li");
    listItem.textContent = name + ": " + comment;
    commentList.appendChild(listItem);

    document.getElementById("comment-name").value = "";
    document.getElementById("comment-text").value = "";
}

function submitSuggestion() {
    var name = document.getElementById("suggestion-name").value;
    var suggestion = document.getElementById("suggestion-text").value;

    var suggestionList = document.getElementById("suggestion-list");
    var listItem = document.createElement("li");
    listItem.textContent = name + ": " + suggestion;
    suggestionList.appendChild(listItem);

    document.getElementById("suggestion-name").value = "";
    document.getElementById("suggestion-text").value = "";
}
