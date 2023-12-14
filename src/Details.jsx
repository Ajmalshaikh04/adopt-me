import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPets from "./utils/fetchPets";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { useState } from "react";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
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
        <button onClick={() => setShowModal(true)}>Adopt {pets.name}</button>
        <p>{pets.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would You Like to Adopte {pets.name}? </h1>
              <div className="buttons">
                <button>Yes</button>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
