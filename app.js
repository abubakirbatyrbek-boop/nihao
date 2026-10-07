// Нихао — Chinese for Kazakh and Russian speakers. One script for every page (body[data-page]).
(function () {
'use strict';

/* ---------- interface language ---------- */
const T = {
  kk: {
    brandSub:'Қытай тілі · қазақша және орысша', navCourses:'Курстар', navMe:'Менің оқуым', navFeedback:'Кері байланыс', navAbout:'Біз туралы',
    login:'Кіру / Тіркелу', logout:'Шығу', footer:'Күн сайын аздап — қытайша сөйлеуге бір қадам жақын.',
    heroEyebrow:'Қазақ және орыс тілінде сөйлейтіндерге арналған', heroTitle:'Қытай тілін нөлден бастаңыз', heroText:'Пиньинь мен тондардан бастап, күнделікті сөйлесуге, иероглифтерге және жұмыс жағдаяттарына дейін. Әр сөйлемнің дыбысы мен жаттығуы бар. Тегін.',
    heroBy:'Қазақстанда тұратын аудармашы жасаған', heroCourses:'Курстарды көру', hcTr:'Сәлем!', hcTones:'Төрт тон — төрт мағына', hcTap:'Басып тыңдаңыз', about:'Біз туралы',
    todayTitle:'Бүгінгі оқу', lastAt:'Соңғы сабақ', notStarted:'Әлі бастамадыңыз', startFirst:'Бірінші сабақтан бастаңыз', continue:'Жалғастыру', chooseCourse:'Курс таңдау',
    goals:'Бүгінгі мақсат', goalLesson:'1 сабақ өту', goalLessonNote:'Сабақтың жаттығуын бітірсеңіз болды', goalReview:'Қателерді қайталау', noDue:'Бүгін қайталайтын ештеңе жоқ', dueN:n=>n+' сөз қайталауды күтіп тұр',
    streak:n=>'🔥 '+n+' күн қатарынан', streak0:'Бүгін бір сабақ өтіп, сериясын бастаңыз', allDone:'Бүгінгі мақсат орындалды 🎉', go:'Бастау', review:'Қайталау',
    signupHint:'Прогресті сақтау үшін <a href="auth.html?mode=signup">тегін тіркеліңіз</a> — телефон мен компьютерде жалғастыра аласыз.',
    routeTitle:'Оқу жолы', routeText:'Ретімен оқыңыз: алдымен дыбыстар, содан кейін сөйлесу мен иероглифтер.',
    lessons:'сабақ', modules:'модуль', start:'Бастау', open:'Ашу', done:'Аяқталды',
    module:'Модуль', unlocked:'Ашық', locked:'Жабық', passed:'Тест өтті', lockedText:'Алдыңғы модуль тестінен 70% жинағанда ашылады.',
    takeTest:'Модуль тесті (≥70%)', retakeTest:'Тестті қайта тапсыру', leftN:n=>'Тестке дейін тағы '+n+' сабақ қалды.',
    courseRule:'Әр модульдің сабақтарын өтіп, тесттен 70% жинасаңыз, келесі модуль ашылады. Тіркелмей-ақ оқуға болады.', courseOpenRule:'Барлық жағдаяттар ашық — керегін таңдаңыз. Жағдаятты бітірген соң тест тапсыруға болады.',
    back:'← Курсқа', prev:'Алдыңғы', next:'Келесі', nextTest:'Модуль тестіне өту', backCourse:'Курсқа қайту',
    normal:'▶ Тыңдау', slow:'▶ Баяу', record:'● Жазу', stopRec:'■ Тоқтату', reRecord:'● Қайта жазу', recHelp:'Жазба тек осы бетте сақталады, ешқайда жіберілмейді.',
    recDone:'Жазылды — тыңдап, салыстырыңыз.', recNo:'Микрофонға рұқсат берілмеді. Дауыстап қайталасаңыз да болады.', recUnsupported:'Бұл браузер дыбыс жазуды қолдамайды.',
    playAll:'▶ Барлығы', strokes:'Жазылу реті', tryWrite:'Өзің жазып көр', writeDone:'Жарайсың! Дұрыс жаздыңыз.', words:'Мысал сөздер',
    practice:'Жаттығу', practiceDone:'✓ Жаттығу орындалды', practiceDoneText:'Келесі сабаққа өтуге болады.', correct:'Дұрыс!', answerIs:a=>'Дұрыс жауабы: '+a, wrongAns:a=>'Дұрыс жауабы: '+a+'. Қайталау тізіміне қосылды — тағы көріңіз.',
    qMeaning:'Мағынасын таңдаңыз', qHowSay:'Қытайша қалай болады?', qHear:'Тыңдап, естігеніңізді таңдаңыз', qWhichChar:'Қай иероглиф?', play:'🔊 Тыңдау', finishFirst:'Алдымен жаттығуды орындаңыз',
    testTitle:(n,t)=>n+'-модуль: '+t+' — тест', qOf:(i,n)=>i+' / '+n+' сұрақ · өту шегі 70%', nextQ:'Келесі сұрақ', submit:'Нәтижені көру',
    testPassed:'Тест өтті!', testFailed:'Әзірге өтпеді', scoreLine:(c,n,p)=>n+' сұрақтың '+c+' дұрыс · '+p+'%', nextUnlocked:'Келесі модуль ашылды.', allModules:'Барлық модуль аяқталды!', tryAgainText:'70%-ға жетпеді. Сабақтарды қайталап, тағы тапсырыңыз. Бұрынғы ең жақсы нәтиже сақталады.', retry:'Қайта тапсыру',
    testNeedLessons:'Алдымен осы модульдің барлық сабағын өтіңіз.',
    meTitle:'Менің оқуым', stStreak:'Қатарынан күн', stDays:'Барлық күн', stLessons:'Өткен сабақ', stDue:'Қайталау',
    account:'Аккаунт', guestText:'Сіз кірмегенсіз: прогресс тек осы құрылғыда сақталады.', guestHint:'Тегін тіркелсеңіз, кез келген құрылғыда жалғастыра аласыз.', signup:'Тіркелу', signin:'Кіру', synced:'Прогресс осы аккаунтқа сақталады.',
    reviewTitle:'Қайталау', reviewEmpty:'Қазір қайталайтын сөз жоқ. Жаттығуда қате жіберсеңіз, сөз осында түседі.', reviewN:n=>'Қайталауды күтіп тұрған сөз: '+n, showAnswer:'Жауабын көру', again:'✗ Есімде жоқ', known:'✓ Есімде', sayFirst:'Алдымен өзіңіз айтып көріңіз',
    authTitle:'Кіру', authSignup:'Тіркелу', email:'Email', password:'Құпиясөз', newPassword:'Жаңа құпиясөз (кемінде 6 таңба)', name:'Атыңыз (міндетті емес)', doLogin:'Кіру', doSignup:'Тіркелу',
    forgot:'Құпиясөзді ұмыттыңыз ба?', sendReset:'Қалпына келтіру сілтемесін жіберу', setPassword:'Құпиясөзді сақтау', haveAccount:'Аккаунтыңыз бар ма? Кіру', noAccount:'Аккаунтыңыз жоқ па? Тіркелу',
    signupOk:'Тіркелдіңіз! Поштаңызға келген сілтеме арқылы растап, кейін кіріңіз.', loginOk:'Кірдіңіз, сайтқа қайтып жатырмыз…', resetSent:'Поштаңызға сілтеме жіберілді.', resetOk:'Жаңа құпиясөз сақталды.', alreadyIn:'Сіз кіріп тұрсыз:',
    authErr:'Қате шықты. Email мен құпиясөзді тексеріп, қайта көріңіз.', authBadLogin:'Email немесе құпиясөз қате.', authUnconfirmed:'Email әлі расталмаған — поштаңызды тексеріңіз.', authNet:'Интернет байланысын тексеріңіз.',
    fbTitle:'Кері байланыс', fbText:'Қате таптыңыз ба, әлде қандай сабақ қажет? Жазыңыз — әр хатты оқимын.', fbType:'Тақырып түрі', fbSubject:'Тақырып', fbMessage:'Хабарлама', fbEmail:'Email (жауап алу үшін, міндетті емес)', fbRating:'Сайтқа баға', fbSend:'Жіберу', fbSending:'Жіберілуде…',
    fbOk:'Рақмет! Хабарламаңыз жіберілді.', fbShort:'Кемінде 5 таңба жазыңыз.', fbBadEmail:'Email дұрыс емес.', fbFail:'Жіберілмеді. Кейінірек қайталап көріңіз.',
    fbCats:[['课程建议','Курс туралы ұсыныс'],['内容纠错','Қате табылды'],['网站问题','Сайт жұмысы'],['账号问题','Аккаунт'],['其他','Басқа']],
    aboutTitle:'Неге бұл сайтты жасадым',
    aboutText:['Мен 2013 жылы Қытайдан Қазақстанға көшіп келдім. Қазір аудармашымын, күн сайын қытай, қазақ және орыс тілдерінде жұмыс істеймін.','Қазақстанда қытай компанияларында жұмыс істейтіндер, Қытайда оқығысы келетіндер көп. Бірақ қазақ және орыс тілінде қытай тілін нөлден үйрететін тегін, қарапайым материал аз. Сондықтан осы сайтты жасадым.','Сайт тегін. Пиньинь мен тондардан бастап, күнделікті сөйлесуге, иероглифтерге және жұмыс жағдаяттарына дейін — әр сөйлемнің дыбысы мен жаттығуы бар.','Қате тапсаңыз немесе қандай сабақ керек екенін айтқыңыз келсе, <a href="feedback.html">кері байланыс</a> бетінде жазыңыз.'],
    loading:'Жүктелуде…', notFound:'Сабақ табылмады.', tabWords:'Сөздер', tabGram:'Грамматика', vCards:'Карточкалар', vQuiz:'Тексеру: барлық сөз', vShow:'Мағынасын көру', vYes:'✓ Білемін', vNo:'✗ Білмеймін', vListen:'Тыңдау', vWrite:'Жазып үйреніңіз', vTrace:'1. Үлгі бойынша жазыңыз', vRecall:'2. Енді жатқа жазыңыз', vWriteDone:'Жарайсыз! Енді сөзді білесіз бе?', vWriteSkip:'Жазу құралы жүктелмеді — бұл қадам өткізілді.',vHint1:'Иероглифке қарап, дыбысын тыңдап, мағынасын еске түсіріңіз.', vHint2:'Білсеңіз — «Білемін». Білмесеңіз, карточка тағы шығады және 10 минуттан кейін қайталауға түседі.', vDone:n=>n+' сөздің бәрі тексерілді!', vDoneWrong:n=>n+' қате болды — ол сөздер қайталау тізімінде.', vDonePerfect:'Бірде-бір қате жоқ!', vAgain:'Карточкаларды қайталау', mockShort:'40 сұрақ · 60% өту шегі', grammar:'Грамматика', qSentence:'Сөйлемнің мағынасын таңдаңыз', qHearSentence:'Тыңдап, сөйлемнің мағынасын таңдаңыз', qFill:'Бос орынға сәйкес сөзді таңдаңыз', qOrder:'Сөздерді дұрыс ретпен басыңыз', check:'Тексеру', hskTitle:'HSK-ға дайындық', hskText:'HSK 3.0 — Қытайдың ресми тіл емтиханы (1–9 деңгей). Жаңа нұсқа 2026 жылғы 13 желтоқсаннан бастап өтеді. Сабақтар 2025 жылғы ресми бағдарлама бойынша.', hskWords:n=>n+' сөз', hskLearn:'Сөздерді оқу', hskMock:'Сынақ тест', hskSoon:'Келесі деңгейлер дайындалуда. Алдымен 1–2-деңгейді меңгеріңіз.', mockBest:p=>'тест: '+p+'%', mockInfo:l=>'HSK '+l+' сөздері мен грамматикасы бойынша 40 сұрақ: 20 тыңдау, 20 оқу (сөздер, сөйлемдер, бос орын). Өту шегі — 60%.', mockStart:'Тестті бастау', mockTitle:l=>'HSK '+l+' сынақ тесті', secListen:'Тыңдау', secRead:'Оқу', qHearChar:'Тыңдап, иероглифті таңдаңыз', qPinyin:'Пиньиньге сай иероглифті таңдаңыз', mockNote:'Бұл ресми емтихан емес, бірақ формасы HSK-ға ұқсас: тыңдау және оқу. Қате жауаптар қайталау тізіміне түседі.', mockPassed:'Өту шегінен асты!', mockFailed:'Әзірге 60%-ға жетпеді', mockAfter:'Қате сөздер «Қайталау» бөліміне қосылды. Оларды қайталап, тестті қайта тапсырыңыз.', pyOn:'Пиньинь: көрсету', pyOff:'Пиньинь: жасыру', syll:n=>'Кеңес: '+n+' буын'
  },
  ru: {
    brandSub:'Китайский · на казахском и русском', navCourses:'Курсы', navMe:'Моё обучение', navFeedback:'Обратная связь', navAbout:'О проекте',
    login:'Вход / Регистрация', logout:'Выйти', footer:'Понемногу каждый день — и вы заговорите по-китайски.',
    heroEyebrow:'Для тех, кто говорит по-казахски и по-русски', heroTitle:'Китайский язык с нуля', heroText:'От пиньиня и тонов до разговорных фраз, иероглифов и рабочих ситуаций. У каждой фразы есть озвучка и упражнения. Бесплатно.',
    heroBy:'Сделано переводчиком, живущим в Казахстане', heroCourses:'Смотреть курсы', hcTr:'Привет!', hcTones:'Четыре тона — четыре смысла', hcTap:'Нажмите, чтобы послушать', about:'О проекте',
    todayTitle:'Учёба сегодня', lastAt:'Последний урок', notStarted:'Вы ещё не начали', startFirst:'Начните с первого урока', continue:'Продолжить', chooseCourse:'Выбрать курс',
    goals:'Цели на сегодня', goalLesson:'Пройти 1 урок', goalLessonNote:'Достаточно выполнить упражнение урока', goalReview:'Повторить ошибки', noDue:'Сегодня повторять нечего', dueN:n=>n+' слов ждут повторения',
    streak:n=>'🔥 '+n+' дн. подряд', streak0:'Пройдите урок сегодня, чтобы начать серию', allDone:'Цели на сегодня выполнены 🎉', go:'Начать', review:'Повторить',
    signupHint:'Чтобы не потерять прогресс, <a href="auth.html?mode=signup">зарегистрируйтесь бесплатно</a> — продолжите на телефоне и компьютере.',
    routeTitle:'Путь обучения', routeText:'Учитесь по порядку: сначала звуки, потом разговор и иероглифы.',
    lessons:'уроков', modules:'модулей', start:'Начать', open:'Открыть', done:'Пройдено',
    module:'Модуль', unlocked:'Открыт', locked:'Закрыт', passed:'Тест сдан', lockedText:'Откроется, когда вы наберёте 70% в тесте предыдущего модуля.',
    takeTest:'Тест модуля (≥70%)', retakeTest:'Пересдать тест', leftN:n=>'До теста осталось уроков: '+n+'.',
    courseRule:'Пройдите уроки модуля и наберите 70% в тесте — откроется следующий модуль. Учиться можно без регистрации.', courseOpenRule:'Все ситуации открыты — выбирайте нужную. После ситуации можно пройти тест.',
    back:'← К курсу', prev:'Назад', next:'Дальше', nextTest:'К тесту модуля', backCourse:'Вернуться к курсу',
    normal:'▶ Слушать', slow:'▶ Медленно', record:'● Запись', stopRec:'■ Стоп', reRecord:'● Записать снова', recHelp:'Запись остаётся только на этой странице и никуда не отправляется.',
    recDone:'Записано — послушайте и сравните.', recNo:'Нет доступа к микрофону. Можно просто повторять вслух.', recUnsupported:'Этот браузер не поддерживает запись.',
    playAll:'▶ Все', strokes:'Порядок черт', tryWrite:'Напиши сам', writeDone:'Отлично! Написано верно.', words:'Примеры слов',
    practice:'Упражнение', practiceDone:'✓ Упражнение выполнено', practiceDoneText:'Можно переходить к следующему уроку.', correct:'Верно!', answerIs:a=>'Правильный ответ: '+a, wrongAns:a=>'Правильный ответ: '+a+'. Добавлено в повторение — попробуйте ещё раз.',
    qMeaning:'Выберите значение', qHowSay:'Как это по-китайски?', qHear:'Послушайте и выберите, что услышали', qWhichChar:'Какой иероглиф?', play:'🔊 Слушать', finishFirst:'Сначала выполните упражнение',
    testTitle:(n,t)=>'Модуль '+n+': '+t+' — тест', qOf:(i,n)=>'Вопрос '+i+' из '+n+' · проходной балл 70%', nextQ:'Следующий вопрос', submit:'Показать результат',
    testPassed:'Тест сдан!', testFailed:'Пока не сдан', scoreLine:(c,n,p)=>'Верно '+c+' из '+n+' · '+p+'%', nextUnlocked:'Следующий модуль открыт.', allModules:'Все модули пройдены!', tryAgainText:'Не хватило до 70%. Повторите уроки и попробуйте снова. Лучший прошлый результат сохраняется.', retry:'Пересдать',
    testNeedLessons:'Сначала пройдите все уроки этого модуля.',
    meTitle:'Моё обучение', stStreak:'Дней подряд', stDays:'Всего дней', stLessons:'Уроков пройдено', stDue:'На повторение',
    account:'Аккаунт', guestText:'Вы не вошли: прогресс хранится только на этом устройстве.', guestHint:'Зарегистрируйтесь бесплатно, чтобы продолжать на любом устройстве.', signup:'Регистрация', signin:'Вход', synced:'Прогресс сохраняется в этом аккаунте.',
    reviewTitle:'Повторение', reviewEmpty:'Сейчас повторять нечего. Слова, в которых вы ошиблись, появятся здесь.', reviewN:n=>'Ждут повторения: '+n, showAnswer:'Показать ответ', again:'✗ Не помню', known:'✓ Помню', sayFirst:'Сначала скажите сами',
    authTitle:'Вход', authSignup:'Регистрация', email:'Email', password:'Пароль', newPassword:'Новый пароль (не меньше 6 символов)', name:'Имя (необязательно)', doLogin:'Войти', doSignup:'Зарегистрироваться',
    forgot:'Забыли пароль?', sendReset:'Отправить ссылку для сброса', setPassword:'Сохранить пароль', haveAccount:'Уже есть аккаунт? Войти', noAccount:'Нет аккаунта? Регистрация',
    signupOk:'Готово! Подтвердите email по ссылке из письма, затем войдите.', loginOk:'Вы вошли, возвращаемся на сайт…', resetSent:'Ссылка отправлена на вашу почту.', resetOk:'Новый пароль сохранён.', alreadyIn:'Вы уже вошли:',
    authErr:'Ошибка. Проверьте email и пароль и попробуйте снова.', authBadLogin:'Неверный email или пароль.', authUnconfirmed:'Email ещё не подтверждён — проверьте почту.', authNet:'Проверьте подключение к интернету.',
    fbTitle:'Обратная связь', fbText:'Нашли ошибку или нужен урок на какую-то тему? Напишите — я читаю каждое сообщение.', fbType:'Тип обращения', fbSubject:'Тема', fbMessage:'Сообщение', fbEmail:'Email (для ответа, необязательно)', fbRating:'Оценка сайта', fbSend:'Отправить', fbSending:'Отправка…',
    fbOk:'Спасибо! Сообщение отправлено.', fbShort:'Напишите хотя бы 5 символов.', fbBadEmail:'Неверный email.', fbFail:'Не удалось отправить. Попробуйте позже.',
    fbCats:[['课程建议','Предложение по курсу'],['内容纠错','Нашёл ошибку'],['网站问题','Проблема с сайтом'],['账号问题','Аккаунт'],['其他','Другое']],
    aboutTitle:'Зачем я сделал этот сайт',
    aboutText:['В 2013 году я переехал из Китая в Казахстан. Сейчас я переводчик и каждый день работаю с китайским, казахским и русским языками.','В Казахстане много людей работают в китайских компаниях или хотят учиться в Китае. Но бесплатных и понятных материалов, которые учат китайскому с нуля на казахском и русском, мало. Поэтому я сделал этот сайт.','Сайт бесплатный. От пиньиня и тонов до разговорных фраз, иероглифов и рабочих ситуаций — у каждой фразы есть озвучка и упражнения.','Если нашли ошибку или хотите предложить тему урока, напишите на странице <a href="feedback.html">обратной связи</a>.'],
    loading:'Загрузка…', notFound:'Урок не найден.', tabWords:'Слова', tabGram:'Грамматика', vCards:'Карточки', vQuiz:'Проверка: все слова', vShow:'Показать значение', vYes:'✓ Знаю', vNo:'✗ Не знаю', vListen:'Слушать', vWrite:'Пропишите слово', vTrace:'1. Обведите по образцу', vRecall:'2. Теперь напишите по памяти', vWriteDone:'Отлично! Теперь — знаете ли вы это слово?', vWriteSkip:'Не удалось загрузить прописи — шаг пропущен.',vHint1:'Посмотрите на иероглиф, послушайте и вспомните значение.', vHint2:'Знаете — «Знаю». Не знаете — карточка вернётся и попадёт в повторение через 10 минут.', vDone:n=>'Все '+n+' слов проверены!', vDoneWrong:n=>'Ошибок: '+n+' — эти слова в повторении.', vDonePerfect:'Ни одной ошибки!', vAgain:'Повторить карточки', mockShort:'40 вопросов · проходной 60%', grammar:'Грамматика', qSentence:'Выберите значение предложения', qHearSentence:'Послушайте и выберите значение предложения', qFill:'Выберите слово для пропуска', qOrder:'Нажимайте слова в правильном порядке', check:'Проверить', hskTitle:'Подготовка к HSK', hskText:'HSK 3.0 — официальный экзамен по китайскому (уровни 1–9). Новая версия проводится с 13 декабря 2026 года. Уроки — по официальной программе 2025 года.', hskWords:n=>n+' слов', hskLearn:'Учить слова', hskMock:'Пробный тест', hskSoon:'Следующие уровни готовятся. Сначала освойте уровни 1–2.', mockBest:p=>'тест: '+p+'%', mockInfo:l=>'40 вопросов по словам и грамматике HSK '+l+': 20 на аудирование, 20 на чтение (слова, предложения, пропуски). Проходной балл — 60%.', mockStart:'Начать тест', mockTitle:l=>'Пробный тест HSK '+l, secListen:'Аудирование', secRead:'Чтение', qHearChar:'Послушайте и выберите иероглиф', qPinyin:'Выберите иероглиф по пиньиню', mockNote:'Это не официальный экзамен, но формат похож на HSK: аудирование и чтение. Ошибки попадут в повторение.', mockPassed:'Проходной балл набран!', mockFailed:'Пока меньше 60%', mockAfter:'Слова с ошибками добавлены в «Повторение». Повторите их и пройдите тест ещё раз.', pyOn:'Пиньинь: показать', pyOff:'Пиньинь: скрыть', syll:n=>'Подсказка: слогов — '+n
  }
};
const LANG_KEY = 'nihao-ui';
let lang = (() => {
  try { const v = localStorage.getItem(LANG_KEY); if (v === 'kk' || v === 'ru') return v; } catch {}
  return /^ru/i.test(navigator.language || '') ? 'ru' : 'kk';
})();
const t = (k, ...a) => { const v = T[lang][k]; return typeof v === 'function' ? v(...a) : v; };
const L = o => o ? (o[lang] ?? o.kk ?? '') : '';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const qs = n => new URLSearchParams(location.search).get(n);
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
const uniq = a => [...new Set(a)];

/* ---------- courses ---------- */
const NH = window.NH;
const say = (r, extra) => ({ kind:'say', hz:r[0], py:r[1], kk:r[2], ru:r[3], note:r[4], ...extra });
const COURSES = [
  { id:'pinyin', icon:'拼', title:{kk:'Пиньинь және тондар', ru:'Пиньинь и тоны'},
    desc:{kk:'Қытай тілінің дыбыстары, төрт тон және буын оқу. Бәрі осыдан басталады.', ru:'Звуки китайского, четыре тона и чтение слогов. С этого начинается всё.'},
    modules: NH.pinyin.map(m => ({ title:m.title, lessons:m.lessons })) },
  { id:'daily', icon:'说', title:{kk:'Күнделікті сөйлесу', ru:'Разговорный китайский'},
    desc:{kk:'Сәлемдесу, танысу, сандар, уақыт, дүкен, жол сұрау, жұмыс. Әр сөйлем пиньиньмен.', ru:'Приветствие, знакомство, числа, время, покупки, дорога, работа. Каждая фраза с пиньинем.'},
    modules: NH.daily.map(m => ({ title:m.title, lessons:m.lessons.map(l => Array.isArray(l) ? say(l) : l) })) },
  { id:'hanzi', icon:'字', title:{kk:'Негізгі иероглифтер', ru:'Базовые иероглифы'},
    desc:{kk:'Ең жиі кездесетін 46 иероглиф: жазылу реті, оқылуы, мағынасы және мысал сөздер.', ru:'46 самых частых иероглифов: порядок черт, чтение, значение и примеры слов.'},
    modules: NH.hanzi.map(m => ({ title:m.title, lessons:m.chars.map(c => ({ kind:'char', hz:c[0], py:c[1], kk:c[2], ru:c[3], words:c[4] })) })) },
  { id:'scenes', icon:'场', open:true, title:{kk:'Өмір мен жұмыс жағдаяттары', ru:'Ситуации: жизнь и работа'},
    desc:{kk:'Такси, банк, мейрамхана, құжаттар, зауыт, логистика — 16 жағдаят, 99 сөйлем.', ru:'Такси, банк, ресторан, документы, завод, логистика — 16 ситуаций, 99 фраз.'},
    modules: NH.scenes.map(s => ({ title:{kk:NH.sceneTitles[s.id][0], ru:NH.sceneTitles[s.id][1]}, icon:s.icon, lessons:s.items.map(r => say(r)) })) }
];
// HSK 3.0 vocabulary (official word list, levels 1–2): 10 words a lesson, 5 lessons a module. All modules open.
(NH.hsk || []).forEach(h => {
  // Words by topic (NH.hskTopics): one lesson per topic, each word with an example sentence.
  // Item = [hz, py, kk, ru, audio key, example [hz, py, kk, ru]]. "过@2" picks the 2nd row of 过 in the word list.
  const n = h.words.length, byHz = {};
  h.words.forEach(w => (byHz[w[0]] ||= []).push(w));
  const used = new Set(), lessons = ((NH.hskTopics || {})[h.level] || []).map(tp => ({ kind:'vocab', title:{kk:tp.t[0], ru:tp.t[1]},
    items:tp.w.map(e => {
      const [hz, nth] = e[0].split('@'), rows = byHz[hz] || [];
      const row = nth ? rows[+nth - 1] : rows.find(r => !used.has(r)) || rows[0];
      used.add(row);
      return [row[0], row[1], row[2], row[3], row[4] || '', [e[1], e[2], e[3], e[4]]];
    }) }));
  const modules = [];
  for (let i = 0; i < lessons.length; i += 5) {
    modules.push({ title:{kk:`${i + 1}–${Math.min(lessons.length, i + 5)}-тақырыптар`, ru:`Темы ${i + 1}–${Math.min(lessons.length, i + 5)}`}, lessons:lessons.slice(i, i + 5) });
  }
  // Grammar: official HSK 3.0 grammar points of the level, grouped into lessons (pattern, explanation, 3 examples).
  const gram = (NH.hskGrammar || {})[h.level] || [];
  gram.forEach(g => modules.push({ gram:true, title:{kk:g.t[0], ru:g.t[1]},
    lessons:g.lessons.map(x => ({ kind:'gram', title:{kk:x.t[0], ru:x.t[1]}, pat:x.p, note:{kk:x.n[0], ru:x.n[1]}, refs:x.r, ex:x.e })) }));
  const nGram = gram.reduce((k, g) => k + g.lessons.length, 0);
  COURSES.push({ id:'hsk' + h.level, icon:String(h.level), hsk:h.level, open:true,
    title:{kk:`HSK ${h.level}`, ru:`HSK ${h.level}`},
    desc:{kk:`2025 жылғы ресми HSK 3.0 емтихан бағдарламасы бойынша (2026 жылғы 13 желтоқсаннан бастап): ${n} сөз және ${nGram} грамматика сабағы. Соңында сынақ тест.`, ru:`По официальной программе экзамена HSK 3.0 2025 года (экзамены с 13 декабря 2026): ${n} слов и ${nGram} уроков грамматики. В конце — пробный тест.`},
    modules });
});
COURSES.forEach(c => c.modules.forEach((m, mi) => m.lessons.forEach((l, li) => { l.id = `${c.id}-${mi + 1}-${li + 1}`; l.mi = mi; l.li = li; l.course = c; })));
const courseById = id => COURSES.find(c => c.id === id);
const allLessons = c => c.modules.flatMap(m => m.lessons);
const lessonTitle = l => l.kind === 'set' || l.kind === 'gram' || l.kind === 'vocab' ? L(l.title) : l.hz;
// Audio key of a word row [hz, py, kk, ru, key?]: polyphones and variant words have their own clip.
const aKey = x => x[4] || x[0];
const meaning = x => Array.isArray(x) ? (lang === 'kk' ? x[2] : x[3]) : (lang === 'kk' ? x.kk : x.ru);
// Pinyin with each tone-marked vowel coloured by its tone (1 red, 2 orange, 3 green, 4 blue).
const TONE = {};
['āēīōūǖ', 'áéíóúǘ', 'ǎěǐǒǔǚ', 'àèìòùǜ'].forEach((v, i) => [...v].forEach(ch => { TONE[ch] = i + 1; }));
const toneHtml = py => esc(py).replace(/[āēīōūǖáéíóúǘǎěǐǒǔǚàèìòùǜ]/g, ch => '<b class="t' + TONE[ch] + '">' + ch + '</b>');
const glyph = c => '<span class="glyph g-' + c.id + '" aria-hidden="true">' + c.icon + '</span>';

/* ---------- audio: recorded clips (zh.bin + index.json), device voice as fallback ---------- */
const Audio2 = (() => {
  const SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=';
  let index = null, loading = null, player = null, token = 0, listToken = 0, bad = false;
  const cache = new Map();
  const norm = s => String(s ?? '').replace(/\s+/g, ' ').trim();
  const load = () => index ? Promise.resolve(index) : (loading ||= fetch('index.json').then(r => r.ok ? r.json() : {}).catch(() => ({})).then(j => (index = j || {})));
  async function clip(text) {
    const idx = await load(), e = idx.zh?.[text];
    if (!e || bad) return null;
    if (cache.has(text)) return cache.get(text);
    const [start, len] = e, res = await fetch('zh.bin', {headers:{Range:`bytes=${start}-${start + len - 1}`}});
    if (!res.ok) return null;
    const total = res.status === 206 ? Number((res.headers.get('Content-Range') || '').split('/')[1]) : null;
    let buf = await res.arrayBuffer();
    const actual = res.status === 200 ? buf.byteLength : total;
    if (idx._size?.['zh.bin'] && actual && actual !== idx._size['zh.bin']) { bad = true; return null; } // index and bin from different builds
    if (res.status === 200) buf = buf.slice(start, start + len);
    // Recorded clips are WAV (RIFF header), generated ones MP3.
    const riff = new Uint8Array(buf, 0, 4), wav = String.fromCharCode(...riff) === 'RIFF';
    const url = URL.createObjectURL(new Blob([buf], {type:wav ? 'audio/wav' : 'audio/mpeg'}));
    cache.set(text, url); return url;
  }
  function device(text, rate) {
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'zh-CN'; u.rate = 0.85 * rate; speechSynthesis.speak(u); } catch {}
  }
  function play(text, rate = 1) {
    const s = norm(text); if (!s) return Promise.resolve(false);
    const my = ++token; listToken++;
    player ||= new Audio();
    try { player.pause(); player.src = SILENT; player.play().catch(() => {}); } catch {}
    return clip(s).then(url => {
      if (my !== token) return false;
      if (!url) { device(s, rate); return false; }
      player.src = url; player.playbackRate = rate; if ('preservesPitch' in player) player.preservesPitch = true;
      return player.play().then(() => true, () => false);
    }, () => { device(s, rate); return false; });
  }
  const ended = () => new Promise(r => { if (!player || player.paused) return r(); const d = () => { player.removeEventListener('ended', d); player.removeEventListener('pause', d); r(); }; player.addEventListener('ended', d); player.addEventListener('pause', d); });
  async function list(texts, rate = 1) {
    const my = ++listToken;
    for (const s of texts) {
      if (my !== listToken) return;
      const ok = await play(s, rate); listToken = my;
      if (ok) await ended(); else await new Promise(r => setTimeout(r, 1200));
      await new Promise(r => setTimeout(r, 400));
    }
  }
  setTimeout(load, 1200);
  return { play, list };
})();

/* ---------- account (Supabase, shared with the main site) ---------- */
const Auth = (() => {
  const cfg = window.SUPABASE_CONFIG || {};
  let client = null, user = null;
  const ready = (async () => {
    try {
      if (!cfg.url || !window.supabase?.createClient) return;
      client = window.supabase.createClient(cfg.url, cfg.publishableKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}});
      const {data} = await client.auth.getSession(); user = data?.session?.user || null;
      let prev = user?.id || null;
      client.auth.onAuthStateChange((event, session) => {
        const id = session?.user?.id || null; user = session?.user || null;
        if (event === 'PASSWORD_RECOVERY') { window.dispatchEvent(new Event('nh-recovery')); return; }
        if (id !== prev && document.body.dataset.page !== 'auth') setTimeout(() => location.reload(), 0);
        prev = id;
      });
    } catch (e) { console.warn('auth init failed', e); }
  })();
  return { ready, client: () => client, user: () => user };
})();

