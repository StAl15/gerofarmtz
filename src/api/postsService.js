import axios from "axios";

export const fetchPosts = async (limit, setData) => {

    await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit
        }
    }).then(r => setData(r.data))

}