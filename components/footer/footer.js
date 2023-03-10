let root = document.getElementById('footer_wrapper')
let footer = `
<footer class="main-footer me6-position-relative me6-z-index-1 me6-padding-top-xl">
<div class="me6-container me6-max-width-lg">
  <div class="me6-grid me6-gap-y-lg me6-gap-lg@lg">
    <div class="me6-col-3@lg me6-order-2@lg me6-text-right@lg">
      <a class="main-footer__logo" href="#0">
        <img class='foo_img' src="/assets/logo.png" alt="Boooky" />
        <!-- <svg width="104" he ight="30" viewBox="0 0 104 30"><title>Go to homepage</title><path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z" fill="hsl(var(--me6-color-contrast-higher-hsl))"/><circle cx="15" cy="15" r="15" fill="hsl(var(--me6-color-primary-hsl))"/></svg> -->
      </a>
    </div>
    
    <nav class="me6-col-9@lg me6-order-1@lg">
      <ul class="me6-grid me6-gap-y-lg me6-gap-lg@xs">
        <li class="me6-col-6@xs me6-col-3@md">
          <h4 class="me6-margin-bottom-sm me6-text-base@md">Asosiy sahifa</h4>
          <ul class="me6-grid me6-gap-xs me6-text-sm@md">
            <li><a href="#0" class="main-footer__link">BoooCoin</a></li>
            <li><a href="#0" class="main-footer__link">Contestlar</a></li>

          </ul>
        </li>

        <li class="me6-col-6@xs me6-col-3@md">
          <h4 class="me6-margin-bottom-sm me6-text-base@md">Reyting</h4>
          <ul class="me6-grid me6-gap-xs me6-text-sm@md">
            <li><a href="#0" class="main-footer__link">Umumiy reyting</a></li>
            <li><a href="#0" class="main-footer__link">Kitobxonlar reytingi</a></li>
            <li><a href="#0" class="main-footer__link">Kitoblar reytingi</a></li>
            <li><a href="#0" class="main-footer__link">Savol yuboruvchilar reytingi</a></li>
            <li><a href="#0" class="main-footer__link">Volontyo'rlar reytingi</a></li>
          </ul>
        </li>

        <li class="me6-col-6@xs me6-col-3@md">
          <h4 class="me6-margin-bottom-sm me6-text-base@md">Blog</h4>
          <ul class="me6-grid me6-gap-xs me6-text-sm@md">
            <li><a href="#0" class="main-footer__link">Boookyning Roadmapi</a></li>
            <li><a href="#0" class="main-footer__link">Tizimdagi yangiliklar</a></li>
            <li><a href="#0" class="main-footer__link">Community</a></li>
            <li><a href="#0" class="main-footer__link">Yosh ijodkorlar</a></li>
          </ul>
        </li>

        <li class="me6-col-6@xs me6-col-3@md">
          <h4 class="me6-margin-bottom-sm me6-text-base@md">Biz haqimizda</h4>
          <ul class="me6-grid me6-gap-xs me6-text-sm@md">
            <li><a href="#0" class="main-footer__link">Bog'lanish</a></li>
            <li><a href="#0" class="main-footer__link">Guruh a'zolari</a></li>
            <li><a href="#0" class="main-footer__link">Komissiya a'zolari</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>

  <div class="me6-flex me6-flex-column me6-border-top me6-padding-y-xs me6-margin-top-lg me6-flex-row@md me6-justify-between@md me6-items-center@md">
    <div class="me6-margin-bottom-sm me6-margin-bottom-0@md">
      <div class="me6-text-sm me6-text-xs@md me6-color-contrast-medium me6-flex me6-flex-wrap me6-gap-xs">
        <h6> <span>&copy; Boooky</span></h6>
        <a href="#0" class="me6-color-contrast-high">Foydalanish shartlari</a>
        <a href="#0" class="me6-color-contrast-high">Maxfiylik sozlamalari</a>
      </div>
    </div>

    <div class="me6-flex me6-items-center me6-gap-xs">
      <a href="https://t.me/Boooky_uz" title="Bizga Telegramda qo'shiling" class="main-footer__social">
        <i class="fa-brands fa-telegram"></i>
      </a>

      <a href="https://www.instagram.com/boooky.uz/" title="Bizga Instagramda qo'shiling" class="main-footer__social">
      <i class="fa-brands fa-instagram"></i>
      </a>

      <a href="https://github.com/MirboboyevJasurjan/Boooky" class="main-footer__social">
        <svg class="me6-icon me6-block" viewBox="0 0 16 16"><title>Bizga Githubda qo'shiling</title><g><path  d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path></g></svg>
      </a>
    </div>
  </div>
</div>
</footer>
`



root.innerHTML = footer