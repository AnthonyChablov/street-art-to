interface IParagraph {
  text: String;
}

const Paragraph = ({ text }: IParagraph) => {
  return <p className="text-white text-md">{text}</p>;
};

export default Paragraph;
