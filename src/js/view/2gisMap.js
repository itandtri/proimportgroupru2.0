'use strict'







        function init(){
            
          

            const spbMap = new ymaps.Map("map-spb", {
                center: [59.940589, 30.252312],
                zoom: 18,
                behaviors: ['drag','multitouch','scrollZoom'],
                controls:["zoomControl"]

            });
            spbMap.geoObjects.add(new ymaps.Placemark([59.940689, 30.252800] , 
                {
                    hintContent: 'Санкт-Петербург, Малый просп. В.О., 62, корп. 1',
                    balloonContent: 'Санкт-Петербург, Малый просп. В.О., 62, корп. 1'
                },{
                iconLayout: 'default#image',
                iconImageHref:'../../data/maplogo.svg',
                iconImageSize:[80,60]
            }))

            const kzMap = new ymaps.Map("map-kz", {
                center: [43.261584, 76.954924],
                zoom: 18,
                behaviors: ['drag','multitouch','scrollZoom'],
                controls:["zoomControl"]

            });


            kzMap.geoObjects.add(new ymaps.Placemark([43.261584, 76.954924] , 
                {
                    hintContent: 'Алматы, Бизнес-центр Квартал, Проспект Жибек Жолы 50 офис 13',
                    balloonContent: 'Алматы, Бизнес-центр Квартал, Проспект Жибек Жолы 50 офис 13'
                },
                {
                iconLayout: 'default#image',
                iconImageHref:'../../data/maplogo.svg',
                iconImageSize:[80,60]
            }))
            
           


            
            const ruMap = new ymaps.Map("map-ru", {
                center: [53.340640, 83.795847],
                zoom: 18,
                behaviors: ['drag','multitouch','scrollZoom'],
                controls:["zoomControl"]

            });
            ruMap.geoObjects.add(new ymaps.Placemark([53.340640, 83.795847] , 
                {
                    hintContent: 'Барнаул, ул. Интернациональная 25',
                    balloonContent: 'Барнаул, ул. Интернациональная 25'
                },{
                iconLayout: 'default#image',
                iconImageHref:'../../data/maplogo.svg',
                iconImageSize:[80,60]
            }))
          


 
        
        }

        ymaps.ready(init);
