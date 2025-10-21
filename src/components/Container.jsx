const Container = ({ children, className }) => {
  return (
    <div className={`${className} container mx-auto lg:px-10 md:px-4 px-2`}>
      {children}
    </div>
  );
};

export default Container;
