const news = document.querySelector('[data-news]');

export const Sort = (() => {

  window.addEventListener('DOMContentLoaded', () => {

    for (let i = 0, len = news.children.length; i < len; i++) {
      news.insertBefore(news.children[i], news.children[0]);
    }

  });

})();
