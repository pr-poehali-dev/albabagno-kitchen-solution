import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const BG_IMG =
  'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/24260494-7c2d-493f-b177-a0d59eab43e6.jpg';
const DROPS_IMG =
  'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/files/c14447f1-48d9-4fad-935b-a903d0da593b.jpg';

const advantages = [
  { icon: 'Sparkles', title: 'Итальянский дизайн', text: 'Элегантный внешний вид и современные технологии.' },
  { icon: 'ShieldCheck', title: 'Надёжность', text: 'Высокие стандарты производства и контроль качества.' },
  { icon: 'Zap', title: 'Комфорт', text: 'Быстрая переработка пищевых отходов без лишнего шума.' },
  { icon: 'Leaf', title: 'Экологичность', text: 'Сокращение объёма бытовых отходов и поддержание чистоты кухни.' },
];

const productBenefits = [
  'Низкий уровень шума',
  'Корпус из высококачественных материалов',
  'Защита двигателя от перегрузок',
  'Простая установка под большинство моек',
  'Компактные размеры',
  'Длительный срок эксплуатации',
];

const specs = [
  ['Тип', 'Измельчитель пищевых отходов'],
  ['Установка', 'Под кухонную мойку'],
  ['Материал корпуса', 'Металл'],
  ['Уровень шума', 'Пониженный'],
  ['Защита двигателя', 'Есть'],
  ['Срок службы', 'Длительный'],
];

const steps = [
  { n: 1, icon: 'FileEdit', title: 'Заявка', text: 'Оставьте контакты на сайте.' },
  { n: 2, icon: 'Headset', title: 'Консультация', text: 'Специалист поможет подобрать подходящую модель.' },
  { n: 3, icon: 'Truck', title: 'Доставка', text: 'Быстрая отправка по всей стране.' },
  { n: 4, icon: 'Wrench', title: 'Установка', text: 'Простой монтаж и подключение.' },
];

