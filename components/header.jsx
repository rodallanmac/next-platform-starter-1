import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';


const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <div className="hidden mx-auto z-10 p-2 bg-indigo-600 border border-amber-100">

            <div className="hidden mx-auto items-center md:flex md:w-auto md:order-1 md:justify-between max-w-5xl">

                <div>
                    <Link href="/">
                        <Image src={netlifyLogo} alt="Netlify logo" />
                    </Link>
                </div>

                <div>
                    {!!navItems?.length && (
                        <ul className="flex flex-col  md:flex-row md:text-sm md:font-medium uppercase relative">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
 

            </div>
            
        </div>
    );
}
