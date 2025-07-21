import React from 'react'

function Hero() {
  return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    <span className='text-primary'>Upload, Save</span> and easily <br /> <span className='text-primary'>Share</span> your files in one place
                </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                    Drag and drop your file directly on our cloud and share it with your friends secuarely with password and send it on email
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    className="block w-full rounded bg-primary/95  px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/100 focus:outline-none focus:ring active:bg-primary sm:w-auto"
                    href="#"
                    >
                    Get Started
                    </a>

                    <a
                    className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto"
                    href="#"
                    >
                    Learn More
                    </a>
                </div>
                </div>
            </div>
        </section>
  )
}

export default Hero