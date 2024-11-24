interface DotType {
  dataLength: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export const CarouselDots = ({
  dataLength,
  currentIndex,
  onDotClick,
}: DotType) => (
  <div className="flex justify-center space-x-2 mt-5">
    {Array.from({ length: dataLength }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`size-[6px] rounded-full ${
          currentIndex === index
            ? "bg-purple-600"
            : "bg-gray-500 hover:bg-gray-400"
        }`}
      ></button>
    ))}
  </div>
);
