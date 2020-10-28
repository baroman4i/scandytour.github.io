const countrys = [{
        country: 'canada',
        id: 'cnd',
        img: 'https://i2.wp.com/thepointsguy.com/wp-content/uploads/2020/05/Canada_Francis-Yap-M.jpg?width=1600&height=1067&attachment_id=948138&ssl=1',
        regions: [
            {
                name: 'Банф',
                img: 'img/Banff-National-Park.jpg',
                text: 'Национальный парк Банф — старейший национальный парк Канады, созданный в 1885 году в канадских Скалистых горах. Парк расположен в 110—180 км к западу от города Калгари в провинции Альберта, занимает 6 641 км² в горной местности с множеством ледников и ледовых полей, густыми хвойными лесами и альпийскими пейзажами.',
                innerInfo: {
                    images: ['img/Banff-National-Park.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 200,
                    map: '!1m18!1m12!1m3!1d20010.14465750783!2d-115.5854315202739!3d51.177281693249135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370ca45910c4afd%3A0xcaafaebedaac9463!2z0JHQsNC90YQsINCQ0LvRjNCx0LXRgNGC0LAsINCa0LDQvdCw0LTQsA!5e0!3m2!1sru!2sus!4v1603712132197!5m2!1sru!2sus'
                }
            },
            {
                name: 'Стэнли-парк',
                img: 'img/vancouver-skyline-aerial-w-stanley.jpg',
                text: 'Стэнли-парк — городской парк, расположенный в Ванкувере, крупнейшем городе канадской провинции Британская Колумбия. Парк, представляющий собой вечнозелёный оазис на границе с деловым центром города, занимает площадь в 404,9 гектара, что соответствует половине площади Ричмонд-парка в Лондоне и на 10 % больше, чем площадь Центрального Парка в Нью-Йорке.',
                innerInfo: {
                    images: ['img/vancouver-skyline-aerial-w-stanley.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 200,
                    map: '!1m18!1m12!1m3!1d2510.0128214133565!2d-114.07127568428128!3d51.0159119795574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717040ce525a6b%3A0x526512c95ef2f87d!2z0KHRgtGN0L3Qu9C4LdC_0LDRgNC6!5e0!3m2!1sru!2sus!4v1603712210540!5m2!1sru!2sus'
                }
            },
            {
                name: 'Шато-Фронтенак',
                img: 'img/1200px-Le_château_Frontenac_Vieux-Québec,_ville_de_Québec,_Québec.jpg',
                text: '«Шато-Фронтенак» — расположенный в городе Квебек гранд-отель в стиле шатоэск. В 1981 году включён в список Национальных исторических мест Канады.',
                innerInfo: {
                    images: ['img/1200px-Le_château_Frontenac_Vieux-Québec,_ville_de_Québec,_Québec.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 200,
                    map: '!1m18!1m12!1m3!1d2730.610497675366!2d-71.207198684433!3d46.81197797913996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb895dc6bfd5ced%3A0xe1f8bb36daa428d!2z0KjQsNGC0L4t0KTRgNC-0L3RgtC10L3QsNC6!5e0!3m2!1sru!2sus!4v1603712272181!5m2!1sru!2sus'
                }
            }
        ]
    },
    {
        country: 'new zealand',
        id: 'nz',
        img: 'img/87-2100x1200.jpg',
        regions: [
            {
                name: 'Гора Кука',
                img: 'img/Aoraki-Mount_Cook_from_Hooker_Valley.jpg',
                text: 'Гора́ Ку́ка, или Аораки, — гора в новозеландских Южных Альпах, высочайшая точка Новой Зеландии, находится в западной части Южного острова недалеко от побережья. Эта сложенная кристаллическими породами гора с крутыми склонами, имеющая форму седла, покрыта снегом и ледниками',
                innerInfo: {
                    images: ['img/Aoraki-Mount_Cook_from_Hooker_Valley.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 740,
                    map:'!1m18!1m12!1m3!1d11558.222025681289!2d170.13303353800714!3d-43.59497401597149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2bcbf4957533cb%3A0x2459ca45fd83e865!2z0JPQvtGA0LAg0JrRg9C60LA!5e0!3m2!1sru!2sus!4v1603711741548!5m2!1sru!2sus'
                }
            },
            {
                name: 'Уэйтомо Глоуворм Кейвс',
                img: 'img/4b2f3ac364f5ac08e1a3d8fc0f2f0414.jpg',
                text: 'Известняковая пещера со светлячками',
                innerInfo: {
                    images: ['img/4b2f3ac364f5ac08e1a3d8fc0f2f0414.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 630,
                    map: '!1m18!1m12!1m3!1d3132.8051864233926!2d175.10134001529028!3d-38.260824079673895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6cb77ef3e3547d%3A0x922cb1e1fd309ff2!2z0KPRjdC50YLQvtC80L4g0JPQu9C-0YPQstC-0YDQvCDQmtC10LnQstGB!5e0!3m2!1sru!2sus!4v1603711803687!5m2!1sru!2sus'
                }
            },
            {
                name: 'Тонгариро',
                img: 'img/Тонгариро.jpg',
                text: 'Тонгариро — самый старый национальный парк в Новой Зеландии, расположенный в центральной части Северного Острова. В парке находится озеро Ротопунаму.',
                innerInfo: {
                    images: ['img/Тонгариро.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 770,
                    map: '!1m18!1m12!1m3!1d12379.934333381898!2d175.62700933573964!3d-39.129605022566075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ba9a05bca93a1%3A0xb4a4d17b82b09c0f!2sMt%20Tongariro!5e0!3m2!1sru!2sus!4v1603711858217!5m2!1sru!2sus'
                }
            }
        ]
    },
    {
        country: 'norway',
        id: 'nr',
        img: 'https://miro.medium.com/max/10944/1*cbjT-JtrNb-0FtjxS_we-g@2x.jpeg',
        regions: [
            {
                name: 'Гейрангер-фьорд',
                img: 'img/geiranger_fjord.jpg',
                text: 'Гейрангер-фьорд — фьорд в регионе Суннмёре, расположенный в самой южной части фюльке Мёре-ог-Ромсдал в Норвегии. Находится примерно в 200 километрах к северо-востоку от Бергена и в 280 километрах к северо-западу от Осло. Фьорд простирается на 15 километров и представляет собой одно из ответвлений Стур-фьорда. Глубина составляет 565 метров. В июле 2005 года был внесён в список Всемирного наследия ЮНЕСКО.',
                innerInfo: {
                    images: ['img/geiranger_fjord.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 505,
                    map: '!1m18!1m12!1m3!1d59733.04423482872!2d7.005174017564139!3d62.10483099903476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46169d427b268c51%3A0xb8c99540dcc397fe!2z0JPQtdC50YDQsNC90LPQtdGALdGE0YzQvtGA0LQ!5e0!3m2!1sru!2sus!4v1603712357284!5m2!1sru!2sus'
                }
            },
            {
                name: 'Язык Тролля',
                img: 'img/trolltunga.jpg',
                text: 'Язык Тролля — каменный выступ на горе Скьеггедаль, расположенной вблизи города Одда в Норвегии, возвышающийся над озером Рингедалсватн на высоте 700 метров. Своей формой выступ напоминает язык, за что и получил такое название. Представляет собой отколовшийся кусок скалы, застывший на её краю в горизонтальном положении.',
                innerInfo: {
                    images: ['img/trolltunga.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 440,
                    map: '!1m18!1m12!1m3!1d7949.666003211302!2d6.731245247958164!3d60.12416626110283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e997b1b732151%3A0x9b7c92bfdc268ed8!2z0K_Qt9GL0Log0KLRgNC-0LvQu9GP!5e0!3m2!1sru!2sus!4v1603712392907!5m2!1sru!2sus'
                }
            },
            {
                name: 'Прекестулен',
                img: 'img/prelestulen.jpg',
                text: 'Прекестулен или Pulpit Rock, в древности носила имя Hyvlatonnå — гигантский утёс высотой 604 м над Люсе-фьордом напротив плато Кьераг в коммуне Форсанн, Норвегия. Вершина утёса площадью около 25 × 25 метров, квадратная и почти плоская. Со скалы, нависающей над фьордом, открывается великолепный вид, и благодаря ему скала известна как одна из главных природных достопримечательностей Норвегии.',
                innerInfo: {
                    images: ['img/prelestulen.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 390,
                    map: '!1m18!1m12!1m3!1d2055.6947920214407!2d6.186654966031317!3d58.98682343154031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463bd51bf654eb09%3A0x4a83e6bdbfa3b78b!2z0J_RgNC10LrQtdGB0YLRg9C70LXQvQ!5e0!3m2!1sru!2sus!4v1603712428710!5m2!1sru!2sus'
                }
            }
        ]
    },
    {
        country: 'slovenia',
        id: 'sl',
        img: 'https://www.studyabroadguide.com/wp-content/uploads/Studying-in-Slovenia.jpg',
        regions: [
            {
                name: 'Бледское озеро',
                img: 'img/ozero-bled-sloveniya-bledskoe-ozero-mariinskaya-cerkov-gory-ostrov-ozero-cerkov.svg',
                text: 'Блейско — озеро в словенском регионе Крайна, у которого расположен город-курорт Блед, а также горное плато Поклюка. Озеро расположено на высоте 475 м над уровнем моря. Над озером на крутой скале расположен Бледский замок. Высокие горы не пропускают холодные потоки воздуха и создают в долине особый микроклимат.',
                innerInfo: {
                    images: ['img/ozero-bled-sloveniya-bledskoe-ozero-mariinskaya-cerkov-gory-ostrov-ozero-cerkov.svg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 310,
                    map: '!1m18!1m12!1m3!1d11013.10401144018!2d14.08650608951103!3d46.363911765948416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a9139b9d9e421%3A0x83cd8331dd0107ac!2z0JHQu9C10LTRgdC60L7QtSDQvtC3Lg!5e0!3m2!1sru!2sus!4v1603712613686!5m2!1sru!2sus'
                }
            },
            {
                name: 'Триглав',
                img: 'img/Triglav_National_Park.jpg',
                text: 'Три́глав — гора в Словении, высочайшая вершина страны, бывшей Югославии и Юлийских Альп. Высота горы — 2864 метра. Триглав — национальный символ Словении, изображён на гербе и флаге страны. Гора с окрестностями объявлена единственным в Словении национальным парком. Гора получила своё название из-за трёхглавой вершины, наиболее известный её профиль, изображённый на флаге Словении, наблюдается из города Бохинь.',
                innerInfo: {
                    images: ['img/Triglav_National_Park.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 370,
                    map: '!1m18!1m12!1m3!1d11013.104146123855!2d14.08650608790444!3d46.36391109784532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a8a8aeb7a1eed%3A0xf00f81d513270f0!2z0KLRgNC40LPQu9Cw0LI!5e0!3m2!1sru!2sus!4v1603712672800!5m2!1sru!2sus'
                }
            },
            {
                name: 'Парк Тиволи',
                img: 'img/Park_tivoli.jpg',
                text: 'Парк Тиволи — парк в Любляне, столице Словении. Парк расположен на северо-западной оконечности центральной части города. Он простирается до района Шишка на севере, района Вич — на юге и района Рожник — на западе. Парк Тиволи — самый большой парк города, его площадь составляет 500 га. С 1984 года является частью ландшафтного парка Тиволи — холм Рожник — холм Шишка.',
                innerInfo: {
                    images: ['img/Park_tivoli.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 450,
                    map: '!1m18!1m12!1m3!1d2249.880159573912!2d12.565958415897699!3d55.6736840805322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2z0J_QsNGA0Log0KLQuNCy0L7Qu9C4!5e0!3m2!1sru!2sus!4v1603712744220!5m2!1sru!2sus'
                }
            }
        ]
    },
    {
        country: 'france',
        id: 'fr',
        img: 'img/lake-bled-slovenia-bledskoe-3507.jpg',
        regions: [
            {
                name: 'Эйфелева башня',
                img: 'img/Эйфелева_башня.jpg',
                text: 'Э́йфелева ба́шня — металлическая башня в центре Парижа, самая узнаваемая его архитектурная достопримечательность. Названа в честь главного конструктора Гюстава Эйфеля; сам Эйфель называл её просто «300-метровой башней». Башня, впоследствии ставшая символом Парижа, была построена в 1889 году и первоначально задумывалась как временное сооружение, служившее входной аркой парижской Всемирной выставки 1889 года.',
                innerInfo: {
                    images: ['img/Эйфелева_башня.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 475,
                    map: '!1m18!1m12!1m3!1d2624.9916256937554!2d2.2922926156396946!3d48.85837007928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2z0K3QudGE0LXQu9C10LLQsCDQsdCw0YjQvdGP!5e0!3m2!1sru!2sus!4v1603712783619!5m2!1sru!2sus'
                }
            },
            {
                name: 'Люксембургский сад',
                img: 'img/Люксембургский_сад.jpg',
                text: 'Люксембу́ргский сад — дворцово-парковый ансамбль в центре Парижа, известная достопримечательность города. Бывший королевский, а ныне государственный дворцовый парк в парижском Латинском квартале занимает площадь в 26 гектаров. В парке расположен Люксембургский дворец, в котором заседает Сенат, вторая палата французского парламента.',
                innerInfo: {
                    images: ['img/Люксембургский_сад.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 550,
                    map: '!1m18!1m12!1m3!1d2625.6286465647104!2d2.334971815639245!3d48.846221679286195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671db36de687b%3A0x791dd61b089f98b!2z0JvRjtC60YHQtdC80LHRg9GA0LPRgdC60LjQuSDRgdCw0LQ!5e0!3m2!1sru!2sus!4v1603712833671!5m2!1sru!2sus'
                }
            },
            {
                name: 'Горж дю Вердон',
                img: 'img/Горж_дю_Вердон.jpg',
                text: 'Вердонское ущелье во Франции: река, тропы, крутые скалы и Музей фаянса неподалеку.',
                innerInfo: {
                    images: ['img/Горж_дю_Вердон.jpg', 'img/банф2.jpg', 'img/банф3.jpg'],
                    price: 500,
                    map: '!1m18!1m12!1m3!1d92171.82416746391!2d6.295024938080656!3d43.785945164571636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cbf9bd072fb97d%3A0x74cef461a9cce509!2z0JPQvtGA0LYg0LTRjiDQktC10YDQtNC-0L0!5e0!3m2!1sru!2sus!4v1603712887101!5m2!1sru!2sus'
                }
            }
        ]
    }
]
const $header = document.querySelector('header'),
      $countryItems = document.querySelector('.country_items'),
      $regionSliderItems = document.querySelector('.region_slider_items'),
      $prevBtn = document.querySelector('.slide_prev'),
      $nextBtn = document.querySelector('.slide_next'),
      $countryLine = document.querySelector('.country_line'),
      $sectionRegion = document.querySelector('section')
let elsRegions = null,
      activeRegion = null
countrys.forEach( item => {$countryItems.insertAdjacentHTML('beforeend', `<div class="country" id="${item.id}">${item.country}</div>`)})
const elsCountry = document.querySelectorAll('.country')
let activeCountry = Math.floor(countrys.length/2)
elsCountry[activeCountry].classList.add('active')
elsCountry.forEach((elem, indexEl) => {
    elem.addEventListener('click', () => {
        if (indexEl < activeCountry || indexEl > activeCountry) {
            activeCountry = indexEl
            changeCountry(elem, activeCountry)
        }
    })
})
function changeCountry(elem, index) {
    elsCountry.forEach(item => item.classList.remove('active'))
    elem.classList.add('active')
    transformCountry(index)
    changeBackground($header,countrys[index].img)
    changeRegion(countrys[index])
    changeBackground($sectionRegion,countrys[index].regions[activeRegion].img)
    renderRegionInfo()
    translateActiveDot()
}
changeBackground($header,countrys[activeCountry].img)
renderDot()
renderActiveDot()
function changeRegion(currentCountry) {
    $regionSliderItems.innerHTML = ''
    currentCountry.regions.forEach(region => {
        $regionSliderItems.insertAdjacentHTML('beforeend', `
                      <div class="region_slider_item">
                        <img src="${region.img}" alt="">
                        <h3 class="title_region">${region.name}</h3>
                        <h4 class="content_region">${region.text}</h4>
                      </div>`)
    })
    elsRegions = document.querySelectorAll('.region_slider_item')
    activeRegion = Math.floor(elsRegions.length/2)
    elsRegions[activeRegion].classList.add('active')
    changeBackground($sectionRegion,countrys[activeCountry].regions[activeRegion].img)
}
transformCountry(activeCountry)
changeRegion(countrys[activeCountry])
changeBackground($sectionRegion,countrys[activeCountry].regions[activeRegion].img)
renderRegionInfo()
$nextBtn.addEventListener('click', () => {
    if (activeRegion+1 < elsRegions.length) {
        activeRegion++
        scrollRegion(activeRegion)
    }
    changeBackground($sectionRegion,countrys[activeCountry].regions[activeRegion].img)
    renderRegionInfo()
})
$prevBtn.addEventListener('click', () => {
    if (activeRegion > 0) {
        activeRegion--
        scrollRegion(activeRegion)
    }
    changeBackground($sectionRegion,countrys[activeCountry].regions[activeRegion].img)
    renderRegionInfo()
})
const smoothLinks = document.querySelectorAll('a[href^="#"]');
function scrollRegion(scroll) {
    elsRegions.forEach(region => region.classList.remove('active'))
    elsRegions[scroll].classList.add('active')
    changeBackground($sectionRegion,countrys[activeCountry].regions[activeRegion].img)
    renderRegionInfo()
}
function changeBackground(block,current) {block.style.backgroundImage = `url(${current})`}
function transformCountry(activeC) {$countryItems.style.transform = `translate(${-(activeC-2)*500}px)`}
function renderRegionInfo() {
    $sectionRegion.innerHTML = ''
    $sectionRegion.insertAdjacentHTML('afterbegin', `
        <div class="region_container">
            <div class="imgsBlock">
                <img src="${countrys[activeCountry].regions[activeRegion].innerInfo.images[0]}" alt="">
                <img src="${countrys[activeCountry].regions[activeRegion].innerInfo.images[1]}" alt="">
                <img src="${countrys[activeCountry].regions[activeRegion].innerInfo.images[2]}" alt="">
            </div>
            <div class="content_block">
                <div class="content_title">${countrys[activeCountry].regions[activeRegion].name}</div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=${countrys[activeCountry].regions[activeRegion].innerInfo.map}" width="350" height="250" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <label for="amount_person">Person Amount</label>
                <div id="amount_person">
                    <div class="person active">1</div>
                    <div class="person">2</div>
                    <div class="person">3</div>
                    <div class="person">4</div>
                    <div class="person">5</div>
                    <div class="person">6</div>
                    <div class="person">7</div>
                </div>
                <label for="date">Preferend trip duration</label>
                <div id="date">
                    <button class="date">Jun 25</button>
                    to
                    <button class="date">Jul 5</button>
                </div>
                <div id="price">Amount price: ${countrys[activeCountry].regions[activeRegion].innerInfo.price}$</div>
            </div>
        </div>`)
    renderPerson()
}
function renderPerson() {
    const $persons = document.querySelectorAll('.person')
    $persons.forEach(person => {
        person.addEventListener('click', () => {
            $persons.forEach(item => item.classList.remove('active'))
            amountPerson(person)
            let currentPersons = person.innerHTML*countrys[activeCountry].regions[activeRegion].innerInfo.price
            document.querySelector('#price').innerText = `Amount price: ${currentPersons}$`
        })
    })
}
function amountPerson(person) {person.classList.add('active')}
function renderDot() {
    $countryLine.innerHTML = ''
    for (let i = 0; i < countrys.length; i++) {
        let $dot = document.createElement('div')
        $dot.classList.add('dot')
        $dot.style.left = `${$countryLine.offsetWidth/(countrys.length-1)*i}px`
        $countryLine.insertAdjacentElement("beforeend", $dot)
    }
}
function renderActiveDot() {
    const $activeDot = document.createElement('div')
    $activeDot.classList.add('active_dot')
    $activeDot.style.left = `${(activeCountry)*($countryLine.offsetWidth)/(countrys.length-1)}px`
    $countryLine.insertAdjacentElement("afterbegin", $activeDot)
}
function translateActiveDot() {
    const $activeDot = document.querySelector('.active_dot')
    $activeDot.style.left = `${(activeCountry)*($countryLine.offsetWidth)/(countrys.length-1)}px`
}
const $dots = document.querySelectorAll('.dot')
$dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activeCountry = index
        changeCountry(elsCountry[activeCountry], index)
    })
})
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