const SRS_DAYS = [1, 3, 7, 16, 35];
/* ---------- progress: localStorage per user, snapshot synced to the account ---------- */
const Store = (() => {
  const key = () => 'nihao:' + (Auth.user()?.id || 'guest');
  const read = k => { try { return JSON.parse(localStorage.getItem(k) || '{}'); } catch { return {}; } };
  const state = () => read(key());
  let timer = null;
  function save(s) { localStorage.setItem(key(), JSON.stringify(s)); if (Auth.user()) { clearTimeout(timer); timer = setTimeout(push, 2500); } }
  const update = fn => { const s = state(); fn(s); save(s); };
  const NODE = 'nihao-state';
  function push() {
    clearTimeout(timer); timer = null;
    const u = Auth.user(), c = Auth.client(); if (!u || !c) return;
    c.from('test_results').insert({user_id:u.id, node_id:NODE, language:lang, score:0, passed:false, answers:[state()]}).then(() => {}, () => {});
  }
  addEventListener('pagehide', () => { if (timer) push(); });
  function merge(s, r) {
    if (!r) return s;
    s.done = {...(r.done || {}), ...(s.done || {})};
    s.tests ||= {}; for (const [k, v] of Object.entries(r.tests || {})) s.tests[k] = Math.max(s.tests[k] || 0, v);
    s.review ||= {}; for (const [k, v] of Object.entries(r.review || {})) if (!s.review[k] || (v.due || 0) > (s.review[k].due || 0)) s.review[k] = v;
    s.days = uniq([...(s.days || []), ...(r.days || [])]).sort().slice(-400);
    if (r.last && (!s.last || r.last.at > s.last.at)) s.last = r.last;
    if (r.daily && (!s.daily || r.daily.date > s.daily.date)) s.daily = r.daily;
    else if (r.daily && s.daily && r.daily.date === s.daily.date) s.daily.lessons = Math.max(s.daily.lessons || 0, r.daily.lessons || 0);
    return s;
  }
  // Signed in: adopt guest progress made on this device once, then merge the newest account snapshot.
  const pulled = (async () => {
    await Auth.ready;
    const u = Auth.user(), c = Auth.client(); if (!u || !c) return;
    const guest = read('nihao:guest');
    let s = state();
    if (Object.keys(guest).length) { s = merge(s, guest); localStorage.removeItem('nihao:guest'); }
    try {
      const {data} = await c.from('test_results').select('answers').eq('user_id', u.id).eq('node_id', NODE).order('created_at', {ascending:false}).limit(1);
      const remote = data?.[0]?.answers?.[0];
      const before = JSON.stringify(remote || {});
      s = merge(s, remote);
      localStorage.setItem(key(), JSON.stringify(s));
      if (JSON.stringify(s) !== before) push();
    } catch { localStorage.setItem(key(), JSON.stringify(s)); }
  })();
  const dayKey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  function streak(days) { const set = new Set(days || []); let n = 0, d = new Date(); if (!set.has(dayKey(d))) d.setDate(d.getDate() - 1); while (set.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); } return n; }
  return {
    state, update, pulled, dayKey, streak,
    isDone: id => !!state().done?.[id],
    best: (c, mi) => state().tests?.[c.id + ':' + mi] || 0,
    finish(l) { update(s => { const first = !s.done?.[l.id]; (s.done ||= {})[l.id] = 1; const d = dayKey(); if (s.daily?.date !== d) s.daily = {date:d, lessons:0}; if (first) s.daily.lessons++; s.days = uniq([...(s.days || []), d]).sort().slice(-400); }); },
    visit(l) { update(s => { s.last = {c:l.course.id, id:l.id, at:Date.now()}; }); },
    test(c, mi, pct) { update(s => { (s.tests ||= {})[c.id + ':' + mi] = Math.max(s.tests[c.id + ':' + mi] || 0, pct); const d = dayKey(); s.days = uniq([...(s.days || []), d]).sort().slice(-400); }); },
    miss(x) { update(s => { (s.review ||= {})[x.a || x.hz] = {hz:x.hz, py:x.py, kk:x.kk, ru:x.ru, a:x.a, due:Date.now(), n:0}; }); },
    // Spaced repetition (Leitner): "don't know" → again in 10 minutes; each "know" pushes the word further: 1, 3, 7, 16, 35 days.
    reviewed(hz, known) { update(s => { const r = s.review?.[hz]; if (!r) return; r.n = known ? (r.n || 0) + 1 : 0; r.due = Date.now() + (known ? 864e5 * SRS_DAYS[Math.min(r.n, SRS_DAYS.length) - 1] : 6e5); }); },
    // A word card seen in a lesson joins the review deck (or moves in it).
    mark(x, known) { update(s => { const k = x.a || x.hz, r = (s.review ||= {})[k] ||= {hz:x.hz, py:x.py, kk:x.kk, ru:x.ru, a:x.a, n:0};
      r.n = known ? (r.n || 0) + 1 : 0; r.due = Date.now() + (known ? 864e5 * SRS_DAYS[Math.min(r.n, SRS_DAYS.length) - 1] : 6e5); }); },
    deckSize() { return Object.keys(state().review || {}).length; },
    due() { return Object.values(state().review || {}).filter(r => r.due <= Date.now()); }
  };
})();

