import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    // check if its pending, working, ... (used for showing loading spinners and stuff like that)
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]); // stop providing breeds for a sec
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();

            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            
            setStatus("loaded");
        }
    }, [animal]);
    // whenevr animal changes, we will request its breed. if we request to the api, we will store it in our localChache

    return [breedList, status]; // keeping up with the tradition of hooks
}
