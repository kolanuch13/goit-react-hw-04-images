import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Blocks } from 'react-loader-spinner'
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  let [picture, setPicture] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, data, error } = useFetch(`https://pixabay.com/api/?key=31702044-2ea23ebf9858467e7c06f0c89&q=${picture}&page=${page}&per_page=12`);

  useEffect(() => {
    setPage(1)
  }, [picture])

  if (error) {
    toast(`🦄Write normal name`);
  }

  const handleChange = evt => {
    setPicture(picture = evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
  }
    
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      }}
    >
      <Searchbar
        picture={picture}
        onChange={handleChange}
        onSubmit={handleSubmit} 
      />
      {isLoading ?
        <Blocks /> : 
        <ImageGallery
          pictureArray={data.hits}
          onClick={() => setPage(page + 1)}
        />  
      }
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