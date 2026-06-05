const CATEGORY_STYLES = {
  'Tadbir': { bg: 'bg-secondary/90', icon: 'text-secondary' },
  "E'lon": { bg: 'bg-accent/90', icon: 'text-accent' },
  'Sport': { bg: 'bg-green-500/90', icon: 'text-green-500' },
  'Loyihalar': { bg: 'bg-primary/90', icon: 'text-primary' },
};

function renderHomeNews() {
  const allNews = window.news;
  if (!allNews || !allNews.length) return;
  const root = './';
  const container = document.getElementById('home-news-container');
  if (!container) return;

  allNews.slice(0, 6).forEach(item => {
    const style = CATEGORY_STYLES[item.category] || { bg: 'bg-secondary/90', icon: 'text-secondary' };
    const article = document.createElement('article');
    article.className =
      'bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-3 transition-all duration-500 h-full flex flex-col animate-on-scroll';

    const imgWrap = document.createElement('div');
    imgWrap.className = 'relative h-64 overflow-hidden group/img';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = `${root}assets/images/${item.image}`;
    img.alt = item.title;
    img.className = 'w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000';
    imgWrap.appendChild(img);

    const catBadge = document.createElement('div');
    catBadge.className =
      `absolute top-6 left-6 ${style.bg} backdrop-blur-md text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl`;
    catBadge.textContent = item.category;
    imgWrap.appendChild(catBadge);
    article.appendChild(imgWrap);

    const contentWrap = document.createElement('div');
    contentWrap.className = 'p-10 flex flex-col flex-grow';

    const dateRow = document.createElement('div');
    dateRow.className = 'flex items-center gap-3 text-slate-400 text-[0.7rem] font-bold uppercase tracking-widest mb-6';
    const dateIcon = document.createElement('i');
    dateIcon.className = `far fa-calendar-alt ${style.icon}`;
    dateRow.appendChild(dateIcon);
    dateRow.appendChild(document.createTextNode(` ${item.date}`));
    contentWrap.appendChild(dateRow);

    const titleEl = document.createElement('h3');
    titleEl.className =
      'text-xl font-black text-primary mb-5 leading-tight hover:text-secondary transition-colors cursor-pointer italic';
    titleEl.textContent = item.title;
    contentWrap.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.className = 'text-slate-500 mb-8 text-sm leading-relaxed font-medium line-clamp-3';
    descEl.textContent = item.content;
    contentWrap.appendChild(descEl);

    const link = document.createElement('a');
    link.href = `pages/news/news-single.html?id=${item.id}`;
    link.className =
      'mt-auto inline-flex items-center gap-3 text-primary font-black text-sm group/btn hover:text-secondary transition-all';
    link.textContent = "Batafsil ko'rish ";
    const linkIcon = document.createElement('i');
    linkIcon.className = 'fas fa-arrow-right group-hover/btn:translate-x-2 transition-transform';
    link.appendChild(linkIcon);
    contentWrap.appendChild(link);
    article.appendChild(contentWrap);
    container.appendChild(article);
  });
}

document.addEventListener('DOMContentLoaded', renderHomeNews);
