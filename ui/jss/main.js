// import "swiper/components/pagination/pagination.scss";
window.addEventListener('load', function() {
    //change background color on scroll
    window.addEventListener('scroll', addClassHeader)
    let header = document.querySelector('.header__section')
    if (header) {
        addClassHeader();
    }

    function addClassHeader() {
        if (window.scrollY > 50) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }
    // burger
    let header__burger = document.querySelector('.burger__menu');
    let header_menu = document.querySelector('.nav-bar__menu');
    let back = document.querySelector('body');
    let header__list = document.querySelector('.menu__list');

    header__burger.onclick = function() {
        header__burger.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }

    header__list.onclick = function() {
        header__list.classList.remove('active');
        back.classList.toggle('lock');
    }

    //sliders

    let premenuSlider = document.querySelector('.header__content-slider-container');

    let premenuSwiper;
    premenuSwiper = new Swiper(premenuSlider, {
        loop: true,
        slideClass: 'premenu-slide',
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-premenu-slider',
            prevEl: '.swiper-button-prev-premenu-slider',
        },
        pagination: {
            el: '.swiper-pagination-premenu-slider',
            clickable: true,
            bottom: 5,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            940: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            1427: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
    })

    let bookingSlider = document.querySelector('.booking-slider__container');

    let bookingSwiper;
    bookingSwiper = new Swiper(bookingSlider, {
        loop: true,
        spaceBetween: 30,
        slideClass: 'booking-slider__slide',
        pagination: {
            el: '.swiper-pagination-booking-slider',
            clickable: true,
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1,
        //         spaceBetween: 50,
        //     },
        //     400: {
        //         slidesPerView: 1,
        //         spaceBetween: 25,
        //     },
        //     940: {
        //         slidesPerView: 2,
        //         spaceBetween: 25,
        //     },
        //     1427: {
        //         slidesPerView: 3,
        //         spaceBetween: 24,
        //     }
        // },
    })

    let menuSlider = document.querySelector('.tab-triggers__container');

    let menuSwiper;
    menuSwiper = new Swiper(menuSlider, {
        loop: false,
        infinity: false,
        spaceBetween: 30,
        slidesPerView: 8,
        slideClass: 'tab-triggers__slide',
        navigation: {
            nextEl: '.swiper-button-next-premenu-slider',
            prevEl: '.swiper-button-prev-premenu-slider',
        },
        // pagination: {
        //     el: '.swiper-pagination-booking-slider',
        //     clickable: true,
        // },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            530: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            940: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            1677: {
                slidesPerView: 8,
                spaceBetween: 30,
            }
        },
    })

    let gallerySlider = document.querySelector('.gallery-slider__container');

    let gallerySwiper;
    gallerySwiper = new Swiper(gallerySlider, {
        loop: true,
        infinite: true,
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        slideClass: 'gallery-slider__slide',
        navigation: {
            nextEl: '.swiper-button-next-gallery-slider',
            prevEl: '.swiper-button-prev-gallery-slider',
        },
        // pagination: {
        //     el: '.swiper-pagination-booking-slider',
        //     clickable: true,
        // },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            620: {
                slidesPerView: 3,
            },
        },
    })

    //tabs



    var menuTab = [].slice.call(document.querySelectorAll('.tab-triggers__slide'));

    var sheets = [].slice.call(document.querySelectorAll('.menu-content__item'));
    menuTab.forEach(function(tab, idx) {

        tab.addEventListener('click', function(idx, e) {
            e.preventDefault();
            e.stopPropagation();

            // Так же в css для Таб добавляем класс "tab-active"
            menuTab.forEach(function(t, i) {
                if (i == idx) {
                    t.classList.add('tab-active');
                } else {
                    t.classList.remove('tab-active');
                }
            });

            // И тоже самое для контента. добавляем в css класс "tabs-content__item--active".
            sheets.forEach(function(sheet, i) {
                if (i == idx) {
                    sheet.classList.add('tabs-content__item--active');
                } else {
                    sheet.classList.remove('tabs-content__item--active');
                }
                sheet.animate([
                    { opacity: '0' },
                    { opacity: '1' }
                ], { duration: 200, easing: 'ease-in' })
            });

        }.bind(null, idx));

    });


    let homeTab = document.querySelectorAll('.tabs-triggers__item');
    homeTab.forEach((item) =>
        item.addEventListener('click', function(e) {
            e.preventDefault();

            let btn1 = document.querySelectorAll('.tabs-triggers__item');
            let block1 = document.querySelectorAll('.tabs-content__item');
            btn1.forEach((key, index) => {
                key.addEventListener('click', function() {
                    block1.forEach((item, itemindex) => {
                        item.animate([
                            { opacity: '0' },
                            { opacity: '1' }
                        ], { duration: 200, easing: 'ease-in' })
                    });
                });
            });

            const id = e.target.getAttribute('href').replace('#', '');
            document.querySelectorAll('.tabs-triggers__item').forEach(
                (child) => child.classList.remove('tab-active')
            );

            document.querySelectorAll('.tabs-content__item').forEach(
                (child) => child.classList.remove('tabs-content__item--active')
            );

            item.classList.toggle('tab-active');

            let content = document.getElementById(id);
            content.classList.add('tabs-content__item--active');
        })
    );



    var element = document.getElementById('phone1');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);

    // $("#phone1").mask("+7(999) 999-9999");

    // flatpickr("#date-input", {
    //     enableTime: true,
    //     dateFormat: "H:i",
    // });



    // document.addEventListener('DOMContentLoaded', () => {
    //     function tabsMain() {
    //         let descParentTabs = document.querySelector('.tab-head')
    //         let btn = document.querySelectorAll('.tablink');
    //         let block = document.querySelectorAll('.tabcontent');
    //         btn.forEach((key, index) => {
    //             key.addEventListener('click', function() {
    //                 block.forEach((item, itemindex) => {
    //                     item.classList.toggle('active', index === itemindex)
    //                     item.animate([
    //                         { opacity: '0' },
    //                         { opacity: '1' }
    //                     ], { duration: 200, easing: 'ease-in' })
    //                 });
    //             });
    //         });

    //         descParentTabs.addEventListener('click', (e) => {
    //             const target = e.target
    //             if (target.classList.contains('tablink')) {
    //                 btn.forEach(item => {
    //                     item.classList.remove('tab-active')
    //                 })
    //             }
    //             target.classList.add('tab-active')
    //         });
    //     }
    //     tabsMain();
    // })

    //input styling
    let bottomInput = this.document.querySelectorAll('.booking__date-guests input');

    bottomInput.forEach((input) => {
        input.addEventListener('click', function(e) {
            input.classList.add('active');
            console.log(target)
        })
        input.addEventListener('change', function(e) {
            input.classList.toggle('active');
        })
    })

    let topInput = this.document.querySelectorAll('.booking__name-tel-input');
    topInput.forEach((input) => {
        input.addEventListener('change', function() {
            console.log(input.value.length)
            if (input.value.length > 0) {
                input.classList.add('active');
            } else {
                input.classList.remove('active');
            }
        })
    })

    //min date today

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date-input").setAttribute("min", today);

})