/* ---------- module locking ---------- */
const PASS = 70;
const moduleOpen = (c, mi) => c.open || mi === 0 || Store.best(c, mi - 1) >= PASS;
const moduleDone = (c, mi) => c.modules[mi].lessons.every(l => Store.isDone(l.id));
const lessonUrl = l => `lesson.html?c=${l.course.id}&l=${l.id}`;
const testUrl = (c, mi) => `test.html?c=${c.id}&m=${mi + 1}`;
// HSK courses have two tabs: words and grammar (part = 'words' | 'gram').
const courseUrl = (c, part) => `course.html?c=${c.id}${part ? '&tab=' + part : ''}`;
const modPart = (c, mi) => c.hsk ? (c.modules[mi]?.gram ? 'gram' : 'words') : '';
function nextStep(c) { // first unfinished lesson in an open module
  for (let mi = 0; mi < c.modules.length; mi++) {
    if (!moduleOpen(c, mi)) break;
    const l = c.modules[mi].lessons.find(x => !Store.isDone(x.id));
    if (l) return lessonUrl(l);
    if (!c.open && Store.best(c, mi) < PASS) return testUrl(c, mi);
  }
  return courseUrl(c);
}
const findLesson = id => { for (const c of COURSES) for (const l of allLessons(c)) if (l.id === id) return l; return null; };

