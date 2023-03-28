interface ITitle{
  title: string
}

const Title = ({title} : ITitle) => {
  return (
    <h1 className='font-empire position text-zinc-100 z-50 text-7xl'>
        {title}
    </h1>
  )
}

export default Title