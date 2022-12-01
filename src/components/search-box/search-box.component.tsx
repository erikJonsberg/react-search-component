import { ChangeEvent } from 'react'

import './search-box.styles.css'

type SearchBoxProps = {
        className: string;
        placeholder?: string;
        onSearchChangeHandler: (event:ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onSearchChangeHandler}: SearchBoxProps ) => (
            <input 
    className={`search-box ${className}`}
    type='search' 
    placeholder={placeholder}
    onChange={ onSearchChangeHandler }

        />
)

export default SearchBox;