import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const url = 'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec?route=device-list';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [phoneData, setPhoneData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setPhoneData(response.data.data.slice(0, 20));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleSearchBox = (e) => {
        setSearch(e.target.value);
    }
    const filteredPhones = phoneData.filter(phone => {
        return phone.brand_name.toLowerCase().includes(search.toLowerCase());
    })

    const editHandler = (id) => {
        console.log('desi mile')
    }
    const deleteHandler = (id) => {
        setPhoneData(phoneData.filter(phone => {
            const deleteId = phone.device_list.map(item => {
                return item.device_id
            })
            console.log('delete', deleteId)
            return phone.device_id !== id
        }))
    }
    // proveri ID telefona kojeg prikazujes -.-

    // console.log(phoneData)


    return (
        <AppContext.Provider value={{
            isLoading,
            phoneData,
            handleSearchBox,
            filteredPhones,
            editHandler,
            deleteHandler
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }
