type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 min-h-lvh rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-2xl border border-opacity-30 border-white mt-24 sm:mt-32 md:mt-48">
      {children}
    </div>
  );
};

export default Card;
