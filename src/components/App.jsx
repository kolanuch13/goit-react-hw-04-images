import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Blocks } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  let [picture, setPicture] = useState('');
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [pictureArray, setPictureArray] = useState([]);

  useEffect(() => {
    if (picture === '') {
      return;
    }
    setIsLoaded(true);
    fetch(`https://pixabay.com/api/?key=31702044-2ea23ebf9858467e7c06f0c89&q=${picture}&page=${page}&per_page=12`)
      .then(res => res.json())
      .then(result => {
        page === 1
          ? setPictureArray(result.hits)
          : setPictureArray(prev => [...prev, ...result.hits]);
      },
        error => {
          setIsLoaded(true);
          setError(error);
          toast(`🦄Write normal name`);
        }
      )
      .finally(setIsLoaded(false));
  }, [page, picture]);

  const handleSubmit = query => {
    setPicture(query);
    setPictureArray([]);
    setPage(1);
    setIsLoaded(true);
  };

  return (
      <div
          style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
          }}
      >
          <Searchbar onSubmit={handleSubmit} />
          {isLoaded ? (
              <Blocks />
          ) : (
              <ImageGallery
                  pictureArray={pictureArray}
                  onClick={() => setPage(page + 1)}
              />
          )}
          <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
          />
      </div>
  );
};

export default App;
