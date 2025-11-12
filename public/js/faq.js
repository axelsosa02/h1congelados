document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.accordion').forEach(elm => {
          const button = elm.querySelector('.toggle-button');
          const content = elm.querySelector('.content');
          const plusIcon = button.querySelector('.plus');

          button.addEventListener('click', () => {
            const isHidden = content.classList.toggle('invisible');
            content.style.maxHeight = isHidden ? '0px' : `${content.scrollHeight + 100}px`;
            button.classList.toggle('text-blue-700', !isHidden);
            button.classList.toggle('text-slate-900', isHidden);
            content.classList.toggle('pb-6', !isHidden);
            plusIcon.classList.toggle('hidden', !isHidden);
            plusIcon.classList.toggle('block', isHidden);
          });
        });
      });