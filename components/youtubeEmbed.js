const YoutubeEmbed = ({ id }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      className="h-[100vh]"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
