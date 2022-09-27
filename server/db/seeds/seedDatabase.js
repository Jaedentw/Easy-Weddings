module.exports = `


  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Kosta','Vlahakis','Canada','Ontario','Toronto','75 Oakwood dr.','L4S 1P6','kostakv@outlook.com','6477778888','$2a$10$U35lMD9rB38wy/itPaVKWekIlKgFxQN.ujMfNAkQ1fOYpkc19OWqC');

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Andrew','Gort','Canada','Ontario','Toronto','652 Springs st','N2J 7N3','andrewgort@gmail.com','6474547878','password');

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Sam','shoe','Canada','Ontario','Toronto','87 Queen St','M4N 1P6','samshoe@gmail.com','9057778888','password');
      
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Stacy','Lavender','Canada','Ontario','Toronto','410 Bayview','L4P 1J7','Staceylavender@gmail.com','6478989999','password');
  
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Mike','Mcdonald','Canada','Ontario','Toronto','78 pine street','L4S 1P9','mikemc@gmail.com','6476665656','password');
  
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Adrian','hooper','Canada','Ontario','Toronto','89 mapleview','N2J 8B3','adrianhooper@gmail.com','6474549922','password');
  
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Luca','Modric','Canada','Ontario','Toronto','34 hazel wood dr','L8V 1P7','Lucamodric@gmail.com','9058889845','password');
        
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Tiffany','flowers','Canada','Ontario','Toronto','89 painted rock','L4S 1P6','tiffflowers@gmail.com','6475658978','password');

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Yukon','Mavrik','Canada','Ontario','Toronto','700 Dufferin','N7V 2P4','yukonmav@gmail.com','9057876655','password');
          
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password) VALUES (
    'Sarah','Jenko','Canada','Ontario','Toronto','3467 bathurst','L4P 9J6','sarahjenko','6476778965','password');
    


  INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
  '1',
  'WebURL',
  'Honeymoon Hill',
  'Canada',
  'Ontario',
  'Toronto',
  '4517 Bloor st. EST',
  'L4S N6B',
  'honeymoonhill@gmail.com',
  '9057393427');

  INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
    '2',
    'WebURL',
    'Royal Oak',
    'Canada',
    'Ontario',
    'Toronto',
    '37 Oakwood Dr.',
    'B4S T9B',
    'Royaloakweddings@gmail.com',
    '9058235423');

    INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
      '3',
      'WebURL',
      'Rustic Gold Chapel',
      'Canada',
      'Ontario',
      'Toronto',
      '4773 Church st.',
      'M5G 4H7',
      'Rusticgold@gmail.com',
      '9057778845');
    
      INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
        '4',
        'WebURL',
        'The Gazebo', 
        'Canada',
        'Ontario',
        'Toronto',
        '75 Queen St E.',
        'N4S 8N4',
        'Thegazebonights@gmail.com',
        '9056678745');

        INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
          '5',
          'WebURL',
          'Tropical Paradise',
          'Canada',
          'Ontario',
          'Toronto',
          '567 Westlake',
          'N2P 5T3',
          'paradiseweddings@gmail.com',
          '9053337667');

          INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
            '6',
            'WebURL',
            'Ocean Blue',
            'Canada',
            'Ontario',
            'Toronto',
            '43 Bloor St.',
            'N7Y 5H3',
            'Oceanblue@gmail.com',
            '9052325823');

            INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
              '7',
              'WebURL',
              'Chateau Gardens',
              'Canada',
              'British Columbia',
              'Vancouver',
              '65 Burrard Street',
              'V5N 6G6',
              'ChateauGardens@gmail.com',
              '6047672322');

              INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
                '8',
                'WebURL',
                'Bartlett Manor',
                'Canada',
                'British Columbia',
                'Vancouver',
                '232 Burrard Street',
                'V5N 6N7',
                'Barlettmanor@gmail.com',
                '6047882563');

                INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
                  '9',
                  'WebURL',
                  'Meadowlands',
                  'Canada',
                  'British Columbia',
                  'Vancouver',
                  '174 Burrard Street',
                  'V5N 7P3',
                  'Meadowlands@gmail.com',
                  '6043226787');

                  INSERT INTO businesses (user_id,website_url,name,county,province,city,address,postal_code,email,phone) VALUES (
                    '10',
                    'WebURL',
                    'Grand Mansion',
                    'Canada',
                    'British Columbia',
                    'Vancouver',
                    '500 Burrard Street',
                    'V5N 1P6',
                    'Grand Mansion@gmail.com',
                    '6048998989');

  
    INSERT INTO caterers (business_id,image_url,capacity,cuisine,menu_url,description) VALUES (
      '1',
      'https://www.classiccaterers.ca/uploads/1/3/6/5/136543716/published/top-rated-catering-service-niagara.png?1615309848',
      '50',
      'BBQ',
      'MenuURL',
      'Our service offers amazing dishes of all varieties to ensure everyone enjoys their meals!'
    );

    INSERT INTO caterers (business_id,image_url,capacity,cuisine,menu_url,description) VALUES (
      '2',
      'https://mk.ca/wp-content/uploads/2017/04/008.jpg',
      '150',
      'Open course',
      'MenuURL',
      'Enjoy our service with a buffet style dinner, eat as much as you like we got you covered!'
    );

    INSERT INTO caterers (business_id,image_url,capacity,cuisine,menu_url,description) VALUES (
      '3',
      'https://www.bostonindiancatering.com/blog-admin/images/the-best-indian-wedding-food-caterers-available-online050051.jpeg',
      '75',
      'sea food',
      'MenuURL',
      'We offer the best sea food meals for any event!'
    );

    INSERT INTO caterers (business_id,image_url,capacity,cuisine,menu_url,description) VALUES (
      '4',
      'https://brettones.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-28631016/images/5991eb3864cef9Pu1fXG/Brettomenu_d600.jpg',
      '200',
      'Italian',
      'MenuURL',
      'We will ensure your entire family and friends are well fed with are vast selection of italian food!'
    );

    INSERT INTO caterers (business_id,image_url,capacity,cuisine,menu_url,description) VALUES (
      '5',
      'https://www.mawaskitchen.com/wp-content/uploads/soups-in-flight-2020.jpg',
      '150',
      'Soups',
      'MenuURL',
      'We have the best soups around, choose any type or amount, we got you covered!'
    );

    
    INSERT INTO decorators (business_id,image_url,specialty,description,theme) VALUES (
      '6',
      'https://media.weddingz.in/images/89a9671bca73f2fcf2f5bcbbf8fe7ba1/top-5-wedding-decorators-in-chandigarh-who-can-create-that-magical-setting-for-you-2.jpg',
      'pink',
      'Let us turn your event into a princess theme experience!',
      'princess'
    );

    INSERT INTO decorators (business_id,image_url,specialty,description,theme) VALUES (
      '7',
      'https://miro.medium.com/max/1400/0*NWYFtAjpEZwozsQc.jpg',
      'classical',
      'Our service will make your wedding very traditional and classical',
      'traditional'
    );

    INSERT INTO decorators (business_id,image_url,specialty,description,theme) VALUES (
      '8',
      'https://greenweddingshoes.com/wp-content/uploads/2019/12/lushindustrial-wedding-thumb.jpg',
      'capacity',
      'Want a modern look for your venue? choose us as your decorators, ANY size',
      'modern'
    );

    INSERT INTO decorators (business_id,image_url,specialty,description,theme) VALUES (
      '9',
      'https://www.theknot.com/tk-media/images/a48b8802-d4ab-4d4b-b0ee-b4b5ce33df8b~rs_768.h',
      'Environmental',
      'Any environment does not matter! we will make your event connect with nature!',
      'Nature'
    );

    INSERT INTO decorators (business_id,image_url,specialty,description,theme) VALUES (
      '10',
      'https://www.theknot.com/tk-media/images/3ef84acc-823f-4431-8d2b-f95d9a862a50~rs_768.h',
      'Dark',
      'We offer amazing Gothic style decorations for any event',
      'Gothic'
    );

    



    INSERT INTO venues (business_id,image_url,theme,capacity,description) VALUES (
      '1',
      'https://cdn0.weddingwire.ca/vendor/0722/3_2/960/jpg/guild-inn-estate-toronto-historic-wedding-venue-wedluxe-magazine_50_10722-158739593284178.jpeg',
      'modern',
      '50',
      'Very simple, mordern wedding venue. Designed for smaller weddings'
    );

    INSERT INTO venues (business_id,image_url,theme,capacity,description) VALUES (
      '3',
      'https://media.cntraveler.com/photos/56e0811762c2faba1dda7045/master/pass/peabody-opera-house-wedding-cr-mnc-photography.jpg',
      'Glamorous',
      '300',
      'This venue is designed for massive weddings! bring all your friends and family we will fit them comfortably '
    );

    INSERT INTO venues (business_id,image_url,theme,capacity,description) VALUES (
      '5',
      'https://i.insider.com/5b73256864dce830008b5068?width=700',
      'Traditional',
      '100',
      'Choose our venue for an amazing traditional wedding venue designed for medium sized weddings'
    );

    INSERT INTO venues (business_id,image_url,theme,capacity,description) VALUES (
      '7',
      'https://www.crosswindsgolf.com/wp-content/uploads/2019/08/Outdoor-Wedding-Venues-720x380.jpg',
      'Nature',
      '75',
      'Let nature be with you when you celebrate your wedding day!'
    );

    INSERT INTO venues (business_id,image_url,theme,capacity,description) VALUES (
      '9',
      'https://cdn0.weddingwire.com/article/0431/original/1280/jpg/21340-casa-marina-iris-moore-photography.jpeg',
      'Beach front',
      '50',
      'Enjoy your wedding day on the beach! amazing beach front style wedding'
    );
`;



