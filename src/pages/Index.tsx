import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const PRODUCT_IMG =
  'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/24639f17-c357-4511-85d1-0c6b16581a7f.png';
const PRODUCT_IMG_2 =
  'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/ef29f28f-2331-4a72-a4bb-2101bc949b93.jpg';
const BG_IMG =
  'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/9ff675b5-47d1-4081-a293-55f5f0c8e3f2.png';

const advantages = [
  { icon: 'MapPin', title: 'Итальянский дизайн', text: 'Современный внешний вид и качественные материалы.' },
  { icon: 'VolumeX', title: 'Тихая работа', text: 'Минимальный уровень шума благодаря современной системе двигателя.' },
  { icon: 'Settings', title: 'Простая установка', text: 'Подходит практически для любой кухонной мойки.' },
  { icon: 'Leaf', title: 'Экологично', text: 'Уменьшает количество бытовых отходов и неприятных запахов.' },
];

const specs = [
  ['Мощность', '560–750 Вт'],
  ['Скорость', '2600–3200 об/мин'],
  ['Камера', 'Нержавеющая сталь'],
  ['Напряжение', '220–240 В'],
  ['Защита', 'Автоматическая'],
  ['Гарантия', 'До 5 лет'],
];

const steps = [
  { n: 1, img: PRODUCT_IMG, title: 'Остатки пищи попадают в мойку' },
  { n: 2, img: PRODUCT_IMG_2, title: 'Измельчаются за несколько секунд' },
  { n: 3, img: PRODUCT_IMG, title: 'Безопасно уходят в канализацию' },
];

const reasons = [
  { icon: 'Gem', label: 'Премиальное качество' },
  { icon: 'Shield', label: 'Надёжные материалы' },
  { icon: 'Wrench', label: 'Простое обслуживание' },
  { icon: 'Clock', label: 'Экономия времени' },
  { icon: 'Leaf', label: 'Экологичное решение' },
  { icon: 'Sparkles', label: 'Современный внешний вид' },
];

const reviews = [
  { text: 'Очень тихий и мощный. Пользуемся ежедневно.', name: 'Иван П.' },
  { text: 'Отличное качество изготовления.', name: 'Мария С.' },
  { text: 'Установили за 20 минут.', name: 'Алексей К.' },
];