/* ---------- shared page chrome ---------- */
function chrome() {
  document.documentElement.lang = lang === 'kk' ? 'kk' : 'ru';
  document.querySelectorAll('[data-t]').forEach(el => { el.innerHTML = t(el.dataset.t); });
  const section = {me:'me', feedback:'feedback', about:'about'}[document.body.dataset.page] || 'home';
  document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === section) a.setAttribute('aria-current', 'page'); });
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang); b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    b.onclick = () => { if (b.dataset.lang === lang) return; try { localStorage.setItem(LANG_KEY, b.dataset.lang); } catch {} location.reload(); };
  });
  const nav = document.getElementById('authNav');
  Auth.ready.then(() => {
    const u = Auth.user(); if (!nav) return;
    nav.innerHTML = u ? `<button type="button" class="auth-btn" id="logoutBtn" title="${esc(u.email)}">${t('logout')}</button>` : `<a class="auth-btn" href="auth.html">${t('login')}</a>`;
    document.getElementById('logoutBtn')?.addEventListener('click', async () => { try { await Auth.client().auth.signOut(); } catch {} location.reload(); });
  });
}
const app = () => document.getElementById('app');
const pyHidden = () => { try { return localStorage.getItem('nihao-py') === 'off'; } catch { return false; } };
const btn = (label, attrs = '') => `<button type="button" ${attrs}>${label}</button>`;
const pct = (a, b) => Math.round(a / (b || 1) * 100);
const meter = p => `<span class="meter" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></span>`;

/* ---------- home ---------- */
function home() {
  const s = Store.state(), d = s.daily?.date === Store.dayKey() ? s.daily : {lessons:0}, due = Store.due().length, last = s.last && findLesson(s.last.id);
  const goals = [
    {ok:d.lessons >= 1, label:t('goalLesson'), note:t('goalLessonNote'), url:last ? lessonUrl(last) : nextStep(COURSES[0]), b:t('go')},
    {ok:due === 0, label:t('goalReview'), note:due ? t('dueN', due) : t('noDue'), url:'me.html#review', b:t('review')}
  ];
  // Today strip: where to continue · today's goals · streak (+ sign-up hint for guests).
  const startUrl = last ? lessonUrl(last) : nextStep(COURSES[0]);
  const card = `<div class="today-main"><span class="eyebrow">${t('todayTitle')}</span>${last ? `<small>${t('lastAt')}</small><strong>${esc(L(last.course.title))} · ${esc(lessonTitle(last))}</strong><a class="primary-btn" href="${startUrl}">${t('continue')} →</a>`
      : `<small>${t('notStarted')}</small><strong>${t('startFirst')}</strong><a class="primary-btn" href="${startUrl}">${t('start')} →</a>`}</div>
    <div class="today-goals"><h3>${goals.every(g => g.ok) ? t('allDone') : t('goals')}</h3>
    <ul class="goals">${goals.map(g => `<li class="${g.ok ? 'done' : ''}"><span class="mark">${g.ok ? '✓' : ''}</span><span><b>${g.label}</b><small>${esc(g.note)}</small></span><a class="goal-btn" href="${g.url}">${g.b} →</a></li>`).join('')}</ul>
    <p class="streak">${Store.streak(s.days) ? t('streak', Store.streak(s.days)) : t('streak0')}</p></div>${Auth.user() ? '' : `<p class="signup-hint">💾 ${t('signupHint')}</p>`}`;
  document.getElementById('todayCard').innerHTML = card;
  const heroStart = document.getElementById('heroStart'); if (heroStart) { heroStart.href = startUrl; heroStart.textContent = (last ? t('continue') : t('start')) + ' →'; }
  const heroPlay = document.getElementById('heroPlay'); if (heroPlay) heroPlay.onclick = () => Audio2.play('你好！');
  document.querySelectorAll('[data-tone]').forEach(b => b.onclick = () => Audio2.play(b.dataset.tone));
  // HSK section: one card per level, plus the levels still to come.
  const hskList = document.getElementById('hskList');
  if (hskList) hskList.innerHTML = COURSES.filter(c => c.hsk).map(c => {
    const best = Store.state().tests?.[c.id + ':mock'] || 0;
    const part = gram => { const ls = c.modules.filter(m => !!m.gram === gram).flatMap(m => m.lessons), d = ls.filter(l => Store.isDone(l.id)).length; return {d, n:ls.length}; };
    const w = part(false), g = part(true), nWords = c.modules.reduce((n, m) => n + m.lessons.reduce((k, l) => k + (l.items?.length || 0), 0), 0);
    const line = (label, x, url) => `<a class="hsk-part" href="${url}"><span><b>${label}</b><small>${x.d} / ${x.n} ${t('lessons')}</small></span>${meter(pct(x.d, x.n))}<span class="arrow">→</span></a>`;
    return `<article class="course-card hsk-card"><div class="course-top">${glyph(c)}<span class="course-step">${t('hskWords', nWords)} · ${g.n} ${t('tabGram').toLowerCase()}</span></div><h3>${esc(L(c.title))}</h3>
      ${line(t('tabWords'), w, courseUrl(c, 'words'))}${line(t('tabGram'), g, courseUrl(c, 'gram'))}
      <a class="hsk-part mock" href="test.html?c=${c.id}&mock=1"><span><b>${t('hskMock')}</b><small>${best ? t('mockBest', best) : t('mockShort')}</small></span><span class="arrow">→</span></a></article>`;  }).join('') + `<article class="course-card hsk-card soon"><div class="course-top"><span class="glyph g-soon">3+</span></div><h3>HSK 3–9</h3><p>${t('hskSoon')}</p></article>`;
  document.getElementById('courseList').innerHTML = COURSES.filter(c => !c.hsk).map((c, i) => {
    const all = allLessons(c), dn = all.filter(l => Store.isDone(l.id)).length, p = pct(dn, all.length);
    return `<a class="course-card" href="${dn ? nextStep(c) : courseUrl(c)}"><div class="course-top">${glyph(c)}<span class="course-step">${i + 1}</span></div><h3>${esc(L(c.title))}</h3><p>${esc(L(c.desc))}</p><div class="course-foot">${meter(p)}<small>${dn} / ${all.length} ${t('lessons')} · ${c.modules.length} ${t('modules')}</small></div><span class="course-go">${dn ? t('continue') : t('open')} →</span></a>`;
  }).join('');
}

/* ---------- course ---------- */
function course() {
  const c = courseById(qs('c')) || COURSES[0];
  // HSK: show either the word modules or the grammar modules (tab), numbered within the tab.
  const tab = c.hsk ? (qs('tab') === 'gram' ? 'gram' : 'words') : '';
  const shown = c.modules.map((m, mi) => ({m, mi})).filter(x => !c.hsk || !!x.m.gram === (tab === 'gram'));
  const all = shown.flatMap(x => x.m.lessons), dn = all.filter(l => Store.isDone(l.id)).length;
  document.title = L(c.title) + (c.hsk ? ' · ' + t(tab === 'gram' ? 'tabGram' : 'tabWords') : '') + ' | Нихао';
  const current = shown.map(x => x.mi).find(mi => moduleOpen(c, mi) && (!moduleDone(c, mi) || (!c.open && Store.best(c, mi) < PASS)));
  const tabs = c.hsk ? `<div class="tabs" role="tablist">${['words', 'gram'].map(p => `<a role="tab" href="${courseUrl(c, p)}" ${p === tab ? 'aria-selected="true" class="active"' : ''}>${t(p === 'gram' ? 'tabGram' : 'tabWords')}</a>`).join('')}</div>` : '';
  app().innerHTML = `<section class="section"><div class="container narrow">
    <div class="course-head">${glyph(c)}<div><h1>${esc(L(c.title))}</h1><p class="lead">${esc(L(c.desc))}</p></div></div>
    ${tabs}<div class="course-progress">${meter(pct(dn, all.length))}<small>${dn} / ${all.length} ${t('lessons')}</small></div>
    <p class="rule">${t(c.open ? 'courseOpenRule' : 'courseRule')}</p>${c.hsk ? `<div class="hsk-mock-cta"><div><b>${t('hskMock')}</b><small>${t('mockInfo', c.hsk)}</small></div><a class="primary-btn" href="test.html?c=${c.id}&mock=1">${t('mockStart')} →</a></div>` : ''}
    ${shown.map(({m, mi}, k) => {
      const open = moduleOpen(c, mi), d = m.lessons.filter(l => Store.isDone(l.id)).length, best = Store.best(c, mi);
      const status = best >= PASS ? t('passed') + ' · ' + best + '%' : open ? t('unlocked') : t('locked');
      const head = `<summary><div><span class="eyebrow">${t('module')} ${k + 1} · ${status}</span><h3>${m.icon || ''} ${esc(L(m.title))}</h3></div><span>${d} / ${m.lessons.length}</span></summary>`;
      if (!open) return `<details class="module locked">${head}<p class="muted">${t('lockedText')}</p></details>`;
      const rows = m.lessons.map(l => `<a class="lesson-row" href="${lessonUrl(l)}"><span class="num">${Store.isDone(l.id) ? '✓' : l.li + 1}</span><span class="row-main"><strong>${esc(lessonTitle(l))}</strong><small>${esc(l.kind === 'set' || l.kind === 'vocab' ? l.items.map(x => x[0]).join(' · ') : l.kind === 'gram' ? l.pat : l.py + ' — ' + meaning(l))}</small></span><span class="arrow">→</span></a>`).join('');
      const action = d === m.lessons.length ? `<a class="primary-btn" href="${testUrl(c, mi)}">${best ? t('retakeTest') : t('takeTest')}</a>` : `<p class="muted">${t('leftN', m.lessons.length - d)}</p>`;
      return `<details class="module" ${mi === current ? 'open' : ''}>${head}${rows}${action}</details>`;
    }).join('')}</div></section>`;
}

