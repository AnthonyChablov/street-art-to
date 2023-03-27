import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface IUserDisplayCard {
    userName: string,
    email: string, 

}

const UserDisplayCard = ({userName, email} : IUserDisplayCard) => {
  return (
    <div className='bg-gradient-to-r from-slate-600 via-zinc-600 
        to-zinc-800 opacity-80 flex justify-between w-4/6 mx-auto rounded-md '
    >
        <AccountCircleIcon htmlColor='white' fontSize='large'/>
        <p className=' text-zinc-100 text-2xl '>{userName}</p>
        <p className=' text-zinc-100 text-2xl '>{email}</p>
    </div>
  )
}

export default UserDisplayCard