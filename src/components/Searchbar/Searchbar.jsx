// import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

const Searchbar = ({ picture, onChange, onSubmit }) => {
    
    // const handleChange = evt => {
    //     this.setState({picture: evt.target.value.toLowerCase()})
    // }

    // const handleSubmit = evt => {
    //     evt.preventDefault();
        
    //     if (picture.trim() === '') {
    //         toast('🦄 Write down picture that you want.');
    //     }

    //     this.props.onSubmit(picture);
    //     this.setState({picture: ""})
    // }

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