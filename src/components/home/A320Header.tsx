import Link from 'next/link';
import { Button } from '../utils/Button';
import { installerRef } from './Installer';
import Container from '../utils/Container';

export const A320Header = () => {
    const handleClick = () => {
        if (installerRef.current) {
            installerRef.current.scrollIntoView({ block: 'center' });
        }
    };

    return (
        <header>
            <video
                className="object-cover fixed -z-10 w-screen h-screen opacity-10"
                src="https://cdn.flybywiresim.com/assets/website/video/A32NX.mp4"
                playsInline
                autoPlay
                muted
                loop
            />
            <Container className="relative max-w-6xl min-h-screen">
                <div className="absolute bottom-0 left-0 h-2/3 px-page">
                    <h1 className="text-8xl font-bold">
                        <span className="text-teal">A32</span>
                        <span className="text-blue">N</span>
                        X
                    </h1>
                    <p className="max-w-xl">
                        Проект, построенный и поддерживаемый сообществом, направленный на предоставление высококачественных и детализированных самолетов
                        для Microsoft Flight Simulator.
                    </p>
                    <div className="flex gap-4 my-5 max-w-md">
                        <Button
                            onClick={handleClick}
                            className="w-40 hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light"
                        >
                            Установщик
                        </Button>

                        <Link href="/a32nx">
                            <Button
                                className="w-44 text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light"
                            >
                                Узнать больше
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};
