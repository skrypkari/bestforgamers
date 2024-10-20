'use client'
import React, { useState, useEffect } from 'react';
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

type AmountsType = {
    amount: string;
    active: boolean;
};

const Form = () => {
    const [amountValue, setAmountValue] = useState('');

    const [selectedMethod, setSelectedMethod] = useState(0);

    const [amounts, setAmounts] = useState<AmountsType[]>([
        { amount: '100', active: false },
        { amount: '200', active: false },
        { amount: '500', active: false },
        { amount: '2000', active: false },
    ]);

    const handleAmountSelect = (selectedAmount: string) => {
        // Устанавливаем значение в инпут с добавлением знака рубля
        setAmountValue(`${selectedAmount} ₽`);

        // Обновляем активный элемент
        setAmounts(prevAmounts =>
            prevAmounts.map(item => ({
                ...item,
                active: item.amount === selectedAmount, // Активируем выбранный элемент
            }))
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    useEffect(() => {
        // Удаляем активные элементы, если значение не в массиве
        const numericValue = amountValue.replace(' ₽', ''); // Убираем знак рубля
        const foundAmount = amounts.find(item => item.amount === numericValue);

        if (foundAmount) {
            // Активируем элемент, если найден
            setAmounts(prevAmounts =>
                prevAmounts.map(item => ({
                    ...item,
                    active: item.amount === numericValue,
                }))
            );
        } else {
            // Деактивируем все элементы, если значение не найдено
            setAmounts(prevAmounts =>
                prevAmounts.map(item => ({
                    ...item,
                    active: false,
                }))
            );
        }
    }, [amountValue]); // Запускаем эффект при изменении amountValue

    return (
        <form className='mt-8 flex flex-col'>
            <Input placeholder='Логин' info={true}/>
            <Input
                placeholder='Сумма'
                info={true}
                type={'amount'}
                value={amountValue}
                onChange={setAmountValue}
                className={'mt-8'}
            />
            <div className='w-full h-[60px] flex mt-8'>
                {amounts.map((item, i) => (
                    <span
                        key={i}
                        onClick={() => handleAmountSelect(item.amount)} // Обработчик клика
                        className={`bg-white/10 w-full flex justify-center items-center h-[60px] relative font-bold text-white cursor-pointer hover:bg-white/15 transition-all ${item.active ? '!bg-emerald-600' : ''} ${i === 0 ? 'rounded-l-xl border-l border-y border-white/15' : ' border-y border-white/15'} ${i === amounts.length - 1 ? 'rounded-r-xl border-r border-y border-white/15' : ''}`}
                    >
                        {item.amount} ₽
                    </span>
                ))}
            </div>
            <div className='flex justify-between items-center mt-5'>
                <span className='text-white font-bold text-2xl'>Способ оплаты</span>
                <div className='flex gap-1.5 items-center'>
                    <span
                        className='text-[10px] font-bold cursor-pointer text-white/80 hover:text-white transition-all'>Как это работает?</span>
                    <span
                        className='text-[10px] font-bold cursor-pointer text-emerald-500 hover:text-emerald-400 transition-all'>Пополняю впервые</span>
                </div>
            </div>
            <div className={'w-full h-[40px] flex mt-5'}>
                <span
                    onClick={() => setSelectedMethod(0)}
                    className={`border-y border-l border-white/15 bg-white/10 w-full flex justify-center items-center h-[40px] relative font-bold text-white hover:bg-white/15 transition-all rounded-l-xl cursor-pointer ${selectedMethod == 0 ? 'bg-white/20' : 'bg-white/10'}`}
                >
                    СБП
                </span>
                <span
                    onClick={() => setSelectedMethod(1)}
                    className={`border-y border-r border-white/15 bg-white/10 w-full flex justify-center items-center h-[40px] relative font-bold text-white hover:bg-white/15 transition-all rounded-r-xl cursor-pointer ${selectedMethod == 1 ? 'bg-white/20' : 'bg-white/10'}`}
                >
                    Картой
                </span>
            </div>
            <Button className={'mt-8'} onClick={handleSubmit}>Оплатить</Button>
            <span className='text-[12px] text-white font-bold mt-4'>
                Нажимая “Оплатить”, вы принимаете <span className='text-emerald-500 font-bold hover:text-emerald-400 cursor-pointer transition-all'>Правила пользования</span> <br/>сайтоми и <span className='text-emerald-500 font-bold hover:text-emerald-400 cursor-pointer transition-all'>Политику конфиденциальности</span>.
            </span>
        </form>
    );
};

export default Form;



