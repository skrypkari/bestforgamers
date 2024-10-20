'use client'
import React, { useRef } from 'react';
import { IoIosInformationCircle } from "react-icons/io";
import {className} from "postcss-selector-parser";

type InputType = {
    placeholder?: string;
    info?: boolean;
    type?: 'text' | 'amount';
    value?: string; // Добавлено
    onChange?: (value: string) => void; // Добавлено
    className?: string;
}

const Input = ({ placeholder, info, type, value = '', onChange, className= ''}: InputType) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;

        if (type === 'amount') {
            // Удаляем все символы, кроме цифр
            inputValue = inputValue.replace(/\D/g, '');

            // Если есть значение, добавляем знак рубля
            if (inputValue) {
                inputValue += ' ₽';
            }

            // Сохранение позиции курсора
            const cursorPosition = inputValue.length - 2; // Позиция перед знаком рубля

            // Вызываем функцию обновления значения
            onChange?.(inputValue);

            // Перемещаем курсор перед знаком рубля
            if (inputRef.current) {
                setTimeout(() => {
                    inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
                }, 0);
            }
        } else {
            // Для обычного ввода
            onChange?.(inputValue);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <input
                ref={inputRef}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className='w-full h-[60px] rounded-xl bg-white/10 border border-white/15 pl-2 placeholder:font-bold placeholder:text-white/80 outline-0 text-white font-bold focus:bg-white/20 transition-all'
            />
            {info && <IoIosInformationCircle className='absolute right-5 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-white hover:text-white/80 transition-all' />}
        </div>
    );
};

export default Input;
