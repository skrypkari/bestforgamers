import React from 'react';
import Accordion from "@/components/ui/accordion";
import assasin from '../../assets/assasin.png'
import bf from '../../assets/bf.png'
import Image from "next/image";

const Faq = () => {
    return (
        <footer className='pt-64 bg-gradient-to-b from-zinc-950 to-zinc-900 w-full'>
            <div className={'max-w-[1380px] w-full flex justify-between mx-auto'}>
                <div className='flex-grow'>
                    <h4 className='text-white font-bold text-[48px]'>FAQ</h4>
                    <div className='flex flex-col gap-8 max-w-[550px] w-full mt-8'>
                        <Accordion title="Какие страны можно пополнить?">
                            Содержимое аккордеона 1.
                        </Accordion>
                        <Accordion title="Лимиты и ограничения">
                            Содержимое аккордеона 2.
                        </Accordion>
                        <Accordion title="Что такое Логин?">
                            Содержимое аккордеона 3.
                        </Accordion>
                        <Accordion title="Пришла сумма меньше">
                            Содержимое аккордеона 3.
                        </Accordion>
                        <Accordion title="Возврат средств">
                            Содержимое аккордеона 3.
                        </Accordion>
                    </div>
                </div>
                <div className={''}>
                    <p className='font-bold text-2xl text-white text-center max-w-[550px] w-full'>Легко и без лишних сложностей.<br/>Удобное пополнение баланса <span className='bg-gradient-to-t bg-clip-text text-transparent from-emerald-500 to-emerald-900 font-bold'>Steam</span></p>
                    <div className='w-[550px] h-[420px] border mt-8 rounded-xl border-white/15 bg-gradient-to-t from-emerald-600/5 to-transparent relative'>
                        <Image src={assasin} alt={''} className={'absolute bottom-0 left-[75px] z-50'}/>
                        <Image src={bf} alt={''} className={'absolute bottom-0 right-[50px] z-10'}/>
                    </div>
                </div>
            </div>
            <div className={'max-w-[1380px] w-full flex justify-between mx-auto mt-32 pb-16'}>
                <span className='text-white/80 font-bold'>© 2024 BestForGamers<br/>Все права защищены.</span>
                <ul className='flex items-center gap-5 text-white'>
                    <li className={'font-bold text-sm cursor-pointer hover:text-emerald-500 transition-all'}>ПОЛИТИКА</li>
                    <li className={'font-bold text-sm cursor-pointer hover:text-emerald-500 transition-all'}>СОГЛАШЕНИЕ</li>
                    <li className={'font-bold text-sm cursor-pointer hover:text-emerald-500 transition-all uppercase'}>Правила возврата</li>
                    <li className={'font-bold text-sm cursor-pointer hover:text-emerald-500 transition-all'}>ТЕХ. ПОДДЕРЖКА</li>
                </ul>
            </div>
        </footer>
    );
};

export default Faq;