export interface Teacher {
  id: number
  name: string
  subject: string
  experience: string
  bio: string
  education: string
  achievements: string
  students: number
  email: string
  consultation: string
  image: string
  telegram: string
  instagram: string
}

export interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  image: string
  content: string
  fullContent: string
  readTime: string
}

const teachers: Teacher[] = [
  {
    id: 0, name: 'Asilbek Karimov', subject: 'Matematika', experience: '12 yillik professional tajriba',
    bio: 'Asilbek Karimov oliy toifali o\'qituvchi bo\'lib, 12 yildan ortiq vaqt davomida o\'quvchilarga matematika fanidan chuqurlashtirilgan bilim berib kelmoqda. Uning ko\'plab shogirdlari tayanch va xalqaro olimpiadalarda g\'olib bo\'lishgan.',
    education: 'Oliy ma\'lumotli, Matematika-Fizika o\'qituvchisi (O\'zbekiston Milliy Universiteti)',
    achievements: '"Yil o\'qituvchisi - 2022" tanlovi Viloyat bosqichi g\'olibi va "Xalq ta\'limi a\'lochisi".',
    students: 500, email: 'a.karimov@10-maktab.uz', consultation: 'Seshanba, 14:00 - 16:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 1, name: 'Malika Rahmonova', subject: 'Ingliz tili', experience: '8 yillik professional tajriba',
    bio: 'Malika Rahmonova ingliz tili fanining yetuk mutaxassisi bo\'lib, o\'quvchilarga zamonaviy interaktiv metodikalar asosida dars beradi. Uning darslari doimo qiziqarli va samarali.',
    education: 'Oliy ma\'lumotli, Filolog-ingliz tili o\'qituvchisi (O\'zbekiston Davlat Jahon Tillari Universiteti)',
    achievements: 'IELTS 8.0, "Eng yaxshi yosh o\'qituvchi - 2023" nominatsiyasi sohibi.',
    students: 350, email: 'm.rahmonova@10-maktab.uz', consultation: 'Chorshanba, 15:00 - 17:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 2, name: 'Gulzoda Olimova', subject: 'Ona tili', experience: '15 yillik professional tajriba',
    bio: 'Gulzoda Olimova ona tili va adabiyot fanining mohir ustozidir. U ko\'plab o\'quvchilarni respublika olimpiadalariga tayyorlab kelmoqda.',
    education: 'Oliy ma\'lumotli, Filolog-Ona tili va adabiyot o\'qituvchisi (Toshkent Davlat Pedagogika Universiteti)',
    achievements: '"Oliy toifali o\'qituvchi", "Xalq ta\'limi fidoyisi" ko\'krak nishoni sohibi.',
    students: 600, email: 'g.olimova@10-maktab.uz', consultation: 'Payshanba, 13:00 - 15:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 3, name: 'Jasur Alimov', subject: 'Informatika', experience: '10 yillik professional tajriba',
    bio: 'Jasur Alimov informatika va dasturlash fanlari bo\'yicha mutaxassis. O\'quvchilarni zamonaviy IT ko\'nikmalariga o\'rgatadi.',
    education: 'Oliy ma\'lumotli, Informatika o\'qituvchisi (Muhammad al-Xorazmiy nomidagi TATU)',
    achievements: 'Robotics bo\'yicha xalqaro musobaqalar g\'oliblarini tayyorlagan.',
    students: 400, email: 'j.alimov@10-maktab.uz', consultation: 'Juma, 14:00 - 16:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 4, name: 'Sardor Shokirov', subject: 'Matematika', experience: '5 yillik professional tajriba',
    bio: 'Sardor Shokirov matematika fanining yosh va istiqbolli o\'qituvchisi. O\'zining innovatsion yondashuvi bilan ajralib turadi.',
    education: 'Oliy ma\'lumotli, Matematika o\'qituvchisi (O\'zbekiston Milliy Universiteti)',
    achievements: 'Matematik modellashtirish bo\'yicha ilmiy maqolalar muallifi.', students: 250,
    email: 's.shokirov@10-maktab.uz', consultation: 'Dushanba, 15:00 - 17:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 5, name: 'Nodira Ahmedova', subject: 'Tarix', experience: '18 yillik professional tajriba',
    bio: 'Nodira Ahmedova tarix fanining bilimdon va tajribali o\'qituvchisi. Uning darslari o\'quvchilarga tarixni sevishga yordam beradi.',
    education: 'Oliy ma\'lumotli, Tarix o\'qituvchisi (O\'zbekiston Milliy Universiteti)',
    achievements: '"Yil o\'qituvchisi - 2019", "Tarix fanining eng yaxshi targ\'ibotchisi".',
    students: 700, email: 'n.ahmedova@10-maktab.uz', consultation: 'Seshanba, 11:00 - 13:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 6, name: 'Botir Ergashev', subject: 'Fizika', experience: '20 yillik professional tajriba',
    bio: 'Botir Ergashev fizika fanining tajribali ustozidir. Uning o\'quvchilari fizika olimpiadalarida yuqori natijalarga erishgan.',
    education: 'Oliy ma\'lumotli, Fizika o\'qituvchisi (O\'zMU)',
    achievements: '"Xalq ta\'limi a\'lochisi" ko\'krak nishoni sohibi.', students: 800,
    email: 'b.ergashev@10-maktab.uz', consultation: 'Payshanba, 14:00 - 16:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 7, name: 'Durdona To\'rayeva', subject: 'Biologiya', experience: '14 yillik professional tajriba',
    bio: 'Durdona To\'rayeva biologiya va ekologiya fanlari bo\'yicha mutaxassis bo\'lib, jonli tabiatga qiziqish uyg\'otadi.',
    education: 'Oliy ma\'lumotli, Biologiya o\'qituvchisi (O\'zMU)',
    achievements: 'Viloyat tanlovi g\'olibi, "Eng yaxshi yosh o\'qituvchi" nominatsiyasi.', students: 450,
    email: 'd.torayeva@10-maktab.uz', consultation: 'Chorshanba, 15:00 - 17:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 8, name: 'Rustam Saidov', subject: 'Kimyo', experience: '11 yillik professional tajriba',
    bio: 'Rustam Saidov kimyo fanini chuqur biladigan va o\'quvchilarga laboratoriya ko\'nikmalarini o\'rgatadigan mohir pedagog.',
    education: 'Oliy ma\'lumotli, Kimyo o\'qituvchisi (O\'zMU)',
    achievements: 'Xalqaro kimyo olimpiadasi g\'oliblarini tayyorlagan.', students: 350,
    email: 'r.saidov@10-maktab.uz', consultation: 'Juma, 13:00 - 15:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 9, name: 'Aziza Karimova', subject: 'Geografiya', experience: '9 yillik professional tajriba',
    bio: 'Aziza Karimova geografiya fanini zamonaviy metodikalar asosida o\'rgatib, o\'quvchilarga dunyoni kashf etish imkonini beradi.',
    education: 'Oliy ma\'lumotli, Geografiya o\'qituvchisi (O\'zMU)',
    achievements: '"Yil o\'qituvchisi - 2021" tanlovi ishtirokchisi.', students: 300,
    email: 'a.karimova@10-maktab.uz', consultation: 'Seshanba, 10:00 - 12:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 10, name: 'Olimjon Yo\'ldoshev', subject: 'Adabiyot', experience: '25 yillik professional tajriba',
    bio: 'Olimjon Yo\'ldoshev adabiyot fanining eng tajribali o\'qituvchilaridan biri bo\'lib, o\'quvchilarga she\'riyat va nasrni sevishni o\'rgatadi.',
    education: 'Oliy ma\'lumotli, Filolog-o\'qituvchi (Toshkent Davlat Pedagogika Universiteti)',
    achievements: 'Oliy toifali o\'qituvchi, "Xalq ta\'limi fidoyisi".', students: 900,
    email: 'o.yoldoshev@10-maktab.uz', consultation: 'Dushanba, 14:00 - 16:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 11, name: 'Farhod Aliyev', subject: 'Jismoniy tarbiya', experience: '7 yillik professional tajriba',
    bio: 'Farhod Aliyev sportning turli yo\'nalishlari bo\'yicha o\'quvchilarni tayyorlaydi va ularning jismoniy rivojlanishiga katta e\'tibor beradi.',
    education: 'Oliy ma\'lumotli, Jismoniy tarbiya o\'qituvchisi (O\'zDJTI)',
    achievements: 'Sport ustasi, viloyat musobaqalari g\'oliblarini tayyorlagan.', students: 500,
    email: 'f.aliyev@10-maktab.uz', consultation: 'Chorshanba, 11:00 - 13:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 12, name: 'Laylo Maqsudova', subject: 'Ona tili', experience: '13 yillik professional tajriba',
    bio: 'Laylo Maqsudova ona tili va adabiyot fanining malakali o\'qituvchisi bo\'lib, o\'quvchilarning savodxonligini oshirishga katta hissa qo\'shgan.',
    education: 'Oliy ma\'lumotli, Filolog-o\'qituvchi (O\'zDJTU)',
    achievements: 'Respublika olimpiadasi g\'oliblarini tayyorlagan.', students: 550,
    email: 'l.maqsudova@10-maktab.uz', consultation: 'Payshanba, 15:00 - 17:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 13, name: 'Sanjar Abduvaxobov', subject: 'Matematika', experience: '6 yillik professional tajriba',
    bio: 'Sanjar Abduvaxobov matematika fanining yosh va istiqbolli o\'qituvchisi bo\'lib, innovatsion yondashuvi bilan ajralib turadi.',
    education: 'Oliy ma\'lumotli, Matematika o\'qituvchisi (O\'zMU)',
    achievements: 'Xalqaro STEM olimpiadasi tayyorlovchisi.', students: 200,
    email: 's.abduvaxobov@10-maktab.uz', consultation: 'Seshanba, 15:00 - 17:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 14, name: 'Akmal Jo\'rayev', subject: 'Tarix', experience: '16 yillik professional tajriba',
    bio: 'Akmal Jo\'rayev tarix fanining bilimdon mutaxassisi bo\'lib, o\'quvchilarga milliy tarixni sevishni o\'rgatadi.',
    education: 'Oliy ma\'lumotli, Tarix o\'qituvchisi (O\'zMU)',
    achievements: 'Tarix fanidan respublika olimpiadasi g\'oliblarini tayyorlagan.', students: 600,
    email: 'a.jorayev@10-maktab.uz', consultation: 'Dushanba, 11:00 - 13:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 15, name: 'Nigora Salomova', subject: 'Ingliz tili', experience: '10 yillik professional tajriba',
    bio: 'Nigora Salomova ingliz tili fanining yetuk mutaxassisi bo\'lib, o\'quvchilarni xalqaro imtihonlarga tayyorlaydi.',
    education: 'Oliy ma\'lumotli, Filolog-ingliz tili o\'qituvchisi (O\'zDJTU)',
    achievements: 'IELTS 7.5, "Eng yaxshi yosh o\'qituvchi" nominatsiyasi.', students: 400,
    email: 'n.salomova@10-maktab.uz', consultation: 'Juma, 15:00 - 17:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 16, name: 'Sherzod Bekov', subject: 'Informatika', experience: '4 yillik professional tajriba',
    bio: 'Sherzod Bekov informatika va dasturlash bo\'yicha yosh mutaxassis bo\'lib, o\'quvchilarni zamonaviy IT bilimlari bilan tanishtiradi.',
    education: 'Oliy ma\'lumotli, Informatika o\'qituvchisi (TATU)',
    achievements: 'Robototexnika bo\'yicha hakam.', students: 150,
    email: 's.bekov@10-maktab.uz', consultation: 'Chorshanba, 14:00 - 16:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  },
  {
    id: 17, name: 'Ziyoda Ergasheva', subject: 'Biologiya', experience: '19 yillik professional tajriba',
    bio: 'Ziyoda Ergasheva biologiya fanining mohir o\'qituvchisi bo\'lib, o\'quvchilarga tabiatni asrash va ekologik madaniyatni shakllantirishda katta hissa qo\'shgan.',
    education: 'Oliy ma\'lumotli, Biologiya o\'qituvchisi (O\'zMU)',
    achievements: '"Oliy toifali o\'qituvchi", Ekologik loyihalar rahbari.', students: 650,
    email: 'z.ergasheva@10-maktab.uz', consultation: 'Payshanba, 10:00 - 12:00',
    image: 'teacher.png', telegram: '#', instagram: '#'
  }
]

const news: NewsItem[] = [
  {
    id: 0, title: 'Navro\'z bayrami tantanalari', category: 'Tadbir', date: '25 Mart, 2024',
    image: 'building.png',
    content: 'Maktabimizda Navro\'z umumxalq bayrami munosabati bilan "Xush kelding, Navro\'z!" deb nomlangan katta tadbir o\'tkazildi. Tadbirda o\'quvchilar milliy qo\'shiq va raqslar ijro etdilar, milliy taomlar namoyish etildi. Bayram \'an\'anaviy tarzda ko\'tarinki ruhda o\'tdi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimizda Navro\'z umumxalq bayrami munosabati bilan "Xush kelding, Navro\'z!" deb nomlangan katta tadbir o\'tkazildi.</p><p class="text-slate-500 leading-relaxed mb-10">Tadbirda o\'quvchilar milliy qo\'shiqlar kuylashdi, raqslar ijro etishdi va milliy taomlardan namunalar tayyorlashdi. Mehmonlar uchun maxsus konsert dasturi tashkil etildi.</p><blockquote class="my-12 p-10 md:p-14 bg-slate-50 border-l-[10px] border-secondary rounded-r-[2rem] relative"><i class="fas fa-quote-left absolute top-8 left-8 text-secondary/10 text-6xl"></i><p class="text-2xl font-black text-primary italic leading-relaxed relative z-10">"Navro\'z - bu yangilanish va birlik bayrami. Biz bu kuni bir-birimizga mehr-muhabbat va hurmatni yana bir bor his qilamiz."</p><cite class="block mt-8 text-secondary font-black not-italic uppercase tracking-widest text-sm">— Toshmatov E.G., Maktab direktori</cite></blockquote><p class="text-slate-500 leading-relaxed">Tadbir so\'ngida barcha ishtirokchilarga esdalik sovg\'alari topshirildi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 1, title: 'Bahorgi ta\'til kunlari', category: 'E\'lon', date: '20 Mart, 2024',
    image: 'students.png',
    content: 'O\'quvchilar va ota-onalar diqqatiga: 2024-yilgi bahorgi ta\'til 21-martdan boshlanib, 7 kalendar kun davom etadi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">O\'quvchilar va ota-onalar diqqatiga: 2026-yilgi bahorgi ta\'til jadvali e\'lon qilindi.</p><p class="text-slate-500 leading-relaxed mb-10">Bahorgi ta\'til 21-martdan boshlanib, 7 kalendar kun davom etadi. Ta\'til davomida o\'quvchilar uchun turli xil sport va madaniy tadbirlar tashkil etilgan.</p><p class="text-slate-500 leading-relaxed">Darslar 28-martdan boshlab odatdagi tartibda davom etadi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 2, title: 'Yangi AKT xonasi ochildi', category: 'Loyihalar', date: '15 Mart, 2024',
    image: 'library.svg',
    content: 'Maktabimizda eng zamonaviy kompyuterlar bilan jihozlangan yangi axborot texnologiyalari xonasi foydalanishga topshirildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimizda eng zamonaviy kompyuterlar bilan jihozlangan yangi axborot texnologiyalari xonasi foydalanishga topshirildi.</p><p class="text-slate-500 leading-relaxed mb-10">Yangi xona 30 ta zamonaviy kompyuter, interaktiv doska, 3D printer va VR qurilmalari bilan jihozlangan. Bu o\'quvchilarga IT sohasida chuqur bilim olish imkonini beradi.</p><p class="text-slate-500 leading-relaxed">Loyiha "Zamonaviy maktab" dasturi doirasida amalga oshirildi.</p>',
    readTime: '4 daqiqa o\'qiladi'
  },
  {
    id: 3, title: 'Futbol musobaqasi', category: 'Sport', date: '10 Mart, 2024',
    image: 'students.png',
    content: 'Sinf jamoalari o\'rtasida maktab birinchiligi yakunlandi. G\'olib jamoalar esdalik sovg\'alari bilan taqdirlandi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Sinf jamoalari o\'rtasida maktab birinchiligi yakunlandi.</p><p class="text-slate-500 leading-relaxed mb-10">Musobaqada 11-sinflardan tashkil topgan jamoalar ishtirok etishdi. Qizg\'in bellashuvlardan so\'ng 11-"A" sinf jamoasi g\'oliblikni qo\'lga kiritdi.</p><p class="text-slate-500 leading-relaxed">G\'olib va sovrindor jamoalar diplom va esdalik sovg\'alari bilan taqdirlandi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 4, title: 'Ona tili bayrami', category: 'Tadbir', date: '5 Mart, 2024',
    image: 'building.png',
    content: '"Til - millat boyligi" mavzusida o\'tkazilgan ijodiy kechada o\'quvchilar o\'z mahoratlarini namoyish etdilar.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">"Til - millat boyligi" mavzusida o\'tkazilgan ijodiy kechada o\'quvchilar o\'z mahoratlarini namoyish etdilar.</p><p class="text-slate-500 leading-relaxed mb-10">Kechada o\'quvchilar she\'rlar o\'qishdi, sahna ko\'rinishlari namoyish etishdi va ona tilining go\'zalligi haqida chiqishlar qilishdi.</p><p class="text-slate-500 leading-relaxed">Tadbir maktab o\'quvchilari va ota-onalar tomonidan katta qiziqish bilan kutib olindi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 5, title: 'Ochiq darslar haftaligi', category: 'E\'lon', date: '1 Mart, 2024',
    image: 'classroom.png',
    content: 'Tajribali o\'qituvchilar tomonidan o\'tkazilayotgan mahorat darslariga barcha xohlovchilarni taklif etamiz.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Tajribali o\'qituvchilar tomonidan o\'tkazilayotgan mahorat darslariga barcha xohlovchilarni taklif etamiz.</p><p class="text-slate-500 leading-relaxed mb-10">Ochiq darslar haftaligida har bir fan o\'qituvchisi o\'zining eng yaxshi dars usullarini namoyish etadi. Darslarda zamonaviy pedagogik texnologiyalardan foydalaniladi.</p><p class="text-slate-500 leading-relaxed">Ota-onalar va boshqa maktab o\'qituvchilari darslarda ishtirok etishlari mumkin.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 6, title: '"Yil o\'quvchisi" tanlovi yakunlari', category: 'Tadbir', date: '25 Mart, 2024',
    image: 'students.png',
    content: 'Maktabimizda yilning eng faol va bilimli o\'quvchisini aniqlash bo\'yicha yakuniy bosqich bo\'lib o\'tdi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimizda yilning eng faol va bilimli o\'quvchisini aniqlash bo\'yicha yakuniy bosqich bo\'lib o\'tdi.</p><p class="text-slate-500 leading-relaxed mb-10">Tanlov davomida o\'quvchilar o\'zlarining intellektual salohiyati, ijodiy qobiliyatlari va jamoat ishlaridagi faolliklarini namoyish etishdi.</p><p class="text-slate-500 leading-relaxed">G\'oliblar diplom va qimmatbaho esdalik sovg\'alari bilan taqdirlandi.</p>',
    readTime: '4 daqiqa o\'qiladi'
  },
  {
    id: 7, title: 'Bahorgi ta\'til grafigi e\'lon qilindi', category: 'E\'lon', date: '20 Mart, 2024',
    image: 'classroom.png',
    content: 'O\'quvchilar va ota-onalar diqqatiga: bahorgi ta\'til kunlari va to\'garaklar jadvali tasdiqlandi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">O\'quvchilar va ota-onalar diqqatiga: bahorgi ta\'til kunlari va to\'garaklar jadvali tasdiqlandi.</p><p class="text-slate-500 leading-relaxed mb-10">Ta\'til 21-martdan 28-martga qadar davom etadi. Ta\'til davomida o\'quvchilar uchun sport va madaniy tadbirlar tashkil etiladi.</p><p class="text-slate-500 leading-relaxed">Darslar 29-mart kuni odatdagi tartibda boshlanadi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 8, title: 'Futbol bo\'yicha maktab birinchiligi', category: 'Sport', date: '15 Mart, 2024',
    image: 'building.png',
    content: 'Sinf jamoalari o\'rtasida o\'tkazilgan futbol turniri yakunlandi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Sinf jamoalari o\'rtasida o\'tkazilgan futbol turniri yakunlandi.</p><p class="text-slate-500 leading-relaxed mb-10">Turnirda 11 ta sinf jamoasi ishtirok etdi. Qizg\'in bellashuvlardan so\'ng 11-"A" sinf jamoasi g\'oliblikni qo\'lga kiritdi.</p><p class="text-slate-500 leading-relaxed">G\'olib va sovrindorlar diplom va esdalik sovg\'alari bilan taqdirlandi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 9, title: 'Yangi kitoblar jamlanmasi', category: 'Loyihalar', date: '10 Mart, 2024',
    image: 'library.svg',
    content: 'Kutubxonamiz o\'quvchilar uchun yangi adabiyotlar bilan boyitildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Kutubxonamiz o\'quvchilar uchun yangi adabiyotlar bilan boyitildi.</p><p class="text-slate-500 leading-relaxed mb-10">500 dan ortiq yangi kitoblar, jumladan, badiiy, ilmiy va o\'quv qo\'llanmalari kutubxona fondiga qo\'shildi.</p><p class="text-slate-500 leading-relaxed">Yangi kitoblar bilan kutubxonaning maxsus javonida tanishishingiz mumkin.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 10, title: 'Fan olimpiadalari boshlandi', category: 'E\'lon', date: '5 Mart, 2024',
    image: 'students.png',
    content: 'Maktab bosqichi g\'oliblari tuman bosqichiga yo\'l olishdi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Fan olimpiadalarining maktab bosqichi start oldi.</p><p class="text-slate-500 leading-relaxed mb-10">Matematika, fizika, kimyo, biologiya, tarix va ona tili fanlaridan olimpiadalar o\'tkazilmoqda.</p><p class="text-slate-500 leading-relaxed">G\'oliblar tuman bosqichida ishtirok etish huquqini qo\'lga kiritadilar.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 11, title: 'Ochiq darslar haftaligi', category: 'Tadbir', date: '1 Mart, 2024',
    image: 'classroom.png',
    content: 'Tajribali ustozlar o\'z mahoratlarini yoshlarga ulashishmoqda.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Tajribali ustozlar o\'z mahoratlarini yoshlarga ulashishmoqda.</p><p class="text-slate-500 leading-relaxed mb-10">Ochiq darslar haftaligida eng tajribali o\'qituvchilar o\'z dars usullarini namoyish etadilar.</p><p class="text-slate-500 leading-relaxed">Darslarda zamonaviy pedagogik texnologiyalardan foydalaniladi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 12, title: 'Shaxmat bo\'yicha turnir', category: 'Sport', date: '25 Fevral, 2024',
    image: 'building.png',
    content: 'Maktabimiz o\'quvchilari o\'rtasida shaxmat bo\'yicha qiziqarli musobaqa bo\'lib o\'tdi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimiz o\'quvchilari o\'rtasida shaxmat bo\'yicha qiziqarli musobaqa bo\'lib o\'tdi.</p><p class="text-slate-500 leading-relaxed mb-10">Turnirda 30 dan ortiq o\'quvchi ishtirok etdi. O\'yinlar shveysariya tizimi asosida o\'tkazildi.</p><p class="text-slate-500 leading-relaxed">G\'oliblarga maxsus sovg\'alar topshirildi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 13, title: 'Xalqaro hamkorlik memorandumi', category: 'Loyihalar', date: '20 Fevral, 2024',
    image: 'library.svg',
    content: 'Maktabimiz ta\'lim sifatini oshirish maqsadida xalqaro loyihalarga qo\'shildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimiz ta\'lim sifatini oshirish maqsadida xalqaro loyihalarga qo\'shildi.</p><p class="text-slate-500 leading-relaxed mb-10">Xorijiy ta\'lim muassasalari bilan hamkorlik memorandumi imzolandi.</p><p class="text-slate-500 leading-relaxed">Ushbu hamkorlik o\'quvchilarimizga yangi imkoniyatlar yaratadi.</p>',
    readTime: '4 daqiqa o\'qiladi'
  },
  {
    id: 14, title: 'Ota-onalar majlisi o\'tkaziladi', category: 'E\'lon', date: '15 Fevral, 2024',
    image: 'students.png',
    content: 'Yaqinlashib kelayotgan chorak yakunlari bo\'yicha ota-onalar majlisi bo\'lib o\'tadi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Yaqinlashib kelayotgan chorak yakunlari bo\'yicha ota-onalar majlisi bo\'lib o\'tadi.</p><p class="text-slate-500 leading-relaxed mb-10">Majlisda o\'quvchilarning o\'zlashtirish ko\'rsatkichlari va yangi chorak rejalari muhokama qilinadi.</p><p class="text-slate-500 leading-relaxed">Barcha ota-onalar taklif etiladi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 15, title: 'Kitobxonlik tanlovi g\'oliblari', category: 'Tadbir', date: '10 Fevral, 2024',
    image: 'classroom.png',
    content: 'Eng ko\'p kitob o\'qigan o\'quvchilarimiz maktab rahbariyati tomonidan taqdirlandi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Eng ko\'p kitob o\'qigan o\'quvchilarimiz maktab rahbariyati tomonidan taqdirlandi.</p><p class="text-slate-500 leading-relaxed mb-10">Kitobxonlik tanlovi 3 oy davomida bo\'lib o\'tdi. Eng faol o\'quvchilar maxsus diplom va sovg\'alar bilan rag\'batlantirildi.</p><p class="text-slate-500 leading-relaxed">Maktab kutubxonasi eng ko\'p kitob o\'qigan o\'quvchilar ro\'yxatini e\'lon qildi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 16, title: 'Basketbol bo\'yicha musobaqa', category: 'Sport', date: '5 Fevral, 2024',
    image: 'building.png',
    content: 'Yaqin kunlarda sinflararo basketbol turniri start oladi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Yaqin kunlarda sinflararo basketbol turniri start oladi.</p><p class="text-slate-500 leading-relaxed mb-10">Turnirda yuqori sinf o\'quvchilari ishtirok etishadi. Musobaqa olimpiya tizimi asosida o\'tkaziladi.</p><p class="text-slate-500 leading-relaxed">Saralash o\'yinlari hafta oxirida boshlanadi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 17, title: 'Yangi STEM laboratoriyasi', category: 'Loyihalar', date: '1 Fevral, 2024',
    image: 'library.svg',
    content: 'Maktabimizda zamonaviy STEM laboratoriyasi o\'z faoliyatini boshladi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimizda zamonaviy STEM laboratoriyasi o\'z faoliyatini boshladi.</p><p class="text-slate-500 leading-relaxed mb-10">Laboratoriya robototexnika, 3D modellashtirish va dasturlash yo\'nalishlarida zamonaviy jihozlar bilan ta\'minlangan.</p><p class="text-slate-500 leading-relaxed">O\'quvchilar laboratoriyada bepul shug\'ullanishlari mumkin.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 18, title: 'Vatan himoyachilari kuni', category: 'E\'lon', date: '25 Yanvar, 2024',
    image: 'students.png',
    content: '14-yanvar – Vatan himoyachilari kuni munosabati bilan bayram tadbiri o\'tkazildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">14-yanvar – Vatan himoyachilari kuni munosabati bilan bayram tadbiri o\'tkazildi.</p><p class="text-slate-500 leading-relaxed mb-10">Tadbirda o\'quvchilar she\'rlar o\'qishdi, harbiy-vatanparvarlik qo\'shiqlarini ijro etishdi.</p><p class="text-slate-500 leading-relaxed">Faxriylar bilan uchrashuv tashkil etildi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 19, title: 'Zakovat o\'yinlari', category: 'Tadbir', date: '20 Yanvar, 2024',
    image: 'classroom.png',
    content: 'Zakovat intellektual o\'yini doirasida sinflararo navbatdagi bahs bo\'lib o\'tdi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Zakovat intellektual o\'yini doirasida sinflararo navbatdagi bahs bo\'lib o\'tdi.</p><p class="text-slate-500 leading-relaxed mb-10">Har bir sinfdan 5 nafardan o\'quvchi ishtirok etdi. Savollar maktab o\'quv dasturi va umumiy bilimlar asosida tuzilgan.</p><p class="text-slate-500 leading-relaxed">O\'yin qizg\'in va qiziqarli tarzda o\'tdi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 20, title: 'Yengil atletika bo\'yicha g\'oliblar', category: 'Sport', date: '15 Yanvar, 2024',
    image: 'building.png',
    content: 'Viloyat bosqichida o\'quvchilarimiz shohsupaga ko\'tarildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Viloyat bosqichida o\'quvchilarimiz shohsupaga ko\'tarildi.</p><p class="text-slate-500 leading-relaxed mb-10">O\'quvchilarimiz yengil atletika bo\'yicha viloyat musobaqasida 3 ta oltin, 2 ta kumush va 1 ta bronza medalini qo\'lga kiritdi.</p><p class="text-slate-500 leading-relaxed">G\'oliblarni maktab rahbariyati tabrikladi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 21, title: 'Maktab kutubxonasi modernizatsiyasi', category: 'Loyihalar', date: '10 Yanvar, 2024',
    image: 'library.svg',
    content: 'Elektron kitoblar bazasini kengaytirish bo\'yicha yangi tizim yo\'lga qo\'yildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Elektron kitoblar bazasini kengaytirish bo\'yicha yangi tizim yo\'lga qo\'yildi.</p><p class="text-slate-500 leading-relaxed mb-10">Kutubxonada 1000 dan ortiq elektron kitoblar mavjud bo\'lib, o\'quvchilar ularni maxsus platforma orqali o\'qishlari mumkin.</p><p class="text-slate-500 leading-relaxed">Zamonaviy kutubxona tizimi o\'quv jarayonini yanada samarali qiladi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  },
  {
    id: 22, title: 'Yangi yilda yangi muvaffaqiyatlar', category: 'E\'lon', date: '5 Yanvar, 2024',
    image: 'students.png',
    content: 'Maktabimiz rahbari o\'quvchilarni yangi o\'quv yili bilan tabrikladi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Maktabimiz rahbari o\'quvchilarni yangi o\'quv yili bilan tabrikladi.</p><p class="text-slate-500 leading-relaxed mb-10">Yangi yilda o\'quvchilarga katta maqsadlar sari intilish va bilim olishda muvaffaqiyatlar tilandi.</p><p class="text-slate-500 leading-relaxed">Tantanali tadbirda eng faol o\'quvchilar taqdirlandi.</p>',
    readTime: '2 daqiqa o\'qiladi'
  },
  {
    id: 23, title: 'Yangi yil bayram tadbiri', category: 'Tadbir', date: '1 Yanvar, 2024',
    image: 'classroom.png',
    content: 'Barcha maktab o\'quvchilari ishtirokida unutilmas bayram dasturi o\'tkazildi.',
    fullContent: '<p class="text-xl text-slate-600 leading-[1.8] font-medium mb-10">Barcha maktab o\'quvchilari ishtirokida unutilmas bayram dasturi o\'tkazildi.</p><p class="text-slate-500 leading-relaxed mb-10">Yangi yil bayrami munosabati bilan katta konsert dasturi, qiziqarli o\'yinlar va musobaqalar tashkil etildi.</p><p class="text-slate-500 leading-relaxed">Tadbir so\'ngida barcha o\'quvchilarga esdalik sovg\'alari topshirildi.</p>',
    readTime: '3 daqiqa o\'qiladi'
  }
]

const CATEGORY_STYLES: Record<string, { badgeBg: string; textColor: string }> = {
  'Tadbir': { badgeBg: 'bg-secondary/90', textColor: 'text-secondary' },
  'E\'lon': { badgeBg: 'bg-accent/90', textColor: 'text-accent' },
  'Sport': { badgeBg: 'bg-green-500/90', textColor: 'text-green-500' },
  'Loyihalar': { badgeBg: 'bg-primary/90', textColor: 'text-primary' },
}

export const useData = () => {
  const teachersList = teachers
  const newsList = news
  const categoryStyles = CATEGORY_STYLES

  function getTeacherById(id: number) {
    return teachers.find(t => t.id === id) || null
  }

  function getNewsById(id: number) {
    return news.find(n => n.id === id) || null
  }

  return { teachersList, newsList, categoryStyles, getTeacherById, getNewsById }
}
