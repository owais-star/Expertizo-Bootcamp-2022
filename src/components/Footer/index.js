import logo from '../../logo.svg'
import { UilBitcoin } from '@iconscout/react-unicons'
const Footer = () => {
    const Pages = [
        { name: "Advertisement" },
        { name: "Your Money" },
        { name: "Bonuses" },
        { name: "FAQ" },
    ]
    const Pages1 = [
        { name: "Privacy Policy" },
        { name: "Imprint" },
        { name: "Terms And Conditions" },
    ]
    return (
        <div className="mt-3 sm:mt-0 bg-blue-700 sm:h-16 rounded-bl-2xl rounded-br-2xl  flex sm:justify-around sm:flex-row flex-col items-center">
            <div className=' flex sm:flex-row flex-col items-center mt-3'>
                <UilBitcoin className="h-12 w-12 fill-white" />
                <h1 className='text-white sm:text-xl  text-2xl '>My2Cents</h1>
            </div>
            <div className='flex sm:mt-0 mt-3 sm:justify-self-auto justify-between w-[70%] sm:pb-0 pb-3'>
                <ul className='flex sm:flex-row flex-col'>
                    {Pages.map((item, index) => {
                        return <li key={index} className='sm:ml-3 font-light text-sm cursor-pointer opacity-90 hover:opacity-100 hover:underline text-white'>{item.name} </li>
                    })}
                </ul>
                <ul className='flex sm:flex-row flex-col'>
                    {Pages1.map((item, index) => {
                        return <li key={index} className='sm:ml-3 font-light text-sm cursor-pointer opacity-90 hover:opacity-100 hover:underline text-white'>{item.name} </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer