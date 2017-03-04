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
        name: "",
        url: "",
        duration: "",
        actors: [ ],
        tags: [],
        start: ""
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

