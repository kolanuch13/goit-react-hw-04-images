import css from './Searchbar.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
    const [searchingPicture, setSearchingPicture] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();
        if (searchingPicture === "") {
            toast.info('Enter something')
            return;
        } 
        onSubmit(searchingPicture)
        setSearchingPicture("")
    }

    return (
        <header className={css.Searchbar}>
            <form className={css.Form} onSubmit={handleSubmit}>
                <button type="submit" className={css.Button}>
                    <span className="button-label">Search</span>
                </button>

                <input
                    className={css.Input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchingPicture}
                    onChange={evt => setSearchingPicture(evt.target.value)}
                />
            </form>
        </header>
    );
}

export default Searchbar;