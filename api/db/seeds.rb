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
    }
]

time = 1488492000

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

  vidosik = Video.create( {
                  name: video[ :name ],
                  url: video[ :url ],
                  time_start: time + ( length2[ 0 ].to_i * 3600 ) + ( length2[ 1 ].to_i * 60 ),
                  time_end: time + ( length2[ 0 ].to_i * 3600 ) + ( length2[ 1 ].to_i * 60 ) + ( length[ 0 ].to_i * 3600 ) + ( length[ 1 ].to_i * 60 )
                } )

  vidosik.actors << Actor.where( name: video[ :actors ] )
  vidosik.hashtags << Hashtag.where( name: video[ :tags ] )
  vidosik.save
end

