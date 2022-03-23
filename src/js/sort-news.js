const news = document.querySelector('[data-news]');
for (let i = 1, len = news.children.length; i < len; i++) {
  news.insertBefore(news.children[i], news.children[0]);
}
