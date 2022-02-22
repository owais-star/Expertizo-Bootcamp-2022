import logo from '../../logo.svg'
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
        <div className="bg-blue-700 h-16 rounded-bl-2xl rounded-br-2xl  flex justify-between items-center ">
            <div className='ml-10 flex items-center'>
                <img src={logo} width={60} />
                <h1 className='text-white text-xl '>my2Cents</h1>
            </div>
            <div className='flex'>
                {Pages.map((item) => {
                    return <ul className='flex'><li className='mr-3 text-white'>{item.name} </li></ul>
                })}
            </div>
            <div></div>
        </div>
    )
}

export default Footer