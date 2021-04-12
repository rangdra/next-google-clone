const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`h-10 w-10 object-cover cursor-pointer rounded-full transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="image-profile"
    />
  );
};

export default Avatar;
