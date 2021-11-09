import Image from 'next/image';
import { createRef, forwardRef } from 'react';
import { IconPackage } from '@tabler/icons';
import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const installerRef = createRef<HTMLDivElement>();

export const Installer = forwardRef(() => (
    <section ref={installerRef} className="overflow-hidden py-12 bg-blue-dark">
        <Container className="flex flex-col items-center 3xl:flex-row 3xl:justify-center">
            <div className="mb-4 text-center 2xl:mr-12 3xl:text-left">
                <IconPackage className="p-2 mx-auto mb-4 bg-blue-light-contrast rounded-xl 3xl:mx-0" size={55} stroke={1.5} />
                <h1 className="font-extrabold">
                    Собственный установщик
                </h1>
                <p className="max-w-2xl text-blue-100">
                    Наш специально созданный установщик с открытым исходным кодом - это место, где мы храним наши проекты, чтобы вы могли легко установить их.
                    Выберите, какую ветвь вы хотите установить, и программа установки автоматически загрузит ее в
                    соответствующую папку.
                </p>
                <a href="https://api.flybywiresim.com/installer">
                    <Button className="mt-8 w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                        Скачать
                    </Button>
                </a>
            </div>
            <div className="-mb-40 w-11/12 xl:w-5/6 3xl:-mb-3 3xl:w-320">
                <Image
                    src="/img/InstallerScreenshot.png"
                    alt="Установщик"
                    width={1200}
                    height={850}
                    quality={90}
                    objectFit="contain"
                />
            </div>
        </Container>
    </section>
));
