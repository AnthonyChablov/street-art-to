import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../../../../config/firebase';

interface IUserDisplayCard {
    userName: string | null | undefined,
    email: string | null | undefined, 
}

const UserDisplayCard = ({userName, email} : IUserDisplayCard) => {
  return (
    <div className='mb-6 flex justify-between items-center rounded-md text-lg text-zinc-100 '>
      {
        auth?.currentUser?.photoURL 
          ? <img className='rounded-full max-w-full h-10' src={auth?.currentUser?.photoURL} alt="" /> 
          : <AccountCircleIcon fontSize='large' />
      }
      
      <p className=''>{email}</p>
    </div>
  )
}

export default UserDisplayCard