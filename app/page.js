import Image from "next/image";
import {FaFacebookF, FaInstagram, FaTiktok, FaLeaf, FaLemon, FaWhatsapp} from "react-icons/fa";
import { GiOrange, GiWatermelon, GiPineapple } from "react-icons/gi";

const LINKS = {
    facebook: "https://www.facebook.com/profile.php?id=61585273371429",
    instagram: "https://www.instagram.com/tartash.eg",
    tiktok: "https://www.tiktok.com/@tartash.eg",
    whatsapp: "https://api.whatsapp.com/send?phone=201278669156",
};

export default function Page() {
    return (
        <div
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-tartash-green via-tartash-gold to-tartash-yellow"
            style={{ background: 'linear-gradient(to bottom right, #4d7d4a, #a7802c, #f2c12d)' }}
        >
            {/* Decorative circular patterns */}
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-tartash-yellow/20 blur-2xl"></div>
            <div className="absolute top-40 right-20 h-40 w-40 rounded-full bg-tartash-cream/30 blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 h-48 w-48 rounded-full bg-tartash-green/20 blur-2xl"></div>
            <div className="absolute bottom-40 right-10 h-36 w-36 rounded-full bg-tartash-yellow/25 blur-3xl"></div>

            <div className="relative mx-auto max-w-5xl px-4 ">
                {/* Header */}
                <header className="mb-8 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <GiOrange className="text-4xl text-tartash-yellow drop-shadow-lg" />
                        <GiWatermelon className="text-5xl text-tartash-yellow drop-shadow-lg" />
                        <GiPineapple className="text-4xl text-tartash-yellow drop-shadow-lg" />
                    </div>
                    <div className=" flex items-center justify-center mb-4">
                        <Image
                            src="/Logo.png"
                            alt="Tartash Juice Logo"
                            width={200}
                            height={200}
                            />

                    </div>

                    <div className="mt-3 flex items-center justify-center gap-2">
                        <FaLeaf className="text-2xl text-tartash-green animate-bounce" />
                        <p className="text-xl font-semibold text-tartash-cream drop-shadow-sm"> Fresh Tropical Juice Menu </p>
                        <FaLemon className="text-2xl text-tartash-yellow animate-bounce" />
                    </div>
                </header>

                {/* Menu Images */}
                <main className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
                    <div className="group transform overflow-hidden rounded-3xl bg-tartash-cream shadow-2xl transition hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(242,193,45,0.4)]">
                        <div className="border-8 border-tartash-yellow rounded-3xl overflow-hidden">
                            <Image
                                src="/1.jpg"
                                alt="Menu page 1"
                                width={1400}
                                height={2000}
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                    </div>

                    <div className="group transform overflow-hidden rounded-3xl bg-tartash-cream shadow-2xl transition hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(242,193,45,0.4)]">
                        <div className="border-8 border-tartash-yellow/60 rounded-3xl overflow-hidden">
                            <Image
                                src="/2.jpg"
                                alt="Menu page 2"
                                width={1400}
                                height={2000}
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="my-8 rounded-3xl bg-tartash-cream/90 backdrop-blur-sm px-6 py-6 shadow-xl">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <GiOrange className="text-3xl text-tartash-gold" />
                        <FaLeaf className="text-2xl text-tartash-green" />
                        <GiPineapple className="text-3xl text-tartash-yellow" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                        <SocialBtn href={LINKS.facebook} label="Facebook" Icon={FaFacebookF} />
                        <SocialBtn href={LINKS.instagram} label="Instagram" Icon={FaInstagram} />
                        <SocialBtn href={LINKS.tiktok} label="TikTok" Icon={FaTiktok} />
                        <SocialBtn href={LINKS.whatsapp} label="Whatsapp" Icon={FaWhatsapp} />

                    </div>

                    <div className="text-center text-sm font-semibold text-tartash-dark">
                        © {new Date().getFullYear()} Tartash Juice 🍊 جميع الحقوق محفوظة
                    </div>
                </footer>
            </div>
        </div>
    );
}

function SocialBtn({ href, label, Icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-tartash-yellow to-tartash-gold px-5 py-3 text-sm font-bold text-tartash-dark shadow-lg transition transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        >
            <Icon className="text-xl" />
            {label}
        </a>
    );
}
