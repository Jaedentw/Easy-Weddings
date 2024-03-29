module.exports = `


  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Kosta','Vlahakis','Canada','Ontario','Toronto','75 Oakwood dr.','L4S 1P6','kostakv@outlook.com','6477778888','$2a$10$U35lMD9rB38wy/itPaVKWekIlKgFxQN.ujMfNAkQ1fOYpkc19OWqC','','',false);

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Kosta','Vlahakis','Canada','Ontario','Toronto','75 Oakwood dr.','L4S 1P6','kostabusiness@gmail.com','6477578888','$2a$10$U35lMD9rB38wy/itPaVKWekIlKgFxQN.ujMfNAkQ1fOYpkc19OWqC','Dance Dance co.','Kostas Business',true);

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Andrew','Gort','Canada','Ontario','Toronto','652 Springs st','N2J 7N3','andrewgort@gmail.com','6474547878','password','','',false);

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Sam','shoe','Canada','Ontario','Toronto','87 Queen St','M4N 1P6','samshoe@gmail.com','9057778888','password','','',false);
      
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Stacy','Lavender','Canada','Ontario','Toronto','410 Bayview','L4P 1J7','Staceylavender@gmail.com','6478989999','password','','',false);
  
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Mike','Mcdonald','Canada','Ontario','Toronto','78 pine street','L4S 1P9','mikemc@gmail.com','6476665656','password','','',false);
  
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Adrian','hooper','Canada','Ontario','Toronto','89 mapleview','N2J 8B3','adrianhooper@gmail.com','6474549922','password','','',false);
  
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Luca','Modric','Canada','Ontario','Toronto','34 hazel wood dr','L8V 1P7','Lucamodric@gmail.com','9058889845','password','','',false);
        
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Tiffany','flowers','Canada','Ontario','Toronto','89 painted rock','L4S 1P6','tiffflowers@gmail.com','6475658978','password','','',false);

  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Yukon','Mavrik','Canada','Ontario','Toronto','700 Dufferin','N7V 2P4','yukonmav@gmail.com','9057876655','password','','',false);
          
  INSERT INTO users (first_name,last_name,country,province,city,address,postal_code,email,phone,password,website_url,business_name,is_business) VALUES (
    'Sarah','Jenko','Canada','Ontario','Toronto','3467 bathurst','L4P 9J6','sarahjenko','6476778965','password','','',false);
    

  
  INSERT INTO caterers (user_id,image_url,capacity,cuisine,description,name,city,menu_url) VALUES (
    1,
    'https://www.classiccaterers.ca/uploads/1/3/6/5/136543716/published/top-rated-catering-service-niagara.png?1615309848',
    50,
    'BBQ',
    'Our service offers amazing dishes of all varieties to ensure everyone enjoys their meals!',
    'All the Kings Men.',
    'Toronto',
    'https://thekingstonsocial.com/wp-content/uploads/2021/07/kingston-social-house-bbq-catering-menu.jpg'
  );

  INSERT INTO caterers (user_id,image_url,capacity,cuisine,description,name,city,menu_url) VALUES (
    2,
    'https://mk.ca/wp-content/uploads/2017/04/008.jpg',
    '150',
    'Open course',
    'Enjoy our service with a buffet style dinner, eat as much as you like we got you covered!',
    'Feast and Fêtes',
    'Toronto',
    'https://d3octkd2uqmyim.cloudfront.net/media/bi/2353/photo-strip-wedding-menus-2x.jpg?q=1631541005'
  );

  INSERT INTO caterers (user_id,image_url,capacity,cuisine,description,name,city,menu_url) VALUES (
    3,
    'https://www.bostonindiancatering.com/blog-admin/images/the-best-indian-wedding-food-caterers-available-online050051.jpeg',
    '75',
    'sea food',
    'We offer the best sea food meals for any event!',
    'Karden and Craig',
    'Vancouver',
    'https://www.documentsanddesigns.com/images/Universal_Sea_Shells/Seashell_Menus/E_Menu_Card_Antique_Shell_Sidebar.gif'
  );

  INSERT INTO caterers (user_id,image_url,capacity,cuisine,description,name,city,menu_url) VALUES (
    4,
    'https://brettones.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-28631016/images/5991eb3864cef9Pu1fXG/Brettomenu_d600.jpg',
    '200',
    'Italian',
    'We will ensure your entire family and friends are well fed with are vast selection of italian food!',
    'Nonnas Food',
    'Toronto',
    'https://i.etsystatic.com/14229232/r/il/cdb75f/1156082012/il_570xN.1156082012_py47.jpg'
  );

  INSERT INTO caterers (user_id,image_url,capacity,cuisine,description,name,city,menu_url, alternatives) VALUES (
    5,
    'https://www.mawaskitchen.com/wp-content/uploads/soups-in-flight-2020.jpg',
    '150',
    'Soups',
    'We have the best soups around, choose any type or amount, we got you covered!',
    'Top Hat Catering',
    'Calgary',
    'https://marketplace.canva.com/EADzltv7Fmk/1/0/1131w/canva-green-and-gold-box-border-geometric-floral-wedding-menu-la509GLjtQQ.jpg',
    'Gluten Free'
  );

  
  INSERT INTO decorators (user_id,image_url,specialty,description,theme,name,city,website_url) VALUES (
    1,
    'https://media.weddingz.in/images/89a9671bca73f2fcf2f5bcbbf8fe7ba1/top-5-wedding-decorators-in-chandigarh-who-can-create-that-magical-setting-for-you-2.jpg',
    'Fantasy',
    'Let us turn your event into a princess theme experience!',
    'princess',
    'A Bella Casa',
    'Toronto',
    'https://babylondecor.com/'
  );

  INSERT INTO decorators (user_id,image_url,specialty,description,theme,name,city,website_url) VALUES (
    2,
    'https://miro.medium.com/max/1400/0*NWYFtAjpEZwozsQc.jpg',
    'American Dream',
    'Our service will make your wedding very traditional and classical',
    'traditional',
    'Elegant Decor',
    'Toronto',
    'http://mylavishevent.com/'
  );

  INSERT INTO decorators (user_id,image_url,specialty,description,theme,name,city,website_url) VALUES (
    3,
    'https://greenweddingshoes.com/wp-content/uploads/2019/12/lushindustrial-wedding-thumb.jpg',
    'Large Weddings',
    'Want a modern look for your venue? choose us as your decorators, ANY size',
    'modern',
    'Adaptive Decor',
    'Vancouver',
    'https://www.amorwedding.ca/'
  );

  INSERT INTO decorators (user_id,image_url,specialty,description,theme,name,city,website_url) VALUES (
    4,
    'https://www.theknot.com/tk-media/images/a48b8802-d4ab-4d4b-b0ee-b4b5ce33df8b~rs_768.h',
    'Outdoor Weddings',
    'Any environment does not matter! we will make your event connect with nature!',
    'Nature',
    'Cottage Crafts',
    'Vancouver',
    'https://www.weddingsbyardenian.com/'
  );

  INSERT INTO decorators (user_id,image_url,specialty,description,theme,name,city,website_url) VALUES (
    5,
    'https://www.theknot.com/tk-media/images/3ef84acc-823f-4431-8d2b-f95d9a862a50~rs_768.h',
    'Castles',
    'We offer amazing Gothic style decorations for any event',
    'Gothic',
    'Dark Sense Decor',
    'Toronto',
    'https://www.etsy.com/ca/market/goth_wedding_decor'
  );



  INSERT INTO venues (user_id,image_url,theme,capacity,description,name,city,website_url) VALUES (
    1,
    'https://cdn0.weddingwire.ca/vendor/0722/3_2/960/jpg/guild-inn-estate-toronto-historic-wedding-venue-wedluxe-magazine_50_10722-158739593284178.jpeg',
    'modern',
    '50',
    'Very simple, mordern wedding venue. Designed for smaller weddings',
    'Beyond Beautiful',
    'Toronto',
    'https://www.destinyweddings.ca/'
  );

  INSERT INTO venues (user_id,image_url,theme,capacity,description,name,city,website_url) VALUES (
    2,
    'https://media.cntraveler.com/photos/56e0811762c2faba1dda7045/master/pass/peabody-opera-house-wedding-cr-mnc-photography.jpg',
    'Glamorous',
    '300',
    'This venue is designed for massive weddings! bring all your friends and family we will fit them comfortably ',
    'Dream Wedding',
    'Toronto',
    'https://espacestudio.ca/'
  );

  INSERT INTO venues (user_id,image_url,theme,capacity,description,name,city,website_url) VALUES (
    3,
    'https://i.insider.com/5b73256864dce830008b5068?width=700',
    'Traditional',
    '100',
    'Choose our venue for an amazing traditional wedding venue designed for medium sized weddings',
    'Rustic Gold Chapel',
    'Vancouver',
    'http://www.thepersianpalace.ca/'
  );

  INSERT INTO venues (user_id,image_url,theme,capacity,description,name,city,website_url, features) VALUES (
    4,
    'https://www.crosswindsgolf.com/wp-content/uploads/2019/08/Outdoor-Wedding-Venues-720x380.jpg',
    'Nature',
    75,
    'Let nature be with you when you celebrate your wedding day!',
    'Graceful Gardens',
    'Calgary',
    'https://www.markham.ca/wps/portal/home/arts/heintzman-house',
    'Fountain'
  );

  INSERT INTO venues (user_id,image_url,theme,capacity,description,name,city,website_url) VALUES (
    5,
    'https://cdn0.weddingwire.com/article/0431/original/1280/jpg/21340-casa-marina-iris-moore-photography.jpeg',
    'Beach front',
    50,
    'Enjoy your wedding day on the beach! amazing beach front style wedding',
    'Tropical Villa',
    'Toronto',
    'https://ascottparc.com/'
  );

  INSERT INTO weddings (user_id, name, date, image_url, caterers, decorators, venues, vendors)
  VALUES (
    1,
    'Kostas Wedding',
    '09-09-23',
    'https://www.brides.com/thmb/umh5TKE4fIOD5bbbmfTHzqqj2lM=/735x0/brides-cover-image-36476d79c52f4b6d8bc9894d859649a6.jpeg',
    ARRAY [3, 4],
    ARRAY [3, 4],
    ARRAY [3, 4],
    ARRAY [3, 4]
  );

  INSERT INTO weddings (user_id, name, date, image_url, caterers, decorators, venues, vendors)
  VALUES (
    1,
    'Kostas Plan B',
    '09-20-2023',
    'https://www.brides.com/thmb/aCmNTcqQTvDVpHBJEXSiew8F9uU=/1064x1067/filters:fill(auto,1)/Indhira-Jason-Wedding-206-86bba0d2e23e42ecbe67f51bdc4cd17e.jpg',
    ARRAY [1, 2],
    ARRAY [1, 2],
    ARRAY [1, 2],
    ARRAY [1, 2]
  );

  INSERT INTO to_dos ( wedding_id, title, checked)
  VALUES (1, 'Decide on flowers', false);

  INSERT INTO to_dos (wedding_id, title, checked)
  VALUES (1, 'Contact caterer', false);

  INSERT INTO to_dos (wedding_id, title, checked)
  VALUES (1, 'Pick best man', false);

  INSERT INTO to_dos (wedding_id, title, checked)
  VALUES (1, 'Pick a Wife', true);

  INSERT INTO guests (wedding_id, name, plus_one)
  VALUES (1, 'Jaeden West', 'Ryan West');

  INSERT INTO guests (wedding_id, name, confirmed)
  VALUES (1, 'Mother', true);

  INSERT INTO guests (wedding_id, name, confirmed)
  VALUES (1, 'Tiger', false);



INSERT INTO vendors (user_id, name, city, website_url, specialty, image_url, rate_per_hour, description)
  VALUES (
    1,
    'DJ wed that',
    'Toronto',
    'https://www.3owls.ca/',
    'house music',
    'https://upload.wikimedia.org/wikipedia/commons/b/bd/Robert_Hood_Live_%40_Kennedys%2C_Dublin%2C_Ireland_2009.JPG',
    '250',
    'Make your wedding fun and groovy with DJ wed that.  A night to remember!'
  );


  INSERT INTO vendors (user_id, name, city, website_url, specialty, image_url, rate_per_hour, description)
  VALUES (
    2,
    'Pope Francis',
    'Vatican City',
    'https://www.vatican.va/content/vatican/en.html',
    'Catholicism',
    'https://static.politico.com/4f/46/e13b7e064ff49c66070de4f5e64b/https-delivery.gettyimages.com/downloads/461608174',
    '25000',
    'Your wedding couldnt be more holier with Pope Francis as your father for your wedding'
  );


  INSERT INTO vendors (user_id, name, city, website_url, specialty, image_url, rate_per_hour, description)
  VALUES (
    3,
    'Hips dont lie',
    'Vancouver',
    'https://hipsdontlie.ca/',
    'Belly Dance, Bollywood, Samba, Jazz, Brazilian',
    'https://s3-media0.fl.yelpcdn.com/bphoto/Lifh8-qneCTHE_39HAzDSg/l.jpg',
    '150',
    'Have the best wedding dancers at your wedding, we will bring light and flare to your wedding'
  );

  INSERT INTO vendors (user_id, name, city, website_url, specialty, image_url, rate_per_hour, description)
  VALUES (
    5,
    'COUTURE BRIDAL ALTERATIONS',
    'Toronto',
    'https://www.couturebridalalterations.ca/',
    'custom, alterations, tailoring.',
    'https://static.wixstatic.com/media/e93f5e_70d57ef82364463fa5f4a076ac90c346~mv2_d_3410_2512_s_4_2.jpeg/v1/fill/w_3410,h_2512,al_c/e93f5e_70d57ef82364463fa5f4a076ac90c346~mv2_d_3410_2512_s_4_2.jpeg',
    '100',
    'Look your best! with our services we ensure you and your friends will look fabulous'
  );

  INSERT INTO vendors (user_id, name, city, website_url, specialty, image_url, rate_per_hour, description)
  VALUES (
    7,
    'Mandegaran Studio',
    'Toronto',
    'http://mandegaranstudio.ca/',
    'Any enviroment',
    'https://carriej.ca/wp-content/uploads/2018/01/Sprucewood-Shores-Winery-Photographer-2-scaled.jpg',
    '125',
    'we obsessed with photography because we obsessed with people, what it means to be human and the magic of the unseen connection we share. we love to Create lasting memories in an artistic and elegantly way. In two words, Your Love is our motivation.'
  );
`;