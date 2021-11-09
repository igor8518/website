import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const Donate = () => (
    <section className="bg-blue-darker">
        <div className="relative">
            <img className="object-cover absolute w-full h-full opacity-10" src="/img/donate.jpg" alt="" />

            <Container className="flex relative top-0 flex-col items-center py-12 max-w-7xl lg:items-start">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-teal">Пожертвовать</h1>
                    <p>
                        Вклады позволяют FlyByWire Simulations предоставлять нашим пользователям более качественные услуги, 
                        такие как быстрые и надежные сети загрузки и интегрированные онлайн-функции для обогащения вашего опыта моделирования полетов.
                    </p>
                    <p className="py-4">
                    Мы используем Open Collective для прозрачного управления нашими пожертвованиями и расходами, что означает, что вы можете видеть, как мы используем пожертвованные средства в любое время.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-3 space-x-4 text-center md:space-y-0 lg:flex-row lg:items-start lg:text-left">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                        Пожертвовать
                        </Button>
                    </a>
                    <em className="self-center max-w-prose text-teal-100">
                        *Пожертвования не приносят никакой прибыли. Пожертвование не гарантирует доступ к дополнительному контенту или его эксклюзивность, если такой контент когда-либо будет предоставлен.
                    </em>
                </div>
            </Container>
        </div>
    </section>
);
