const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl">
      <button
        onClick={handlePrevPage}
        className="transition-all hover:bg-color-accent bg-color-primary p-2 rounded-md"
      >
        Prev
      </button>
      <span className="text-color-primary">
        {page} of {lastPage}
      </span>
      <button
        onClick={handleNextPage}
        className="transition-all hover:bg-color-accent bg-color-primary p-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