const faq = [
  { icon: 'VolumeX', q: 'Шумный ли измельчитель?', a: 'Нет. Двигатель имеет низкий уровень шума.' },
  { icon: 'Wrench', q: 'Можно ли установить самостоятельно?', a: 'Да. Монтаж занимает около 20–30 минут.' },
  { icon: 'ShieldCheck', q: 'Безопасно ли использовать?', a: 'Да. Устройство оснащено системой защиты.' },
  { icon: 'XCircle', q: 'Что нельзя измельчать?', a: 'Очень крупные кости, металл, стекло, пластик.' },
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

const ABLogo = ({ light }: { light?: boolean }) => (
  <div className="flex items-center gap-3 select-none">
    <div className={`flex h-11 w-11 items-center justify-center rounded-full border-2 ${light ? 'border-white' : 'border-[#2F343B]'}`}>
      <span className={`font-display text-sm font-bold tracking-wider ${light ? 'text-white' : 'text-[#2F343B]'}`}>AB</span>
    </div>
    <div>
      <div className={`font-display text-base font-bold tracking-[0.2em] leading-none ${light ? 'text-white' : 'text-[#2F343B]'}`}>
        ALBABAGNO
      </div>
      <div className={`text-[9px] tracking-[0.15em] uppercase leading-none mt-0.5 ${light ? 'text-white/60' : 'text-[#2F343B]/50'}`}>
        Italian Perfect Sanitaryware
      </div>
      <div className="flex gap-0.5 mt-1">
        <span className="h-[3px] w-3 bg-[#008C45] rounded-sm" />
        <span className="h-[3px] w-3 bg-white border border-gray-200 rounded-sm" />
        <span className="h-[3px] w-3 bg-[#CD212A] rounded-sm" />
      </div>
    </div>
  </div>
);

export default function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen bg-white font-sans text-[#2F343B]">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex h-[70px] items-center justify-between">
          <ABLogo />
          <nav className="hidden lg:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2F343B]/70">
            <a href="#product" className="hover:text-[#274C77] transition-colors">О продукте</a>
            <a href="#specs" className="hover:text-[#274C77] transition-colors">Характеристики</a>
            <a href="#advantages" className="hover:text-[#274C77] transition-colors">Преимущества</a>
            <a href="#reviews" className="hover:text-[#274C77] transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-[#274C77] transition-colors">Контакты</a>
          </nav>
          <a href="#contacts" className="hidden md:inline-flex items-center border border-[#2F343B] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#2F343B] hover:text-white transition-all">
            Связаться с нами
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative pt-[70px] overflow-hidden"
        style={{ background: `url(${BG_IMG}) center/cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-[#1a2535]/70" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-4">
              ALBABAGNO
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light uppercase tracking-[0.15em] mb-3">
              Итальянское качество<br />для современной кухни
            </p>
            <p className="text-white/60 text-base mb-6">Премиальные измельчители пищевых отходов</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-white/50 text-sm mb-10">
              {['Тихая работа', 'Надёжность', 'Простая установка', 'Долгий срок службы'].map((t, i) => (
                <span key={t} className="flex items-center gap-1">
                  {i > 0 && <span className="text-white/30">•</span>}
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#274C77] text-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[#1e3a5c] transition-colors">
                Купить
              </button>
              <button className="border border-white text-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-[#2F343B] transition-all">
                Получить консультацию
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/18ce371f-6e06-4497-912a-b1fa351e2144.png"
              alt="ALBABAGNO"
              className="w-full max-w-sm drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ ALBABAGNO — белая секция */}
      <section id="advantages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-12">
            <h2 className="font-display text-3xl font-bold uppercase tracking-[0.15em] text-[#2F343B]">
              Почему выбирают ALBABAGNO
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="reveal border border-gray-200 p-6 text-center hover:border-[#274C77] hover:shadow-md transition-all group">
                <div className="mb-4 flex justify-center text-[#274C77]">
                  <Icon name={a.icon} size={32} />
                </div>
                <h3 className="font-semibold text-xs uppercase tracking-[0.1em] mb-2 text-[#2F343B]">{a.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{a.text}</p>
                <div className="mt-3 flex justify-center gap-0.5">
                  <span className="h-[2px] w-2 bg-[#008C45]" />
                  <span className="h-[2px] w-2 bg-gray-300" />
                  <span className="h-[2px] w-2 bg-[#CD212A]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О ПРОДУКТЕ */}
      <section id="product" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal flex justify-center">
            <img src="https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/7a3ad343-0366-4629-a2d7-6c2d3a6a85ce.jpg" alt="ALBABAGNO" className="w-full max-w-md rounded-xl object-cover" />
          </div>
          <div className="reveal">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-[0.1em] mb-4 text-[#2F343B]">
              Измельчитель пищевых отходов ALBABAGNO
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Современное решение для кухни, позволяющее быстро перерабатывать остатки пищи.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[#2F343B]">Подходит для:</p>
                <ul className="space-y-2">
                  {['овощей', 'фруктов', 'каш', 'мелких костей', 'скорлупы'].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#274C77] shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[#2F343B]">Преимущества:</p>
                <ul className="space-y-2">
                  {['Мощный двигатель', 'Защита от перегрузки', 'Нержавеющая камера', 'Низкий уровень вибрации', 'Долговечность'].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Check" size={14} className="shrink-0 text-[#274C77]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ХАРАКТЕРИСТИКИ + КАК РАБОТАЕТ */}
      <section id="specs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Specs */}
          <div className="reveal">
            <h2 className="font-display text-xl font-bold uppercase tracking-[0.15em] mb-6 text-[#2F343B]">
              Характеристики
            </h2>
            <div className="divide-y divide-gray-100 border border-gray-100">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between px-4 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-500">{k}</span>
                  <span className="text-sm font-semibold text-[#2F343B]">{v}</span>
                </div>
              ))}
            </div>
          </div>
          {/* How it works */}
          <div className="reveal">
            <h2 className="font-display text-xl font-bold uppercase tracking-[0.15em] mb-6 text-[#2F343B]">
              Как это работает
            </h2>
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s.n} className="flex items-center gap-2 flex-1">
                  <div className="flex-1 text-center">
                    <div className="relative inline-block">
                      <img src={s.img} alt="" className="w-20 h-20 object-cover rounded-full border-2 border-[#274C77]/20" />
                      <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#274C77] text-white text-xs font-bold">
                        {s.n}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 leading-tight">{s.title}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <Icon name="ArrowRight" size={16} className="text-gray-300 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-[#2F343B]">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/cc81f39d-4a8d-44ac-a776-6c358aaf2f9c.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/e739ce20-2920-46e2-8f05-98691082e97a.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/51d85f73-b551-4fdd-b43a-a6e3fca55911.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/b1bbfc88-7536-4515-b7b0-30c5bdca637c.jpg',
              'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/67963d55-bcd5-45c8-82ef-ba5f4e1ffffa.png',
            ].map((img, i) => (
              <div key={i} className="reveal group overflow-hidden aspect-square bg-white border border-gray-100">
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

      {/* ПОЧЕМУ ALBABAGNO (иконки) */}
      <section
        className="py-16"
        style={{ background: `url(${BG_IMG}) center/cover no-repeat` }}
      >
        <div className="bg-[#1a2535]/80">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="reveal text-center mb-10">
              <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-white">
                Почему ALBABAGNO
              </h2>
            </div>
            <div className="reveal grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
              {reasons.map((r) => (
                <div key={r.label} className="group">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/70 group-hover:border-white group-hover:text-white transition-all">
                      <Icon name={r.icon} size={20} />
                    </div>
                  </div>
                  <p className="text-xs text-white/70 leading-tight group-hover:text-white transition-colors">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-[#2F343B]">Отзывы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="reveal border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                    <Icon name="User" size={14} className="text-gray-400" />
                  </div>
                  <span className="text-xs font-semibold text-[#2F343B]">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЧАСТЫЕ ВОПРОСЫ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-[#2F343B]">Частые вопросы</h2>
          </div>
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faq.map((f) => (
              <div key={f.q} className="flex gap-4 bg-white border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#274C77]/20 text-[#274C77]">
                  <Icon name={f.icon} size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2F343B] mb-1">{f.q}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ / ФУТЕР */}
      <footer
        id="contacts"
        style={{ background: `url(${BG_IMG}) center/cover no-repeat` }}
      >
        <div className="bg-[#1a2535]/85">
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 items-center gap-8">
            <div>
              <ABLogo light />
              <p className="text-white/50 text-xs mt-3 leading-relaxed">
                Итальянская сантехника<br />и кухонное оборудование
              </p>
            </div>
            <div className="space-y-3">
              <a href="tel:+79808880077" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <Icon name="Phone" size={16} className="text-white/40 group-hover:text-white transition-colors" />
                <span className="text-sm">+7 (980) 888-00-77</span>
              </a>
              <a href="mailto:art9019009090@mail.ru" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <Icon name="Mail" size={16} className="text-white/40 group-hover:text-white transition-colors" />
                <span className="text-sm">art9019009090@mail.ru</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <Icon name="MapPin" size={16} className="text-white/40" />
                <span className="text-sm">Москва, Зеленоград, 3с2</span>
              </div>
            </div>
            <div className="flex md:justify-end">
              <a
                href="tel:+79808880077"
                className="inline-flex items-center border border-white px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#2F343B] transition-all"
              >
                Связаться с нами
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-[10px] text-white/30 tracking-wider uppercase">
            © 2026 ALBABAGNO — Italian Perfect Sanitaryware
          </div>
        </div>
      </footer>

    </div>
  );
}