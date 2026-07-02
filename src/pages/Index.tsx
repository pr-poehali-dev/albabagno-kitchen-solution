import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PRODUCT_IMG =
  'https://cdn.poehali.dev/projects/dfb41d82-10b1-42f4-87ac-018af4036e6a/bucket/9f69f713-3377-48c6-98f9-d12bdd107070.png';

const advantages = [
  { icon: 'Sparkles', title: 'Итальянский дизайн', text: 'Современный внешний вид и качественные материалы.' },
  { icon: 'VolumeX', title: 'Тихая работа', text: 'Минимальный уровень шума благодаря современной системе двигателя.' },
  { icon: 'Wrench', title: 'Простая установка', text: 'Подходит практически для любой кухонной мойки.' },
  { icon: 'Recycle', title: 'Экологично', text: 'Уменьшает количество бытовых отходов и неприятных запахов.' },
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
  { n: '01', icon: 'ArrowDownToLine', title: 'Остатки пищи попадают в мойку', text: 'Просто смывайте пищевые отходы водой.' },
  { n: '02', icon: 'Zap', title: 'Измельчаются за несколько секунд', text: 'Мощный двигатель превращает их в мелкую фракцию.' },
  { n: '03', icon: 'CheckCircle2', title: 'Безопасно уходят в канализацию', text: 'Без запахов, засоров и лишнего мусора.' },
];

const reasons = [
  'Премиальное качество',
  'Надёжные материалы',
  'Простое обслуживание',
  'Экономия времени',
  'Экологичное решение',
  'Современный внешний вид',
];

const reviews = [
  { text: 'Очень тихий и мощный. Пользуемся ежедневно.', name: 'Марина К.' },
  { text: 'Отличное качество изготовления.', name: 'Дмитрий С.' },
  { text: 'Установили за 20 минут.', name: 'Алексей П.' },
];

