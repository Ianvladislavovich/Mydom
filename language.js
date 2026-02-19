const dropDown = document.querySelector('.drop-down');
const list = document.querySelector('.list');
const selected = document.querySelector('.selected');
const selectedImg = document.querySelector('.selectedImg');
const navbarLinks = document.querySelectorAll('.navbar a');
const paragraphElements = document.querySelectorAll('p');
const h1Elements = document.querySelectorAll('h1');
const h2Elements = document.querySelectorAll('h2');
const mobileNavbarLinks = document.querySelectorAll('.mobile-nav a');
const footerLinks = document.querySelectorAll('.footer__link--items a');


dropDown.addEventListener('click', () => {
  list.classList.toggle('show');
});

list.addEventListener('click', (e) => {
  const img = e.target.querySelector('img');
  const text = e.target.querySelector('.text');

  selectedImg.src = img.src;
  selected.textContent = text.textContent;

  translatePage(selected.textContent.toLowerCase());
});

function translatePage(language) {
  if (language === 'ru') {
    // Perform translation to Russian
    navbarLinks[0].textContent = 'SUCCESS';
    navbarLinks[1].textContent = 'Домой';
    navbarLinks[2].textContent = 'Услуги';
    navbarLinks[3].textContent = 'Связаться';
    navbarLinks[4].textContent = 'О нас';
    navbarLinks[5].textContent = 'Регистрация';
    h1Elements[0].textContent = 'КОПИРАЙТИНГ';
    h2Elements[0].textContent = 'Социальные сети';
    h2Elements[1].textContent = 'Маркетинг';
    h2Elements[2].textContent = 'Веб-сайт';
    h2Elements[3].textContent = 'Электронная почта';
    h2Elements[4].textContent = 'О нас';
    h2Elements[5].textContent = 'Свяжитесь';
    h2Elements[6].textContent = 'Сообщества';
    h2Elements[7].textContent = 'Mедиа';
    paragraphElements[0].textContent = 'Создание сообщений, которые затрагивают вашу аудиторию и вдохновляют их на действие, является ключевым компонентом для любого бизнеса. Наша команда опытных копирайтеров специализируется на создании индивидуального маркетингового контента, который связывается с вашими клиентами, выделяет преимущества ваших товаров или услуг и обращается к их проблемам. От привлекательных заголовков до убедительных текстов продаж, мы покроем вас. Позвольте нам помочь вам поднять ваш маркетинг на новый уровень и достичь желаемых результатов.';
    paragraphElements[1].textContent = 'Создание сообщений, которые затрагивают вашу аудиторию и вдохновляют их на действие, является ключевым компонентом для любого бизнеса. Наша команда опытных копирайтеров специализируется на создании индивидуального маркетингового контента, который связывается с вашими клиентами, выделяет преимущества ваших товаров или услуг и обращается к их проблемам. От привлекательных заголовков до убедительных текстов продаж, мы покроем вас. Позвольте нам помочь вам поднять ваш маркетинг на новый уровень и достичь желаемых результатов.';
    paragraphElements[2].textContent = 'Нужны тексты для веб-сайта, которые привлекают внимание и удерживают потенциальных клиентов? Наши экспертные копирайтеры создают индивидуальный контент, который демонстрирует ваш бренд, связывается с вашей целевой аудиторией и выделяет уникальную ценность ваших товаров или услуг. От текстов на главной странице до описаний товаров и статей в блоге, мы покроем вас. Улучшите свое онлайн-присутствие и привлекайте больше клиентов с помощью текстов для веб-сайта, которые приводят к конверсиям. Свяжитесь с нами';
    paragraphElements[2].textContent = 'Нужны тексты для веб-сайта, которые привлекают внимание и удерживают потенциальных клиентов? Наши экспертные копирайтеры создают индивидуальный контент, который демонстрирует ваш бренд, связывается с вашей целевой аудиторией и выделяет уникальную ценность ваших товаров или услуг. От текстов на главной странице до описаний товаров и статей в блоге, мы покроем вас. Улучшите свое онлайн-присутствие и привлекайте больше клиентов с помощью текстов для веб-сайта, которые приводят к конверсиям. Свяжитесь с нами сегодня!';
    paragraphElements[3].textContent = 'Преобразуйте свои маркетинговые кампании по электронной почте с помощью наших экспертных услуг по копирайтингу электронной почты. Наша команда опытных копирайтеров создает индивидуальный контент, который привлекает внимание, вовлекает ваших подписчиков и увеличивает конверсии. От привлекательных заголовков до содержимого, у нас есть экспертиза, чтобы ваша электронная почта выделялась в переполненном почтовом ящике. Позвольте нам помочь вам построить прочные отношения с вашими подписчиками и увеличить продажи через эффективный маркетинг по электронной почте.';
    footerLinks[0].textContent = 'Как это работает';
    footerLinks[1].textContent = 'Отзывы';
    footerLinks[2].textContent = 'Карьера';
    footerLinks[3].textContent = 'Условия использования';
    footerLinks[4].textContent = 'Контакт';
    footerLinks[5].textContent = 'Поддержка';
    footerLinks[6].textContent = 'Рабочее время';
    footerLinks[7].textContent = 'Физический адрес';
    footerLinks[8].textContent = 'Инструменты для письма';
    footerLinks[9].textContent = 'Отзывы';
    footerLinks[10].textContent = 'Писательские сообщества';
    footerLinks[11].textContent = 'Новости индустрии';
    footerLinks[12].textContent = 'Instagram';
    footerLinks[13].textContent = 'Facebook';
    footerLinks[14].textContent = 'YouTube';
    footerLinks[15].textContent = 'Twitter';
} else if (language === 'en') {
    // Perform translation to English
    navbarLinks[0].textContent = 'SUCCESS';
    navbarLinks[1].textContent = 'Home';
    navbarLinks[2].textContent = 'Services';
    navbarLinks[3].textContent = 'Contact Us';
    navbarLinks[4].textContent = 'About Us';
    navbarLinks[5].textContent = 'Sign Up';
    h1Elements[0].textContent = 'COPYWRITING';
    h2Elements[0].textContent = 'Social Media Copywriting';
    h2Elements[1].textContent = 'Marketing Copywriting';
    h2Elements[2].textContent = 'Website Copywriting';
    h2Elements[3].textContent = 'Email Copywriting';
    h2Elements[4].textContent = 'About Us';
    h2Elements[5].textContent = 'Contact Us';
    h2Elements[6].textContent = 'Communities';
    h2Elements[7].textContent = 'Social Media';
    paragraphElements[0].textContent = 'Welcome to our young and dynamic copywriting website! We specialize in creating words that grab attention and engage your audience. Whether you need content for a website, blog posts, social media content, or anything else, we are here to help. Our team of talented writers has a passion for producing content that resonates with your readers and delivers results. With our fresh perspective and innovative approach, we are confident we can help you achieve your goals. So let us bring your ideas to life and make your brand stand out in the crowded digital landscape.';
    paragraphElements[1].textContent = 'We offer a wide range of marketing services to help your business succeed. Our team of marketing specialists will develop a strategy that aligns with your unique needs and goals. We handle everything from market research and competitive analysis to designing marketing campaigns and creating content. Trust us with your marketing process and enjoy the growth of your business.';
    paragraphElements[2].textContent = 'Your website is the face of your business in the online world. We provide website development services that cater to your needs and attract your target audience. Our team of programmers and designers will create a beautiful and functional website that helps you build a strong online presence. From static websites to e-commerce stores, we have everything you need when it comes to website development.';
    paragraphElements[3].textContent = 'Email is still one of the most effective marketing tools. We offer email marketing services to help you engage customers, nurture leads, and generate conversions. Whether you need assistance with email campaign strategy, design, or automation, our team has the knowledge and experience to deliver results. Let us elevate your email marketing efforts to the next level.';
    footerLinks[0].textContent = 'How it works';
    footerLinks[1].textContent = 'Testimonials';
    footerLinks[2].textContent = 'Careers';
    footerLinks[3].textContent = 'Terms of service';
    footerLinks[4].textContent = 'Contact';
    footerLinks[5].textContent = 'Support';
    footerLinks[6].textContent = 'Business Hours';
    footerLinks[7].textContent = 'Physical Address';
    footerLinks[8].textContent = 'Writing tools';
    footerLinks[9].textContent = 'Testimonials';
    footerLinks[10].textContent = 'Writing Communities';
    footerLinks[11].textContent = 'Industry News';
    footerLinks[12].textContent = 'Instagram';
    footerLinks[13].textContent = 'Facebook';
    footerLinks[14].textContent = 'YouTube';
    footerLinks[15].textContent = 'Twitter';
} else if (language === 'pl') {
    // Perform translation to Polish
    navbarLinks[0].textContent = 'SUCCESS';
    navbarLinks[1].textContent = 'Strona główna';
    navbarLinks[2].textContent = 'Usługi';
    navbarLinks[3].textContent = 'Skontaktuj';
    navbarLinks[4].textContent = 'O nas';
    navbarLinks[5].textContent = 'Zapiszsię';
        h1Elements[0].textContent = 'COPYWRITING';
        h2Elements[0].textContent = 'Copywriting w mediach społecznościowych';
        h2Elements[1].textContent = 'Copywriting marketingowy';
        h2Elements[2].textContent = 'Copywriting dla stron internetowych';
        h2Elements[3].textContent = 'Copywriting w e-mailach';
        h2Elements[4].textContent = 'O nas';
        h2Elements[5].textContent = 'Skontaktuj';
        h2Elements[6].textContent = 'Społeczność';
        h2Elements[7].textContent = 'Społecznościowe';
        paragraphElements[0].textContent = 'Witamy na naszej młodej i dynamicznej stronie copywritingowej! Specjalizujemy się w tworzeniu słów, które przyciągają uwagę i angażują Twoją publiczność. Niezależnie od tego, czy potrzebujesz treści na stronę internetową, wpisy na bloga, treści dla mediów społecznościowych czy czegokolwiek innego, jesteśmy tutaj, aby pomóc. Nasz zespół utalentowanych pisarzy ma pasję do tworzenia treści, które rezonują z Twoimi czytelnikami i przynoszą rezultaty. Dzięki naszej świeżej perspektywie i innowacyjnemu podejściu jesteśmy pewni, że możemy Ci pomóc osiągnąć Twoje cele. Więc pozwólmy sobie wspólnie ożywić Twoje pomysły i wyróżnić Twoją markę w zatłoczonym cyfrowym krajobrazie.';
        paragraphElements[1].textContent = 'Oferujemy szeroki zakres usług marketingowych, które pomogą Twojej firmie odnieść sukces. Nasz zespół specjalistów od marketingu opracuje strategię, która odpowiada Twoim unikalnym potrzebom i celom. Zajmujemy się wszystkim, począwszy od badań rynku i analizy konkurencji, aż po projektowanie kampanii marketingowych i tworzenie treści. Zaufaj nam swój proces marketingowy i ciesz się wzrostem swojego biznesu.';
        paragraphElements[2].textContent = 'Twoja strona internetowa to wizytówka Twojego biznesu w świecie online. Oferujemy usługi tworzenia stron internetowych, które odpowiadają Twoim potrzebom i przyciągają Twoją grupę docelową. Nasz zespół programistów i projektantów stworzy piękną i funkcjonalną stronę internetową, która pomoże Ci budować silną obecność online. Od statycznych stron po sklepy internetowe, mamy wszystko, czego potrzebujesz w zakresie tworzenia stron internetowych.';
        paragraphElements[3].textContent = 'E-mail nadal jest jednym z najskuteczniejszych narzędzi marketingowych. Oferujemy usługi e-mail marketingowe, które pomogą Ci zaangażować klientów, pielęgnować potencjalne kontakty i generować konwersje. Niezależnie od tego, czy potrzebujesz pomocy w strategii kampanii e-mailowej, projektowaniu czy automatyzacji, nasz zespół ma wiedzę i doświadczenie, aby osiągnąć rezultaty. Pozwól nam unieść Twoje działania e-mail marketingowe na wyższy poziom.';
footerLinks[0].textContent = 'Jak to działa';
footerLinks[1].textContent = 'Opinie';
footerLinks[2].textContent = 'Kariera';
footerLinks[3].textContent = 'Warunki świadczenia usług';
footerLinks[4].textContent = 'Kontakt';
footerLinks[5].textContent = 'Wsparcie';
footerLinks[6].textContent = 'Godziny pracy';
footerLinks[7].textContent = 'Adres fizyczny';
footerLinks[8].textContent = 'Narzędzia do pisania';
footerLinks[9].textContent = 'Opinie';
footerLinks[10].textContent = 'Społeczności pisarskie';
footerLinks[11].textContent = 'Wiadomości branżowe';
footerLinks[12].textContent = 'Instagram';
footerLinks[13].textContent = 'Facebook';
footerLinks[14].textContent = 'YouTube';
footerLinks[15].textContent = 'Twitter';
} else if (language === 'es') {
    // Perform translation to Spanish
    navbarLinks[0].textContent = '¡ÉXITO!';
navbarLinks[1].textContent = 'Inicio';
navbarLinks[2].textContent = 'Servicios';
navbarLinks[3].textContent = 'Contáctenos';
navbarLinks[4].textContent = 'Sobre';
navbarLinks[5].textContent = '¡Regístrese!';
h1Elements[0].textContent = 'COPYWRITING';
h2Elements[0].textContent = 'Copywriting en Redes Sociales';
h2Elements[1].textContent = 'Copywriting de Marketing';
h2Elements[2].textContent = 'Copywriting de Sitio Web';
h2Elements[3].textContent = 'Copywriting de Correo Electrónico';
h2Elements[4].textContent = 'Nosotros';
h2Elements[5].textContent = 'Contáctenos';
h2Elements[6].textContent = 'Comunidades';
h2Elements[7].textContent = 'Redes';
paragraphElements[0].textContent = '¡Bienvenido a nuestro sitio web de copywriting joven y dinámico! Nos especializamos en crear palabras que captan la atención y comprometen a tu audiencia. Ya sea que necesites contenido para un sitio web, publicaciones de blog, contenido para redes sociales o cualquier otra cosa, estamos aquí para ayudarte. Nuestro equipo de talentosos redactores tiene pasión por producir contenido que resuene con tus lectores y obtenga resultados. Con nuestra perspectiva fresca y enfoque innovador, estamos seguros de que podemos ayudarte a alcanzar tus objetivos. Permítenos dar vida a tus ideas y hacer que tu marca se destaque en el abarrotado panorama digital.';
paragraphElements[1].textContent = 'Ofrecemos una amplia gama de servicios de marketing para ayudar a que tu negocio tenga éxito. Nuestro equipo de especialistas en marketing desarrollará una estrategia que se alinee con tus necesidades y objetivos únicos. Nos encargamos de todo, desde la investigación de mercado y el análisis de la competencia hasta el diseño de campañas de marketing y la creación de contenido. Confía en nosotros con tu proceso de marketing y disfruta del crecimiento de tu negocio.';
paragraphElements[2].textContent = 'Tu sitio web es la cara de tu negocio en el mundo en línea. Ofrecemos servicios de desarrollo de sitios web que se adaptan a tus necesidades y atraen a tu público objetivo. Nuestro equipo de programadores y diseñadores creará un sitio web hermoso y funcional que te ayudará a construir una sólida presencia en línea. Desde sitios web estáticos hasta tiendas en línea de comercio electrónico, tenemos todo lo que necesitas en cuanto a desarrollo de sitios web.';
paragraphElements[3].textContent = 'El correo electrónico sigue siendo una de las herramientas de marketing más efectivas. Ofrecemos servicios de marketing por correo electrónico para ayudarte a interactuar con los clientes, cultivar leads y generar conversiones. Ya sea que necesites ayuda con la estrategia de campañas de correo electrónico, el diseño o la automatización, nuestro equipo tiene el conocimiento y la experiencia para ofrecerte resultados. Permítenos elevar tus esfuerzos de marketing por correo electrónico al siguiente nivel.';
footerLinks[0].textContent = 'Cómo funciona';
footerLinks[1].textContent = 'Testimonios';
footerLinks[2].textContent = 'Carreras';
footerLinks[3].textContent = 'Términos de servicio';
footerLinks[4].textContent = 'Contacto';
footerLinks[5].textContent = 'Soporte';
footerLinks[6].textContent = 'Horario comercial';
footerLinks[7].textContent = 'Dirección física';
footerLinks[8].textContent = 'Herramientas';
footerLinks[9].textContent = 'Testimonios';
footerLinks[10].textContent = 'Comunidades';
footerLinks[11].textContent = 'Noticias';
footerLinks[12].textContent = 'Instagram';
footerLinks[13].textContent = 'Facebook';
footerLinks[14].textContent = 'YouTube';
footerLinks[15].textContent = 'Twitter';

}
}