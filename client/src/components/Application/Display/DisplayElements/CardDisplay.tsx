
interface ICardDisplay{
    title:String,
    icon:String,
    address: String,
    year:number,
}

const CardDisplay = ({title, icon,address, year}:ICardDisplay) => {
  return (
    <div>
        <button>
          <div className="flex flex-col justify-center items-center bg-zinc-700 mb-5 p-5">
            <p>{title}</p>
            <p>{year}</p>
            <p>{address}</p>
          </div>
            
        </button>
    </div>
  )
}

export default CardDisplay