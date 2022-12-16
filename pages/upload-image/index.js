

import { useState } from 'react';
import { useMutate } from 'restful-react';
// import { PageTitle } from 'components/shared';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [images, setImages] = useState([]);
  const { mutate: uploadImage } = useMutate({
    verb: 'POST',
    path: 'http://127.0.0.1:3001/api/image-upload'
  });

  const handleChange = event => {
    setSelectedImage(event.target.files[0]);
  }

  const handleImageUpload = () => {
    if (!selectedImage) { return; }
    const formData = new FormData();
    formData.append('image', selectedImage);

    uploadImage(formData)
      .then(uploadedImage => {
        setImages([...images, uploadedImage])
      })
      .catch(_ => {
        console.log('Oooops, something went wrong!')
      })
  }

  const displayImages = () =>
  images.map(image =>
    <div key={image.cloudinaryId} className="col-md-3">
      <a
        className="d-block mb-4 h-100"
        target="_blank"
        href={image.url} >
        <img className="img-fluid img-thumbnail" src={image.url}/>
      </a>
    </div>
  )

  return (
    <>
      {/* <PageTitle text="Upload Image"/> */}
      <input
        onChange={handleChange}
        accept=".jpg, .png, .jpeg"
        className="fileInput mb-2"
        type="file">
      </input>
      <div>
        <button
         onClick={handleImageUpload}
         disabled={!selectedImage}
         className="btn btn-primary mb-2">
          Upload
        </button>
      </div>
      <div className="row text-center text-lg-left">
        { images ? displayImages() : 'There are no images :('}
      </div>
    </>
  )
}

export default Upload;