//Корзина магазина
function requestCart() {

    const cartDOMElement = document.querySelector('.js-cart')
    const cartCompareDOMElement = document.querySelector('.compare__slider')
    const cartItemsCounterDOMElement = document.querySelectorAll('.js-cart-total-count-items')
    const cartTotalPriceDOMElement = document.querySelectorAll('.js-cart-total-summa')
        // const cartTotalSummaDOMElement = document.querySelector('.js-cart-total-price')
        // const totalSumma = document.querySelector('.js-all-summa')

    const cart = JSON.parse(localStorage.getItem('DosOrtapediaCart')) || {};
    // const cartCompare = JSON.parse(localStorage.getItem('DosOrtapediaCartCompare')) || {};


    const clearBusket = () => {
        const table = document.querySelector('.busket')
            // const total = document.querySelector('.count')
            // const form = document.querySelector('.feedback__container')
        const empty = document.querySelector('.empty')
        if (Object.keys(cart).length == 0) {
            table.classList.add('disabled');
            // total.classList.add('disabled');
            // form.classList.add('disabled');
            empty.classList.add('active');
        }
    }
    const busketpage = document.querySelector('.busket')
    if (busketpage) {
        clearBusket();
    }
    //отображаем добавленный товар в корзине
    const renderCartItem = ({ id, articul, name, totalprice, size, price, src, quantity, href }) => {
        const cartItemDOMElement = document.createElement('div');
        if (articul === null) {
            articul = '';
        }
        // totalprice = totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        const cartItemTemplate = `
        <div class="busket__card-left">
            <a href="${href}" class="busket__card-img"><img src="${src}" alt=""></a>
        </div>
        <div class="busket__card-right">
            <div class="busket__card-row">
                <div class="busket__card-title">
                    <a href="${href}" class="busket__title-link">${name}</a>
                </div>
                <a href="javascript:;" class="busket__card-remove remove" title="Удалить товар">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="14.5" stroke="#031D38"/>
                        <path d="M18.5355 19.714L15 16.1785L11.4645 19.714L10.286 18.5355L13.8215 15L10.286 11.4645L11.4645 10.286L15 13.8215L18.5355 10.286L19.714 11.4645L16.1785 15L19.714 18.5355L18.5355 19.714Z" fill="#031D38"/>
                    </svg>
                </a>
            </div>
            <div class="busket__card-row">
                <span class="busket__card-price">${price} тг</span>
                <span class="js-cart-item-totalprice">${totalprice} тг</span>
                <span class="busket__card-size">${size}</span>
                <div class="count-items">
                    <button class="js-minus" title="Убавить"><img src="/img/minus.svg" alt="" ></button>
                    <p class="js-cart-item-quantity">${quantity}</p>
                    <button class="js-plus" title="Прибавить"><img src="/img/plusbusket.svg" alt="" ></button>
                </div>
            </div>
            <div class="busket__card-row">
                <div class="busket__card-articul"></div>
            </div>
            </div>
    `;

        cartItemDOMElement.innerHTML = cartItemTemplate;
        cartItemDOMElement.setAttribute('data-id', id);
        cartItemDOMElement.classList.add('busket__card', 'shadow');
        cartDOMElement.appendChild(cartItemDOMElement);
        totalBusket();
        updateCart();
    }


    //сохраняем товар в LocalStorage
    const saveCart = () => {
        localStorage.setItem('DosOrtapediaCart', JSON.stringify(cart));
    }


    // подсчитываение колличества и суммы товара
    const totalBusket = () => {
        let totalcount = 0;
        const ids = Object.keys(cart);
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i]
            totalcount += +(cart[id].quantity);
        }

        let totalAll = 0;
        const price = document.querySelectorAll('.js-cart-item-totalprice');
        for (let i = 0; i < price.length; i++) {
            totalAll = totalAll + parseInt(price[i].innerHTML);
        }

        cartTotalPriceDOMElement.textContent = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
        // cartTotalSummaDOMElement.textContent = total + ' тг';
        cartItemsCounterDOMElement.forEach(elem => {
            elem.textContent = totalcount;
        })
        cartTotalPriceDOMElement.forEach(elem => {
            elem.textContent = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг'
        })
        $('.js-cart-total-summa').attr('data-summ', totalAll);

        if (ids.length == 0) {
            cartTotalPriceDOMElement.forEach(elem => {
                    elem.textContent = totalAll + ' тг'
                })
                // cartTotalSummaDOMElement.textContent = 0;
            $('.js-cart-total-summa').attr('data-summ', 0);
        }
        updateCart();
        checkSelectDeliv();
    }

    function totalBusketHeader() {
        let busket = document.querySelector('.count__busket')
        let totalcount = 0;
        const ids = Object.keys(cart);
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i]
            totalcount += +(cart[id].quantity);
        }
        console.log(totalcount)
        busket.innerHTML = totalcount;
        if (totalcount > 1) {
            busket.classList.add('active')
        } else {
            busket.classList.remove('active')
        }
    }
    totalBusketHeader();
    //Проверка выбранного селекта для доставки товара
    let select = document.getElementById('deliv')
    if (select) {
        select.addEventListener('input', checkSelectDeliv)
    }

    function checkSelectDeliv() {
        let summa = document.querySelector('.js-all-summa')
        let deliv = document.querySelector('.deliv')
        let select = document.getElementById('deliv')
        let value = select.value
        let totalAll = 0;
        // let price = document.querySelectorAll('.js-cart-item-totalprice');
        // for (let i = 0; i < price.length; i++) {
        //     let parseSumma = totalAll + parseInt(price[i].innerHTML)
        //     totalAll = parseSumma;
        // }
        if (value === 'delivery') {
            // let parseSumma = parseInt(totalAll + 2000)
            // summa.innerHTML = parseSumma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
            deliv.classList.add('active')
        } else {
            // summa.innerHTML = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг'
            deliv.classList.remove('active')
        }
        requestTable();
        // console.log(value)
    }
    //Удаление из корзины
    const deleteCartItem = (id) => {
            const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
            // const tableElement = tableDOMElement.querySelector(`[data-product-articul="${articul}"]`);
            cartDOMElement.removeChild(cartItemDOMElement);
            // tableDOMElement.removeChild(tableElement);
            delete cart[id];
            updateCart();
            totalBusket();
        }
        //Обновление количества товара и итоговой суммы
    const updateQuantityTotalPrice = (id, quantity) => {
            const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"`);
            const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
            // const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price')
            const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-totalprice');

            const ids = Object.keys(cart);
            cart[id].quantity = quantity;
            cartItemQuantityDOMElement.textContent = quantity;
            cart[id].totalprice = cart[id].quantity * cart[id].price;
            cartItemPriceDOMElement.textContent = cart[id].totalprice + ' тг';
            console.log(cart[id].totalprice)

            // tableQuantity.textContent = quantity;
            cart[id].totalprice = cart[id].quantity * cart[id].price;
            // tableTotal.textContent = cart[articul].totalprice;

            updateCart();
        }
        //Увеличение количества товара и итоговой суммы
    const increaseQuantity = (id) => {
            const newQuantity = cart[id].quantity + 1;
            updateQuantityTotalPrice(id, newQuantity);
        }
        //Уменьшение количества товара и итоговой суммы
    const decreaseQuantity = (id) => {
        const newQuantity = cart[id].quantity - 1;
        if (newQuantity >= 1) {
            updateQuantityTotalPrice(id, newQuantity);
        }
    }



    //Добавление в корзину
    const addCartItem = (data) => {
        // console.log(data)
        const { id } = data;
        cart[id] = data;
        updateCart();
        if (cartDOMElement) {
            renderCartItem(data);
        }
    }


    //Обновляем данные в LocalStorage
    const updateCart = () => {
        saveCart();
    }


    //Получаем данные для объекта
    const getProductData = (productDOMElement) => {
        const button = document.querySelector('.buy__product')
        const id = productDOMElement.getAttribute('data-id')
        const name = productDOMElement.getAttribute('data-product-name');
        // const desc = productDOMElement.getAttribute('data-product-desc');
        const articul = productDOMElement.getAttribute('data-product-articul');
        const size = productDOMElement.getAttribute('data-product-size');
        // const color = productDOMElement.getAttribute('data-product-color');
        const price = productDOMElement.getAttribute('data-product-price');
        const src = productDOMElement.getAttribute('data-product-img');
        let href = productDOMElement.getAttribute('data-product-href');
        if (button) {
            href = window.location.href;
        }
        const quantity = 1;
        const totalprice = quantity * +(price);
        return { id, name, articul, size, price, totalprice, src, quantity, href };
    }



    const renderCart = () => {
        const ids = Object.keys(cart);
        // console.log(ids);
        ids.forEach((id) => renderCartItem(cart[id]));
    };


    const disabledButton = () => {
        // console.log(cart)
        const test = document.querySelectorAll('.js-product')
        const button = document.querySelector('.buy__product')
        for (let i = 0; i < test.length; i++) {
            const attr = (test[i].getAttribute('data-id'))
            const parent = test[i].querySelector('.js-buy')
                // console.log(parent)
                // console.log(cart.hasOwnProperty(attr))
            if (cart.hasOwnProperty(attr)) {
                parent.classList.add('disabled')
                parent.innerHTML = 'Товар в корзине'
                parent.disabled = true;
                if (button) {
                    button.innerHTML = 'Товар в корзине'
                }
            }

        }

    }
    disabledButton();


    // Вызов popup
    function showPopup() {
        let popup = document.querySelector('.popup-busket')
        let body = document.querySelector('body')
        let btn = document.querySelector('.popup-busket__link.js')
        popup.classList.remove('hidden')
        body.style.overflow = 'hidden'
        setTimeout(() => { popup.classList.add('active') }, 50)
        btn.addEventListener('click', closePopup)
        popup, addEventListener('click', (e) => {
            if (e.target == popup) {
                closePopup();
            }
        })

        function closePopup() {
            popup.classList.remove('active')
            body.style.overflow = 'unset'
            setTimeout(() => { popup.classList.add('hidden') }, 300)
        }
    }


    //Инициализация
    const cartInit = () => {
        if (cartDOMElement) {
            renderCart();
        }

        if (cartCompareDOMElement) {
            renderCompareCart();
        }

        document.querySelector('body').addEventListener('click', (e) => {
            const target = e.target;
            //В корзину
            if (target.classList.contains('js-buy')) {
                e.preventDefault();
                const productDOMElement = target.closest('.js-product');
                const data = getProductData(productDOMElement);
                addCartItem(data);
                disabledButton();
                totalBusketHeader();
                showPopup();
            }

            //Удалить из корзины
            if (target.classList.contains('remove')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.busket__card');
                const productId = cartItemDOMElement.getAttribute('data-id');
                deleteCartItem(productId);
                clearBusket();
                requestTable();
                totalBusketHeader();
            }

            //Увеличить
            if (target.classList.contains('js-plus')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.busket__card');
                const productId = cartItemDOMElement.getAttribute('data-id');
                increaseQuantity(productId);
                totalBusket();
                requestTable();
                totalBusketHeader();
            }

            //Уменьшить
            if (target.classList.contains('js-minus')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.busket__card');
                const productId = cartItemDOMElement.getAttribute('data-id');
                decreaseQuantity(productId);
                totalBusket();
                requestTable();
                totalBusketHeader();
            }


        });
    }
    cartInit();
}
requestCart();