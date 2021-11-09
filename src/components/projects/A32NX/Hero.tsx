import { Button } from '../../utils/Button';

export const Hero = () => (
    <>
        <header className="absolute inset-y-1/3 inset-x-2 z-30 mx-auto max-w-7xl px-page">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h2 className="mb-2 ml-2 text-2xl font-medium tracking-widest uppercase">
                    ОТКРОЙТЕ ДЛЯ СЕБЯ
                    </h2>
                    <h1 className="text-7xl font-medium sm:text-8xl">
                        <span className="text-blue-light">A32</span>
                        <span className="text-blue">N</span>
                        X
                    </h1>
                    <h1 className="mt-2 w-2/3 text-xl">
                        &quot;Потенциал в рамках проекта A32NX чрезвычайно перспективен, и его будущее является ярким в задаче доведения самолета до уровня высокой точности.&quot;
                    </h1>
                    <p className="mt-4 text-xl text-gray-200">
                        - Дэн, Реальный пилот Airbus A320
                    </p>
                    <div className="flex py-5 max-w-md">

                        <a href="https://api.flybywiresim.com/installer">
                            <Button
                                className="mr-3 w-40 text-xl font-bold hover:text-blue-light bg-blue-light hover:bg-white border-2 border-blue-light"
                            >
                                Установщик
                            </Button>
                        </a>

                        <a href="#download">
                            <Button
                                className="w-40 text-xl font-bold text-blue-light hover:text-blue-light hover:bg-white border-2 border-blue-light"
                            >
                                Скачать
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <img draggable="false" className="object-cover relative z-0 w-screen h-screen opacity-30 select-none" src="/img/discord.jpg" alt="" />
    </>
);