const faq = [
  { q: 'Шумный ли измельчитель?', a: 'Нет. Двигатель имеет низкий уровень шума.' },
  { q: 'Можно ли установить самостоятельно?', a: 'Да. Монтаж занимает около 20–30 минут.' },
  { q: 'Безопасно ли использовать?', a: 'Да. Устройство оснащено системой защиты.' },
  { q: 'Что нельзя измельчать?', a: 'Очень крупные кости, металл, стекло, пластик.' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const Logo = ({ light }: { light?: boolean }) => (
  <div className="flex items-center gap-2 select-none">
    <div className="flex h-8 w-1.5 overflow-hidden rounded-sm">
      <span className="w-1/3 bg-[#008C45]" />
      <span className="w-1/3 bg-white" />
      <span className="w-1/3 bg-[#CD212A]" />
    </div>
    <span
      className={`font-display text-2xl font-semibold tracking-[0.25em] ${
        light ? 'text-white' : 'text-graphite'
      }`}
    >
      ALBABAGNO
    </span>
  </div>
);

export default function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen bg-white text-graphite">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#product" className="transition-colors hover:text-navy">О продукте</a>
            <a href="#specs" className="transition-colors hover:text-navy">Характеристики</a>
            <a href="#reviews" className="transition-colors hover:text-navy">Отзывы</a>
            <a href="#contacts" className="transition-colors hover:text-navy">Контакты</a>
          </nav>
          <Button className="bg-navy text-white hover:bg-navy/90">Купить</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="container grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-fade-in">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-navy">
              Итальянское качество
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight text-graphite md:text-7xl">
              Премиальные
              <br />
              измельчители
              <br />
              пищевых отходов
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Тихая работа. Надёжность. Простая установка. Долгий срок службы —
              для современной кухни.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-navy px-8 text-white hover:bg-navy/90">
                Купить
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-graphite px-8 text-graphite hover:bg-graphite hover:text-white"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
          <div className="group relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-full bg-[#F5F5F5] blur-2xl" />
            <img
              src={PRODUCT_IMG}
              alt="Измельчитель ALBABAGNO"
              className="w-full max-w-md rounded-2xl object-cover shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
            />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="container">
          <div className="reveal mb-16 text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Почему выбирают ALBABAGNO</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="reveal group rounded-xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={a.icon} size={22} />
                </div>
                <h3 className="mb-2 font-display text-2xl font-semibold">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="py-24">
        <div className="container grid items-center gap-14 md:grid-cols-2">
          <div className="reveal">
            <img
              src={PRODUCT_IMG}
              alt="Измельчитель ALBABAGNO"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="reveal">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-navy">О продукте</p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Измельчитель пищевых отходов ALBABAGNO
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Современное решение для кухни, позволяющее быстро перерабатывать остатки пищи.
            </p>

            <div className="mt-8">
              <p className="mb-3 font-medium text-graphite">Подходит для:</p>
              <div className="flex flex-wrap gap-2">
                {['овощей', 'фруктов', 'каш', 'мелких костей', 'скорлупы'].map((t) => (
                  <span key={t} className="rounded-full bg-[#F5F5F5] px-4 py-1.5 text-sm text-graphite">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Мощный двигатель', 'Защита от перегрузки', 'Нержавеющая камера измельчения', 'Низкий уровень вибрации', 'Долговечность'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={18} className="shrink-0 text-navy" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="bg-graphite py-24 text-white">
        <div className="container">
          <div className="reveal mb-14 text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Характеристики</h2>
          </div>
          <div className="reveal mx-auto max-w-2xl divide-y divide-white/10">
            {specs.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-5">
                <span className="text-silver">{k}</span>
                <span className="font-display text-2xl font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container">
          <div className="reveal mb-16 text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Как это работает</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="reveal relative rounded-xl bg-[#F5F5F5] p-8 text-center">
                <span className="font-display text-6xl font-semibold text-silver/60">{s.n}</span>
                <div className="mx-auto my-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="mb-2 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="container">
          <div className="reveal mb-14 text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Галерея</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="reveal group overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <img
                  src={PRODUCT_IMG}
                  alt={`ALBABAGNO ${i + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why + Reviews */}
      <section id="reviews" className="py-24">
        <div className="container">
          <div className="reveal mb-10 flex flex-wrap justify-center gap-3">
            {reasons.map((r) => (
              <span key={r} className="rounded-full border border-navy/20 px-5 py-2 text-sm text-navy">
                {r}
              </span>
            ))}
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="reveal rounded-xl border border-black/5 bg-white p-8 shadow-sm">
                <div className="mb-4 flex text-navy">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-navy" />
                  ))}
                </div>
                <p className="font-display text-2xl leading-snug text-graphite">«{r.text}»</p>
                <p className="mt-4 text-sm text-muted-foreground">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="container max-w-3xl">
          <div className="reveal mb-14 text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Частые вопросы</h2>
          </div>
          <div className="reveal">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-black/10">
                  <AccordionTrigger className="text-left font-display text-xl font-medium hover:text-navy">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-graphite py-24 text-white">
        <div className="container grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <Logo light />
            <p className="mt-4 max-w-sm text-silver">
              Итальянская сантехника и кухонное оборудование.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-silver" />
                <span>+7 (000) 000-00-00</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-silver" />
                <span>info@albabagno.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-silver" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
          <form className="reveal space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-3xl font-semibold">Свяжитесь с нами</h3>
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-silver/60 focus:border-white/40 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-silver/60 focus:border-white/40 focus:outline-none"
            />
            <textarea
              placeholder="Сообщение"
              rows={3}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-silver/60 focus:border-white/40 focus:outline-none"
            />
            <Button size="lg" className="w-full bg-navy text-white hover:bg-navy/90">
              Связаться с нами
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-graphite py-6 text-center text-sm text-silver/60">
        © 2026 ALBABAGNO. Итальянское качество для современной кухни.
      </footer>
    </div>
  );
}