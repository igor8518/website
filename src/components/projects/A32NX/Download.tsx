import { Button } from '../../utils/Button';

export const Download = ({ expOnHold }: { expOnHold?: boolean }) => {
    const urls = {
        stable: 'https://flybywiresim-packages.b-cdn.net/stable/A32NX-stable.zip',
        dev: 'https://flybywiresim-packages.b-cdn.net/vmaster/A32NX-master.zip',
        exp: 'https://flybywiresim-packages.b-cdn.net/experimental/A32NX-experimental.zip',
    };

    const getDownloadLink = (link: string) => `https://api.flybywiresim.com/api/v1/download?url=${link}`;

    return (
        <section id="download" className="relative bg-blue-dark-contrast">
            <div className="py-14 px-10 m-auto w-full lg:w-11/12 2xl:w-4/6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:pr-12 lg:w-3/5">
                        <div className="w-1/2 text-left divide-y divide-gray-500 2xl:w-1/4">
                            <h2 className="text-base font-medium tracking-widest text-blue-200 uppercase">ГОТОВЫ К ПОЛЕТУ?</h2>
                            <p className="pt-3 mt-3 text-5xl font-medium text-blue-light">
                                Скачать
                            </p>
                        </div>

                        <p className="mt-5 max-w-prose text-xl">
                            Мы включили множество опций для загрузки наших дополнений, вы можете использовать наш собственный, простой установщик, 
                            чтобы всегда обновлять свои продукты, или вы можете загружать их с помощью готовых релизов.
                        </p>

                        <ul className="pt-7 pl-5 -m-2 text-lg list-disc text-gray-200">
                            <li className="pl-2 ml-2">Легко интегрируется в Microsoft Flight Simulator - никаких внешних программ не требуется.</li>
                            <li className="pl-2 ml-2">Безопасный, надежный и постоянно обновляемый, чтобы гарантировать, что ничего не сломается.</li>
                            <li className="pl-2 ml-2">Установка одним кликом в одну компактную папку.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full divide-y divide-gray-500 lg:w-2/5">
                        {/* Installer */}
                        <div className="pt-16 pb-8 lg:pt-0">
                            <span className="text-4xl text-blue-100">Установщик</span>

                            <p className="mt-4 mb-6 max-w-prose">
                                Наш простой в использовании установщик - это самый простой способ начать работу с нашими дополнениями. Просто запустите и установите любое дополнение, которое вы хотите, всего в два клика.
                            </p>

                            <a href="https://api.flybywiresim.com/installer">
                                <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Скачать</Button>
                            </a>
                        </div>

                        {/* Direct Download */}
                        <div className="pt-7">
                            <span className="text-2xl text-blue-100">Прямое скачивание</span>
                            <p className="mt-4 mb-6 max-w-prose">
                                Если вы предпочитаете прямую загрузку, доступны следующие ссылки.
                            </p>

                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Стабильный релиз</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Скачать</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-5 mb-5">
                                    <span className="text-xl text-gray-300">Версия в разработке</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="float-right w-40 font-bold bg-blue-light-contrast hover:bg-blue-medium">Скачать</Button>
                                    </a>
                                </div>
                                <div>
                                    <div className="flex flex-row justify-between items-center pt-5 mb-8">
                                        <span className="text-xl text-gray-300">Экпериментальная версия</span>
                                        <a href={expOnHold ? undefined : getDownloadLink(urls.exp)}>
                                            <Button
                                                className={`float-right w-40 font-bold bg-blue-light-contrast ${expOnHold ? 'opacity-30 cursor-not-allowed' : 'hover:bg-blue-medium'}`}
                                            >
                                                Скачать
                                            </Button>
                                        </a>
                                    </div>
                                    {expOnHold && (
                                        <span className="flex-wrap mb-8 text-gray-300">
                                            Наша экспериментальная ветвь временно 
                                            <a href="https://docs.flybywiresim.com/fbw-a32nx/support/exp/" className="text-blue-light">&#32;приостановлена&#32;</a>
                                            и все ее функции были перенесены в сборку разработки.
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
