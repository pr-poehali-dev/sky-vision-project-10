import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays } from "@paper-design/shaders-react"
import Icon from "@/components/ui/icon"

const slides = [
  {
    id: 1,
    type: "title",
    title: "Повседневные стрессовые ситуации",
    subtitle: "Методы психологической помощи в стрессовых и экстремальных ситуациях",
    meta: "Учебная презентация",
  },
  {
    id: 2,
    type: "content",
    title: "Что такое стресс?",
    points: [
      "Стресс — неспецифическая реакция организма на любое предъявленное ему требование (Г. Селье)",
      "Различают эустресс (положительный) и дистресс (отрицательный)",
      "Повседневный стресс — хронический, накапливающийся в результате обычных жизненных ситуаций",
      "Затрагивает физиологическую, психологическую и поведенческую сферы",
    ],
  },
  {
    id: 3,
    type: "content",
    title: "Основные источники повседневного стресса",
    points: [
      "Рабочие нагрузки и конфликты на работе",
      "Финансовые трудности и нестабильность",
      "Семейные и межличностные конфликты",
      "Информационная перегрузка и цифровой стресс",
      "Транспорт, очереди, бытовые проблемы",
      "Неопределённость и страх будущего",
    ],
  },
  {
    id: 4,
    type: "content",
    title: "Физиологические проявления стресса",
    points: [
      "Активация симпато-адреналовой системы: выброс адреналина и кортизола",
      "Учащение сердцебиения, повышение артериального давления",
      "Напряжение мышц, головные боли, боли в спине",
      "Нарушения сна, хроническая усталость",
      "Снижение иммунитета при длительном воздействии",
    ],
  },
  {
    id: 5,
    type: "content",
    title: "Психологические последствия",
    points: [
      "Тревожность, раздражительность, эмоциональная нестабильность",
      "Снижение концентрации внимания и памяти",
      "Профессиональное выгорание (burnout)",
      "Депрессивные состояния при хроническом стрессе",
      "Снижение самооценки и мотивации",
      "Социальная изоляция, уход от контактов",
    ],
  },
  {
    id: 6,
    type: "content",
    title: "Метод 1: Дыхательные техники",
    points: [
      "Диафрагмальное дыхание: вдох 4 сек, задержка 4 сек, выдох 6 сек",
      "Техника «4-7-8»: нормализует ЧСС, снижает тревогу за 2–3 минуты",
      "Квадратное дыхание: равные отрезки по 4 счёта",
      "Механизм: активация парасимпатической нервной системы",
      "Доступны в любой ситуации, без специального оборудования",
    ],
  },
  {
    id: 7,
    type: "content",
    title: "Метод 2: Когнитивная реструктуризация",
    points: [
      "Выявление иррациональных убеждений и автоматических мыслей (КБТ)",
      "Техника «ABC»: Activating event → Belief → Consequence",
      "Рефрейминг: переосмысление ситуации в конструктивном ключе",
      "Ведение дневника мыслей для отслеживания паттернов",
      "Метод «Сократовского диалога» с собственными установками",
    ],
  },
  {
    id: 8,
    type: "content",
    title: "Метод 3: Телесно-ориентированные практики",
    points: [
      "Прогрессивная мышечная релаксация по Джекобсону",
      "Систематическое напряжение и расслабление групп мышц",
      "Йога и стретчинг для снятия мышечных зажимов",
      "Аутогенная тренировка (Й. Г. Шульц): самовнушение расслабления",
      "Техника «заземления»: осознание физического контакта с опорой",
    ],
  },
  {
    id: 9,
    type: "content",
    title: "Метод 4: Mindfulness и медитация",
    points: [
      "Осознанность (mindfulness): наблюдение без оценки «здесь и сейчас»",
      "Программа MBSR (Кабат-Зинн) — снижение стресса на основе осознанности",
      "Практика сканирования тела (body scan)",
      "Медитация на дыхание: 10–15 минут в день снижают уровень кортизола",
      "Принятие ситуации без борьбы с ней как ключевой навык",
    ],
  },
  {
    id: 10,
    type: "content",
    title: "Метод 5: Социальная поддержка и ресурсы",
    points: [
      "Социальная поддержка — мощнейший буфер против стресса",
      "Эмоциональная поддержка: быть услышанным, получить сочувствие",
      "Инструментальная поддержка: практическая помощь в решении задач",
      "Группы самопомощи и психологические сообщества",
      "Своевременное обращение к специалисту — психологу или психотерапевту",
    ],
  },
  {
    id: 11,
    type: "content",
    title: "Профилактика хронического стресса",
    points: [
      "Режим труда и отдыха: сон 7–8 часов, регулярные перерывы",
      "Физическая активность — 150 минут умеренной нагрузки в неделю",
      "Тайм-менеджмент: приоритизация задач, метод GTD, Pomodoro",
      "Ограничение информационного потока и цифровой детокс",
      "Хобби, творчество, контакт с природой как ресурсные состояния",
      "Развитие психологической резильентности",
    ],
  },
  {
    id: 12,
    type: "references",
    title: "Список литературы",
    references: [
      "1. Селье Г. Стресс без дистресса. — М.: Прогресс, 1979. — 124 с.",
      "2. Бодров В. А. Психологический стресс: развитие и преодоление. — М.: ПЕР СЭ, 2006. — 528 с.",
      "3. Китаев-Смык Л. А. Психология стресса. — М.: Наука, 1983. — 368 с.",
      "4. Кабат-Зинн Дж. Куда бы ты ни шёл — ты уже там. — М.: Трансперсональный институт, 2001. — 272 с.",
      "5. Эллис А., Харпер Р. Новое руководство для рационального образа жизни. — Минск: Попурри, 2021. — 336 с.",
      "6. Леонова А. Б., Кузнецова А. С. Психологические технологии управления состоянием человека. — М.: Смысл, 2007. — 311 с.",
      "7. Щербатых Ю. В. Психология стресса и методы коррекции. — СПб.: Питер, 2008. — 256 с.",
    ],
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => {
    if (current > 0) goTo(current - 1)
  }

  const next = () => {
    if (current < slides.length - 1) goTo(current + 1)
  }

  const slide = slides[current]

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-8 overflow-hidden">
      {/* GodRays Background */}
      <div className="absolute inset-0">
        <GodRays
          colorBack="#00000000"
          colors={["#FFFFFF6E", "#F3F3F3F0", "#8A8A8A", "#989898"]}
          colorBloom="#FFFFFF"
          offsetX={0.85}
          offsetY={-1}
          intensity={1}
          spotty={0.45}
          midSize={10}
          midIntensity={0}
          density={0.12}
          bloom={0.15}
          speed={1}
          scale={1.6}
          frame={3332042}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Slide container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col min-h-screen justify-between py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-black/50 uppercase tracking-widest">
            Психологическая помощь при стрессе
          </span>
          <span className="text-xs font-mono text-black/50">
            {current + 1} / {slides.length}
          </span>
        </div>

        {/* Slide content */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {slide.type === "title" && (
                <div className="text-center flex flex-col items-center gap-6">
                  <div className="inline-block bg-black/10 backdrop-blur-sm border border-black/10 rounded-full px-4 py-1.5 text-xs font-mono text-black/60 tracking-widest uppercase">
                    {slide.meta}
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-[-0.03em] text-black max-w-3xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-black/60 max-w-xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-black/40 text-sm">
                    <Icon name="ChevronRight" size={16} />
                    <span>используйте стрелки для навигации</span>
                  </div>
                </div>
              )}

              {slide.type === "content" && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-xs font-mono text-black/50">
                      {current + 1}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.025em] text-black leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="backdrop-blur-sm bg-white/30 border border-white/60 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <ul className="space-y-3 sm:space-y-4">
                      {slide.points?.map((point, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-black/40" />
                          <span className="text-base sm:text-lg text-black/80 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {slide.type === "references" && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-xs font-mono text-black/50">
                      {current + 1}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.025em] text-black leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="backdrop-blur-sm bg-white/30 border border-white/60 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <ul className="space-y-3">
                      {slide.references?.map((ref, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="flex-shrink-0 mt-0.5">
                            <Icon name="BookOpen" size={16} className="text-black/40 mt-1" />
                          </span>
                          <span className="text-sm sm:text-base text-black/75 leading-relaxed">{ref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm text-black"
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-black/60"
                    : "w-2 h-2 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 hover:bg-black text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
          >
            Далее
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
