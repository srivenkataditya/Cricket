document.getElementById("startMatch").addEventListener("click", function () {

    const team1 = document.getElementById("team1").value.trim();
    const team2 = document.getElementById("team2").value.trim();
    const overs = document.getElementById("overs").value;

    if (team1 === "" || team2 === "" || overs === "") {
        alert("Please fill all the details.");
        return;
    }

    localStorage.setItem("team1", team1);
    localStorage.setItem("team2", team2);
    localStorage.setItem("overs", overs);

    alert(
        "Match Created!\n\n" +
        team1 + " vs " + team2 +
        "\nOvers: " + overs +
        "\n\nLive scoring page will be added in the next part."
    );
});
