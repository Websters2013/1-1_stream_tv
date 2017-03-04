require 'date'

videos = [
    {
        name: "Життя після життя. 1 серія",
        url: "https://www.youtube.com/watch?v=EMuJYcDcXYM",
        duration: "0:47",
        actors: [ "Леонід Купрідо", "Андрій Чивуріна", "Олександр Кушнаренко", "Валентин Іванов" ],
        tags: [ "#сериал", "#прем'єра", "#фільм", "#драма", "#мелодрама", "#новини", "#новини",  "#кохання" ],
        start: "0:00"
    },
    {
        name: "Папараці. 4 серія",
        url: "https://www.youtube.com/watch?v=qBWTOR0DJlI&list=PLzg4Ge9VHZEzJUySETmJkzUPnHFYhde_3",
        duration: "0:45",
        actors: [ "Анастасия Сердюк", "Сергей Сипливый", "Остап Ступка", "Александр Пискунов" ],
        tags: [  "#сериал", "#фільм", "#драма", "#комедия", "#новини"  ],
        start: "0:47"
    },
    {
        name: "Чудо по расписанию. 1 серия",
        url: "https://www.youtube.com/watch?v=OD_-C5fnz-c",
        duration: "0:46",
        actors: [ "Денис Мартынов", "Дарья Трегубова", "Дмитрий Лаленков", "Инна Мирошниченко" ],
        tags: [ "#сериал", "#прем'єра", "#фільм", "#новини", "#новини 1+1", "#кохання" ],
        start: "1:32"
    },
    {
        name: "Гаджети для крадіїв",
        url: "https://www.youtube.com/watch?v=K5q2TXTe7AQ",
        duration: "0:11",
        actors: [ "Олександр Дубінський" ],
        tags: [ "#телепрограма", "#грощі", "#телепрограмма", "#корупция", "#преступления" ],
        start: "2:18"
    },
    {
        name: "Проводимо вихідні разом зі 'Сніданком. Вихідний'!",
        url: "https://www.youtube.com/watch?v=LXwtaKm4Bs0",
        duration: "0:35",
        actors: [ "Алла Мазур", "Анатолій Анатоліч", "Руслан Сенічкін" ],
        tags: [ "#телепрограма", "#ранок", "#вихідні", "#телепрограма" ],
        start: "2:29"
    },
    {
        name: "ТСН",
        url: "https://www.youtube.com/watch?v=n6GM5qwcQuM",
        duration: "0:51",
        actors: [ "Алла Мазур"],
        tags: ["#телепрограма", "#новости", "#новое", "#прошествия"],
        start: "3:04"
    },
    {
        name: "Право на владу за 2 березня 2017 року",
        url: "https://www.youtube.com/watch?v=CDD5_LKJWNw",
        duration: "1:22",
        actors: [ "Мосейчук" ],
        tags: [ "#телепрограма", "#ведущая", "#соведущая", "#ток-шоу", "#блогер", "#иванов", "#тсн", "#мосейчук" ],
        start: "3:55"
    },
    {
        name: "МИР НАИЗНАНКУ",
        url: "https://www.youtube.com/watch?v=fIiQveCJb3s",
        duration: "0:51",
        actors: ["Дмитрий Коморов" ],
        tags: ["#телепрограма", "#путишестсия"],
        start: "5:17"
    },
    {
        name: "На ножах",
        url: "https://www.youtube.com/watch?v=jSpRVt2Bj4w",
        duration: "1:14",
        actors: [ "Ольга фреймут"],
        tags: ["телепрограмма", "реаліті-шоу"],
        start: "6:08"
    },
    {
        name: "Українські сенсації",
        url: "https://www.youtube.com/watch?v=Uckj1Wq2ybY",
        duration: "0:40",
        actors: [ "Департамент журналістських розслідувань телеканалу 1+1" ],
        tags: [ "#телепрограма", "#новости", "#новое", "#прошествия" ],
        start: "7:22"
    },
    {
        name: "Переломний момент",
        url: "https://www.youtube.com/watch?v=TPihsNram7I",
        duration: "1:33",
        actors: [ "Марк Джонатан Харріс"],
        tags: ["#документальный фильм", "#новости"],
        start: "8:02"
    },
    {
        name: "Секретні матеріали",
        url: "https://www.youtube.com/watch?v=LL3uCsKbcyw&list=PLzg4Ge9VHZEy73oLWze01uB3OxxLXji1A&index=1",
        duration: "0:20",
        actors: ["Департамент журналістських розслідувань телеканалу 1+1" ],
        tags: ["#новости", "#новое", "#прошествия"],
        start: "9:35"
    },
    {
        name: "Одруження наосліп",
        url: "https://www.youtube.com/watch?v=1g75rJC0qIg",
        duration: "1:24",
        actors: [  ],
        tags: [ "#телепрограмма", "#реаліті-шоу" ],
        start: "9:55"
    },
    {
        name: "Село на мільйон",
        url: "https://www.youtube.com/watch?v=0RjgA1KNoHw",
        duration: "0:51",
        actors: [ "Дмитро Сова", "Анна Кошмал", "Костянтин Войтенко" ],
        tags: [ "#прем'єра", "#фільм","#драма", "#мелодрама","#новини" ,"#кохання" ],
        start: "11:19"
    },
    {
        name: "Центральная больница",
        url: "https://www.youtube.com/watch?v=IDKhVL_FoNA&index=2&list=PLzg4Ge9VHZEz9Voc8pOdDu6_u23HJmi9O",
        duration: "0:45",
        actors: [ "Станіслав Боклан", "Катерина Вострікова" ],
        tags: [ "#прем'єра", "#фільм","#драма", "#мелодрама","#новини" ,"#кохання" ],
        start: "12:10"
    },
    {
        name: "Українські сенсації",
        url: "https://www.youtube.com/watch?v=6k6KklgU5os",
        duration: "0:43",
        actors: [ "Департамент журналістських розслідувань телеканалу 1+1"],
        tags: ["#новости", "#новое", "#прошествия"],
        start: "12:55"
    },
    {
        name: "Ті, що вражають",
        url: "https://www.youtube.com/watch?v=wHlzL_As3xI",
        duration: "1:57",
        actors: [ "Департамент журналістських розслідувань телеканалу 1+1"],
        tags: ["#новости", "#новое", "#прошествия"],
        start: "13:38"
    },
    {
        name: "Инспектор Фреймут",
        url: "https://www.youtube.com/watch?v=PN0VX_WNLUU",
        duration: "1:09",
        actors: [ "Ольга фреймут"],
        tags: ["#телепрограмма", "#реаліті-шоу"],
        start: "15:35"
    },
    {
        name: "Світського життя",
        url: "https://www.youtube.com/watch?v=AZRQfuHquxA",
        duration: "1:47",
        actors: ["Катерина Осача" ],
        tags: ["#телепрограмма", "#реаліті-шоу"],
        start: "16:44"
    },
    {
        name: "Пеклеьна кухня",
        url: "https://www.youtube.com/watch?v=U0cRpLa1fZM",
        duration: "0:35",
        actors: [ "Ара́м Миха́йлович Мнацака́нов" ],
        tags: [ "#реаліті-шоу", "#телепрограмма", "#реаліті-шоу" ],
        start: "18:31"
    },
    {
        name: "Спецкор",
        url: "https://www.youtube.com/watch?time_continue=12&v=eflGXYzdkr8",
        duration: "0:30",
        actors: [ "Департамент журналістських розслідувань телеканалу 1+1" ],
        tags: [ "#телепрограма", "#новости", "#новое", "#прошествия" ],
        start: "19:06"
    },
    {
        name: "МИР НАИЗНАНКУ",
        url: "https://www.youtube.com/watch?v=64G7ObR5FhA",
        duration: "1:02",
        actors: [ "Дмитрий Коморов" ],
        tags: [ "#телепрограма", "#путишестсия" ],
        start: "19:36"
    },
    {
        name: "ЛавЛавCar",
        url: "https://www.youtube.com/watch?v=AE9rvtacQOU",
        duration: "0:48",
        actors: [ ],
        tags: [ "#реаліті-шоу", "#телепрограмма", "#реаліті-шоу" ],
        start: "20:38"
    },
    {
        name: "Життя після життя.",
        url: "https://www.youtube.com/watch?v=MFJMzLZKPiE",
        duration: "0:43",
        actors: [ "Леонід Купрідо"," Андрій Чивуріна", "Олександр Кушнаренко", "Валентин Іванов" ],
        tags: [ "#сериал", "#прем'єра", "#фільм", "#драма", "#мелодрама", "#новини", "#кохання" ],
        start: "21:26"
    },
    {
        name: "Одруження наосліп",
        url: "https://www.youtube.com/watch?v=1g75rJC0qIg&t=87s",
        duration: "1:24",
        actors: [ ],
        tags: [ "#реаліті-шоу", "#телепрограмма", "#реаліті-шоу" ],
        start: "22:09"
    },
    {
        name: "Українські сенсації",
        url: "https://www.youtube.com/watch?v=Uckj1Wq2ybY&t=1s",
        duration: "0:40",
        actors: [ "Департамент журналістських розслідувань телеканалу 1+1" ],
        tags: [ "#телепрограма", "#новости", "#новое", "#прошествия" ],
        start: "23:49"
    },
    {
        name: "Гроші Пенсійний туризм в АТО",
        url: "https://www.youtube.com/watch?v=awMc_oLvTKU",
        duration: "0:54",
        actors: [ "Департамент журналістських розслідувань телеканалу 1+1" ],
        tags: [ "#телепрограма", "#новости", "#новое", "#прошествия" ],
        start: "24:29"
    },
    {
        name: "Село на мільйон. 2 серія. Частина 1",
        url: "https://www.youtube.com/watch?v=IfCHt4jBYNk",
        duration: "0:20",
        actors: [ "Дмитро Сова", "Анна Кошмал", "Костянтин Войтенко" ],
        tags: [ "#сериал", "#прем'єра", "#фільм", "#драма", "#мелодрама", "#новини", "#новини", "#кохання" ],
        start: "25:23"
    },
    {
        name: "Найкращий тиждень мого життя. 2 серія",
        url: "https://www.youtube.com/watch?v=-k1J_NkYGJo",
        duration: "0:19",
        actors: [ "Катерина Вострикова" ],
        tags: [ "#сериал", "#прем'єра", "#фільм", "#драма", "#мелодрама", "#новини", "#кохання" ],
        start: "25:43"
    },

     {
         name: "Хозяйка",
         url: "https://www.youtube.com/watch?v=0B4jA2Mvgy4&list=PLzg4Ge9VHZEwbxQ8vlWbQ8HjyOkKPSA5I&index=1",
         duration: "0:50",
         actors: [ "Анна Кошмал Екатерина", "Константин Войтенко", "Александра Перепелица" ],
         tags: ["прем'єра", "фільм","драма", "мелодрама", "новини","новини" ,"кохання"],
         start: "26:02"
     },
     {
         name: "Мир Наизнанку",
         https: "//www.youtube.com/watch?v=L1wAWpDynhchttps://www.youtube.com/watch?v=L1wAWpDynhc",
         duration: "1:02",
         actors: [ "Дмитрий Коморов" ],
         tags: ["путишестсия"],
         start: "26:52"
     },
     {
         name: "інспектор Фреймут",
         https: "https://www.youtube.com/watch?v=PN0VX_WNLUU",
         duration: "1:09",
         actors: [ "Ольга фреймут"],
         tags: ["телепрограмма", "реаліті-шоу"],
         start: "26:52"
     },
     {
          name: "На ножах",
          https: "https://www.youtube.com/watch?v=QOXJyx9mfec",
          duration: "1:21",
          actors: [ "Ольга фреймут"],
          tags: ["телепрограмма", "реаліті-шоу"],
          start: "29:03"
     },
     {
          name: "Центральная больница. 5 серия",
          https: "https://www.youtube.com/watch?v=rE1iZc2SoeI",
          duration: "0:45",
          actors: [ "Станіслав Боклан", "Катерина Вострікова"],
          tags: ["прем'єра", "фільм","драма", "мелодрама", "новини","новини" ,"кохання"],
          start: "30:24"
     },
     {
          name: "Папарацци. 2 серия",
          https: "https://www.youtube.com/watch?v=eIcu5HsKG_k&list=PLzg4Ge9VHZEzJUySETmJkzUPnHFYhde_3&index=3",
          duration: "0:47",
          actors: [ " Анастасия Сердюк" , "Сергей Сипливый", "Остап Ступка", "Александр Пискунов"],
          tags: ["фільм", "драма","комедия", "новини "],
          start: "31:09"
     },
     {
           name: "Все одно ти будеш мій. Серія 1",
           https: "https://www.youtube.com/watch?v=OCREvJRZYYY",
           duration: "0:48",
           actors: [ "Станіслав Боклан", "Катерина Вострікова"],
           tags: ["прем'єра", "фільм","драма", "мелодрама", "новини","новини" ,"кохання"],
           start: "31:56"
     }
]

time = 1488492000 + 86400

videos.each do |video|

  length = video[ :duration ].split(':')
  length2 = video[ :start ].split(':')

  actors = []

  video[ :actors ].each do |actor|
    Actor.create( name: actor ) unless Actor.find_by( name: actor )
  end

  video[ :tags ].each do |tag|
    Hashtag.create( name: tag ) unless Hashtag.find_by( name: tag )
  end
  t1 = time + ( length2[ 0 ].to_i * 3600 ) + ( length2[ 1 ].to_i * 60 )
  t2 = time + ( length2[ 0 ].to_i * 3600 ) + ( length2[ 1 ].to_i * 60 ) + ( length[ 0 ].to_i * 3600 ) + ( length[ 1 ].to_i * 60 )


  vidosik = Video.create( {
                  name: video[ :name ],
                  url: video[ :url ],
                  time_start: DateTime.strptime("#{t1}",'%s'),
                  time_end: DateTime.strptime("#{t2}",'%s')
                } )

  vidosik.actors << Actor.where( name: video[ :actors ] )
  vidosik.hashtags << Hashtag.where( name: video[ :tags ] )
  vidosik.save
end

