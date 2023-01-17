import css from './Searchbar.module.css';

const Searchbar = ({ picture, onChange, onSubmit }) => {

    return (
        <header className={css.Searchbar}>
            <form className={css.Form} onSubmit={onSubmit}>
                <button type="submit" className={css.Button}>
                    <span className="button-label">Search</span>
                </button>

                <input
                    className={css.Input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={picture}
                    onChange={onChange}
                />
            </form>
        </header>
    )
}

export default Searchbar;