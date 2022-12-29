import axios from "axios"

export function useAddSubscriberMutation(url,{arg}) {
    return axios.post(url,arg)
}