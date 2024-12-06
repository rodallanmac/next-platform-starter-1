import Image from 'next/image'


export default function Page() {

    const cover = '/images/cover.jpg';


    return (
        <div className="bg-white">
        <div className="mx-auto">
    
          <div className="min-h-screen relative isolate overflow-hidden bg-gradient-to-r from-indigo-800 to-indigo-950 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24">
    
          <div className="mx-auto  p-4 grid  grid-cols-1 md:grid-cols-2 gap-2">
    
                <div className="bg-cover relative lg:h-auto w-auto h-80 rounded-lg overflow-hidden">
                  <Image src={cover} 
                  alt="cover"
                  quality={100}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'left'}} />
                </div>
    
                <div className="mx-auto  text-center p-4 lg:px-16 lg:mx-0 lg:py-32 lg:text-left ">
                  <h2 className="max-w-md text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    The 2025 South African Sugar Industry website is being updated
                  </h2>
                  <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                    Thank you for your patience
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a href="https://www.sasa.org.za" className="rounded-md bg-indigo-600 text-indigo-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                      South African Sugar Association
                    </a>
                  </div>
                </div>
    
             
              </div>
            </div>
          </div>
      </div>
    );
}