/* ---------- questions (lesson practice and module tests) ---------- */
function pool(c, kind) { return allLessons(c).filter(l => l.kind === kind); }
function questionsFor(l) {
  const c = l.course;
  if (l.kind === 'say') {
    const others = pool(c, 'say').filter(x => x.hz !== l.hz);
    return [
      {prompt:t('qMeaning'), big:l.hz, sub:l.py, play:l.hz, answer:meaning(l), options:shuffle([meaning(l), ...shuffle(uniq(others.map(meaning)).filter(x => x !== meaning(l))).slice(0, 3)]), item:l},
      {prompt:t('qHowSay'), big:meaning(l), answer:l.hz, zhOptions:true, options:shuffle([l.hz, ...shuffle(uniq(others.map(x => x.hz))).slice(0, 3)]), item:l}
    ];
  }
  if (l.kind === 'set') {
    const it = shuffle(l.items)[0], it2 = shuffle(l.items)[0], same = l.items.map(x => x), extra = shuffle(pool(c, 'set').filter(x => x !== l).flatMap(x => x.items));
    const fill = (vals, ans) => shuffle([ans, ...shuffle(uniq(vals).filter(v => v !== ans)).slice(0, 3)]);
    const pick = f => uniq([...same.map(f), ...extra.map(f)]);
    const item = x => ({hz:x[0], py:x[1], kk:x[2], ru:x[3], a:x[4]});
    const q1 = c.id === 'pinyin'
      ? {prompt:t('qHear'), play:aKey(it), answer:it[1], options:fill(same.length >= 4 ? same.map(x => x[1]) : pick(x => x[1]), it[1]), item:item(it)}
      : {prompt:t('qHear'), play:aKey(it), answer:meaning(it), options:fill(same.length >= 4 ? same.map(meaning) : pick(meaning), meaning(it)), item:item(it)};
    const q2 = {prompt:c.id === 'pinyin' ? t('qWhichChar') : t('qHowSay'), big:c.id === 'pinyin' ? it2[1] : meaning(it2), answer:it2[0], zhOptions:true, options:fill(same.length >= 4 ? same.map(x => x[0]) : pick(x => x[0]), it2[0]), item:item(it2)};
    return [q1, q2];
  }
  if (l.kind === 'vocab') return shuffle(vocabQuestions(l)).slice(0, 3);
  if (l.kind === 'gram') {
    const ex = shuffle(l.ex), a = ex[0], b = ex[1] || ex[0];
    const ord = orderWords(b); // very short sentences (请坐。) cannot be put in order: fill the blank instead
    return [sentenceMeaning(c, a, l), Math.random() < 0.5 || ord.order.length < 3 ? fillBlank(c, b, l) : ord];
  }
  const chars = pool(c, 'char').filter(x => x.hz !== l.hz);
  return [
    {prompt:t('qMeaning'), big:l.hz, answer:meaning(l), options:shuffle([meaning(l), ...shuffle(uniq(chars.map(meaning)).filter(x => x !== meaning(l))).slice(0, 3)]), item:l},
    {prompt:t('qWhichChar'), play:l.hz, answer:l.hz, zhOptions:true, options:shuffle([l.hz, ...shuffle(chars.filter(x => x.py !== l.py).map(x => x.hz)).slice(0, 3)]), item:l}
  ];
}
// Sentence questions (HSK grammar): example = [漢字, pinyin, kk, ru, key word]
const exItem = x => ({hz:x[0], py:x[1], kk:x[2], ru:x[3]});
function sentenceMeaning(c, x, l) {
  const others = pool(c, 'gram').filter(g => g !== l).flatMap(g => g.ex).map(meaning);
  return {prompt:t('qSentence'), big:x[0], play:x[0], answer:meaning(x), options:shuffle([meaning(x), ...shuffle(uniq(others).filter(v => v !== meaning(x))).slice(0, 3)]), item:exItem(x)};
}
// Fill the blank: distractors come from other grammar modules and never share a character with the answer.
// Word classes for fill-in distractors: a wrong option never comes from the answer's own class (很 vs 非常 would both fit).
const WORD_CLASS = (() => {
  const m = {}, add = (cls, list) => list.split(' ').forEach(w => { m[w] = cls; });
  add('deg', '很 非常 太 真 最 更 特别 挺 有点儿 十分 多么 这么 那么 一点儿');
  add('part', '吗 吧 呢 了 的 地 得 着 过 啊 好吗 可以吗 是不是 的话 什么的 等 喂');
  add('meas', '个 杯 本 口 件 条 位 层 封 次 遍 下 一下 块 毛 岁 年 分钟 号 点 分 半 两 千 万 亿 第 星期');
  add('qw', '几 多少 多 什么 谁 哪儿 怎么 为什么 怎么样 多久');
  add('neg', '不 没 没有 别 不如');
  add('verb', '是 有 在 要 想 会 能 可以 可能 应该 该 愿意 必须 去 来 坐 用 给 教 告诉 请 看书 进来 出去 回来 星期一 懂 完 错 快要 就要');
  add('adv', '也 都 还 再 又 就 才 已经 刚 一直 忽然 经常 常常 马上 先 然后 一起 只 全 一共 重新 正好 故意 好像 差不多 越来越 正在 有时候 不一会儿');
  add('link', '和 跟 还是 或者 因为 所以 虽然 但是 可是 不过 如果 只要 不但 而且 一边 一 以前 以后 当 为 比 从 往 向 对 离 又');
  add('pron', '这 那 这些 那些 我们 大家 咱们 东边 上 里');
  add('deg', '多 好 这样 那样'); add('self', '自己'); // degree use of 多/好; 自己 fits next to almost any verb
  return m;
})();
function fillBlank(c, x, l) {
  const key = x[4], mod = l.course.modules[l.mi];
  const pool2 = uniq(pool(c, 'gram').filter(g => g.course.modules[g.mi] !== mod).flatMap(g => g.ex.map(e => e[4])))
    .filter(k => k !== key && ![...k].some(ch => key.includes(ch)) && !x[0].includes(k) && WORD_CLASS[k] && WORD_CLASS[k] !== WORD_CLASS[key]
      // before a verb almost any adverb, negation or verb fits: then only use particles, measure words, question words, pronouns
      && (['part', 'meas', 'qw', 'pron'].includes(WORD_CLASS[key]) || ['part', 'meas', 'qw', 'pron'].includes(WORD_CLASS[k])));
  return {prompt:t('qFill'), big:x[0].replace(key, '＿＿'), sub2:meaning(x), answer:key, zhOptions:true, options:shuffle([key, ...shuffle(pool2).slice(0, 3)]), item:exItem(x)};
}
// Word order: the sentence split into words (Intl.Segmenter; single characters if unavailable).
function orderWords(x) {
  const text = x[0].replace(/[。！？，、.!?]+$/u, ''), seg = window.Intl?.Segmenter ? [...new Intl.Segmenter('zh', {granularity:'word'}).segment(text)].map(s => s.segment) : [...text];
  // The segmenter splits some names and HSK words (哈萨克|斯坦): glue neighbours back when together they form a known word.
  const known = orderWords.known ||= new Set(['哈萨克斯坦', ...(NH.hsk || []).flatMap(h => h.words.map(w => w[0].split(' / ')[0]))]);
  const raw = seg.filter(s => s.trim()), parts = [];
  for (let i = 0; i < raw.length;) {
    let end = i; // longest run raw[i..end] that is a known word
    for (let j = i + 1; j < Math.min(raw.length, i + 4); j++) if (known.has(raw.slice(i, j + 1).join(''))) end = j;
    parts.push(raw.slice(i, end + 1).join('')); i = end + 1;
  }
  return {prompt:t('qOrder'), sub2:meaning(x), order:parts, answer:parts.join(''), item:exItem(x)};
}
function renderQuestion(host, q, onAnswer) {
  if (q.order) {
    const picked = [];
    host.innerHTML = `<p class="q-prompt">${esc(q.prompt)}</p><p class="q-big">${esc(q.sub2)}</p><p class="order-line zh" aria-live="polite"></p><div class="options order">${shuffle(q.order.map((w, i) => [w, i])).map(([w, i]) => `<button type="button" class="option zh" data-o="${i}">${esc(w)}</button>`).join('')}</div><div class="tools"><button type="button" data-reset>↺</button><button type="button" class="check" data-check>${t('check')}</button></div><p class="feedback" role="status"></p>`;
    const line = host.querySelector('.order-line');
    host.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { picked.push(q.order[+b.dataset.o]); b.disabled = true; line.textContent = picked.join(''); });
    host.querySelector('[data-reset]').onclick = () => { picked.length = 0; line.textContent = ''; host.querySelectorAll('[data-o]').forEach(b => b.disabled = false); };
    host.querySelector('[data-check]').onclick = e => { if (picked.length === q.order.length) onAnswer(picked.join('') === q.answer, e.currentTarget); };
    return;
  }
  if (q.sub2 && !q.order) q.sub = null;
  host.innerHTML = `<p class="q-prompt">${esc(q.prompt)}</p>${q.big ? `<p class="q-big ${/[一-鿿]/.test(q.big) ? 'zh' : ''}">${esc(q.big)}</p>` : ''}${q.sub ? `<p class="q-sub">${toneHtml(q.sub)}</p>` : ''}${q.sub2 ? `<p class="muted">${esc(q.sub2)}</p>` : ''}${q.play ? btn(t('play'), 'class="play-btn" data-play') : ''}
    <div class="options">${q.options.map((o, i) => `<button type="button" class="option ${q.zhOptions ? 'zh' : ''}" data-i="${i}">${esc(o)}</button>`).join('')}</div><p class="feedback" role="status"></p>`;
  const p = host.querySelector('[data-play]'); if (p) { p.onclick = () => Audio2.play(q.play); }
  host.querySelectorAll('.option').forEach(b => b.onclick = () => onAnswer(q.options[+b.dataset.i] === q.answer, b));
}

/* ---------- lesson ---------- */
let releaseRec = () => {};
addEventListener('pagehide', () => releaseRec());
function recorder(host) {
  const b = host.querySelector('[data-rec]'), status = host.querySelector('.rec-status'), audio = host.querySelector('audio');
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { b.disabled = true; status.textContent = t('recUnsupported'); return; }
  let stream, rec, url, timer;
  const stop = () => stream?.getTracks().forEach(x => x.stop());
  releaseRec = () => { clearTimeout(timer); if (rec?.state === 'recording') rec.stop(); stop(); if (url) URL.revokeObjectURL(url); };
  b.onclick = async () => {
    if (rec?.state === 'recording') { rec.stop(); return; }
    try {
      stream = await navigator.mediaDevices.getUserMedia({audio:true});
      const parts = []; rec = new MediaRecorder(stream);
      rec.ondataavailable = e => { if (e.data.size) parts.push(e.data); };
      rec.onstop = () => { clearTimeout(timer); stop(); if (url) URL.revokeObjectURL(url); url = URL.createObjectURL(new Blob(parts, {type:rec.mimeType})); audio.src = url; audio.hidden = false; b.textContent = t('reRecord'); status.textContent = t('recDone'); };
      rec.start(); b.textContent = t('stopRec'); timer = setTimeout(() => rec.state === 'recording' && rec.stop(), 30000);
    } catch { stop(); status.textContent = t('recNo'); }
  };
}
let hwLoad = null;
const loadHanziWriter = () => hwLoad ||= new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.2/dist/hanzi-writer.min.js'; s.onload = () => res(window.HanziWriter); s.onerror = rej; document.head.appendChild(s); });