const audiences = [
  { icon: 'Building2', label: 'Квартиры' },
  { icon: 'Home', label: 'Частные дома' },
  { icon: 'Building', label: 'Апартаменты' },
  { icon: 'UtensilsCrossed', label: 'Кафе и рестораны' },
  { icon: 'Hotel', label: 'Гостиницы' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') ?? [];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const ABLogo = ({ light: _light }: { light?: boolean }) => (
  <img
    src="https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/1511fa9a-669f-445a-a9cb-5c89d721015d.png"
    alt="ALBABAGNO — Perfect Sanitaryware"
    className="h-14 w-auto object-contain select-none"
  />
);

export default function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative min-h-screen font-sans" style={{background: `url(${BG_IMG}) center/cover fixed`, backgroundColor: '#c7d0da'}}>
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20 mix-blend-multiply"
        style={{ background: `url(${DROPS_IMG}) center/500px repeat` }}
      />

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-[#1a3a5c]/10 shadow-sm" style={{background: `url(${BG_IMG}) center/cover`, backgroundColor: '#c7d0da'}}>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-6 flex h-[70px] items-center justify-between">
          <ABLogo />
          <nav className="hidden lg:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a3a5c]/70">
            <a href="#product" className="hover:text-[#1a3a5c] transition-colors">О продукте</a>
            <a href="#specs" className="hover:text-[#1a3a5c] transition-colors">Характеристики</a>
            <a href="#advantages" className="hover:text-[#1a3a5c] transition-colors">Преимущества</a>
            <a href="#audience" className="hover:text-[#1a3a5c] transition-colors">Для кого</a>
            <a href="#contacts" className="hover:text-[#1a3a5c] transition-colors">Контакты</a>
          </nav>
          <a href="#contacts" className="hidden md:inline-flex items-center border border-[#1a3a5c]/40 text-[#1a3a5c] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#1a3a5c] hover:text-white transition-all">
            Получить консультацию
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-[70px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/7f5a4700-42ea-4023-afad-2504affa51c4.png"
          alt="ALBABAGNO — Итальянское качество для современной кухни"
          className="w-full object-cover"
        />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16">
          <a href="#contacts" className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#12293f] transition-colors shadow-lg">
            Получить консультацию
          </a>
        </div>
      </section>

      {/* ПОЧЕМУ ALBABAGNO */}
      <section id="advantages" className="relative z-10 py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-12">
            <h2 className="font-display text-3xl font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">
              Почему выбирают ALBABAGNO
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="reveal border border-[#1a3a5c]/10 bg-white/50 p-6 text-center hover:bg-white/70 hover:border-[#1a3a5c]/30 transition-all group backdrop-blur-sm">
                <div className="mb-4 flex justify-center text-[#1a3a5c]/70 group-hover:text-[#1a3a5c] transition-colors">
                  <Icon name={a.icon} size={32} />
                </div>
                <h3 className="font-semibold text-xs uppercase tracking-[0.1em] mb-2 text-[#1a3a5c]">{a.title}</h3>
                <p className="text-xs text-[#1a3a5c]/60 leading-relaxed">{a.text}</p>
                <div className="mt-3 flex justify-center gap-0.5">
                  <span className="h-[2px] w-2 bg-[#008C45]" />
                  <span className="h-[2px] w-2 bg-[#1a3a5c]/30" />
                  <span className="h-[2px] w-2 bg-[#CD212A]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О ПРОДУКТЕ */}
      <section id="product" className="relative z-10 py-16 bg-white/45">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal flex justify-center">
            <img src="https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/2c5fd4ff-eeb7-4800-85d7-a654f7a3c844.png" alt="ALBABAGNO" className="w-full max-w-md rounded-xl object-cover" />
          </div>
          <div className="reveal">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-[0.1em] mb-4 text-[#1a3a5c]">
              О продукте
            </h2>
            <p className="text-[#1a3a5c]/60 text-sm mb-3 leading-relaxed">
              ALBABAGNO — это современные измельчители пищевых отходов, разработанные для комфортной и гигиеничной кухни.
            </p>
            <p className="text-[#1a3a5c]/60 text-sm mb-6 leading-relaxed">
              Наши устройства помогают быстро перерабатывать пищевые отходы, уменьшая количество мусора и неприятных запахов.
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[#1a3a5c]">Преимущества:</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {productBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-[#1a3a5c]/70">
                  <Icon name="Check" size={14} className="shrink-0 text-[#1a3a5c]/60" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ХАРАКТЕРИСТИКИ */}
      <section id="specs" className="relative z-10 py-16 bg-white/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] mb-6 text-[#1a3a5c] text-center">
            Технические характеристики
          </h2>
          <div className="divide-y divide-[#1a3a5c]/10 border border-[#1a3a5c]/10">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between px-4 py-3 hover:bg-white/40 transition-colors">
                <span className="text-sm text-[#1a3a5c]/60">{k}</span>
                <span className="text-sm font-semibold text-[#1a3a5c]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="relative z-10 py-16 bg-white/45">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/cc81f39d-4a8d-44ac-a776-6c358aaf2f9c.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/e739ce20-2920-46e2-8f05-98691082e97a.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/51d85f73-b551-4fdd-b43a-a6e3fca55911.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/b1bbfc88-7536-4515-b7b0-30c5bdca637c.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/67963d55-bcd5-45c8-82ef-ba5f4e1ffffa.png',
            ].map((img, i) => (
              <div key={i} className="reveal group overflow-hidden aspect-square bg-white border border-[#1a3a5c]/10">
                <img
                  src={img}
                  alt={`ALBABAGNO ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕТ ИЗМЕЛЬЧИТЕЛЬ */}
      <section className="relative z-10 py-16 bg-white/45">
        <div className="reveal max-w-6xl mx-auto px-6">
          <img
            src="https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/0786395f-57fe-4bfd-8d00-d0078693cca4.png"
            alt="Как работает измельчитель ALBABAGNO"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ДЛЯ КОГО ПОДХОДИТ */}
      <section
        id="audience"
        className="relative z-10 py-16"
        style={{ background: `url(${BG_IMG}) center/cover no-repeat` }}
      >
        <div className="bg-[#1a3a5c]/70">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="reveal text-center mb-10">
              <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-white">
                Для кого подходит
              </h2>
            </div>
            <div className="reveal grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {audiences.map((a) => (
                <div key={a.label} className="group">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-white/70 group-hover:border-white group-hover:text-white transition-all">
                      <Icon name={a.icon} size={24} />
                    </div>
                  </div>
                  <p className="text-xs text-white/70 leading-tight group-hover:text-white transition-colors">{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ЭТАПЫ ПОКУПКИ */}
      <section className="relative z-10 py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-12">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">Этапы покупки</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="reveal border border-[#1a3a5c]/10 bg-white/50 p-6 text-center backdrop-blur-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a3a5c] text-white">
                    <Icon name={s.icon} size={20} />
                  </div>
                </div>
                <h3 className="font-semibold text-xs uppercase tracking-[0.1em] mb-2 text-[#1a3a5c]">{s.n}. {s.title}</h3>
                <p className="text-xs text-[#1a3a5c]/60 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ / ФУТЕР */}
      <footer
        id="contacts"
        className="relative z-10"
        style={{ background: `url(${BG_IMG}) center/cover no-repeat` }}
      >
        <div className="bg-[#1a3a5c]/85">
          <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12">
            <div>
              <ABLogo light />
              <p className="text-white/50 text-xs mt-3 mb-6 leading-relaxed">
                Премиальные измельчители пищевых отходов
              </p>
              <div className="space-y-3">
                <a href="tel:+79651215122" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <Icon name="Phone" size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-sm">+7 (965) 121-51-22</span>
                </a>
                <a href="mailto:art9019009090@mail.ru" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <Icon name="Mail" size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-sm">art9019009090@mail.ru</span>
                </a>
                <a href="https://wa.me/79651215122" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <Icon name="MessageCircle" size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-sm">WhatsApp: +7 (965) 121-51-22</span>
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <Icon name="MapPin" size={16} className="text-white/40 shrink-0 mt-0.5" />
                  <span className="text-sm">Москва, 41 км МКАД, Строительный рынок «Мельница», павильон Б-9/4</span>
                </div>
              </div>
            </div>
            <form
              className="reveal space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-white">Форма обратной связи</p>
              <input
                type="text"
                placeholder="Имя"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <textarea
                placeholder="Сообщение"
                rows={3}
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center border border-white px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#1a3a5c] transition-all"
              >
                Заказать консультацию
              </button>
            </form>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-[10px] text-white/30 tracking-wider uppercase">
            © 2026 ALBABAGNO — Italian Perfect Sanitaryware
          </div>
        </div>
      </footer>

    </div>
  );
}