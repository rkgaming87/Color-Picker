import React from "react";
import './App.css'

const Home = () => {
    return (
        <>
            <nav className="bg-white-500 flex justify-between px-[15%] items-center">
                <h2 className="text-gray-500 text-2xl font-bold font-serif cursor-pointer">Logo</h2>
                <ul className="flex *:px-3 py-6 gap-7 text-xl cursor-pointer ">
                    <li className="active">Home</li>
                    <li className="hover:text-sky-400">About</li>
                    <li className="hover:text-sky-400">Menu</li>
                    <li className="hover:text-sky-400">Contact</li>
                </ul>
            </nav>

            <section className="hero-section  w-full flex gap-5 h-[calc(100vh-3rem)]">

                <div className="w-1/2 flex flex-col items-center justify-center gap-y-7 px-10 bg-[#F2F2F2]">
                    <p className="text-3xl">TASTE THE LUXURY</p>
                    <h3 className="text-8xl font-normal text-center">Exquistie Culinary Delights</h3>
                    <p className="text-xl text-center">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                    </p>
                    <button className="border-2 px-10 py-3 text-xl cursor-pointer">CONTACT US</button>


                </div>
                <div className="w-1/2 bg-[url('/public/one.avif')] bg-center bg-cover">
                    {/* <img className="w-full" src="/public/one.avif" alt="" /> */}
                </div>
            </section>

            <section className="">
                <div>
                    <h3 className="">Gourmet Dining Experience</h3>
                    <p>Sample text. Click to select the Text Element.</p>
                    <button className="border-2 px-10 py-3 text-xl cursor-pointer">CONTACT US</button>
                </div>
                <div className=""><img src="public/3.jpg" alt="" /></div>


            </section>

        </>
    )
}
export default Home