function lesson() {
  const l = findLesson(qs('l')), c = l?.course || courseById(qs('c'));
  if (!l) { app().innerHTML = `<section class="section"><div class="container narrow"><p>${t('notFound')}</p><a class="primary-btn" href="index.html">←</a></div></section>`; return; }
  if (!moduleOpen(c, l.mi)) { location.replace(courseUrl(c)); return; }
  Store.visit(l);
  const m = c.modules[l.mi], last = l.li === m.lessons.length - 1;
  const back = courseUrl(c, modPart(c, l.mi));
  const prevUrl = l.li ? lessonUrl(m.lessons[l.li - 1]) : back;
  const nextUrl = last ? (c.open && !moduleDone(c, l.mi) ? back : testUrl(c, l.mi)) : lessonUrl(m.lessons[l.li + 1]);
  document.title = lessonTitle(l) + ' | ' + L(c.title) + ' | Нихао';
  if (l.kind === 'vocab') return vocabLesson(l, c, m, back, prevUrl, nextUrl, last);
  let body = '';
  if (l.kind === 'say') body = `<p class="py">${toneHtml(l.py)}</p><p class="hz">${esc(l.hz)}</p><p class="tr">${esc(meaning(l))}</p>${l.note ? `<p class="note">${esc(L(l.note))}</p>` : ''}`;
  if (l.kind === 'set') body = `<h2 class="set-title">${esc(L(l.title))}</h2>${l.note ? `<p class="note">${esc(L(l.note))}</p>` : ''}<div class="items">${l.items.map((x, i) => `<button type="button" class="item" data-item="${i}"><span class="item-hz">${esc(x[0])}</span><span class="item-py">${toneHtml(x[1])}</span><small>${esc(meaning(x))}</small></button>`).join('')}</div>`;
  if (l.kind === 'gram') body = `<span class="eyebrow">${t('grammar')} · HSK ${c.hsk} · №${esc(l.refs)}</span><h2 class="set-title">${esc(L(l.title))}</h2><p class="pattern">${esc(l.pat)}</p><p class="note">${esc(L(l.note))}</p>
    <div class="examples">${l.ex.map((x, i) => `<button type="button" class="example" data-ex="${i}"><span class="ex-hz">${esc(x[0])}</span><span class="py">${toneHtml(x[1])}</span><small>${esc(meaning(x))}</small></button>`).join('')}</div>`;
  if (l.kind === 'char') body =`<div class="char-wrap"><div class="char-box" id="charBox" aria-label="${esc(l.hz)}"><span class="char-fallback">${esc(l.hz)}</span></div><div class="char-info"><p class="py">${toneHtml(l.py)}</p><p class="tr">${esc(meaning(l))}</p><div class="tools">${btn(t('strokes'), 'data-animate')}${btn(t('tryWrite'), 'data-quiz')}</div><p class="feedback" id="writeStatus" role="status"></p></div></div>
    <h3 class="words-title">${t('words')}</h3><div class="items">${l.words.map((x, i) => `<button type="button" class="item" data-word="${i}"><span class="item-hz">${esc(x[0])}</span><span class="item-py">${toneHtml(x[1])}</span><small>${esc(meaning(x))}</small></button>`).join('')}</div>`;
  const main = l.kind === 'set' ? l.items.map(aKey) : l.kind === 'gram' ? l.ex.map(x => x[0]) : [l.hz];
  app().innerHTML = `<section class="section lesson-section"><div class="container narrow">
    <div class="lesson-top"><a href="${back}">${t('back')}</a>${c.id === 'pinyin' ? '' : '<button type="button" class="py-toggle" id="pyToggle"></button>'}<span>${esc(L(m.title))} · ${l.li + 1} / ${m.lessons.length}</span></div>
    <article class="lesson-card">${body}
      <section class="tool-box"><div class="tools">${btn(l.kind === 'set' || l.kind === 'gram' ? t('playAll') : t('normal'), 'data-rate="1"')}${btn(t('slow'), 'data-rate="0.7"')}${btn(t('record'), 'data-rec')}</div><p class="rec-status muted">${t('recHelp')}</p><audio controls hidden></audio></section>
      <section class="practice" id="practice"></section>
      <div class="lesson-actions"><a class="secondary-btn" href="${prevUrl}">${t('prev')}</a><a class="primary-btn" id="nextBtn" href="${nextUrl}">${last ? t('nextTest') : t('next')} →</a></div>
    </article></div></section>`;
  const root = app();
  // Hide pinyin to practise reading characters (the pinyin course always shows it).
  const pyBtn = root.querySelector('#pyToggle');
  const pyApply = () => { const off = c.id !== 'pinyin' && pyHidden(); document.body.classList.toggle('no-py', off); if (pyBtn) pyBtn.textContent = off ? t('pyOn') : t('pyOff'); };
  if (pyBtn) pyBtn.onclick = () => { try { localStorage.setItem('nihao-py', pyHidden() ? 'on' : 'off'); } catch {} pyApply(); };
  pyApply();
  root.querySelectorAll('[data-rate]').forEach(b => b.onclick = () => main.length > 1 ? Audio2.list(main, +b.dataset.rate) : Audio2.play(main[0], +b.dataset.rate));
  root.querySelectorAll('[data-ex]').forEach(b => b.onclick = () => Audio2.play(l.ex[+b.dataset.ex][0]));
  root.querySelectorAll('[data-item]').forEach(b => b.onclick = () => Audio2.play(aKey(l.items[+b.dataset.item])));
  root.querySelectorAll('[data-word]').forEach(b => b.onclick = () => Audio2.play(l.words[+b.dataset.word][0]));
  root.querySelector('.hz')?.addEventListener('click', () => Audio2.play(l.hz));
  recorder(root.querySelector('.tool-box'));
  if (l.kind === 'char') {
    const status = root.querySelector('#writeStatus');
    loadHanziWriter().then(HW => {
      const box = root.querySelector('#charBox'); box.innerHTML = '';
      const size = Math.min(220, box.clientWidth || 220);
      const w = HW.create(box, l.hz, {width:size, height:size, padding:8, showOutline:true, strokeColor:'#1d2a24', radicalColor:'#b3261e', delayBetweenStrokes:250});
      root.querySelector('[data-animate]').onclick = () => { status.textContent = ''; w.animateCharacter(); };
      root.querySelector('[data-quiz]').onclick = () => { status.textContent = ''; w.quiz({onComplete:() => { status.textContent = t('writeDone'); }}); };
      setTimeout(() => w.animateCharacter(), 400);
    }).catch(() => { root.querySelectorAll('[data-animate],[data-quiz]').forEach(b => b.hidden = true); });
  }
  // Practice: two questions; "next" stays locked until both are answered correctly.
  const box = root.querySelector('#practice'), next = root.querySelector('#nextBtn');
  let passed = Store.isDone(l.id), step = 0;
  const qs2 = questionsFor(l);
  const lock = () => { next.classList.toggle('pending', !passed); next.setAttribute('aria-disabled', String(!passed)); };
  next.onclick = e => { if (!passed) { e.preventDefault(); box.scrollIntoView({behavior:'smooth', block:'center'}); box.querySelector('.feedback') && (box.querySelector('.feedback').textContent = t('finishFirst')); } };
  function done() { passed = true; Store.finish(l); lock(); box.innerHTML = `<h3>${t('practiceDone')}</h3><p class="muted">${t('practiceDoneText')}</p>`; }
  function draw() {
    if (passed) return done();
    const q = qs2[step];
    box.innerHTML = `<h3>${t('practice')} ${step + 1} / 2</h3><div class="q"></div>`;
    renderQuestion(box.querySelector('.q'), q, (ok, b) => {
      const fb = box.querySelector('.feedback');
      if (!ok) { b.classList.add('wrong'); fb.textContent = t('wrongAns', q.answer); Store.miss(q.item); return; }
      b.classList.add('right'); fb.textContent = t('correct');
      setTimeout(() => { step++; step < 2 ? draw() : done(); }, 500);
    });
  }
  lock(); draw();
}

/* ---------- HSK words: flashcards → quiz on every word of the topic ---------- */
// One question per word, types taking turns: hear → character, meaning → character, character → meaning, example with a gap.
// Wrong options come from the same topic first, then from the rest of the level.
function vocabQuestions(l) {
  const items = l.items, more = allLessons(l.course).filter(x => x.kind === 'vocab' && x !== l).flatMap(x => x.items);
  const pick = (x, f, same) => { const pool = uniq([...shuffle(items), ...shuffle(more)].filter(y => y !== x && !same(y)).map(f)); return shuffle([f(x), ...pool.slice(0, 3)]); };
  const sameHz = x => y => y[0] === x[0] || y[1] === x[1] || meaning(y) === meaning(x);
  return shuffle(items).map((x, i) => {
    const it = {hz:x[0], py:x[1], kk:x[2], ru:x[3], a:x[4] || undefined};
    switch (i % 4) {
      case 0: return {prompt:t('qHearChar'), play:aKey(x), answer:x[0], zhOptions:true, options:pick(x, y => y[0], sameHz(x)), item:it};
      case 1: return {prompt:t('qHowSay'), big:meaning(x), answer:x[0], zhOptions:true, options:pick(x, y => y[0], sameHz(x)), item:it};
      case 2: return {prompt:t('qMeaning'), big:x[0], sub:x[1], answer:meaning(x), options:pick(x, meaning, y => meaning(y) === meaning(x)), item:it};
      default: return {prompt:t('qFill'), big:x[5][0].replace(x[0], '＿＿'), sub2:meaning(x[5]), answer:x[0], zhOptions:true, options:pick(x, y => y[0], y => sameHz(x)(y) || x[5][0].includes(y[0])), item:it};
    }
  });
}
function vocabLesson(l, c, m, back, prevUrl, nextUrl, last) {
  const items = l.items, wordOf = x => ({hz:x[0], py:x[1], kk:x[2], ru:x[3], a:x[4] || undefined});
  let queue = items.map((x, i) => i), pos = 0, shown = false, repeated = new Set(), quiz = null, qi = 0, wrong = 0;
  let passed = Store.isDone(l.id);
  app().innerHTML = `<section class="section lesson-section"><div class="container narrow">
    <div class="lesson-top"><a href="${back}">${t('back')}</a><button type="button" class="py-toggle" id="pyToggle"></button><span>${esc(L(m.title))} · ${l.li + 1} / ${m.lessons.length}</span></div>
    <article class="lesson-card"><h2 class="set-title">${esc(L(l.title))}</h2><div id="vStage"></div>
      <div class="lesson-actions"><a class="secondary-btn" href="${prevUrl}">${t('prev')}</a><a class="primary-btn" id="nextBtn" href="${nextUrl}">${last ? t('nextTest') : t('next')} →</a></div>
    </article></div></section>`;
  const stage = app().querySelector('#vStage'), next = app().querySelector('#nextBtn'), pyBtn = app().querySelector('#pyToggle');
  const pyApply = () => { const off = pyHidden(); document.body.classList.toggle('no-py', off); pyBtn.textContent = off ? t('pyOn') : t('pyOff'); };
  pyBtn.onclick = () => { try { localStorage.setItem('nihao-py', pyHidden() ? 'on' : 'off'); } catch {} pyApply(); }; pyApply();
  const lock = () => { next.classList.toggle('pending', !passed); next.setAttribute('aria-disabled', String(!passed)); };
  next.onclick = e => { if (!passed) { e.preventDefault(); stage.scrollIntoView({behavior:'smooth', block:'center'}); } };
  lock();
  const bar = (a, b) => `<div class="v-progress"><span>${a} / ${b}</span>${meter(pct(a, b))}</div>`;
  const exHtml = (x, ex) => esc(ex[0]).replace(esc(x[0]), `<mark>${esc(x[0])}</mark>`);
  // Handwriting: each new word is written twice — once over the outline, once from memory.
  const written = new Set();
  function writeRows(x, area, done) {
    const chars = [...x[0]].filter(ch => /\p{Script=Han}/u.test(ch));
    if (!chars.length) return done();
    const row = (kind, label) => `<p class="write-label">${label}</p><div class="write-row">${chars.map(ch => `<div class="write-box" data-kind="${kind}"><span class="write-fallback">${kind === 'trace' ? esc(ch) : ''}</span></div>`).join('')}</div>`;
    area.innerHTML = `<p class="eyebrow">✍️ ${t('vWrite')}</p>${row('trace', t('vTrace'))}${row('recall', t('vRecall'))}<p class="feedback" role="status"></p>`;
    const status = area.querySelector('.feedback');
    loadHanziWriter().then(HW => {
      const boxes = [...area.querySelectorAll('.write-box')];
      const size = Math.min(110, Math.floor((area.clientWidth - 8 * (chars.length - 1)) / chars.length) || 110);
      const writers = boxes.map((box, i) => {
        box.innerHTML = ''; box.style.width = box.style.height = size + 'px';
        const trace = box.dataset.kind === 'trace';
        return HW.create(box, chars[i % chars.length], {width:size, height:size, padding:6, showOutline:trace, showCharacter:false,
          strokeColor:'#1d2a24', outlineColor:'#d9d2c6', drawingColor:'#1d2a24', drawingWidth:Math.max(14, size / 7), highlightColor:'#e0a63c'});
      });
      const step = i => {
        boxes.forEach((b, j) => b.classList.toggle('active', j === i));
        if (i >= boxes.length) { status.textContent = t('vWriteDone'); return done(); }
        writers[i].quiz({showHintAfterMisses:boxes[i].dataset.kind === 'trace' ? 1 : 2, onComplete:() => { boxes[i].classList.add('ok'); step(i + 1); }});
      };
      step(0);
    }).catch(() => { status.textContent = t('vWriteSkip'); done(); });
  }
  function card() {
    if (pos >= queue.length) return startQuiz();
    const x = items[queue[pos]], ex = x[5], mustWrite = shown && !written.has(queue[pos]);
    stage.innerHTML = `${bar(Math.min(pos + 1, queue.length), queue.length)}<p class="eyebrow">${t('vCards')}</p>
      <div class="flash"><button type="button" class="flash-hz" data-say>${esc(x[0])}</button>
        <button type="button" class="say-btn" data-say>🔊 ${t('vListen')}</button>
        <div class="flash-back" ${shown ? '' : 'hidden'}><p class="py">${toneHtml(x[1])}</p><p class="tr">${esc(meaning(x))}</p>
          <button type="button" class="example" data-ex><span class="ex-hz">🔊 ${exHtml(x, ex)}</span><span class="py">${toneHtml(ex[1])}</span><small>${esc(meaning(ex))}</small></button></div></div>
      ${mustWrite ? '<div class="write-area"></div>' : ''}
      <div class="flash-actions" ${mustWrite ? 'hidden' : ''}>${shown ? `${btn(t('vNo'), 'class="no" data-no')}${btn(t('vYes'), 'class="yes" data-yes')}` : btn(t('vShow'), 'class="show" data-show')}</div>
      <p class="muted v-hint" ${mustWrite ? 'hidden' : ''}>${shown ? t('vHint2') : t('vHint1')}</p>`;
    stage.querySelectorAll('[data-say]').forEach(b => b.onclick = () => Audio2.play(aKey(x)));
    stage.querySelector('[data-ex]').onclick = () => Audio2.play(ex[0]);
    const show = stage.querySelector('[data-show]'); if (show) show.onclick = () => { shown = true; card(); Audio2.list([aKey(x), ex[0]]); };
    const yes = stage.querySelector('[data-yes]'), no = stage.querySelector('[data-no]');
    if (yes) yes.onclick = () => { Store.mark(wordOf(x), true); pos++; shown = false; card(); };
    // "Don't know": the card comes back once more at the end of this round, and in review after 10 minutes.
    if (no) no.onclick = () => { Store.mark(wordOf(x), false); if (!repeated.has(queue[pos])) { repeated.add(queue[pos]); queue.push(queue[pos]); } pos++; shown = false; card(); };
    if (mustWrite) writeRows(x, stage.querySelector('.write-area'), () => {
      written.add(queue[pos]);
      stage.querySelectorAll('.flash-actions, .v-hint').forEach(e => e.hidden = false);
      stage.querySelector('.flash-actions').scrollIntoView({behavior:'smooth', block:'nearest'});
    });
    if (!shown) setTimeout(() => Audio2.play(aKey(x)), 250);
  }
  function startQuiz() { quiz = vocabQuestions(l); qi = 0; wrong = 0; ask(); }
  function ask() {
    if (qi >= quiz.length) return finish();
    const q = quiz[qi];
    stage.innerHTML = `${bar(qi + 1, quiz.length)}<p class="eyebrow">${t('vQuiz')}</p><div class="q"></div>`;
    renderQuestion(stage.querySelector('.q'), q, (ok, b) => {
      const fb = stage.querySelector('.feedback');
      if (!ok) { b.classList.add('wrong'); b.disabled = true; fb.textContent = t('wrongAns', q.answer); Store.mark(q.item, false); wrong++;
        if (!q.again) quiz.push({...q, again:true, options:shuffle(q.options)}); return; } // asked once more at the end
      b.classList.add('right'); fb.textContent = t('correct');
      stage.querySelectorAll('.option').forEach(o => o.disabled = true);
      setTimeout(() => { qi++; ask(); }, 600);
    });
    if (q.play) setTimeout(() => Audio2.play(q.play), 250);
  }
  function finish() {
    passed = true; Store.finish(l); lock();
    stage.innerHTML = `<div class="v-done"><p class="score">✓</p><h3>${t('vDone', items.length)}</h3><p class="muted">${wrong ? t('vDoneWrong', wrong) : t('vDonePerfect')}</p>
      <div class="tools">${btn(t('vAgain'), 'data-again')}<a class="secondary-btn" href="me.html#review">${t('reviewTitle')} →</a></div></div>`;
    stage.querySelector('[data-again]').onclick = () => { queue = items.map((x, i) => i); pos = 0; repeated = new Set(); card(); };
  }
  card();
}

