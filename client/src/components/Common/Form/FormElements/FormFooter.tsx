
interface IFormFooter{
    title:String,
    buttonText: String,
}

const FormFooter = ({title, buttonText}:IFormFooter) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
        <span className='pb-3 text-md capitalize'>{title}</span>
        <button>
            <span className='text-md hover:text-zinc-500 hover:underline'>{buttonText}</span>
        </button>
    </div>
  )
}

export default FormFooter