import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryModal } from '../../../../shared/components/modals';
import { CustomDataTable } from '../../../../shared/components/table';
import { listTable } from '../../schemas/table';

export default function MovieFavouritesModal({ isOpen, toggle, movies, setCurrentMovie, toggleMovieDetailsModal }) {
  const handleMovieSelection = (movie) => {
    toggle();    
    setCurrentMovie(movie);
    toggleMovieDetailsModal();
  }

  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="My Favourites">
      <CustomDataTable pagination={false} schema={listTable} data={movies} onClick={handleMovieSelection} />
    </PrimaryModal>
  );
}

MovieFavouritesModal.propTypes = {
  pagination: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  movies: PropTypes.array,
  setCurrentMovie: PropTypes.func.isRequired,
  toggleMovieDetailsModal: PropTypes.func.isRequired
}
