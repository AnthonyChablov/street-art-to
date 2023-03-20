import { Divider } from "@mui/material"

interface ISubDisplay{
    title: String,
    detail: String
}


const SubDisplay = ({title, detail}:ISubDisplay) => {
    
    return (
        <div className="mb-7">
            <h3 className="text-sm text-gray-500 ">
                {title}
            </h3>
            <p className="pt-3 pb-5">
                {detail}
            </p>
            <Divider className='bg-zinc-700' sx={{ height:'2px'}}/><Divider/>
        </div>
    )
}

export default SubDisplay