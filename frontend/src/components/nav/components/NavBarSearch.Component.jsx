import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';

function NavBarSearchComponent(props) {
    const [showSearchInput, setShowSearchInput] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    

    useEffect(() => {
        // console.log('search..', searchValue);
    },[searchValue])

    const onSearch = () => {
        if (searchValue) {
            // navigate(`/shop?test={searchValue}`) query params
            navigate(`/shop/${searchValue.replaceAll(' ', '-')}`) //url params
            
        }
    }
    return (
        <div>
            <AiOutlineSearch onClick={()=> setShowSearchInput(!showSearchInput)} />
            {
                showSearchInput ?
                <div style={{position:"absolute", top:"100px"}}> 
                    <input type="text" onChange={event => setSearchValue(event.target.value)} />
                        <button onClick={() => onSearch()}>Search</button>
                </div> : null
                    
            }
           
        </div>
    );
}

export default NavBarSearchComponent;