
function Sobre() {
  const videoUrl = 'https://example.com/my-video.mp4';

  return (
    <div className=" flex-row items-center">
      <h1>Sobre</h1>
      <video width="650" height="370" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Sobre;