function loginToSpotify() {
    const redirect_uri = "http://localhost:5107/callback";
    const client_id = "6b71231841e2457480410c0c5a90d3b6";
    const scope = "playlist-modify-public user-read-email";


    // Construct the authorization URL
    const params = new URLSearchParams({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,

    });
    const url = `https://accounts.spotify.com/authorize?${params}`;

    window.open(url, '_blank');
}