
// import React, { useEffect, useState } from 'react';

// interface Props {
//   photos: string[];
// }

// const PhotoGrid: React.FC<Props> = ({ photos }) => {
//   const [currentPhotos, setCurrentPhotos] = useState<string[]>(photos);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetchPhotos().then(newPhotos => setCurrentPhotos(newPhotos));
//     }, 10000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const fetchPhotos = async () => {
//     
//     // let url="https://api.unsplash.com/photos/random/?client_id=M3745tb9PrRntsatJVb7nmARMkRLZUKQoB1MpisGeXI"
//     const response = await fetch("https://api.unsplash.com/photos/random/?client_id=M3745tb9PrRntsatJVb7nmARMkRLZUKQoB1MpisGeXI");
//     const data = await response.json();
//     return data.photos.slice(0, 9); 
//   };

//   return (
//     <div className="photo-grid">
//       {currentPhotos.map((photo, index) => (
//         <img key={index} src={photo} alt="Customer" />
//       ))}
//     </div>
//   );
// };

// export default PhotoGrid;


import React, { useEffect, useState } from 'react';

interface Props {
  photos: string[];
}

const PhotoGrid: React.FC<Props> = ({ photos }) => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>(photos);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchPhotos().then(newPhotos => setCurrentPhotos(newPhotos));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random/?count=9&client_id=M3745tb9PrRntsatJVb7nmARMkRLZUKQoB1MpisGeXI');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.map((photo: any) => photo.urls.small); // Extract the small-sized image URL
    } catch (error) {
      console.error('Failed to fetch photos:', error);
      return currentPhotos; // Return the current photos if fetch fails
    }
  };

  return (
    <div className="photo-grid">
      {currentPhotos.map((photo, index) => (
        <img key={index} src={photo} alt="Customer" />
      ))}
    </div>
  );
};

export default PhotoGrid;

