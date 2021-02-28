import React from 'react'

// This component will render the view all the users favourite animals as clickable image thumbnails

const Favourites = ({ favouriteAnimals, onFavImageClicked }) => {

    const favouriteAnimalsImages = favouriteAnimals.map((favouriteAnimal) => {
        return (
            // TODO: Put img back in code and remove <li> when images are sorted (SJ)
            // <img onClick={() => { onFavImageClicked(favouriteAnimal) }}
            //     className="fav-image"
            //     src={favouriteAnimal.image} // TODO :need location of animal picture
            //     key={favouriteAnimal._id} // TODO :need animal ID
            //     alt="" height="100px">
            // </img>
            <li onClick={() => { onFavImageClicked(favouriteAnimal) }} key={favouriteAnimal._id}>
                {favouriteAnimal.animal_name}
            </li>
        )
    })

    // Render view of a users favourite animals
    return (
        <div className="favourites-container">
            <h2 className="favouriteAnimalsTitle">Favourite Animals</h2>
            {favouriteAnimalsImages}
        </div>
    )
}

export default Favourites