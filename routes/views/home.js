var keystone = require('keystone');


exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'home';


  // Render the view
  view.render('home', {

    //Head.hbs variables
    keywords: 'podiatry, podiatry Marlborough, podiatry clinic, foot care, podiatry Swindon, Beute, chiropodist, medi peri marlborough',
    metaDescription: 'Welcome to the Beute Clinic, podiatry service and foot care specialists based in Marlborough. Book and appointment with one of our excellent podiatrists or visit the website to check the treatments available (medi peri, diabetic foot assessment, biomechanics, verrucae treatments,...)',
    pageTitle: 'The Beute Clinic',

    //Header.hbs variables
    logo: '/img/logohannah.png',
    logoCaption: 'Beute Clinic logo',
    logoTitle: 'Welcome to the Beute Clinic',
    // menu1: '',
    // menu2: '',
    // menu3: '',
    // menu4: '',
    // menu5: '',
    //Hero variables
    h1Title: 'Welcome to The Beute Clinic',

    webmail: 'hsvbeute@gmail.com',
    twitter_url: '',
    facebook_url: 'https://www.facebook.com/thebeuteclinic/',
    googleplus_url: '',
    instagram_url: 'https://www.instagram.com/explore/locations/1690143194594857/hannah-beute-clinic/',
    linkedin_url: 'https://www.linkedin.com/in/hannah-beute-356044151/',

    //Maps
    address: 'Unit K, The Wagon Yard, London Road, Marlborough, SN8 1LH',
    map_link: 'https://www.google.co.uk/maps/place/The+Beute+Clinic/@51.420501,-1.726128,15z/data=!4m2!3m1!1s0x0:0x7157a3cfd58b1f7b?sa=X&ved=0ahUKEwjmsJbLpOfaAhUKDMAKHRq0AMQQ_BIIfjAK',

    //Services variables
    cancellationPolicy1: 'The Beute Clinic operates a cancellation policy. Our policy is similar to many other medical clinics and we ask all patients kindly to adhere to it.',
    cancellationPolicy2: 'Should you wish to cancel or reschedule an appointment we simply ask you to give a minimum of 24 hours notice for our shorter 30 minute appointments and 48 hours notice for our longer appointments such as our biomechanical assessments, nail surgery appointments and home visits. If this minimum is not adhered to, we reserve the right to charge the full treatment cost of the appointment.',
    cancellationPolicy3: 'We are aware that from time to time individual circumstances dictate that an appointment will be missed or less than the 24 hours notice will be given. On such occasions we can be lenient but frequent missed appointments can be very disruptive to the smooth running of the clinic and can also be inconvenient to other patients that require an appointment slot',


    //Contact Variables
    businessPhone: '01672288943, 07707697396'



  });
};
