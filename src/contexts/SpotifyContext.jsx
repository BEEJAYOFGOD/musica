import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
} from "react";

import LoadingSpinner from "../component/LoadingSpinner";
// 1️⃣ Create context
const SpotifyContext = createContext();

// 2️⃣ Provider
export const SpotifyProvider = ({ children }) => {
    const CLIENT_ID = "b6137303ff624b66bff3911f9e285a4d";
    const CLIENT_SECRET = "4a04617eb90b4cd4a279d26de9d48943";

    const [token, setToken] = useState(null);
    const [expiryTime, setExpiryTime] = useState(null);
    const [loading, setLoading] = useState(true);

    // function to get new token using fetch
    const fetchToken = useCallback(async () => {
        try {
            const res = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                        "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
                },
                body: "grant_type=client_credentials",
            });

            if (!res.ok)
                throw new Error("Failed to fetch accessToken on mount");

            const data = await res.json();
            const newExpiry = Date.now() + data.expires_in * 1000;

            // save to state + localStorage
            setToken(data.access_token);
            setExpiryTime(newExpiry);
            localStorage.setItem(
                "SpotifyInfo",
                JSON.stringify({
                    token: data.access_token,
                    expDate: newExpiry,
                })
            );

            setLoading(false);
        } catch (err) {
            console.error("Spotify token error not fetched:", err);
        }
    }, []);

    // get token on mount
    useEffect(() => {
        const stored = localStorage.getItem("SpotifyInfo");
        if (stored) {
            const { token, expDate } = JSON.parse(stored);

            console.log(token);
            if (Date.now() < expDate) {
                setToken(token);
                setExpiryTime(expDate);
                setLoading(false);
                return; // don’t fetch immediately
            }
        }
        // else fetch a new one
        fetchToken();
    }, [fetchToken]);

    // refresh token before expiry
    useEffect(() => {
        if (!expiryTime) return;

        const timeout = setTimeout(() => {
            fetchToken();
        }, expiryTime - Date.now() - 60000); // refresh 1 minute early

        return () => clearTimeout(timeout);
    }, [expiryTime, fetchToken]);

    return (
        <SpotifyContext.Provider value={{ token, fetchToken }}>
            {loading ? <LoadingSpinner /> : children}
        </SpotifyContext.Provider>
    );
};

// 3️⃣ custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useSpotify = () => useContext(SpotifyContext);
