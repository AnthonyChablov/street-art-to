
interface IParagraph{
    text:String
}

const Paragraph = ({text} : IParagraph) => {
  return (
    <p className="text-zinc-700 text-md">{text}</p>
  )
}

export default Paragraph