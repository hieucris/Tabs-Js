const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $(".tab-item.active");
const line = $('.line');

tabs.forEach((tab,index) => {
    tab.onclick = function(){

        const pane = panes[index];
        $('.tab-pane.active').classList.remove('active');
        pane.classList.add('active');

        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
})