/* ---------- module test ---------- */
/* ---------- HSK mock test: 40 words of the level, 20 listening + 20 reading, pass at 60 % ---------- */
function mock(c) {
  const words = allLessons(c).flatMap(l => l.items || []), MOCK_PASS = 60;
  const wrap = h => `<section class="section"><div class="container narrow"><article class="lesson-card">${h}</article></div></section>`;
  const row = x => ({hz:x[0], py:x[1], kk:x[2], ru:x[3], a:x[4]});
  // Distractors never share the answer's meaning or sound, so every question has exactly one right option.
  const opts = (ans, pool) => shuffle([ans, ...shuffle(uniq(pool).filter(v => v !== ans)).slice(0, 3)]);
  const others = (x, same) => words.filter(y => y !== x && !same(y));
  // 20 listening (12 words + 8 sentences) and 20 reading (12 words + 4 fill-in + 4 sentences) when grammar examples exist.
  function make() {
    const gl = pool(c, 'gram'), sents = shuffle(gl.flatMap(g => g.ex.map(e => [e, g])));
    const nS = gl.length ? 8 : 0, nF = gl.length ? 4 : 0, nR = gl.length ? 4 : 0;
    const wq = shuffle(words).slice(0, 40 - nS - nF - nR).map((x, k, arr) => {
      const m = meaning(x), half = Math.floor(arr.length / 2), sec = k < half ? 'listen' : 'read';
      const hzPool = others(x, y => meaning(y) === m || y[1] === x[1]).map(y => y[0]);
      if (k < half * 0.6) return {sec, prompt:t('qHear'), play:aKey(x), answer:m, options:opts(m, others(x, y => meaning(y) === m).map(meaning)), item:row(x)};
      if (k < half) return {sec, prompt:t('qHearChar'), play:aKey(x), answer:x[0], zhOptions:true, options:opts(x[0], hzPool), item:row(x)};
      if (k < half + (arr.length - half) * 0.6) return {sec, prompt:t('qMeaning'), big:x[0], answer:m, options:opts(m, others(x, y => meaning(y) === m).map(meaning)), item:row(x)};
      if (k < arr.length - 2) return {sec, prompt:t('qHowSay'), big:m, answer:x[0], zhOptions:true, options:opts(x[0], hzPool), item:row(x)};
      return {sec, prompt:t('qPinyin'), big:x[1], answer:x[0], zhOptions:true, options:opts(x[0], hzPool), item:row(x)};
    });
    const listen = wq.filter(q => q.sec === 'listen'), read = wq.filter(q => q.sec === 'read');
    sents.slice(0, nS).forEach(([e, g]) => { const q = sentenceMeaning(c, e, g); q.big = null; q.prompt = t('qHearSentence'); listen.push({...q, sec:'listen'}); });
    sents.slice(nS, nS + nF).forEach(([e, g]) => read.push({...fillBlank(c, e, g), sec:'read'}));
    sents.slice(nS + nF, nS + nF + nR).forEach(([e, g]) => { const q = sentenceMeaning(c, e, g); q.play = null; read.push({...q, sec:'read'}); });
    return [...shuffle(listen), ...shuffle(read)];
  }  document.title = t('mockTitle', c.hsk) + ' | Нихао';
  let bank = [], i = 0, score = {listen:0, read:0}, answered = false;
  function intro() {
    app().innerHTML = wrap(`<span class="eyebrow">HSK ${c.hsk}</span><h2>${t('mockTitle', c.hsk)}</h2><p>${t('mockInfo', c.hsk)}</p><ul class="mock-parts"><li><b>${t('secListen')}</b> · 20</li><li><b>${t('secRead')}</b> · 20</li></ul><p class="muted">${t('mockNote')}</p><div class="lesson-actions"><a class="secondary-btn" href="${courseUrl(c)}">${t('backCourse')}</a><button type="button" class="primary-btn" id="mStart">${t('mockStart')} →</button></div>`);
    app().querySelector('#mStart').onclick = () => { bank = make(); i = 0; score = {listen:0, read:0}; draw(); };
  }
  function draw() {
    answered = false; const q = bank[i];
    app().innerHTML = wrap(`<span class="eyebrow">${q.sec === 'listen' ? t('secListen') : t('secRead')}</span><h2>${t('mockTitle', c.hsk)}</h2><p class="muted">${t('qOf', i + 1, bank.length).split('·')[0]}</p>${meter(Math.round(i / bank.length * 100))}<div class="q"></div><div class="lesson-actions"><a class="secondary-btn" href="${courseUrl(c)}">${t('backCourse')}</a><button type="button" class="primary-btn" id="tNext" disabled>${i === bank.length - 1 ? t('submit') : t('nextQ')}</button></div>`);
    renderQuestion(app().querySelector('.q'), q, (ok, b) => {
      if (answered) return; answered = true;
      app().querySelectorAll('.option').forEach(x => { x.disabled = true; if (q.options?.[+x.dataset.i] === q.answer) x.classList.add('right'); });
      if (ok) score[q.sec]++; else { b.classList.add('wrong'); Store.miss(q.item); }
      app().querySelector('.feedback').textContent = ok ? t('correct') : t('answerIs', q.answer);
      app().querySelector('#tNext').disabled = false;
    });
    if (q.play) setTimeout(() => Audio2.play(q.play), 300);
    app().querySelector('#tNext').onclick = () => { if (!answered) return; if (++i < bank.length) draw(); else result(); };
  }
  function result() {
    const total = score.listen + score.read, p = Math.round(total / bank.length * 100);
    Store.update(s => { (s.tests ||= {})[c.id + ':mock'] = Math.max(s.tests[c.id + ':mock'] || 0, p); });
    app().innerHTML = wrap(`<h2>${p >= MOCK_PASS ? t('mockPassed') : t('mockFailed')}</h2><p class="score">${p}%</p>
      <ul class="mock-parts"><li><b>${t('secListen')}</b> ${score.listen} / 20</li><li><b>${t('secRead')}</b> ${score.read} / 20</li></ul>
      <p class="muted">${t('mockAfter')}</p><div class="lesson-actions"><a class="primary-btn" href="me.html#review">${t('reviewTitle')} →</a><button type="button" class="secondary-btn" id="tRetry">${t('retry')}</button></div>`);
    app().querySelector('#tRetry').onclick = () => { bank = make(); i = 0; score = {listen:0, read:0}; draw(); };
  }
  intro();
}

