import {useEffect, useState} from 'react'

const PREFIX = 'chatify-'

const useLocalStorage = (key, intialValue) => {
    //to get the value from LocalStorage and put into the state
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof intialValue === 'function'){
            return intialValue()
        } else {
            return intialValue 
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
  return [value, setValue]
}

export default useLocalStorage
