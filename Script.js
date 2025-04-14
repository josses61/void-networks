function searchWeb() {
    let query = document.getElementById("searchQuery").value;
    if (query.trim() !== "") {
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
}
