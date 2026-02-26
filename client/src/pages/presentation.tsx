import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Zap,
  TrendingUp,
  Users,
  Target,
  Clock,
  DollarSign,
  Rocket,
  Brain,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Lightbulb,
  Calendar,
  Gift,
  Award,
  AlertTriangle,
  Heart,
  Bot,
  Layers,
} from "lucide-react";

import receipt1 from "@assets/2026-02-26_17.42.18_1772117075361.jpg";
import receipt2 from "@assets/2026-02-26_17.42.29_1772117075361.jpg";
import receipt3 from "@assets/2026-02-26_17.42.32_1772117075361.jpg";
import receipt4 from "@assets/2026-02-26_17.42.35_1772117075361.jpg";
import receipt5 from "@assets/2026-02-26_17.42.38_1772117075361.jpg";
import receipt6 from "@assets/2026-02-26_17.42.41_1772117075361.jpg";
import receipt7 from "@assets/2026-02-26_17.42.44_1772117075361.jpg";
import receipt8 from "@assets/2026-02-26_17.42.46_1772117075361.jpg";
import receipt9 from "@assets/2026-02-26_17.42.50_1772117075361.jpg";
import receipt10 from "@assets/2026-02-26_17.42.52_1772117075361.jpg";

import avatarPhoto from "@assets/2026-02-26_17.48.43_1772117336127.jpg";
import avatarPhoto2 from "@assets/2026-02-26_17.56.14_1772117865471.jpg";

const receiptImages = [receipt1, receipt2, receipt3, receipt4, receipt5, receipt6, receipt7, receipt8, receipt9, receipt10];

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

