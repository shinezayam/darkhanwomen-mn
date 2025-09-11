export const getNewsData = (locale: string) => [
  {
    id: 'tedx-darkhan-2024',
    title: locale === 'mn'
      ? 'TEDxDarkhan 2024: "Хүч чадал" сэдвээр амжилттай зохион байгуулагдлаа'
      : 'TEDxDarkhan 2024: "Power" Theme Successfully Held',
    excerpt: locale === 'mn'
      ? 'Дархан-Уул аймгийн Эмэгтэйчүүдийн холбооноос зохион байгуулсан TEDxDarkhan 2024 арга хэмжээ "Хүч чадал" сэдвээр амжилттай болжээ. 200 гаруй оролцогчтойгоор олон улсын стандартаар явагдсан энэ арга хэмжээнд эмэгтэйчүүдийн хүч чадал, амжилт, туршлагыг хуваалцсан.'
      : 'The TEDxDarkhan 2024 event organized by the Darkhan-Uul Province Women\'s Federation was successfully held with the theme "Power". Over 200 participants attended this international standard event where women shared their power, achievements, and experiences.',
    content: locale === 'mn'
      ? 'Дархан-Уул аймгийн Эмэгтэйчүүдийн холбооноос зохион байгуулсан TEDxDarkhan 2024 арга хэмжээ "Хүч чадал" сэдвээр амжилттай болжээ. Энэ арга хэмжээ нь эмэгтэйчүүдийн хүч чадлыг илрүүлэх, тэдний амжилтыг тэмдэглэх, нийгэмд эерэг өөрчлөлт авчрах зорилгоор зохион байгуулагдлаа.\n\nАрга хэмжээнд олон салбарын эмэгтэйчүүд оролцож, өөрсдийн туршлага, амжилтын түүхийг хуваалцлаа. Технологийн салбарын эмэгтэйчүүд шинэлэг санаа, шийдлийн талаар илтгэл тавьсан бол, бизнес эрхлэгч эмэгтэйчүүд амжилттай түүхээ хуваалцлаа.\n\nНийгмийн сайн сайхны чиглэлээр ажиллаж буй эмэгтэйчүүд ч энэ арга хэмжээнд оролцож, тэдний хийж буй ажлын талаар мэдээлэл өглөө. Арга хэмжээний үеэр эмэгтэйчүүдийн эрх, боломж, хөгжлийн талаар ярилцлага болж, ирээдүйн хамтын ажиллагааны чиглэл тодорхойлогдлоо.\n\nЭнэ арга хэмжээ нь эмэгтэйчүүдийн хүч чадлыг илрүүлэх, тэдний амжилтыг тэмдэглэх, нийгэмд эерэг өөрчлөлт авчрах зорилгоор зохион байгуулагдсан бөгөөд ирээдүйд жил бүр зохион байгуулах төлөвлөгөөтэй байна.'
      : 'The TEDxDarkhan 2024 event organized by the Darkhan-Uul Province Women\'s Federation was successfully held with the theme "Power". This event was organized to discover women\'s power, celebrate their achievements, and bring positive change to society.\n\nWomen from various sectors participated in the event and shared their experiences and success stories. Women from the technology sector presented innovative ideas and solutions, while women entrepreneurs shared their success stories.\n\nWomen working in social welfare also participated in this event and provided information about their work. During the event, discussions were held about women\'s rights, opportunities, and development, and future collaboration directions were identified.\n\nThis event was organized to discover women\'s power, celebrate their achievements, and bring positive change to society, with plans to organize it annually in the future.',
    category: locale === 'mn' ? 'Арга хэмжээ' : 'Event',
    catId: 'events',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 2 сар' : 'February 2024',
    image: '/images/News-TEDXDARKHAN.jpg',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'women-leadership-tech',
    title: locale === 'mn'
      ? 'Эмэгтэйчүүдийн манлайлал: Технологийн салбарт хөгжүүлэх арга хэмжээ'
      : 'Women\'s Leadership Development in Technology Sector Event',
    excerpt: locale === 'mn'
      ? 'Олон улсын эмэгтэйчүүдийн өдрийг тохиолдуулан "Эмэгтэйчүүдийн манлайлал: Технологийн салбарт" үйл ажиллагаа 3-р сарын 8ны өдөр Залуучууд театрт зохион байгуулагдана. Боловсролоо тэлж, боломжийг атгаж, орлогоо нэмэгдүүлэх гоё арга хэмжээнд урьж байна.'
      : 'To celebrate International Women\'s Day, the "Women\'s Leadership: In the Technology Sector" event will be held on March 8th at Youth Theater. We invite you to a wonderful event to expand education, seize opportunities, and increase income.',
    content: locale === 'mn'
      ? 'Олон улсын эмэгтэйчүүдийн өдрийг тохиолдуулан "Эмэгтэйчүүдийн манлайлал: Технологийн салбарт" үйл ажиллагаа 3-р сарын 8ны өдөр Залуучууд театрт зохион байгуулагдана. Энэ арга хэмжээ нь технологийн салбарт эмэгтэйчүүдийн манлайллыг хөгжүүлэх, тэдний ур чадварыг нэмэгдүүлэх зорилгоор зохион байгуулагдсан.\n\nАрга хэмжээнд технологийн салбарын мэргэжилтнүүд, бизнес эрхлэгчид, сурагчид, эмэгтэйчүүдийн хөгжүүлэлтийн чиглэлээр ажиллаж буй байгууллагуудын төлөөлөгчид оролцож байна. Энэ арга хэмжээний үеэр эмэгтэйчүүдийн технологийн салбарт хүрсэн амжилт, тулгарсан хүндрэл, ирээдүйн төлөвлөгөөний талаар ярилцлага болно.\n\nМөн технологийн салбарын шинэ чиглэлүүд, мэдээлэл технологийн хөгжлийн чиг хандлага, эмэгтэйчүүдэд нээгдэж буй боломжуудын талаар мэдээлэл солилцоно. Арга хэмжээний үеэр эмэгтэйчүүдийн манлайллын ур чадварыг хөгжүүлэх, харилцааны ур чадварыг сайжруулах, шийдвэр гаргах чадварыг нэмэгдүүлэх талаар сургалт явуулах төлөвлөгөөтэй байна.\n\nЭнэ арга хэмжээ нь эмэгтэйчүүдийн технологийн салбарт идэвхтэй оролцоход нөлөөлж, тэдний манлайллын ур чадварыг хөгжүүлэхэд чухал үүрэг гүйцэтгэнэ.'
      : 'To celebrate International Women\'s Day, the "Women\'s Leadership: In the Technology Sector" event will be held on March 8th at Youth Theater. This event is organized to develop women\'s leadership in the technology sector and enhance their skills.\n\nTechnology professionals, entrepreneurs, students, and representatives from organizations working in women\'s development will participate in this event. During this event, discussions will be held about women\'s achievements in the technology sector, challenges faced, and future plans.\n\nInformation will also be exchanged about new directions in the technology sector, trends in information technology development, and opportunities opening up for women. During the event, there are plans to conduct training on developing women\'s leadership skills, improving communication skills, and enhancing decision-making abilities.\n\nThis event will have an important role in encouraging women to actively participate in the technology sector and developing their leadership skills.',
    category: locale === 'mn' ? 'Арга хэмжээ' : 'Event',
    catId: 'events',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2025 оны 3 сар' : 'March 2025',
    image: '/images/News-Эмэгтэйчүүдийн манлайлал- Технологийн салбарт.jpg',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  },
  {
    id: 'business-women-support',
    title: locale === 'mn'
      ? 'Өрхийн бизнес эрхлэгч эмэгтэйчүүдийг дэмжих талаар санал солилцлоо'
      : 'Discussion on Supporting Family Business Women',
    excerpt: locale === 'mn'
      ? 'Аймгийн Эмэгтэйчүүдийн холбооны дэргэдэх Бизнес эрхлэгч эмэгтэйчүүдийн зөвлөлийн гишүүд өнөөдөр Аймгийн ИТХ-ын дарга А.Янжмаатай уулзлаа.'
      : 'Members of the Business Women\'s Council under the Provincial Women\'s Federation met today with the head of the Provincial Citizens\' Representative Assembly A.Yanjmaa.',
    content: locale === 'mn'
      ? 'Өрхийн бизнес эрхлэгч эмэгтэйчүүдийг дэмжих талаар санал солилцох уулзалт амжилттай болжээ. Уулзалтад бизнес эрхлэгч эмэгтэйчүүдийн тулгарч буй хүндрэл, тэдэнд шаардлагатай дэмжлэг, боломжуудын талаар дэлгэрэнгүй ярилцлага болжээ. Ирээдүйд эмэгтэйчүүдийн бизнес эрхлэлтийг дэмжих чиглэлээр хамтран ажиллах төлөвлөгөө гаргажээ.'
      : 'A successful meeting was held to discuss supporting family business women. The meeting included detailed discussions about challenges faced by women entrepreneurs, the support they need, and available opportunities. Plans were made for future collaboration to support women\'s entrepreneurship.',
    category: locale === 'mn' ? 'Бизнес' : 'Business',
    catId: 'business',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 2 сар' : 'February 2024',
    image: '/images/News-ӨРХИЙН БИЗНЕС ЭРХЛЭГЧ ЭМЭГТЭЙЧҮҮДИЙГ ДЭМЖИХ ТАЛААР САНАЛ СОЛИЛЦЛОО .jpg',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'awe-project-presentation',
    title: locale === 'mn'
      ? '"Бизнес эрхлэгч эмэгтэйчүүдийн академи" төслийн танилцуулга үйл ажиллагаа амжилттай боллоо'
      : 'AWE Project Presentation Event Successfully Held',
    excerpt: locale === 'mn'
      ? 'Энэхүү үйл ажиллагаанд: Монгол улс дахь АНУ-ын Элчин сайдын Яамны Олон нийттэй харилцах алба дарга. Moulik Berkana - AWE төслийн сэтгүүл, контент хэрхэн вэ сэдвээр.'
      : 'This event featured: Head of Public Relations Department of the US Embassy in Mongolia. Moulik Berkana - AWE project magazine, content creation topics.',
    content: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академи төслийн танилцуулга үйл ажиллагаа амжилттай болжээ. Энэ үйл ажиллагаанд АНУ-ын Элчин сайдын Яамны төлөөлөгчид оролцож, төслийн зорилго, хэрэгжүүлэлтийн төлөвлөгөөний талаар танилцуулга хийжээ. Мөн контент бүтээх, сэтгүүл хэвлэх талаар мэдлэг солилцожээ.'
      : 'The AWE project presentation event was successfully held. Representatives from the US Embassy participated in this event and presented the project\'s goals and implementation plans. Knowledge was also exchanged about content creation and magazine publishing.',
    category: locale === 'mn' ? 'Төсөл' : 'Project',
    catId: 'projects',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 10 сар' : 'October 2024',
    image: '/images/News-AWE-Presentation.jpg',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'awe-academy-starts',
    title: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академи төсөл эхэллээ'
      : 'Business Women Entrepreneurs Academy Project Begins',
    excerpt: locale === 'mn'
      ? '"Бизнес эрхлэгч эмэгтэйчүүдийн академи" буюу "Academy for Business Entrepreneurs" (AWE) төслийн сонгон шалгаруулалтад тэнцсэн бизнес эрхлэгч эмэгтэйчүүддээ баяр хүргэе.'
      : 'Congratulations to the business women entrepreneurs who passed the selection for the "Academy for Business Entrepreneurs" (AWE) project.',
    content: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академи төсөл амжилттай эхэллээ. Энэ төсөлд сонгогдсон эмэгтэйчүүд 6 сарын хугацаанд мэргэжлийн сургалт, зөвлөгөө, сүлжээний боломжуудыг авах боломжтой. Төслийн зорилго нь эмэгтэйчүүдийн бизнес ур чадварыг хөгжүүлж, тэдний амжилтыг дэмжих явдал юм.'
      : 'The Business Women Entrepreneurs Academy project has successfully begun. Women selected for this project will have the opportunity to receive professional training, consultation, and networking opportunities for 6 months. The project\'s goal is to develop women\'s business skills and support their success.',
    category: locale === 'mn' ? 'Академи' : 'Academy',
    catId: 'academy',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 10 сар' : 'October 2024',
    image: '/images/News-Бизнес эрхлэгч эмэгтэйчүүдийн академи төсөл эхэллээ. .jpg',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'english-classes',
    title: locale === 'mn'
      ? 'Англи хэлээр илтгэх чадвараа хөгжүүлэх сургалт'
      : 'English Presentation Skills Development Training',
    excerpt: locale === 'mn'
      ? 'Англи хэлээр илтгэх чадвараа хөгжүүлэх, хүрээллээ тэлэх сонирхолтой иргэд хамрагдах боломжтой юм. Хугацаа: Пүрэв гариг бүрийн 18:30-21:00 цагийн хооронд.'
      : 'Citizens interested in developing English presentation skills and expanding their horizons can participate. Time: Every Thursday 18:30-21:00.',
    content: locale === 'mn'
      ? 'Англи хэлээр илтгэх чадвараа хөгжүүлэх сургалт эхэллээ. Энэ сургалтад эмэгтэйчүүд англи хэлээр илтгэл тавих, хэлэлцүүлэг хийх, мэдээлэл солилцох ур чадвараа хөгжүүлэх боломжтой. Сургалт нь практик дасгал, бүлэг ажиллагаа, хувь хүний хөгжүүлэлтэд чиглэгддэг.'
      : 'English presentation skills development training has begun. This training provides women with the opportunity to develop skills in giving presentations, conducting discussions, and exchanging information in English. The training focuses on practical exercises, group activities, and personal development.',
    category: locale === 'mn' ? 'Сургалт' : 'Training',
    catId: 'training',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 10 сар' : 'October 2024',
    image: '/images/News-English-Club.jpg',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 'gender-assessment',
    title: locale === 'mn'
      ? 'Дархан-Уул аймаг орон нутгаас анх удаа Жендэрийн өнөөгийн нөхцөл байдлын үнэлгээг боловсруулан гаргалаа'
      : 'Darkhan-Uul Province First to Develop Gender Situation Assessment',
    excerpt: locale === 'mn'
      ? 'Дархан-Уул аймаг орон нутгаас анх удаа Жендэрийн өнөөгийн нөхцөл байдлын үнэлгээг боловсруулан гаргалаа. Энэ нь эмэгтэйчүүдийн эрх, боломж, хөгжлийн талаарх дэлгэрэнгүй мэдээлэл агуулсан.'
      : 'Darkhan-Uul Province has become the first region to develop a comprehensive gender situation assessment. This contains detailed information about women\'s rights, opportunities, and development.',
    content: locale === 'mn'
      ? 'Дархан-Уул аймаг орон нутгаас анх удаа Жендэрийн өнөөгийн нөхцөл байдлын үнэлгээг боловсруулан гаргалаа. Энэ үнэлгээ нь эмэгтэйчүүдийн эрх, боломж, хөгжлийн талаарх дэлгэрэнгүй мэдээлэл агуулсан. Үнэлгээний үр дүнгээс харахад эмэгтэйчүүдийн эрх, боломж, хөгжлийн талаар ахиц дэмжлэг хэрэгтэй байгаа талаар тодорхой болжээ.'
      : 'Darkhan-Uul Province has become the first region to develop a comprehensive gender situation assessment. This assessment contains detailed information about women\'s rights, opportunities, and development. The assessment results clearly show that support is needed for women\'s rights, opportunities, and development.',
    category: locale === 'mn' ? 'Судалгаа' : 'Research',
    catId: 'research',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 9 сар' : 'September 2024',
    image: '/images/Дархан-Уул аймаг орон нутгаас анх удаа Жендэрийн өнөөгийн нөхцөл байдлын үнэлгээг боловсруулан гаргалаа..jpg',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'powerful-women-magazine',
    title: locale === 'mn'
      ? 'Хүчирхэг эмэгтэйчүүд сэтгүүл гарчээ'
      : 'Powerful Women Magazine Released',
    excerpt: locale === 'mn'
      ? 'Эмэгтэйчүүдийн амжилт, түүх, туршлага, зөвлөгөөг агуулсан "Хүчирхэг эмэгтэйчүүд" сэтгүүлийн анхны дугаар гарчээ. Энэ нь эмэгтэйчүүдэд урам зориг өгөх, мэдлэг солилцох платформ болно.'
      : 'The first issue of "Powerful Women" magazine has been released, containing women\'s success stories, history, experiences, and advice. This will serve as a platform to inspire women and share knowledge.',
    content: locale === 'mn'
      ? '"Хүчирхэг эмэгтэйчүүд" сэтгүүлийн анхны дугаар амжилттай гарчээ. Энэ сэтгүүлд эмэгтэйчүүдийн амжилт, түүх, туршлага, зөвлөгөөг агуулсан. Сэтгүүл нь эмэгтэйчүүдэд урам зориг өгөх, мэдлэг солилцох, нэгдэх платформ болжээ. Ирээдүйд сар бүр шинэ дугаар гаргах төлөвлөгөөтэй.'
      : 'The first issue of "Powerful Women" magazine has been successfully released. This magazine contains women\'s success stories, history, experiences, and advice. The magazine has become a platform for inspiring women, sharing knowledge, and uniting. There are plans to release a new issue every month in the future.',
    category: locale === 'mn' ? 'Хэвлэл' : 'Publication',
    catId: 'publication',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 8 сар' : 'August 2024',
    image: '/images/News-Хүчирхэг эмэгтэйчүүд.jpg',
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200'
  },
  {
    id: 'business-women-academy-training',
    title: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академийн сургалт уулзалтууд үргэлжилсээр'
      : 'Business Women Entrepreneurs Academy Training Sessions Continue',
    excerpt: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академийн сургалт уулзалтууд амжилттай үргэлжилж байна. Энэ сургалтад оролцож буй эмэгтэйчүүд бизнес ур чадвараа хөгжүүлж, шинэ мэдлэг олж авч байна.'
      : 'Business Women Entrepreneurs Academy training sessions are successfully continuing. Women participating in this training are developing their business skills and gaining new knowledge.',
    content: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академийн сургалт уулзалтууд амжилттай үргэлжилж байна. Энэ сургалтад оролцож буй эмэгтэйчүүд бизнес ур чадвараа хөгжүүлж, шинэ мэдлэг олж авч байна. Сургалтын үеэр бизнес төлөвлөлт, санхүүгийн удирдлага, маркетинг, харилцааны ур чадвар зэрэг чухал сэдвүүдээр ярилцлага болж байна.\n\nСургалтад оролцож буй эмэгтэйчүүд өөрсдийн бизнес төслүүдийн талаар хуваалцаж, бие биенээсээ суралцаж байна. Мэргэжлийн зөвлөгчид эмэгтэйчүүдэд практик зөвлөгөө өгч, тэдний асуудлыг шийдвэрлэхэд тусалж байна.\n\nЭнэ сургалт нь эмэгтэйчүүдийн бизнес эрхлэлтийг дэмжих, тэдний ур чадварыг хөгжүүлэхэд чухал үүрэг гүйцэтгэж байна. Ирээдүйд ийм сургалтуудыг үргэлжлүүлэн зохион байгуулах төлөвлөгөөтэй байна.'
      : 'Business Women Entrepreneurs Academy training sessions are successfully continuing. Women participating in this training are developing their business skills and gaining new knowledge. During the training, important topics such as business planning, financial management, marketing, and communication skills are being discussed.\n\nWomen participating in the training are sharing their business projects and learning from each other. Professional consultants are providing practical advice to women and helping them solve their problems.\n\nThis training plays an important role in supporting women\'s entrepreneurship and developing their skills. There are plans to continue organizing such trainings in the future.',
    category: locale === 'mn' ? 'Академи' : 'Academy',
    catId: 'academy',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 11 сар' : 'November 2024',
    image: '/images/News-AWE-Training.jpg',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'business-women-academy-program',
    title: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академийн хөтөлбөр'
      : 'Business Women Entrepreneurs Academy Program',
    excerpt: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академийн хөтөлбөр амжилттай хэрэгжиж байна. Энэ хөтөлбөрт оролцож буй эмэгтэйчүүд бизнес ур чадвараа хөгжүүлж, амжилттай бизнес эрхлэгч болох зорилготой.'
      : 'The Business Women Entrepreneurs Academy program is being successfully implemented. Women participating in this program aim to develop their business skills and become successful entrepreneurs.',
    content: locale === 'mn'
      ? 'Бизнес эрхлэгч эмэгтэйчүүдийн академийн хөтөлбөр амжилттай хэрэгжиж байна. Энэ хөтөлбөрт оролцож буй эмэгтэйчүүд бизнес ур чадвараа хөгжүүлж, амжилттай бизнес эрхлэгч болох зорилготой. Хөтөлбөрийн үеэр эмэгтэйчүүд бизнес төлөвлөлт, санхүүгийн удирдлага, маркетинг, харилцааны ур чадвар зэрэг чухал сэдвүүдээр сурч байна.\n\nХөтөлбөрт оролцож буй эмэгтэйчүүд өөрсдийн бизнес төслүүдийн талаар хуваалцаж, бие биенээсээ суралцаж байна. Мэргэжлийн зөвлөгчид эмэгтэйчүүдэд практик зөвлөгөө өгч, тэдний асуудлыг шийдвэрлэхэд тусалж байна.\n\nЭнэ хөтөлбөр нь эмэгтэйчүүдийн бизнес эрхлэлтийг дэмжих, тэдний ур чадварыг хөгжүүлэхэд чухал үүрэг гүйцэтгэж байна. Ирээдүйд ийм хөтөлбөрүүдийг үргэлжлүүлэн зохион байгуулах төлөвлөгөөтэй байна.'
      : 'The Business Women Entrepreneurs Academy program is being successfully implemented. Women participating in this program aim to develop their business skills and become successful entrepreneurs. During the program, women are learning important topics such as business planning, financial management, marketing, and communication skills.\n\nWomen participating in the program are sharing their business projects and learning from each other. Professional consultants are providing practical advice to women and helping them solve their problems.\n\nThis program plays an important role in supporting women\'s entrepreneurship and developing their skills. There are plans to continue organizing such programs in the future.',
    category: locale === 'mn' ? 'Академи' : 'Academy',
    catId: 'academy',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 10 сар' : 'October 2024',
    image: '/images/News-Бизнес эрхлэгч эмэгтэйчүүдийн академи хөтөлбөр .jpg',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'business-sector-women-participation',
    title: locale === 'mn'
      ? 'Бизнесийн салбарт эмэгтэйчүүдийн оролцоог дэмжих нь'
      : 'Supporting Women\'s Participation in Business Sector',
    excerpt: locale === 'mn'
      ? 'Бизнесийн салбарт эмэгтэйчүүдийн оролцоог дэмжих талаар ярилцлага болжээ. Энэ арга хэмжээнд бизнес эрхлэгч эмэгтэйчүүд оролцож, тэдний тулгарч буй хүндрэл, боломжуудын талаар ярилцлаа.'
      : 'A discussion was held on supporting women\'s participation in the business sector. Women entrepreneurs participated in this event and discussed the challenges they face and available opportunities.',
    content: locale === 'mn'
      ? 'Бизнесийн салбарт эмэгтэйчүүдийн оролцоог дэмжих талаар ярилцлага болжээ. Энэ арга хэмжээнд бизнес эрхлэгч эмэгтэйчүүд оролцож, тэдний тулгарч буй хүндрэл, боломжуудын талаар ярилцлаа. Арга хэмжээний үеэр эмэгтэйчүүдийн бизнес салбарт хүрсэн амжилт, тулгарсан хүндрэл, ирээдүйн төлөвлөгөөний талаар дэлгэрэнгүй ярилцлага болжээ.\n\nМөн бизнесийн салбарын шинэ чиглэлүүд, эмэгтэйчүүдэд нээгдэж буй боломжуудын талаар мэдээлэл солилцоно. Арга хэмжээний үеэр эмэгтэйчүүдийн бизнес ур чадварыг хөгжүүлэх, харилцааны ур чадварыг сайжруулах талаар сургалт явуулах төлөвлөгөөтэй байна.\n\nЭнэ арга хэмжээ нь эмэгтэйчүүдийн бизнес салбарт идэвхтэй оролцоход нөлөөлж, тэдний ур чадварыг хөгжүүлэхэд чухал үүрэг гүйцэтгэнэ.'
      : 'A discussion was held on supporting women\'s participation in the business sector. Women entrepreneurs participated in this event and discussed the challenges they face and available opportunities. During the event, detailed discussions were held about women\'s achievements in the business sector, challenges faced, and future plans.\n\nInformation was also exchanged about new directions in the business sector and opportunities opening up for women. During the event, there are plans to conduct training on developing women\'s business skills and improving communication skills.\n\nThis event will have an important role in encouraging women to actively participate in the business sector and developing their skills.',
    category: locale === 'mn' ? 'Бизнес' : 'Business',
    catId: 'business',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 9 сар' : 'September 2024',
    image: '/images/News-БИЗНЕСИЙН САЛБАРТ ЭМЭГТЭЙЧҮҮДИЙН ОРОЛЦООГ ДЭМЖИХ НЬ .jpg',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'toastmasters-autumn-opening',
    title: locale === 'mn'
      ? 'Дархан-Уул аймагт 2 дахь жилдээ үйл ажиллагаагаа явуулж буй Toastmasters олон улсын байгууллага нь намрын нээлтээ хийлээ'
      : 'Toastmasters International Organization Conducting Activities for 2nd Year in Darkhan-Uul Province Held Autumn Opening',
    excerpt: locale === 'mn'
      ? 'Дархан-Уул аймагт 2 дахь жилдээ үйл ажиллагаагаа явуулж буй Toastmasters олон улсын байгууллага нь намрын нээлтээ хийлээ. Энэ арга хэмжээнд олон оролцогч оролцож, илтгэх ур чадвараа хөгжүүлэх талаар ярилцлаа.'
      : 'Toastmasters International Organization conducting activities for 2nd year in Darkhan-Uul Province held autumn opening. Many participants attended this event and discussed developing presentation skills.',
    content: locale === 'mn'
      ? 'Дархан-Уул аймагт 2 дахь жилдээ үйл ажиллагаагаа явуулж буй Toastmasters олон улсын байгууллага нь намрын нээлтээ хийлээ. Энэ арга хэмжээнд олон оролцогч оролцож, илтгэх ур чадвараа хөгжүүлэх талаар ярилцлаа. Toastmasters байгууллага нь илтгэх ур чадвар, харилцааны ур чадвар, манлайллын ур чадварыг хөгжүүлэхэд чиглэгддэг.\n\nАрга хэмжээний үеэр оролцогчид илтгэл тавьж, бие биенээсээ суралцаж байна. Мэргэжлийн зөвлөгчид оролцогчдод практик зөвлөгөө өгч, тэдний ур чадварыг сайжруулахад тусалж байна.\n\nЭнэ байгууллага нь эмэгтэйчүүдийн илтгэх ур чадварыг хөгжүүлэх, тэдний манлайллын ур чадварыг сайжруулахэд чухал үүрэг гүйцэтгэж байна. Ирээдүйд ийм арга хэмжээнүүдийг үргэлжлүүлэн зохион байгуулах төлөвлөгөөтэй байна.'
      : 'Toastmasters International Organization conducting activities for 2nd year in Darkhan-Uul Province held autumn opening. Many participants attended this event and discussed developing presentation skills. Toastmasters organization focuses on developing presentation skills, communication skills, and leadership skills.\n\nDuring the event, participants give presentations and learn from each other. Professional consultants provide practical advice to participants and help improve their skills.\n\nThis organization plays an important role in developing women\'s presentation skills and improving their leadership skills. There are plans to continue organizing such events in the future.',
    category: locale === 'mn' ? 'Сургалт' : 'Training',
    catId: 'training',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 9 сар' : 'September 2024',
    image: '/images/News-Дархан-Уул аймагт 2 дахь жилдээ үйл ажиллагаагаа явуулж буй Toastmasters олон улсын байгууллага нь намрын нээлтээ хийлээ. .jpg',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'membership-renewal',
    title: locale === 'mn'
      ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо гишүүн байгууллагуудтайгаа гишүүнчлэлээ шинэчлэн батламжилж байна'
      : 'Darkhan-Uul Province Women\'s Federation Renewing and Certifying Membership with Member Organizations',
    excerpt: locale === 'mn'
      ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо гишүүн байгууллагуудтайгаа гишүүнчлэлээ шинэчлэн батламжилж байна. Энэ ажиллагаа нь холбооны гишүүн байгууллагуудтай харилцаа сайжруулах, хамтын ажиллагааг бэхжүүлэх зорилготой.'
      : 'Darkhan-Uul Province Women\'s Federation is renewing and certifying membership with member organizations. This activity aims to improve relations with member organizations and strengthen cooperation.',
    content: locale === 'mn'
      ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо гишүүн байгууллагуудтайгаа гишүүнчлэлээ шинэчлэн батламжилж байна. Энэ ажиллагаа нь холбооны гишүүн байгууллагуудтай харилцаа сайжруулах, хамтын ажиллагааг бэхжүүлэх зорилготой. Гишүүнчлэлийн шинэчлэлт нь холбооны үйл ажиллагааг илүү үр дүнтэй болгох, гишүүн байгууллагуудтай харилцаа сайжруулахэд тусална.\n\nЭнэ ажиллагааны үеэр гишүүн байгууллагуудтай уулзалт зохион байгуулж, тэдний хэрэгцээ, санал хүсэлтийг сонсож байна. Мөн ирээдүйн хамтын ажиллагааны чиглэл, төлөвлөгөөний талаар ярилцлага болж байна.\n\nЭнэ ажиллагаа нь холбооны гишүүн байгууллагуудтай харилцаа сайжруулах, хамтын ажиллагааг бэхжүүлэхэд чухал үүрэг гүйцэтгэж байна. Ирээдүйд ийм ажиллагаануудыг үргэлжлүүлэн зохион байгуулах төлөвлөгөөтэй байна.'
      : 'Darkhan-Uul Province Women\'s Federation is renewing and certifying membership with member organizations. This activity aims to improve relations with member organizations and strengthen cooperation. Membership renewal will help make the federation\'s activities more effective and improve relations with member organizations.\n\nDuring this activity, meetings are organized with member organizations to listen to their needs and suggestions. Discussions are also held about future cooperation directions and plans.\n\nThis activity plays an important role in improving relations with member organizations and strengthening cooperation. There are plans to continue organizing such activities in the future.',
    category: locale === 'mn' ? 'Холбоо' : 'Organization',
    catId: 'organization',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 8 сар' : 'August 2024',
    image: '/images/News-Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо гишүүн байгууллагуудтайгаа гишүүнчлэлээ шинэчлэн батламжилж байна.jpg',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'annual-report-2023',
    title: locale === 'mn'
      ? 'ДУАЭХ 2023 онд'
      : 'DUAEH 2023 Annual Report',
    excerpt: locale === 'mn'
      ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбооны 2023 оны жилийн тайлан гарчээ. Энэ тайланд холбооны хийсэн ажлууд, хүрсэн амжилт, тулгарсан хүндрэл, ирээдүйн төлөвлөгөөний талаар дэлгэрэнгүй мэдээлэл агуулсан.'
      : 'Darkhan-Uul Province Women\'s Federation 2023 annual report has been released. This report contains detailed information about the federation\'s work, achievements, challenges faced, and future plans.',
    content: locale === 'mn'
      ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбооны 2023 оны жилийн тайлан гарчээ. Энэ тайланд холбооны хийсэн ажлууд, хүрсэн амжилт, тулгарсан хүндрэл, ирээдүйн төлөвлөгөөний талаар дэлгэрэнгүй мэдээлэл агуулсан. 2023 онд холбоо эмэгтэйчүүдийн эрх, боломж, хөгжлийн талаар олон ажлууд хийжээ.\n\nТайланд эмэгтэйчүүдийн бизнес эрхлэлтийг дэмжих, тэдний ур чадварыг хөгжүүлэх, нийгмийн сайн сайхны чиглэлээр хийсэн ажлуудын талаар дэлгэрэнгүй мэдээлэл агуулсан. Мөн холбооны гишүүн байгууллагуудтай хамтын ажиллагаа, олон улсын байгууллагуудтай хамтран ажилласан ажлуудын талаар мэдээлэл өгсөн.\n\nЭнэ тайлан нь холбооны үйл ажиллагааны үр дүнг тусгаж, ирээдүйн хөгжлийн чиглэлийг тодорхойлж байна. Ирээдүйд холбоо эмэгтэйчүүдийн эрх, боломж, хөгжлийн талаар илүү олон ажлууд хийх төлөвлөгөөтэй байна.'
      : 'Darkhan-Uul Province Women\'s Federation 2023 annual report has been released. This report contains detailed information about the federation\'s work, achievements, challenges faced, and future plans. In 2023, the federation did many works regarding women\'s rights, opportunities, and development.\n\nThe report contains detailed information about supporting women\'s entrepreneurship, developing their skills, and work done in the direction of social welfare. Information was also provided about cooperation with member organizations and work done in collaboration with international organizations.\n\nThis report reflects the results of the federation\'s activities and defines future development directions. In the future, the federation plans to do more work regarding women\'s rights, opportunities, and development.',
    category: locale === 'mn' ? 'Тайлан' : 'Report',
    catId: 'reports',
    author: locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation',
    date: locale === 'mn' ? '2024 оны 1 сар' : 'January 2024',
    image: '/images/News-ДУАЭХ 2023 онд.jpg',
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  }
];
