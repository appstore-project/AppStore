import React from 'react';
import AppRow from './AppRow';

export default function render(props) {
    return <>
        <AppRow history={props.history} title='برنامه‌های تازهٔ برگزیده' groupId={1} />
        <AppRow history={props.history} title='به‌روزشده‌های برگزیده ' groupId={2} />
        <AppRow history={props.history} title='مجموعه‌های بازی' groupId={3} wide={true} />
        <AppRow history={props.history} title='برنامه‌های در حال پیشرفت' groupId={2} />
    </>;
}