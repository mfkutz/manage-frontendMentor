import React from 'react'

const HeroData = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-center lg:mx-40 lg:pt-20 pt-24 ">

            <div className=" min-w-[50%] lg:text-left text-center px-10 lg:px-0">
                <h2 className="text-Dark-Blue font-bold lg:text-[36px] text-[30px] leading-[40px]">
                    What’s different about Manage?
                </h2>
                <p className="text-Dark-Grayish-Blue lg:pt-8 pt-5 lg:text-[16px] text-[14px] max-w-[390px] leading-[27px]">
                    Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.
                </p>
                <div className="mt-10">

                </div>
            </div>

            <div className="min-w-[50%]">

                <div className='flex lg:gap-5 gap-2 mb-8 lg:px-0 px-3'>
                    <div className=''>
                        <div className='bg-Bright-Red px-6 py-2 rounded-3xl text-white '>
                            01
                        </div>
                    </div>
                    <div>
                        <h2 className='text-Dark-Blue font-semibold pt-2 bg-red'>
                            Track Company-wide progress
                        </h2>
                        <p className='text-Dark-Grayish-Blue pt-4 leading-[27px] max-w-[450px] lg:text-[16px] text-[14px]'>
                            See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </div>
                </div>

                <div className='flex lg:gap-5 gap-2 mb-8 lg:px-0 px-3'>
                    <div className=''>
                        <div className='bg-Bright-Red px-6 py-2 rounded-3xl text-white '>
                            02
                        </div>
                    </div>
                    <div>
                        <h2 className='text-Dark-Blue font-semibold pt-2'>
                            Advanced built-in reports
                        </h2>
                        <p className='text-Dark-Grayish-Blue pt-4 leading-[27px] max-w-[450px] lg:text-[16px] text-[14px]'>
                            Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
                </div>
                <div className='flex lg:gap-5 gap-2 mb-8 lg:px-0 px-3'>
                    <div className=''>
                        <div className='bg-Bright-Red px-6 py-2 rounded-3xl text-white '>
                            03
                        </div>
                    </div>
                    <div>
                        <h2 className='text-Dark-Blue font-semibold pt-2'>
                            Everything you need in one place
                        </h2>
                        <p className='text-Dark-Grayish-Blue pt-4 leading-[27px] max-w-[450px] lg:text-[16px] text-[14px]'>
                            Stop jumping from one service to another to communicate, store files,
                            track tasks and share documents. Manage offers an all-in-one team
                            productivity solution.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroData