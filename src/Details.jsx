import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPets from "./utils/fetchPets";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets); //([cache data if there] , otherwise fetch pets)

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⌛</h2>
      </div>
    );
  }
  const pets = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pets.images} />
      <div>
        <h1>{pets.name}</h1>
        <h2>{pets.animal}</h2>
        <h2>
          {pets.breed} - {pets.city}, {pets.state}
        </h2>
        <button>Adopt {pets.name}</button>
        <p>{pets.description}</p>
      </div>
    </div>
  );
};

export default Details;
