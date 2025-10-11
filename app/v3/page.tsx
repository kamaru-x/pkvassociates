import React from "react";
import { Pacifico, Manufacturing_Consent, Work_Sans } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const manufacturing = Manufacturing_Consent({ subsets: ["latin"], weight: ["400",] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const Page = () => {
    return (
        <>
            <div className="bg-cyan-200 relative">
                <div>
                    <img
                        className="absolute top-0 left-0 w-40 md:w-60 lg:w-100"
                        src="/top-left.png"
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 right-0 w-40 md:w-60 lg:w-100"
                        src="/bottom-right.png"
                        alt=""
                    />
                </div>

                <main>
                    <header className="flex justify-end p-5 lg:p-10">
                        <img className="w-20 lg:w-40" src="/logo.png" alt="" />
                    </header>

                    <section className="py-15">
                        <p className="text-center font-extrabold text-5xl lg:text-9xl text-orange-600">
                            Tax & Tours !
                        </p>
                        <div className="flex justify-center items-center mt-15">
                            <img className="w-60 lg:w-100" src="/cubes.png" alt="" />
                        </div>
                    </section>

                    <section className="text-center px-10">
                        <p className={`${manufacturing.className} text-red-700 font-bold text-4xl md:text-7xl`}>
                            Compatriot Consultants
                        </p>
                        <p className={`${workSans.className} text-blue-700 font-bold text-4xl md:text-7xl py-10 md:py-25`}>
                            Sass Your Stress, Before It Stuffs !
                        </p>
                        <p className={`${pacifico.className} text-green-700 font-bold text-4xl md:text-7xl pb-24`}>
                            Together, Let&apos;s Spin the Globe !
                        </p>
                    </section>

                    <section className="flex justify-center items-center">
                        <div className="bg-amber-500 text-amber-700 rounded-full mb-25">
                            <p className="font-bold text-2xl md:text-7xl px-10 py-5">+91 9446 919 703</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Page;