function test() {
  if (qs('mock') && courseById(qs('c'))?.hsk) return mock(courseById(qs('c')));
  const c = courseById(qs('c')) || COURSES[0], mi = Math.max(0, (+qs('m') || 1) - 1), m = c.modules[mi];
  const wrap = h => `<section class="section"><div class="container narrow"><article class="lesson-card">${h}</article></div></section>`;
  if (!m || !moduleOpen(c, mi)) { location.replace(courseUrl(c, modPart(c, mi))); return; }
  document.title = t('testTitle', mi + 1, L(m.title)) + ' | Нихао';
  if (!moduleDone(c, mi)) { app().innerHTML = wrap(`<h2>${t('testTitle', mi + 1, esc(L(m.title)))}</h2><p>${t('testNeedLessons')}</p><a class="primary-btn" href="${courseUrl(c, modPart(c, mi))}">${t('backCourse')}</a>`); return; }
  // Up to 10 different questions: sets and characters give new items each round.
  const makeBank = () => { const seen = new Set(), b = []; for (let r = 0; r < 6 && b.length < 10; r++) for (const q of shuffle(m.lessons.flatMap(questionsFor))) { const k = q.prompt + '|' + (q.big || q.play) + '|' + q.answer; if (!seen.has(k) && b.length < 10) { seen.add(k); b.push(q); } } return shuffle(b); };
  let bank = makeBank(), i = 0, right = 0, answered = false;
  function draw() {
    answered = false;
    app().innerHTML = wrap(`<h2>${t('testTitle', mi + 1, esc(L(m.title)))}</h2><p class="muted">${t('qOf', i + 1, bank.length)}</p><div class="q"></div><div class="lesson-actions"><a class="secondary-btn" href="${courseUrl(c, modPart(c, mi))}">${t('backCourse')}</a><button type="button" class="primary-btn" id="tNext" disabled>${i === bank.length - 1 ? t('submit') : t('nextQ')}</button></div>`);
    const q = bank[i];
    renderQuestion(app().querySelector('.q'), q, (ok, b) => {
      if (answered) return; answered = true;
      app().querySelectorAll('.option').forEach(x => { x.disabled = true; if (q.options?.[+x.dataset.i] === q.answer) x.classList.add('right'); });
      if (ok) right++; else { b.classList.add('wrong'); Store.miss(q.item); }
      app().querySelector('.feedback').textContent = ok ? t('correct') : t('answerIs', q.answer);
      app().querySelector('#tNext').disabled = false;
    });
    app().querySelector('#tNext').onclick = () => { if (!answered) return; if (++i < bank.length) draw(); else result(); };
  }
  function result() {
    const p = Math.round(right / bank.length * 100), ok = p >= PASS; Store.test(c, mi, p);
    const lastModule = mi === c.modules.length - 1;
    app().innerHTML = wrap(`<h2>${ok ? t('testPassed') : t('testFailed')}</h2><p class="score">${p}%</p><p>${t('scoreLine', right, bank.length, p)}</p><p class="muted">${ok ? (lastModule ? t('allModules') : t('nextUnlocked')) : t('tryAgainText')}</p>
      <div class="lesson-actions"><a class="primary-btn" href="${ok && !lastModule ? (c.modules[mi + 1].lessons[0] ? lessonUrl(c.modules[mi + 1].lessons[0]) : courseUrl(c, modPart(c, mi))) : courseUrl(c, modPart(c, mi))}">${ok && !lastModule ? t('next') + ' →' : t('backCourse')}</a><button type="button" class="secondary-btn" id="tRetry">${t('retry')}</button></div>`);
    app().querySelector('#tRetry').onclick = () => { bank = makeBank(); i = 0; right = 0; draw(); };
  }
  draw();
}

/* ---------- my learning ---------- */
function me() {
  const s = Store.state(), u = Auth.user(), due = Store.due();
  const doneCount = Object.keys(s.done || {}).length;
  app().innerHTML = `<section class="section"><div class="container narrow">
    <h1>${t('meTitle')}</h1>
    <div class="stats">${[[Store.streak(s.days), t('stStreak')], [(s.days || []).length, t('stDays')], [doneCount, t('stLessons')], [due.length, t('stDue')]].map(([n, l]) => `<div><b>${n}</b><small>${l}</small></div>`).join('')}</div>
    <div class="account"><span class="eyebrow">${t('account')}</span>${u ? `<p>${esc(u.email)}<br><small class="muted">${t('synced')}</small></p>` : `<p>${t('guestText')}<br><small class="muted">${t('guestHint')}</small></p><div class="tools"><a class="primary-btn" href="auth.html?mode=signup&next=me.html">${t('signup')}</a><a class="secondary-btn" href="auth.html?next=me.html">${t('signin')}</a></div>`}</div>
    <ul class="progress-list">${COURSES.map(c => { const all = allLessons(c), d = all.filter(l => Store.isDone(l.id)).length; return `<li><a href="${d ? nextStep(c) : courseUrl(c)}"><span class="pl-title">${glyph(c)} ${esc(L(c.title))}</span>${meter(pct(d, all.length))}<small>${d} / ${all.length} ${t('lessons')}</small><b>${d >= all.length ? '✓' : (d ? t('continue') : t('start')) + ' →'}</b></a></li>`; }).join('')}</ul>
    <section id="review" class="review"><h2>${t('reviewTitle')}</h2><p class="muted">${due.length ? t('reviewN', due.length) : t('reviewEmpty')}</p><div class="review-list"></div></section>
  </div></section>`;
  const list = app().querySelector('.review-list');
  due.slice(0, 12).forEach(r => {
    const card = document.createElement('article'); card.className = 'review-card';
    card.innerHTML = `<p class="tr">${esc(meaning(r))}</p><p class="muted">${t('sayFirst')} · ${t('syll', [...r.hz].filter(ch => /[一-鿿]/.test(ch)).length)}</p>${btn(t('showAnswer'), 'data-show')}<div hidden><p class="py">${toneHtml(r.py)}</p><p class="hz small">${esc(r.hz)}</p>${btn(t('play'), 'data-hear')}<div class="tools">${btn(t('again'), 'data-again')}${btn(t('known'), 'data-known')}</div></div>`;
    card.querySelector('[data-show]').onclick = e => { e.target.hidden = true; card.querySelector('div').hidden = false; Audio2.play(r.a || r.hz); };
    card.querySelector('[data-hear]').onclick = () => Audio2.play(r.a || r.hz);
    card.querySelector('[data-again]').onclick = () => { Store.reviewed(r.a || r.hz, false); me(); };
    card.querySelector('[data-known]').onclick = () => { Store.reviewed(r.a || r.hz, true); me(); };
    list.appendChild(card);
  });
  if (location.hash === '#review') document.getElementById('review')?.scrollIntoView();
}

/* ---------- sign in / sign up ---------- */
function authPage() {
  let mode = ['signup', 'forgot', 'reset'].includes(qs('mode')) ? qs('mode') : 'login';
  const nextUrl = (() => { try { const u = new URL(qs('next') || 'index.html', location.href); return u.origin === location.origin ? u.href : 'index.html'; } catch { return 'index.html'; } })();
  const friendly = e => { const m = String(e?.message || ''); if (/invalid login/i.test(m)) return t('authBadLogin'); if (/not confirmed/i.test(m)) return t('authUnconfirmed'); if (/fetch|network/i.test(m)) return t('authNet'); return t('authErr'); };
  function draw(msg = '', ok = false) {
    const title = {login:t('authTitle'), signup:t('authSignup'), forgot:t('forgot'), reset:t('setPassword')}[mode];
    app().innerHTML = `<section class="section"><div class="container auth-wrap"><article class="lesson-card"><h1>${title}</h1><div id="already"></div>
      <form id="authForm" novalidate>
        ${mode === 'signup' ? `<label>${t('name')}<input id="aName" autocomplete="name"></label>` : ''}
        ${mode !== 'reset' ? `<label>${t('email')}<input id="aEmail" type="email" autocomplete="email" required></label>` : ''}
        ${mode !== 'forgot' ? `<label>${mode === 'reset' || mode === 'signup' ? t('newPassword') : t('password')}<input id="aPass" type="password" minlength="6" autocomplete="${mode === 'login' ? 'current-password' : 'new-password'}" required></label>` : ''}
        <button class="primary-btn" type="submit">${{login:t('doLogin'), signup:t('doSignup'), forgot:t('sendReset'), reset:t('setPassword')}[mode]}</button>
        <p class="feedback ${ok ? 'ok' : msg ? 'bad' : ''}" role="status">${esc(msg)}</p>
      </form>
      <p class="auth-links">${mode === 'login' ? `<a href="#" data-mode="signup">${t('noAccount')}</a> · <a href="#" data-mode="forgot">${t('forgot')}</a>` : mode !== 'reset' ? `<a href="#" data-mode="login">${t('haveAccount')}</a>` : ''}</p>
    </article></div></section>`;
    app().querySelectorAll('[data-mode]').forEach(a => a.onclick = e => { e.preventDefault(); mode = a.dataset.mode; draw(); });
    app().querySelector('#authForm').onsubmit = async e => {
      e.preventDefault();
      const c = Auth.client(); if (!c) return draw(t('authNet'));
      const email = app().querySelector('#aEmail')?.value.trim(), pass = app().querySelector('#aPass')?.value || '';
      const b = app().querySelector('button[type=submit]'); b.disabled = true;
      try {
        const back = new URL('auth.html', location.href).href;
        if (mode === 'login') { const {error} = await c.auth.signInWithPassword({email, password:pass}); if (error) throw error; draw(t('loginOk'), true); location.href = nextUrl; }
        else if (mode === 'signup') { const {data, error} = await c.auth.signUp({email, password:pass, options:{emailRedirectTo:back, data:{display_name:app().querySelector('#aName')?.value.trim() || ''}}}); if (error) throw error; if (data.session) location.href = nextUrl; else draw(t('signupOk'), true); }
        else if (mode === 'forgot') { const {error} = await c.auth.resetPasswordForEmail(email, {redirectTo:back + '?mode=reset'}); if (error) throw error; draw(t('resetSent'), true); }
        else { const {error} = await c.auth.updateUser({password:pass}); if (error) throw error; mode = 'login'; draw(t('resetOk'), true); }
      } catch (err) { draw(friendly(err)); }
    };
    if (mode === 'login') Auth.ready.then(() => { const u = Auth.user(); if (u) app().querySelector('#already').innerHTML = `<p class="note">${t('alreadyIn')} ${esc(u.email)}</p>`; });
  }
  addEventListener('nh-recovery', () => { mode = 'reset'; draw(); });
  draw();
}

/* ---------- feedback ---------- */
function feedback() {
  app().innerHTML = `<section class="section"><div class="container narrow"><h1>${t('fbTitle')}</h1><p class="lead">${t('fbText')}</p>
    <form id="fbForm" class="lesson-card" novalidate>
      <label>${t('fbType')}<select id="fbCat">${t('fbCats').map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></label>
      <label>${t('fbSubject')}<input id="fbSubject" maxlength="120"></label>
      <label>${t('fbMessage')}<textarea id="fbMsg" rows="6" maxlength="2000" required></textarea></label>
      <label>${t('fbEmail')}<input id="fbEmail" type="email" autocomplete="email"></label>
      <fieldset class="rating"><legend>${t('fbRating')}</legend>${[1, 2, 3, 4, 5].map(n => `<label><input type="radio" name="rating" value="${n}"> ${'★'.repeat(n)}</label>`).join('')}</fieldset>
      <button class="primary-btn" type="submit">${t('fbSend')}</button><p class="feedback" role="status"></p>
    </form></div></section>`;
  const f = app().querySelector('#fbForm'), status = f.querySelector('.feedback'), set = (m, ok) => { status.textContent = m; status.className = 'feedback ' + (ok ? 'ok' : 'bad'); };
  Auth.ready.then(() => { const u = Auth.user(); if (u?.email) f.querySelector('#fbEmail').value = u.email; });
  f.onsubmit = async e => {
    e.preventDefault();
    const msg = f.querySelector('#fbMsg').value.trim(), email = f.querySelector('#fbEmail').value.trim();
    if (msg.length < 5) return set(t('fbShort'));
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return set(t('fbBadEmail'));
    const c = Auth.client(); if (!c) return set(t('fbFail'));
    const b = f.querySelector('button'); b.disabled = true; b.textContent = t('fbSending');
    try {
      const u = Auth.user();
      // Same feedback table as the main site; the subject is tagged so the two sites can be told apart.
      const {error} = await c.from('feedback').insert([{user_id:u?.id || null, email:email || u?.email || null, category:f.querySelector('#fbCat').value,
        subject:'[Нихао ' + lang + '] ' + f.querySelector('#fbSubject').value.trim(), message:msg, rating:+(f.querySelector('input[name=rating]:checked')?.value || 0) || null}]);
      if (error) throw error;
      f.reset(); if (u?.email) f.querySelector('#fbEmail').value = u.email; set(t('fbOk'), true);
    } catch (err) { console.warn(err); set(t('fbFail')); }
    finally { b.disabled = false; b.textContent = t('fbSend'); }
  };
}

function about() {
  app().innerHTML = `<section class="section"><div class="container narrow about"><h1>${t('aboutTitle')}</h1>${t('aboutText').map(p => `<p>${p}</p>`).join('')}<div class="tools"><a class="primary-btn" href="index.html">${t('start')} →</a><a class="secondary-btn" href="feedback.html">${t('navFeedback')}</a></div></div></section>`;
}

/* ---------- boot ---------- */
async function boot() {
  chrome();
  const page = document.body.dataset.page;
  if (page === 'auth') return authPage();
  if (page === 'feedback') return feedback();
  if (page === 'about') return about();
  await Store.pulled; // signed-in progress first, so locks and ✓ are right
  ({home, course, lesson, test, me})[page]?.();
}
window.NihaoDebug = {COURSES, Store, Audio2, fillBlank, orderWords};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
