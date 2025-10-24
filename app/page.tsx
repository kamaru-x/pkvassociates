import React from 'react'

const page = () => {
    return (
        <>
            <div className='relative'>

                <div className='absolute top-5 lg:top-10 right-5 lg:right-5 hidden lg:block'>
                    <a href="https://wa.me/+919446439703" className='px-5 py-2 lg:py-3 lg:px-8 lg:text-lg font-bold text-pink-900 bg-white lg:text-white lg:bg-pink-900 rounded-3xl'>Contact</a>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='p-5 lg:p-10 bg-pink-900 rounded-br-full'>
                        <div>
                            <p className='text-white font-bold lg:text-2xl mb-5'>PKV Associates | Compatriot Consultants.</p>
                            <a href='https://wa.me/+919446439703' className='text-white font-bold lg:text-xl mt-5'>+91 9446 439 703</a>
                        </div>
                        <img src="/ganesh.png" alt="" className='mt-10' />
                    </div>
                    <div className='flex justify-center items-center text-center'>
                        <p className='text-pink-900 font-bold text-5xl mt-15 mb-10 leading-normal lg:mt-0 lg:mb-0 lg:text-9xl'>Together, Let&apos;s Spin the Globe!</p>
                    </div>
                </div>

                <div className='p-5 lg:p-10'>
                    <div className='bg-pink-900 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 rounded-2xl p-5 lg:p-10'>
                        <div className='border-b lg:border-b-0 lg:border-r border-white py-5 lg:p-5'>
                            <p className='text-white font-bold text-xl lg:text-2xl'>ACCOUNTS</p>
                            <p className='text-white text-lg lg:text-xl mt-5'>Our Accounts Consulting Division is the place where you can entrust your Book Keeping, Auditing, Financial Reporting Works. You do the business, our Accountants will book it for you!</p>
                        </div>
                        <div className='border-b lg:border-b-0 border-white py-5 lg:p-5'>
                            <p className='text-white font-bold text-xl lg:text-2xl'>TAX</p>
                            <p className='text-white text-lg lg:text-xl mt-5'>Our Tax Consulting Division will handle you Tax related matters, Let it be Tax Planning, Income Tax, GST, etc. Returns Filing and Compliance; Our Tax Experts will take care of it, You will just save on taxes and be Statutory Compliant!</p>
                        </div>

                        <div className='border-b lg:border-b-0 lg:border-r border-white py-5 lg:p-5'>
                            <p className='text-white font-bold text-xl lg:text-2xl'>LEGAL</p>
                            <p className='text-white text-lg lg:text-xl mt-5'>Our Legal Consulting Division will support you in you legally bound matters. Let it be any Agreement drafting, Execution, Litigation, or Anything; Let our Advocates Take care of it and you be worry free!</p>
                        </div>
                        <div className='py-5 lg:p-5'>
                            <p className='text-white font-bold text-xl lg:text-2xl'>TOURS</p>
                            <p className='text-white text-lg lg:text-xl mt-5'>Our Tour Management Division will gift you with Cherishable Holidays and a Divine Experience when you Visit Keralam! Visit God&apos;s Own Country, We the God&apos;s Own People shall Host You!</p>
                        </div>
                    </div>
                </div>

                <div className='p-10'>
                    <p className='text-pink-900 font-bold text-xl text-center lg:text-3xl'>GST or Income Tax, You Cannot Avoid Either; So Be Worry Free At Least, Entrust on Us</p>
                    <p className='text-center mt-10 text-xl lg:text-2xl'>Tax called by different names and seen in multiple forms is obviously a global phenomenon, and Entrepreneurs like you obviously should deal with it in the most efficient manner. Managing Accounts and tax should never harm your valuable time to be spend for growing business and nuturing family.</p>
                    <p className='text-pink-900 mt-10 lg:mt-24 font-bold text-3xl lg:text-7xl text-center'>The Tax People, The Tour People!</p>
                </div>

                <div className='p-5 lg:p-10'>
                    <div className='bg-pink-900 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 rounded-2xl p-5 lg:p-10'>
                        <div className='border-b lg:border-b-0 lg:border-r border-white py-5 lg:p-5'>
                            <div>
                                <p className='text-white text-lg lg:text-xl'>Managing Partner :</p>
                                <p className='text-white font-bold text-lg lg:text-2xl'>Praveen Krishnan Venkitachalam</p>
                            </div>
                            <div>
                                <p className='text-white text-lg lg:text-xl mt-5'>Senior Partner :</p>
                                <p className='text-white font-bold text-lg lg:text-2xl'>Adv. Dinesh AS</p>
                            </div>
                            <div>
                                <p className='text-white text-lg lg:text-xl mt-5'>Contact :</p>
                                <p className='text-white font-bold text-lg lg:text-xl'>Phone: + 91 9446 439 703 <br /> Email: pkv@pkvassociates.co.in</p>
                            </div>
                            <div>
                                <p className='text-white text-lg lg:text-xl mt-5'>Address :</p>
                                <p className='text-white font-bold text-lg lg:text-xl'>1st Cross Road, Panampilly Nagar, Cochin - 36, Kerala.</p>
                            </div>
                        </div>
                        <div className='border-white py-5 lg:p-5 md:flex items-center'>
                            <p className='text-white font-bold text-3xl lg:text-7xl'>In Trust, <br /> We Thrust!</p>
                        </div>
                    </div>
                </div>

                <div className='p-10'>
                    <p className='text-pink-900 font-bold text-3xl lg:text-7xl text-center'>Sass Your Stress, Before It Stuffs</p>
                </div>
            </div>
        </>
    )
}

export default page