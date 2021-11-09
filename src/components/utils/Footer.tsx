import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faFacebook, faGithub, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from './Container';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-light transition" icon={props.icon} size="lg" />
    </a>
);

export const Footer = () => (
    <footer className="py-8 bg-blue-dark">
        <Container className="flex flex-col space-y-2">

            <div className="flex gap-x-4 justify-center">
                <FooterIconItem icon={faGithub} href="https://github.com/flybywiresim" />
                <FooterIconItem icon={faTwitter} href="https://twitter.com/FlyByWireSim" />
                <FooterIconItem icon={faFacebook} href="https://www.facebook.com/FlyByWireSimulations" />
                <FooterIconItem icon={faDiscord} href="https://discord.gg/flybywire" />
                <FooterIconItem icon={faTwitch} href="https://www.twitch.tv/flybywiresimulations" />
                <FooterIconItem icon={faYoutube} href="https://www.youtube.com/c/FlyByWireSimulations" />
            </div>

            <div className="flex gap-x-4 justify-center text-center">
                <a
                    className="hover:underline"
                    href="https://github.com/flybywiresim/flybywiresim-website/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Исходный код
                </a>
                <span className="hover:underline cursor-pointer">
                    <Link href="/tos">
                        Условия обслуживания
                    </Link>
                </span>
                <span className="hover:underline cursor-pointer">
                    <Link href="/privacy">
                        Политика конфиденциальности
                    </Link>
                </span>
            </div>

            <a
                className="flex justify-center"
                href="https://vercel.com/?utm_source=flybywiresim&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
            >
                Создано с помощью
                <span className="mx-2">
                    <Image src="/svg/vercel.svg" alt="Vercel" width={60} height={20} />
                </span>
            </a>
            <em className="text-center text-teal-100">&copy; FlyByWire Simulations и его участники 2020-2021</em>
        </Container>
    </footer>
);
