interface ButtonType {
  onClick: () => void;
  direction: string;
}

export const CarouselNavigationButton = ({
  onClick,
  direction,
}: ButtonType) => {
  const isLeft = direction === "prev";
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        isLeft ? "-left-5" : "-right-5"
      } top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F33CC0] to-[#4349FF] text-white px-3 py-[5px] rounded-full shadow-lg hover:bg-purple-500 transition`}
    >
      {isLeft ? "❮" : "❯"}
    </button>
  );
};
