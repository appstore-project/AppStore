import React from 'react';
import AppRow from './AppRow';

export default function render() {
    return <>
        <AppRow title='برنامه‌های تازهٔ برگزیده' tyepId={1} />
        <AppRow title='به‌روزشده‌های برگزیده ' tyepId={2} />
        <AppRow title='مجموعه‌های بازی' tyepId={3} wide={true} />
        <AppRow title='برنامه‌های در حال پیشرفت' tyepId={2} />
    </>
        ;
}