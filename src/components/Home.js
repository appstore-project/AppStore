import React from 'react';
import SingleLineGridList from './RowList';

export default function render() {
    return <>
        <SingleLineGridList title='برنامه‌های تازهٔ برگزیده' tyepId={1} />
        <SingleLineGridList title='بازیهای تازهٔ برگزیده' tyepId={2} />
        <SingleLineGridList title='به‌روزشده‌های برگزیده' tyepId={2} />
        <SingleLineGridList />
    </>
        ;
}