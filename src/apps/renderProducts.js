const products = [
    {
        image:"https://90.img.avito.st/image/1/1.r-uFZ7a4AwKzzsEH1zmHzo_FAQQ7xoEK88MBADXOCwgz.G6jZARal26p4gvbPWs3-nc0C1seyCCBMFyDflkdABjk",
        title:"Коммутатор Allied Telesyn AT-8124XL",
        price:"53 000"  
    },
    {
        image:"https://60.img.avito.st/image/1/1.NUwupLa4maUYDVugSLx1ZyQGm6OQBRutWACbp54Nka-Y.fAdztkKlXfdb55VwTVVV_1ipnNgP57bzKwx59y8KOn4",
        title:"Columbia штаны",
        price:"3 500 "
    },
    {
        image:"https://30.img.avito.st/image/1/1.rewzg7a4AQUFKsMAZcXPxzkhAwONIoMNRScDB4MqCQ-F.MxfCtebHCWWC8ufyUzLwwbIqAp2hC3jbW1X74d4Kgx0",
        title:"Ретро олимпийка из 90 х СССР",
        price:"550"
    },
    {
        image:"https://20.img.avito.st/image/1/1.CfIXRba4pRsh7GceCSFw4hvnpx2p5CcTYeGnGafsrRGh.BK5ywf6aRrFCpcKrLM2VS5jRCKqR5YD9jgxQTegLUzQ",
        title:"Телевизор samsung 65 дюймов",
        price:"26 500"
    },
    {
        image:"https://90.img.avito.st/image/1/1.6CuJHLa4RMK_tYbH1Tf4AIO-RsQ3vcbK_7hGwDm1TMg_.j26pv4ll4ZMvig72vVrG5UNqLBHcdf3REcRWQhc72MY",
        title:"Камера видеонаблюдения с установкой",
        price:"4 200"
    },
    {
        image:"https://20.img.avito.st/image/1/1.YisGrLa4zsIwBQzHTtVlAAwOzMS4DUzKcAjMwLYFxsiw.QAj72k1h0fSnj3rZZd2DLWuD8Iw6blM0Ngjne9QBaB4",
        title:"Стиральная машина hotpoint ariston 7 кг",
        price:" 5 999"
    },
    {
        image:"https://90.img.avito.st/image/1/1.vpuzKLa4EnKFgdB3wz6C57mKEHQNiZB6xYwQcAOBGngF.g944yBrcVq3ymXc-g0iKy4LnrSI01LUW6lfeF-HK48s",
        title:"Внешний жесткий диск",
        price:"490"
    },
    {
        image:"https://10.img.avito.st/image/1/1.V8bAqLa4-y_2ATkq4pEFu8oK-Sl-CXkntgz5LXAB8yV2.WgOsao51-VOezdss7gQgC9aKP1sJSi5Sxi9gB6ru39w",
        title:"3D принтер anycubic X6KS",
        price:"39 999"
    },
    {
        image:"https://50.img.avito.st/image/1/1.p2li17a4C4BUfsmFIKnLaW91CYbcdomIFHMJgtJ-A4rU.UysC46FtexZFlySiRpToul3xwCJnUEfaszvTFJpLxkM",
        title:"Свет для съемки",
        price:"799"
    },
    {
        image:"https://60.img.avito.st/image/1/1.IXQMqLa4jZ06Hw-QQqBmJwEKj5uyCQ-LOgSPn7wBhZe6.0_9JGGMENuwbAbMbiihUmGjt65XddbRU0EgbsVowm6Y",
        title:"Nike air jordan",
        price:"3 500"
    },
    {
        image:"https://90.img.avito.st/image/1/1.N0n837a4m6DKdlmlnp9ZCPF9maZCfhmoinuZokx2k6pK.OjztEcHK2GMK4OlUwRcQvPawk5br0NBpZbzeQYNa1M8",
        title:"Кеды levis мужские",
        price:"3 450"
    },
    {
        image:"https://90.img.avito.st/image/1/1.oU2o2La4DaSecc-h5r78JqV6D6IWeY-s3nwPphhxBa4e.i05CLMoMNvfq8OtpdGSWFE5ne49tyTYZhpNLMKqBll8",
        title:"Жесткий диск seagate",
        price:"350"
    },
    {
        image:"https://80.img.avito.st/image/1/1.8XIymLa4XZsEMZ-eXJPVZj46X52MOd-TRDxfmYIxVZGE.NY1XtQQiKQXCaA9-XAEvGXRnpa_sHKUE8Epon0a5XwI",
        title:"Тепловая пушка",
        price:"999"
    },
    {
        image:"https://20.img.avito.st/image/1/1.oX6vAra4DZeZq8-S4XzfbqOgD5ERo4-f2aYPlR-rBZ0Z.LTjt15usYrHk4P-U4G4SLo3ug_jkXgqxzNWd5NUAccA",
        title:"Пауэрбанк",
        price:"350"
    },
    {
        image:"https://70.img.avito.st/image/1/1.dCUKC7a42Mw8ohrJbnZqOwap2sq0qlrEfK_azrqi0Ma8.zKOeIvSilToqfYhFsweNfpSQVorfG-X6t_Qwfv2ISMo",
        title:"Монитор Benq",
        price:"999"
    },
    {
        image:"https://60.img.avito.st/image/1/1.Y3Xw1ra4z5zGfw2Zustja_x0zZpOd02UhnLNnkB_x5ZG.3QR2nu-MGZk3kAE8NwGmTiYGQTldEQa2ptMPne8UjT8",
        title:"Робот мойщик окон",
        price:"2 500"
    },
    {
        image:"https://00.img.avito.st/image/1/1.QXJp5La47ZtfTS-eZ41SbWVG753XRW-TH0DvmdlN5ZHf.H0bwWuRbYWXN-S02v6Y9TVQwAgFkTAe1VFLccUx1zUA",
        title:"Электрический теплый пол",
        price:"2 500"
    },
    {
        image:"https://70.img.avito.st/image/1/1.DimFZba4osCzzGDFlTlfMYnHoMY7xCDI88GgwjXMqsoz.F_ulzhQYcbzeMfgx2_TVzyifj_kxOE3bmjV5WKAsTWU",
        title:"Canon zoemini s",
        price:"5 999"
    },
    {
        image:"https://40.img.avito.st/image/1/1.8KdGh7a4XE5wLp5LKpSTv0olXkj4Jt5GMCNeTPYuVETw.r8DGDpw6arkGMMPrUphdWc-s6wgFX2wlcpUa2mWGZ4c",
        title:"Степлер строительный",
        price:"800"
    },
    {
        image:"https://90.img.avito.st/image/1/1.-u31n7a4VgTDNpQBjdie9fk9VAJLPtQMgztUBkU2Xg5D.NZA9sC5rmhxrXQGLzWnehGVC89jSdyTyYb2shv3PKaU",
        title:"Монитор samsung 22 дюйма",
        price:"599"
    },
    {
        image:"https://00.img.avito.st/image/1/1.-ur1n7a4VgPDNpQGjZid8vk9VAVLPtQLgztUAUU2XglD.4uZweNyGhBOHKW-2UL_rjtFC3qZyGaQS311MAPpDu4k",
        title:"Камера видеонаблюдения wifi уличная",
        price:"2 500"
    },
    {
        image:"https://60.img.avito.st/image/1/1.2OdOhba4dA54LLYLcrK7_UIndgjwJPYGOCF2DP4sfAT4.q6tskJTEpjnbUnuU-cNpxw_IPgtfeviLVhbTbujPjDk",
        title:"Xiaomi Mi 4, 3/16 ГБ",
        price:"1 299"
    },
   
];

let cardItem = ''

let out = document.querySelector('.products__items');

const btnBron=document.querySelector(".item_card-btn");


products.forEach ((el) => {
    cardItem =
    `          <div class="product__item_card">
                    <img src="${el.image}" alt="" class="item_card-img">
                    <p class="item_card-title">${el.title}</p>
                    <div class="item_card-buy">
                        <button class="item_card-btn">Купить</button>
                        <p class="item_card-price">${el.price} ₽</p>
                    </div>
                </div>
    `;
    out.insertAdjacentHTML('beforeend', cardItem);
})



let card_btn = document.querySelectorAll(".item_card-btn");
    
card_btn.forEach((e)=>{
    e.addEventListener('click',function(e){
        e.preventDefault();
       document.querySelector("#zakaz").scrollIntoView({behavior:"smooth"});
    });
});