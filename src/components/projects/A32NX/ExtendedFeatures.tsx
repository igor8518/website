import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures = () => (
    <section className="py-4 pb-20 mx-auto max-w-screen-2xl rounded-lg sm:px-6 lg:px-8 px-page">
        <div className="grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        2xl:grid-cols-4
                        max-w-max mx-auto gap-x-16 gap-y-20"
        >
            <Feature key="EFB">
                <FeatureTitle>
                    Электронная Летная Сумка (EFB)
                </FeatureTitle>
                <FeatureBody>
                    EFB - это интегрированный планшет с удобным набором инструментов, страницей настроек, инструментами производительности и многим другим.
                </FeatureBody>
            </Feature>

            <Feature key="Custom Soundpack">
                <FeatureTitle>
                    Собственный звуковой пакет
                </FeatureTitle>
                <FeatureBody>
                    Наслаждайтесь звуками, как никогда раньше, A32NX включает в себя полностью настраиваемый и высокоточный звуковой пакет.
                </FeatureBody>
            </Feature>

            <Feature key="Simbrief Integration">
                <FeatureTitle>
                    Интеграция с Simbrief
                </FeatureTitle>
                <FeatureBody>
                    Сделайте ввод плана полета легким с помощью интеграции SimBrief, все, что требуется, - это один клик, и вы готовы к полету!
                </FeatureBody>
            </Feature>

            <Feature key="Product Installer">
                <FeatureTitle>
                    Установщик продуктов FBW
                </FeatureTitle>
                <FeatureBody>
                    У FlyByWire есть собственный установщик продуктов, который упрощает задачу установки всех продуктов FlyByWire.
                </FeatureBody>
            </Feature>

            <Feature key="Experimental Variations">
                <FeatureTitle>
                    Экспериментальные вариации
                </FeatureTitle>
                <FeatureBody>
                    Хотите поэкспериментировать с нашими новыми функциями? Вы можете! У нас есть несколько готовых к тестированию ветвей с экспериментальными функциями в нашем установщике!
                </FeatureBody>
            </Feature>

            <Feature key="Constant Additions">
                <FeatureTitle>
                    Постоянные обновления
                </FeatureTitle>
                <FeatureBody>
                    Ветки разработки A32NX обновляются почти ежедневно с совершенно новыми функциями, которые вы можете протестировать прямо сейчас!
                </FeatureBody>
            </Feature>

            <Feature key="Documentation">
                <FeatureTitle>
                    Документтация
                </FeatureTitle>
                <FeatureBody>
                    FlyByWire создала несколько учебных пособий и документов, чтобы сделать быстрое и точное изучение A320 возможным для любого виртуального пилота!
                </FeatureBody>
            </Feature>

            <Feature key="Open Source">
                <FeatureTitle>
                    Открытый исходный код
                </FeatureTitle>
                <FeatureBody>
                    FlyByWire A32NX имеет полностью открытый исходный код, любой желающий может внести свой вклад в проект, и его можно свободно использовать повторно по нашей лицензии.
                </FeatureBody>
            </Feature>
        </div>
        <div id="download" />
    </section>
);

const Feature: FC = ({ children }) => (
    <div className="flex flex-row max-w-prose md:w-96">
        <FontAwesomeIcon className="mt-1 mr-5 mb-auto text-2xl text-green-500" size="1x" icon={faCheck} />
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const FeatureTitle: FC = ({ children }) => (
    <h1 className="text-2xl font-semibold">{children}</h1>
);

const FeatureBody: FC<{ className?: string }> = ({ children, className }) => (
    <p className={`text-lg text-left ${className}`}>
        {children}
    </p>
);