function SlideContainer({ children, className = "" }: SlideProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-8 sm:py-12 ${className}`}
    >
      {children}
    </div>
  );
}

function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

function AccentBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30"
      data-testid="badge-accent"
    >
      {children}
    </span>
  );
}

function NumberCard({
  number,
  label,
  accent = false,
}: {
  number: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 sm:p-6 text-center ${accent ? "bg-gradient-to-br from-purple-600/30 to-cyan-600/20 border border-purple-500/30" : "bg-white/5 border border-white/10"}`}
    >
      <div
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${accent ? "text-purple-300" : "text-white"}`}
      >
        {number}
      </div>
      <div className="text-sm sm:text-base text-gray-400">{label}</div>
    </div>
  );
}

function BulletPoint({
  icon: Icon,
  children,
  delay = 0,
}: {
  icon?: any;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.15, duration: 0.4 }}
      className="flex items-start gap-3 sm:gap-4"
    >
      {Icon && (
        <div className="mt-1 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
        </div>
      )}
      <div className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 text-center leading-tight">
      {children}
    </h2>
  );
}

function SlideSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-10 text-center max-w-3xl">
      {children}
    </p>
  );
}

function PriceRow({
  label,
  price,
}: {
  label: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
      <span className="text-base sm:text-lg text-gray-300">{label}</span>
      <span className="text-base sm:text-lg font-semibold text-white">
        {price}
      </span>
    </div>
  );
}

function Slide1() {
  return (
    <SlideContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <AccentBadge>ВЕБИНАР</AccentBadge>
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <GradientText>МИЛЛИОН</GradientText>
          <br />
          <span className="text-white">НА ВАЙБ-КОДИНГЕ</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
          Моя полная стратегия. Без строчки кода.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-purple-500/50 p-0.5">
              <img
                src={avatarPhoto}
                alt="Костя на Вайбе"
                className="w-full h-full rounded-full object-cover object-[center_20%]"
                data-testid="img-avatar"
              />
            </div>
            <span>Костя на Вайбе</span>
          </div>
          <span className="hidden sm:block">|</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> 2026
          </span>
        </div>
      </motion.div>
    </SlideContainer>
  );
}

function Slide2() {
  return (
    <SlideContainer>
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-3 border-purple-500/50 p-1 mx-auto mb-6">
        <img
          src={avatarPhoto2}
          alt="Костя на Вайбе"
          className="w-full h-full rounded-full object-cover object-[center_25%]"
          data-testid="img-avatar-slide2"
        />
      </div>
      <SlideTitle>
        <GradientText>КТО Я</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full space-y-5">
        <BulletPoint icon={Code2} delay={0}>
          Не программист. Не технарь. <strong className="text-white">0 строчек кода.</strong>
        </BulletPoint>
        <BulletPoint icon={Zap} delay={1}>
          Нейросеть пишет код за меня
        </BulletPoint>
        <BulletPoint icon={TrendingUp} delay={2}>
          <strong className="text-purple-300">500 000 &#8381;/мес</strong> на вайб-кодинге
        </BulletPoint>
        <BulletPoint icon={Rocket} delay={3}>
          Сайты, приложения, автоматизации, свой стартап
        </BulletPoint>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 px-6 py-4 rounded-xl bg-purple-500/10 border border-purple-500/20 max-w-2xl text-center"
      >
        <p className="text-gray-300 text-base sm:text-lg">
          6 месяцев назад моя жизнь изменилась. Все, что было в воображении - теперь я могу реализовать. Сам.
        </p>
      </motion.div>
    </SlideContainer>
  );
}

function Slide3() {
  return (
    <SlideContainer>
      <SlideTitle>ПРАВИЛА ЭФИРА</SlideTitle>
      <div className="max-w-3xl w-full space-y-6">
        <BulletPoint icon={Clock} delay={0}>
          <strong className="text-white">90 минут.</strong> Без воды.
        </BulletPoint>
        <BulletPoint icon={Target} delay={1}>
          Полная стратегия - берите и внедряйте
        </BulletPoint>
        <BulletPoint icon={Gift} delay={2}>
          В конце - кое-что для тех, кто хочет пройти этот путь <strong className="text-purple-300">со мной</strong>
        </BulletPoint>
      </div>
    </SlideContainer>
  );
}

function Slide4() {
  return (
    <SlideContainer>
      <SlideTitle>
        ЧТО ВЫ <GradientText>ПОЛУЧИТЕ</GradientText>
      </SlideTitle>
      <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <div className="flex-1 space-y-4">
          <BulletPoint icon={TrendingUp} delay={0}>
            Как я вышел на <strong className="text-white">500К/мес</strong> за 6 месяцев с нуля
          </BulletPoint>
          <BulletPoint icon={Layers} delay={1}>
            Три направления: сайты &#8594; автоматизации &#8594; стартап
          </BulletPoint>
          <BulletPoint icon={BarChart3} delay={2}>
            Структура миллиона: сколько приносит каждое направление
          </BulletPoint>
          <BulletPoint icon={Zap} delay={3}>
            Живая демонстрация: создам рабочий сайт <strong className="text-cyan-400">за 3 минуты</strong> на ваших глазах
          </BulletPoint>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-3 text-base text-gray-500 italic"
          >
            Это не мотивационный вебинар. Это стратегия, которую вы можете скопировать.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full lg:w-[280px] flex-shrink-0"
        >
          <p className="text-xs text-gray-500 mb-3 text-center uppercase tracking-wider">Реальные оплаты</p>
          <div className="grid grid-cols-5 lg:grid-cols-2 gap-2">
            {receiptImages.slice(0, 6).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="rounded-lg border border-white/10 bg-white/5 p-0.5"
              >
                <img
                  src={img}
                  alt={`Оплата ${i + 1}`}
                  className="w-full h-auto rounded-md object-cover"
                  data-testid={`img-receipt-${i}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
}

