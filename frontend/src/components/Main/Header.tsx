import React from 'react';
import Link from "next/link";
import Button from "@/components/ui/button";

const Header = () => {
    return (
        <header className={'max-w-[1380px] w-full mx-auto mt-6'}>
            <nav className='flex items-center justify-between'>
                <Link href={'/'} className='text-[40px] font-bold text-white'>BestFor<span className={'bg-gradient-to-r from-emerald-600 to-emerald-800 font-bold bg-clip-text text-transparent'}>Gamers</span></Link>
                <ul className='flex items-center gap-2.5 text-white'>
                    <li className={'font-bold text-base cursor-pointer hover:text-emerald-500 transition-all'}>КОНТАКТЫ</li>
                    <li className={'font-bold text-base cursor-pointer hover:text-emerald-500 transition-all'}>ИНСТРУКЦИЯ</li>
                    <li className={'font-bold text-base cursor-pointer hover:text-emerald-500 transition-all'}>FAQ</li>
                </ul>
                <div className='flex gap-2.5'>
                    <Button type={'outline'}>Войти</Button>
                    <Button>Зарегистрироваться</Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;