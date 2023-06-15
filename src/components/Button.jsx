
const Button = ({ color }) => {
    return (
        <button className={`text-white text-[12px] bg-${color}  hover:bg-[#f88f75] px-8 py-3 rounded-3xl shadowP`}>
            Get Started
        </button>
    )
}

export default Button