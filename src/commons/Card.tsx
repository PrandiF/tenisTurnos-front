type CardProps = {
  title?: string;
  text?: string;
};

function Card({ title, text }: CardProps) {
  return (
    <div className="bg-white xl:px-6 xl:py-6 px-4 py-3 rounded-lg shadow-lg text-black hover:scale-105 transition-all duration-200 cursor-pointer">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