function Slide5() {
  return (
    <SlideContainer>
      <SlideTitle>
        <GradientText>ОПРОС</GradientText>
      </SlideTitle>
      <SlideSubtitle>Сколько у вас сейчас источников дохода?</SlideSubtitle>
      <div className="max-w-lg w-full space-y-4">
        {[
          { num: "1", text: "Один (зарплата)" },
          { num: "2", text: "Два и больше" },
          { num: "3", text: "Пока ноль, ищу" },
        ].map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 cursor-pointer transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-lg">
              {item.num}
            </div>
            <span className="text-lg sm:text-xl text-gray-200">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-gray-500 text-base"
      >
        Напишите цифру в чат
      </motion.p>
    </SlideContainer>
  );
}

function Slide6() {
  return (
    <SlideContainer>
      <AccentBadge>6 МЕСЯЦЕВ НАЗАД</AccentBadge>
      <SlideTitle>
        <span className="mt-4 block">ТОЧКА А</span>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NumberCard number="1" label="источник дохода" />
        <NumberCard number="70-80К" label="средняя зарплата" />
        <NumberCard number="95К" label="расходы в месяц" />
        <NumberCard number="&#8595;" label="подушка тает" accent />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-gray-400 text-center max-w-2xl text-base sm:text-lg"
      >
        Аренда 40К + Еда 25К + Машина, коммуналка, подписки 30К = 95К. Математика не сходится.
      </motion.p>
    </SlideContainer>
  );
}

function Slide7() {
  return (
    <SlideContainer>
      <SlideTitle>
        <GradientText>ЖИВАЯ ДЕМОНСТРАЦИЯ</GradientText>
      </SlideTitle>
      <SlideSubtitle>Что такое вайб-кодинг</SlideSubtitle>
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl bg-gradient-to-br from-purple-900/40 to-cyan-900/20 border border-purple-500/20 p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm sm:text-base text-gray-300 space-y-3">
            <p className="text-purple-400">&#47;&#47; Промпт:</p>
            <p className="text-cyan-300">"Сделай лендинг для стоматологии.</p>
            <p className="text-cyan-300">Логотип наверху, блок услуг с ценами,</p>
            <p className="text-cyan-300">форма записи, отзывы пациентов,</p>
            <p className="text-cyan-300">контакты и карта."</p>
          </div>
        </motion.div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <NumberCard number="3 мин" label="до готового сайта" accent />
          <NumberCard number="$20" label="подписка в месяц" />
          <NumberCard number="0" label="строчек кода" />
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide8() {
  return (
    <SlideContainer>
      <SlideTitle>
        МОЙ <GradientText>ПЕРВЫЙ КЛИЕНТ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <NumberCard number="15 000 &#8381;" label="первый заказ" accent />
        <NumberCard number="2,5 часа" label="время работы" />
        <NumberCard number="6 000 &#8381;" label="в час" accent />
        <NumberCard number="0" label="строчек кода" />
      </div>
      <div className="max-w-2xl w-full space-y-4">
        <BulletPoint icon={CheckCircle2} delay={0}>
          Без портфолио. Без опыта. Без кода.
        </BulletPoint>
        <BulletPoint icon={ArrowRight} delay={1}>
          Курьер - 300 &#8381;/час. Репетитор - 1 000. Я - <strong className="text-purple-300">6 000</strong>
        </BulletPoint>
      </div>
    </SlideContainer>
  );
}

function Slide9() {
  return (
    <SlideContainer>
      <SlideTitle>
        КАК НАХОЖУ <GradientText>КЛИЕНТОВ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400 text-sm">Реальная переписка</span>
          </div>
          <div className="space-y-3 text-base sm:text-lg">
            <p className="text-cyan-300">"Привет, можешь сделать сайт для моей студии?"</p>
            <p className="text-gray-300">"Да. Что нужно?"</p>
            <p className="text-cyan-300">[описывает задачу]</p>
            <p className="text-gray-300">"25 000, готово через 3 дня."</p>
            <p className="text-cyan-300">"Давай."</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Знакомые", "Сарафан", "Соцсети", "Чаты", "Авито"].map((ch, i) => (
            <motion.div
              key={ch}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-sm font-medium"
            >
              {ch}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide10() {
  return (
    <SlideContainer>
      <SlideTitle>
        СКОЛЬКО <GradientText>СТОЯТ УСЛУГИ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Прайс</h3>
          <PriceRow label="Лендинг" price="15 - 40К &#8381;" />
          <PriceRow label="Телеграм-бот" price="10 - 50К &#8381;" />
          <PriceRow label="Мини-приложение" price="30 - 100К &#8381;" />
          <PriceRow label="Автоматизация" price="5 - 20К &#8381;" />
          <PriceRow label="Дашборд" price="20 - 60К &#8381;" />
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/10 border border-purple-500/20 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Калькулятор</h3>
            <div className="space-y-2 text-base">
              <div className="flex justify-between text-gray-300">
                <span>1 проект/нед</span>
                <span className="text-white font-semibold">60К/мес</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>2 проекта/нед</span>
                <span className="text-purple-300 font-semibold">120К/мес</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>3 проекта/нед</span>
                <span className="text-cyan-300 font-semibold">180К/мес</span>
              </div>
            </div>
          </div>
          <NumberCard number="2 000 - 5 000 &#8381;" label="почасовая ставка" accent />
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide11() {
  return (
    <SlideContainer>
      <AccentBadge>ЭТАП 1</AccentBadge>
      <SlideTitle>
        <span className="mt-4 block">
          САЙТЫ И БОТЫ: <GradientText>РЕЗУЛЬТАТ</GradientText>
        </span>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        <NumberCard number="180 000 &#8381;" label="заработано за 2 мес" accent />
        <NumberCard number="12" label="проектов" />
        <NumberCard number="15 000 &#8381;" label="средний чек" />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-xl sm:text-2xl text-gray-400 text-center"
      >
        Хорошие деньги. Но это только <GradientText className="font-semibold">первый уровень</GradientText>.
      </motion.p>
    </SlideContainer>
  );
}

function Slide12() {
  return (
    <SlideContainer>
      <AccentBadge>ЭТАП 2</AccentBadge>
      <SlideTitle>
        <span className="mt-4 block">
          ПОЧЕМУ ПЕРЕШЕЛ К <GradientText>АВТОМАТИЗАЦИЯМ</GradientText>
        </span>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
          <Code2 className="w-8 h-8 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-400 mb-2">Сайт</h3>
          <p className="text-gray-500">Разовый платеж</p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/10 border border-purple-500/20 p-6 text-center">
          <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Автоматизация</h3>
          <p className="text-purple-300">Постоянный клиент</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <NumberCard number="x3 - x5" label="рост среднего чека" accent />
      </motion.div>
    </SlideContainer>
  );
}

function Slide13() {
  return (
    <SlideContainer>
      <SlideTitle>
        АВТОМАТИЗАЦИЯ <GradientText>ПРОСТЫМИ СЛОВАМИ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between mb-8">
          {[
            { icon: Users, label: "Клиент пишет" },
            { icon: Bot, label: "Бот обрабатывает" },
            { icon: MessageSquare, label: "Менеджер получает" },
            { icon: CheckCircle2, label: "Никто не забыт" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-2">
                  <step.icon className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 text-center max-w-[80px]">{step.label}</span>
              </div>
              {i < 3 && (
                <ArrowRight className="w-4 h-4 text-gray-600 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-5 text-center">
          <p className="text-lg text-cyan-300">
            Звучит сложно. Делается за вечер.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide14() {
  return (
    <SlideContainer>
      <SlideTitle>
        КОНКРЕТНЫЙ <GradientText>КЕЙС</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-sm text-gray-500">Тип бизнеса</span>
            <p className="text-lg text-white font-medium">Стоматологическая клиника</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Проблема</span>
            <p className="text-lg text-white font-medium">Теряет 30% записей</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Решение</span>
            <p className="text-lg text-white font-medium">Телеграм-бот + напоминания</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Чек</span>
            <p className="text-lg text-purple-300 font-bold">45 000 &#8381;</p>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
          <p className="text-gray-300">
            Перестали терять записи, нагрузка на администратора вдвое ниже.
            Клиент привел еще двоих.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide15() {
  return (
    <SlideContainer>
      <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-red-500/20 text-red-300 border border-red-500/30 mb-4">
        САМЫЙ ВАЖНЫЙ СЛАЙД
      </div>
      <SlideTitle>
        ГЛАВНЫЙ НАВЫК: <GradientText>ПОНИМАНИЕ БИЗНЕСА</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full mb-6">
        <p className="text-lg sm:text-xl text-center text-gray-400 mb-8">
          Ценность = НЕ код. Ценность = <strong className="text-white">понимание: что нужно бизнесу</strong>.
        </p>
        <div className="space-y-5">
          <BulletPoint icon={Target} delay={0}>
            <strong className="text-white">Что у них болит?</strong> Где теряют клиентов, деньги, время?
          </BulletPoint>
          <BulletPoint icon={Lightbulb} delay={1}>
            <strong className="text-white">Что делают руками?</strong> Что можно автоматизировать?
          </BulletPoint>
          <BulletPoint icon={DollarSign} delay={2}>
            <strong className="text-white">Сколько теряют</strong> на этой проблеме в месяц?
          </BulletPoint>
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide16() {
  return (
    <SlideContainer>
      <AccentBadge>ЭТАП 2: РЕЗУЛЬТАТ</AccentBadge>
      <SlideTitle>
        <span className="mt-4 block">
          АВТОМАТИЗАЦИИ И CRM
        </span>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <NumberCard number="320 000 &#8381;" label="доход в месяц" accent />
        <NumberCard number="45 000 &#8381;" label="средний чек (выше x3)" />
      </div>
      <div className="max-w-2xl w-full space-y-4">
        <BulletPoint icon={Users} delay={0}>
          Клиенты возвращаются
        </BulletPoint>
        <BulletPoint icon={ArrowRight} delay={1}>
          Сайты отдаю ребятам - не успеваю сам
        </BulletPoint>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-xl text-gray-400 text-center"
      >
        Но был третий этап - и он <GradientText className="font-semibold">поменял все</GradientText>.
      </motion.p>
    </SlideContainer>
  );
}

function Slide17() {
  return (
    <SlideContainer>
      <AccentBadge>ЭТАП 3</AccentBadge>
      <SlideTitle>
        <span className="mt-4 block">
          <GradientText>СТАРТАП</GradientText>: ОТ БОЛИ КЛИЕНТОВ К СВОЕМУ ПРОДУКТУ
        </span>
      </SlideTitle>
      <div className="max-w-3xl w-full space-y-5 mb-8">
        <BulletPoint icon={Brain} delay={0}>
          Одну проблему решал 5 раз &#8594; сделал продукт
        </BulletPoint>
        <BulletPoint icon={Rocket} delay={1}>
          Без команды. Без инвестиций. Без кода.
        </BulletPoint>
        <BulletPoint icon={Target} delay={2}>
          Работающий продукт, за который бизнес платит каждый день
        </BulletPoint>
      </div>
      <div className="max-w-xl w-full grid grid-cols-3 gap-3">
        <NumberCard number="1" label="человек" />
        <NumberCard number="0" label="строчек кода" />
        <NumberCard number="2 нед" label="до MVP" accent />
      </div>
    </SlideContainer>
  );
}

function Slide18() {
  return (
    <SlideContainer>
      <SlideTitle>
        <GradientText>ОКНО ВОЗМОЖНОСТЕЙ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full">
        <div className="rounded-2xl bg-gradient-to-r from-purple-900/40 via-pink-900/20 to-cyan-900/30 border border-purple-500/20 p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">2025-2027: окно. Потом - поздно.</h3>
          </div>
          <div className="space-y-3 text-base sm:text-lg text-gray-300">
            <p>Сейчас: вайб-кодеров <strong className="text-white">единицы</strong>. Конкуренции нет.</p>
            <p>Через 2-3 года: будет уметь <strong className="text-red-300">каждый третий</strong>.</p>
          </div>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
          <p className="text-lg text-gray-300">
            Это как интернет-магазины в 2010-м.
            <br />
            <span className="text-gray-500">Кто зашел тогда - владеет бизнесами. Кто ждал - покупает на Wildberries.</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide19() {
  return (
    <SlideContainer>
      <SlideTitle>
        ЗА ЧТО БИЗНЕС ГОТОВ <GradientText>ПЛАТИТЬ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full space-y-4 mb-6">
        {[
          { biz: "Клиника", loss: "150 000 &#8381;/мес", problem: "теряет 30% записей" },
          { biz: "Отдел продаж", loss: "20-40% заявок", problem: "без CRM - в никуда" },
          { biz: "Ресторан", loss: "50-100К/мес", problem: "потерянные заказы" },
        ].map((item, i) => (
          <motion.div
            key={item.biz}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-red-400" />
            </div>
            <div className="flex-1">
              <span className="text-white font-medium">{item.biz}</span>
              <span className="text-gray-500"> - {item.problem}</span>
            </div>
            <span className="text-red-300 font-semibold text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: item.loss }} />
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-5 max-w-xl text-center">
        <p className="text-green-300 text-lg">
          Ваше решение за 30-80К &#8594; бизнес экономит 100-200К/мес
        </p>
      </div>
    </SlideContainer>
  );
}

function Slide20() {
  return (
    <SlideContainer>
      <SlideTitle>
        КАК ВЫГЛЯДИТ <GradientText>МИЛЛИОН</GradientText> СТРУКТУРНО
      </SlideTitle>
      <div className="max-w-3xl w-full space-y-4 mb-8">
        {[
          { name: "Сайты и боты", amount: "150 000 &#8381;", pct: 15, color: "bg-cyan-500" },
          { name: "Автоматизации и CRM", amount: "450 000 &#8381;", pct: 45, color: "bg-purple-500" },
          { name: "Стартап", amount: "400 000 &#8381;", pct: 40, color: "bg-pink-500" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-base sm:text-lg">{item.name}</span>
              <span className="text-white font-semibold text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: item.amount }} />
            </div>
            <div className="w-full h-3 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <NumberCard number="1 000 000 &#8381;/мес" label="ИТОГО" accent />
    </SlideContainer>
  );
}

function Slide21() {
  return (
    <SlideContainer>
      <SlideTitle>
        ФОРМУЛА ПОВТОРЕНИЯ: <GradientText>ВАШ ПУТЬ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full space-y-4">
        {[
          { month: "Месяц 1", text: "Инструменты, первый проект", icon: Code2 },
          { month: "Месяц 2", text: "Первый клиент, первые деньги", icon: DollarSign },
          { month: "Месяц 3", text: "3-5 клиентов, 50-80К стабильно", icon: TrendingUp },
          { month: "Месяц 4-6", text: "Автоматизации, чеки x3", icon: Zap },
          { month: "Месяц 6+", text: "Свой продукт / масштабирование", icon: Rocket },
        ].map((step, i) => (
          <motion.div
            key={step.month}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <step.icon className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <span className="text-purple-300 font-semibold text-sm">{step.month}</span>
              <p className="text-white text-base sm:text-lg">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideContainer>
  );
}

function Slide22() {
  return (
    <SlideContainer>
      <SlideTitle>РЕЗЮМЕ</SlideTitle>
      <div className="max-w-xl w-full grid grid-cols-3 gap-4 mb-8">
        <NumberCard number="3" label="этапа" />
        <NumberCard number="1" label="навык" accent />
        <NumberCard number="0" label="строчек кода" />
      </div>
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl text-gray-300 mb-8 flex-wrap"
        >
          <span>Сайты</span>
          <ArrowRight className="w-5 h-5 text-purple-400" />
          <span>Автоматизации</span>
          <ArrowRight className="w-5 h-5 text-purple-400" />
          <span>Свой продукт</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl sm:text-3xl text-white font-bold"
        >
          Все можно повторить. Но...
        </motion.p>
      </div>
    </SlideContainer>
  );
}

function Slide23() {
  return (
    <SlideContainer>
      <SlideTitle>
        <GradientText>ОТЗЫВЫ И КЕЙСЫ</GradientText>
      </SlideTitle>
      <SlideSubtitle>Вот что пишут ребята, которые уже начали</SlideSubtitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { text: "Я реально за вечер сделал сайт. Не верю.", from: "Алексей, 28 лет" },
          { text: "Показал знакомому - он готов заплатить 15 тысяч.", from: "Марина, 32 года" },
          { text: "Мне 35, я бухгалтер, думал это для молодых. Нет.", from: "Дмитрий, 35 лет" },
          { text: "Первый раз в жизни заработал на чем-то кроме зарплаты.", from: "Анна, 27 лет" },
        ].map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="rounded-xl bg-white/5 border border-white/10 p-5"
          >
            <Star className="w-4 h-4 text-yellow-400 mb-3" />
            <p className="text-gray-200 text-base mb-3">"{review.text}"</p>
            <p className="text-sm text-gray-500">{review.from}</p>
          </motion.div>
        ))}
      </div>
    </SlideContainer>
  );
}

function Slide24() {
  return (
    <SlideContainer>
      <SlideTitle>
        НО ЕСТЬ <span className="text-red-400">НЮАНС</span>
      </SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-6">
          <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
          <h3 className="text-xl font-bold text-red-300 mb-3">Один &#8594; застрял</h3>
          <div className="space-y-2 text-gray-400 text-base">
            <p>Первая ошибка - бросаешь</p>
            <p>Нет обратной связи</p>
            <p>Мотивация кончается за 2 дня</p>
          </div>
        </div>
        <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-6">
          <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-green-300 mb-3">С поддержкой &#8594; дошли</h3>
          <div className="space-y-2 text-gray-400 text-base">
            <p>Обратная связь мгновенно</p>
            <p>Группа тянет вперед</p>
            <p>Наставник уже прошел этот путь</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide25() {
  return (
    <SlideContainer>
      <SlideTitle>
        <GradientText>СРЕДА {'>'} МОТИВАЦИЯ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
            <Heart className="w-8 h-8 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Тренировка дома</h3>
            <p className="text-gray-500">Диван побеждает</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/10 border border-purple-500/20 p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Спортзал</h3>
            <p className="text-purple-300">Вокруг люди - и ты тоже</p>
          </div>
        </div>
        <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 p-5 text-center">
          <p className="text-lg text-gray-300">
            Когда видишь, как парень рядом уже получил первого клиента - ты <strong className="text-white">не можешь остановиться</strong>.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}

function Slide26() {
  return (
    <SlideContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-3xl"
      >
        <AccentBadge>СТАРТ: 1 МАРТА</AccentBadge>
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          <GradientText>МАСТЕР-ГРУППА</GradientText>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-400">
          14 дней. Живая работа. Результат.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Живые эфиры", "Личная работа", "Результат"].map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-base font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </SlideContainer>
  );
}

function Slide27() {
  return (
    <SlideContainer>
      <SlideTitle>
        ЧТО ВНУТРИ <GradientText>МАСТЕР-ГРУППЫ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full space-y-4">
        {[
          { icon: Calendar, text: "Живые эфиры каждый день - 14 дней" },
          { icon: MessageSquare, text: "Личная обратная связь на каждый проект" },
          { icon: Users, text: "Закрытый чат 24/7" },
          { icon: Code2, text: "Все промпты, шаблоны, скрипты продаж" },
          { icon: Gift, text: "Доступ к Lovable (за мой счет)" },
          { icon: Target, text: "Помощь с поиском первого клиента" },
          { icon: Award, text: "Результат: продукт + навык + первый клиент" },
        ].map((item, i) => (
          <BulletPoint key={i} icon={item.icon} delay={i}>
            {item.text}
          </BulletPoint>
        ))}
      </div>
    </SlideContainer>
  );
}

function Slide28() {
  return (
    <SlideContainer>
      <SlideTitle>
        СТЕК <GradientText>ЦЕННОСТИ</GradientText>
      </SlideTitle>
      <div className="max-w-3xl w-full">
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 sm:p-6 mb-6">
          <PriceRow label="14 дней живых эфиров" price="70 000 &#8381;" />
          <PriceRow label="Промпты и шаблоны" price="5 000 &#8381;" />
          <PriceRow label="Скрипты продаж клиентам" price="10 000 &#8381;" />
          <PriceRow label="Доступ к Lovable" price="2 000 &#8381;/мес" />
          <PriceRow label="Помощь с первым клиентом" price="бесценно" />
          <PriceRow label="Закрытый чат и окружение" price="бесценно" />
          <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/20">
            <span className="text-lg font-semibold text-white">Общая ценность</span>
            <span className="text-lg font-bold text-gray-400 line-through">87 000+ &#8381;</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-600/20 border border-purple-500/30 p-6 sm:p-8 text-center"
        >
          <p className="text-gray-400 text-lg mb-2">Ваша цена</p>
          <p className="text-4xl sm:text-5xl font-extrabold text-white">29 990 &#8381;</p>
          <p className="text-gray-400 mt-3">
            Рассрочка ~ 5 000 &#8381;/мес
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  );
}

function Slide29() {
  return (
    <SlideContainer>
      <SlideTitle>УСЛОВИЯ</SlideTitle>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
          <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <p className="text-white font-semibold text-lg">Старт: 1 марта</p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
          <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <p className="text-white font-semibold text-lg">Мест ограничено</p>
          <p className="text-gray-500 text-sm">Работаю лично с каждым</p>
        </div>
      </div>
      <div className="max-w-2xl w-full space-y-5">
        <BulletPoint icon={Shield} delay={0}>
          Не даю пустых гарантий. Даю свое время, инструменты и опыт. Каждый день. 14 дней подряд.
        </BulletPoint>
        <BulletPoint icon={TrendingUp} delay={1}>
          Следующий набор - не скоро и дороже
        </BulletPoint>
        <BulletPoint icon={DollarSign} delay={2}>
          Есть рассрочка
        </BulletPoint>
      </div>
    </SlideContainer>
  );
}

function Slide30() {
  return (
    <SlideContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          ЗАПИСАТЬСЯ В{" "}
          <GradientText>МАСТЕР-ГРУППУ</GradientText>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-600/20 border border-purple-500/30 p-6 sm:p-8 mb-8"
        >
          <p className="text-4xl sm:text-5xl font-extrabold text-white mb-4">29 990 &#8381;</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Старт 1 марта
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Мест мало
            </span>
          </div>
          <p className="text-gray-500 mt-3">Есть рассрочка</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Помните, в начале вы писали "1"? Один источник дохода.
          <br />
          <strong className="text-white">У вас есть шанс это изменить. Прямо сейчас.</strong>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-gray-500"
        >
          Увидимся 1 марта.
        </motion.p>
      </motion.div>
    </SlideContainer>
  );
}

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5,
  Slide6, Slide7, Slide8, Slide9, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19, Slide20,
  Slide21, Slide22, Slide23, Slide24, Slide25,
  Slide26, Slide27, Slide28, Slide29, Slide30,
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  const CurrentSlide = slides[current];
  const progress = ((current + 1) / slides.length) * 100;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div
      className="fixed inset-0 bg-background overflow-hidden select-none"
      data-testid="presentation-container"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-600/5 blur-3xl" />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 transition-colors duration-200 disabled:opacity-20 z-40"
        data-testid="button-prev"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        disabled={current === slides.length - 1}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 transition-colors duration-200 disabled:opacity-20 z-40"
        data-testid="button-next"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
        <span className="text-sm text-gray-500 font-mono" data-testid="text-slide-counter">
          {current + 1} / {slides.length}
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-40 hidden sm:flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-purple-400 w-5" : "bg-white/15"}`}
            data-testid={`dot-slide-${i}`}
          />
        ))}
      </div>
    </div>
  );
}
