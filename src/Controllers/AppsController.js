

export class Ctrl { }

let runWithoutBackend = true;
let testApps = [
    { '_id': '5cb6177b66b4fe5110fb84b0', 'appCode': 2000, 'name': 'طاقچه', 'developer': 'بازی سازی کاسپین', 'rate': 4.8, 'category': 'کلمات و دانستنی‌ها', 'isGame': 'TRUE', 'inatallCount': ' 20,000 ', 'size_mb': 23.1, 'version': 1.1, 'shamed': '۱-۲-۶۸۹۷۷۷-۶۳-۰-۱۸۱۸۵۵', 'price': 0, 'inAppPurchase': true, 'descr': '', 'lastChanges': '', 'access': '', 'comments': [{ 'user': 'Ehsan', 'rate': 4, 'comment': 'برنامه خوبیه !' }] },
    { '_id': '5cb6177b66b4fe5110fb84b1', 'appCode': 4000, 'name': 'سلطان ضربه کاشته', 'developer': 'مدین گیم', 'rate': 0.5, 'category': 'ورزشی', 'isGame': 'TRUE', 'inatallCount': ' 20,000 ', 'size_mb': 45.6, 'version': 4.5, 'shamed': '۱-۲-۶۸۹۷۷۷-۶۳-۰-۱۸۳۶۵۵', 'price': 0, 'inAppPurchase': true, 'descr': '', 'lastChanges': '', 'access': '', 'comments': [{ 'user': 'Ehsan', 'rate': 4, 'comment': 'برنامه خوبیه !' }] },
    { '_id': '5cb6177b66b4fe5110fb84b2', 'appCode': 3000, 'name': 'ديرين شاه', 'developer': 'نسل اندیشه سبز', 'rate': 4.7, 'category': 'تفننی', 'isGame': 'TRUE', 'inatallCount': ' 20,000 ', 'size_mb': 35.3, 'version': 1.13, 'shamed': '۱-۲-۶۸۹۷۷۷-۶۳-۰-۱۸۲۵۰۷', 'price': 2000, 'inAppPurchase': true, 'descr': '', 'lastChanges': '', 'access': '', 'comments': [{ 'user': 'Ehsan', 'rate': 4, 'comment': 'برنامه خوبیه !' }] },
    { '_id': '5cb6177b66b4fe5110fb84b3', 'appCode': 5000, 'name': 'کمد', 'developer': 'علی ۱۱۰', 'rate': 4, 'category': 'ابزارها', 'isGame': 'FALSE', 'inatallCount': ' 1,000 ', 'size_mb': 5.5, 'version': 2.1, 'shamed': '۱-۲-۶۸۹۷۷۷-۶۳-۰-۱۸۴۴۲۷', 'price': 0, 'inAppPurchase': false, 'descr': '', 'lastChanges': '', 'access': '', 'comments': [{ 'user': 'Ehsan', 'rate': 4, 'comment': 'برنامه خوبیه !' }] },
    { '_id': '5cb6177b66b4fe5110fb84b4', 'appCode': 1000, 'name': 'خروس جنگی', 'developer': 'مدریک', 'rate': 4.5, 'category': 'امتیازی', 'isGame': 'TRUE', 'inatallCount': ' 20,000 ', 'size_mb': 78.2, 'version': '2.0.82', 'shamed': '۱-۲-۶۸۹۷۷۷-۶۳-۰-۱۴۱۱۰۷', 'price': 0, 'inAppPurchase': true, 'descr': '', 'lastChanges': '', 'access': '' },
];

Ctrl.getAppsOfGroup = async () => {

    if (runWithoutBackend)
        return testApps;

    var url = new URL('http://localhost:3000/apps/getAll'),
        params = { n: 100000, offset: 0 };

    Object.keys(params).map(key => url.searchParams.append(key, params[key]));

    let res = await fetch(url);
    let resInfo = await res.json();

    return (resInfo);
};

Ctrl.getAppInfo = async (appCode) => {

    if (runWithoutBackend) {
        let res = testApps.filter(x => x.appCode == appCode);
        return res;
    }

    var url = new URL('http://localhost:3000/apps/getAppInfo'),
        params = { appCode };

    Object.keys(params).map(key => url.searchParams.append(key, params[key]));

    let res = await fetch(url);
    let resInfo = await res.json();

    return (resInfo);
};

Ctrl.addComment = async (appCode, text) => {

    if (runWithoutBackend) {
        let res = testApps.filter(x => x.appCode == appCode);
        return res;
    }

    var url = new URL('http://localhost:3000/apps/addComment'),
        params = { text };

    Object.keys(params).map(key => url.searchParams.append(key, params[key]));
    alert('نظر ثبت شد:' + text);

    let res = await fetch(url);
    let resInfo = await res.json();

    return (resInfo);
};



