import Button from "./Button"
import illustration from "../assets/intro/illustration-intro.svg"

const Hero = () => {
    return (
        <div className="flex lg:flex-row flex-col-reverse justify-center lg:mx-40 mx-4 lg:pt-28 ">

            <div className="max-w-[550px] flex flex-col items-center lg:items-start">
                <h1 className="text-Dark-Blue font-bold lg:text-[53px] lg:text-left text-[38px]  text-center lg:leading-[62px] leading-[53px] lg:mt-12 mt-1">
                    Bring everyone together to build better products.
                </h1>
                <p className="text-Dark-Grayish-Blue lg:pt-8 pt-1 px-3 lg:px-0 max-w-[390px] leading-[27px] lg:text-left text-center lg:text-[16px] text-[15px]">
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <div className="lg:mt-10 mt-7">
                    <Button color={'Bright-Red'} />
                </div>
            </div>

            <div className="min-w-[50%]">
                <img src={illustration} alt="" />
            </div>

        </div>
    )
}

export default Hero