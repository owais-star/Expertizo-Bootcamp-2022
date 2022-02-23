import logo from '../../logo.svg'
import { UilBitcoin } from '@iconscout/react-unicons'
const Footer = () => {
    const Pages = [{
        name: "Advertisement"
    },
    { name: "Your Money" },
    { name: "Bonuses" },
    { name: "FAQ" },
    { name: "Privacy Policy" },
    { name: "Imprint" },
    { name: "Terms And Conditions" },
    ]
    return (
        <div className="bg-blue-700 h-16 rounded-bl-2xl rounded-br-2xl  flex justify-around items-center ">
            <div className=' flex items-center'>
                <UilBitcoin className="h-12 w-12 fill-white" />
                <h1 className='text-white text-xl '>My2Cents</h1>
            </div>
            <div className='flex'>
                {Pages.map((item) => {
                    return <ul className='flex'><li className='ml-3 font-light text-sm cursor-pointer opacity-90 hover:opacity-100 hover:underline text-white'>{item.name} </li></ul>
                })}
            </div>
            <div></div>
        </div>
    )
}

export default Footer