
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
            {year}
        </button>
    </div>
  )
}

export default CardDisplay