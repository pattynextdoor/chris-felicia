<template>
  <div class="home">
    <div class="container">

      <div class="top">

        <section id="hero">
          <h1 class="hero-h1" data-aos="fade-down">christian & felicia</h1>
          <h2 class="hero-h2" data-aos="fade-up" data-aos-delay="300">february 22, 2020</h2>
          <div class="password" v-if="passwordSuccess === false">
            <div class="password-input">
              <input type="text" ref="passwordText" placeholder="Password">
              <button id="password-button" v-on:click="checkPassword" v-on:keyup.enter="checkPassword">Send</button>
            </div>
          </div>
          <a class="rsvp-button" href="https://christian-felicia.app.rsvpify.com/" 
             v-if="passwordSuccess === true"
             data-aos="fade-down"
             data-aos-duration="500"
             target="_blank">RSVP</a>
            
        </section>

      </div>

      <div class="content" v-if="passwordSuccess === true">
        <section id="venue">
          <h2 class="section-h2" data-aos="fade-down" data-aos-duration="500">
            Venue
          </h2>
          <hr class="hr" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="300">
          <div id="venue-grid" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            <div class="venue-info">
              <h2 class="venue-title">The Mission Inn</h2>
              <p class="venue-sub">Riverside, CA</p>
              <img class="venue-img" src="https://markshimazuphotography.files.wordpress.com/2013/07/mission_inn_riverside_california_1.jpg" alt="Mission Inn venue">
              <p class="venue-blurb">The Mission Inn is a historical venue we both loved, especially because of our sentimental ties to Riverside. After our trip to Europe, we felt the venue mixed our Southern California roots and the architectural marvels we saw on our trip. In addition, we loved the convenience of having a ceremony, cocktail hour, and reception area all in one space.</p>
                <p class="venue-p">“It is the most unique hotel in America. It’s a monastery, a museum, a fine hotel, a home, a boardinghouse, a mission, an art gallery and an aviator’s shrine. It combines the best features of all of the above. If you are ever in any part of California, <strong>don’t miss the famous Mission Inn of Riverside.</strong>”
                  <br/>
                  <br/>
                  - Will Rogers
                  <br/>
                  <br/>
                  <a href="https://www.missioninn.com/" style="font-style: normal">Learn More</a>
                </p>
            </div>

            

            <iframe width="75%" height="450" frameborder="0" style="border:0; display: block; margin: 0 auto; margin-bottom: 10%;" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg3TJrfqx3IARsr-VCrwey7I&key=AIzaSyAwG-CZCgy-J54KMnrVopJQudOe5YRSFE0" allowfullscreen></iframe> 

          </div>

          <h2 class="section-h2">Event Information</h2>
          <hr class="hr">

          <h3 class="section-h3">Schedule</h3>

          <div class="schedule-grid">
            <div class="schedule-item" id="ceremony" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0">
              <img class="schedule-icon" src="@/assets/church.png">
              <h3>Ceremony</h3>
              <p class="schedule-time">6:00PM</p>
              <p class="schedule-location">St. Francis of Assisi Chapel</p>
            </div>
            <div class="schedule-item" id="reception" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="250">
              <img class="schedule-icon" src="@/assets/celebration.png">
              <h3>Cocktail Hour</h3>
              <p class="schedule-time">6:30PM</p>
              <p class="schedule-location">Glenwood Tavern</p>
            </div>
            <div class="schedule-item" id="reception" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
              <img class="schedule-icon" src="@/assets/wedding-reception.png">
              <h3>Reception</h3>
              <p class="schedule-time">7:30PM</p>
              <p class="schedule-location">The Grand Parisian Ballroom</p>
            </div>
          </div>

          <a href="https://i.imgur.com/ON11skK.png" target="_blank">
            <img class="venue-map" src="https://i.imgur.com/ON11skK.png" >
          </a>

          <h3 class="section-h3">Parking</h3>

          <div class="parking-info">
            <p><span class="parking-price">$17</span> for self-parking</p>
            <p><span class="parking-price">$23</span> for valet services</p>
          </div>
          
          <p class="parking-disc" >Street parking is available, as well as a parking garage and parking lots available on Orange St. Please see map for details.</p>
          <p class="parking-disc" ><a href="https://www.missioninn.com/directions-en.html">Need directions?</a></p>

          <h3 class="section-h3">Accomodations</h3> 

          <div class="acc-grid">
            <div class="acc-item">
              <a href="https://www.missioninn.com/stay.html" class="acc">
                <img src="@/assets/mission.png" alt="Mission Inn Logo" class="acc-logo">
              </a>
              <p>To reserve a room from our room block at Mission Inn, call the Room Reservations Department at <strong>800-843-7755 or 951-784-0300, extension 850</strong> and reference the Tumbucon & Mapa Wedding Room Block 2020 when making your reservation</p>
            </div>

            <div class="acc-item">
              <a href="https://www.hyatt.com/en-US/hotel/california/hyatt-place-riverside-downtown/ralzr/maps-parking-transportation" class="acc">
                <img src="@/assets/hyatt-logo.png" alt="Hyatt Logo" class="acc-logo">
              </a>
              <p>We do not have a room block at Hyatt Place Downtown Riverside, but we do recommend it as a nearby alternative. Hyatt Place is less than a 5 minute walk from the venue. Reservations can be made online.</p>
            </div>
          </div>

          <h3 class="section-h3">Whose Side? R'Side!</h3>
          <p class="rside-blurb">Below are a couple of places we feel are hidden gems in Riverside and many are places we went to together in our first year of dating.</p>
        
          <tabs class="activities" data-aos="flip-down" data-aos-delay="150">
            <tab title="What To Do">
              <ul class="list">
                <li>
                  <a href="https://missioninnmuseum.org/">Historic Mission Inn Museum</a>
                </li>
                <li>
                  <a href="https://www.planning.org/greatplaces/spaces/2011/fairmountpark.htm">Fairmount Park</a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/Attraction_Review-g32978-d3850394-Reviews-Mount_Rubidoux_Park-Riverside_California.html">Mt.Rubidoux</a>
                </li>
                <li>
                  <a href="https://www.shopriversideplaza.com/">Riverside Plaza</a>
                </li>
                <li>
                  <a href="http://www.weirdca.com/location.php?location=421">World's Largest Paper Cup</a>
                </li>
                <li>
                  <a href="https://belltower.ucr.edu/subpage.php?content=history.html">UCR Belltower</a>
                </li>
                <li>
                  <a href="https://gardens.ucr.edu/">UCR Botanical Garden</a>
                </li>
                <li>
                  <a href="https://vanburendriveintheatre.com/">Van Buren Drive-In Theater</a>
                </li>
                <li>
                  <a href="http://www.parks.ca.gov/?page_id=649">California Citrus State Historic Park</a>
                </li>
                <li>
                  <a href="https://market.glessranch.com/">Gless Ranch Farmer's Market</a>
                </li>
              </ul>
            </tab>

            <tab title="Where To Eat">
              <ul class="list">
                <li>
                  <a href="https://www.proabition.com/">ProAbition</a>
                </li>
                <li>
                  <a href="https://www.simplesimonsbakerybistro.com/">Simple Simon's</a>
                </li>
                <li>
                  <a href="https://www.riversidefoodlab.com/">Riverside Food Lab</a>
                </li>
                <li>
                  <a href="http://www.back2thegrind.com/">Back To The Grind</a>
                </li>
                <li>
                  <a href="https://www.heroesrestaurantandbrewery.com/">Heroes Restaurant & Brewery</a>
                </li>
                <li>
                  <a href="http://www.thesaltedpig.com/">The Salted Pig</a>
                </li>
                <li>
                  <a href="http://punjabpalacecuisine.com/">Punjab Palace</a>
                </li>
                <li>
                  <a href="https://www.oceanpho.com/riverside-menu">Ocean Pho</a>
                </li>
                <li>
                  <a href="http://losjilbertosriverside.com/">Los Jilbertos</a>
                </li>
                <li>
                  <a href="https://www.rice-spice.com/">Thai Rice & Spice</a>
                </li>
              </ul>
            </tab>
          </tabs>

          <h3 class="section-h3">registry</h3>
          <p class="registry-text">Your love, laughter, and company on our wedding day is the greatest gift of all. However, should you wish to help us celebrate with a gift we have registered with the stores below:</p>
          <div class="grid-2 registry-grid">
            <a class="registry-item" href="https://www.amazon.com/wedding/share/cmftwed">
              <img src="http://pluspng.com/img-png/wayfair-logo-vector-png-amazon-logo-vector-512.png" alt="" class="registry">
            </a>
            <a style="transform: translateY(33%)" class="registry-item" href="https://www.wayfair.com/registry/wedding/FeliciaAndChristian">
              <img src="http://pluspng.com/img-png/wayfair-logo-vector-png--400.png" alt="" class="registry">
            </a>
          </div>


          <h3 class="section-h3" style="margin-top: 10%;">frequently asked questions</h3>

          <VueFaqAccordion
            :items="faq"
            >
          </VueFaqAccordion>
          
        </section>
        <section id="our-story" >

          <carousel 
            :per-page="1" 
            @page-change="handlePageChange"
            >
            <slide class="slide">
              <img src="https://i.imgur.com/90AK0vh.jpg" alt="UV Blue & Orange Soda" class="slide-img">
              <h2 class="slide-title">2013</h2>
              <h3 class="slide-subtitle">UV Blue & Orange Soda</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/luM1KqL.jpg" alt="Mabolow" class="slide-img">
              <h2 class="slide-title">2014</h2>
              <h3 class="slide-subtitle">Mabolow</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/8SMZMDF.jpg" alt="F*ck Cancer" class="slide-img">
              <h2 class="slide-title">2015</h2>
              <h3 class="slide-subtitle">F*ck Cancer</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/g3f428R.jpg" alt="Gday Mate" class="slide-img">
              <h2 class="slide-title">2016</h2>
              <h3 class="slide-subtitle">G'day Mate!</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/TH2nJ8P.jpg" alt="Moving Up & Moving In" class="slide-img">
              <h2 class="slide-title">2017</h2>
              <h3 class="slide-subtitle">Moving Up & Moving In</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/LLnaDLD.jpg" alt="Sunrise Surprise" class="slide-img">
              <h2 class="slide-title">2018</h2>
              <h3 class="slide-subtitle">Sunrise Surprise</h3>
            </slide>
            
            <slide class="slide">
              <img src="https://i.imgur.com/mzzI6DV.jpg" alt="Mission: Down the Aisle" class="slide-img">
              <h2 class="slide-title">2019-2020</h2>
              <h3 class="slide-subtitle">Mission: Down the Aisle</h3>
            </slide>
          </carousel>

          <div class="sound-btn" v-on:click="toggleAudio">
            <img class="sound-icon" src="@/assets/sound.png">
          </div>

          <p class="slide-text" style="font-style: italic">Click to listen to our story</p>

          <p class="slide-text">{{ slideText[currentSlide] }}</p>

        </section>

        <section id="gallery">
          <carousel 
            :per-page="1" 
            >

            <slide class="slide"><img src="https://i.imgur.com/zmVMgee.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/SsFDdBZ.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/f55FZ22.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/ti7XerO.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/sD1qZ6r.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/6IhUCbd.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/iXLyod2.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/WFPiQib.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/BijwowR.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/T4yhOai.jpg" alt="" class="slide-img gal-img"></slide>

          </carousel>
          <iframe class="youtube" width="1000" height="750" src="https://www.youtube.com/embed/LPSqSW9nrzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:0; display: block; margin: 0 auto; margin-top: 5%;"></iframe>
        </section>
        
        


        <div class="footer">
            Website by <a href="https://patricktumbucon.com">Patrick Tumbucon</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from 'aos'
import { Carousel, Slide } from 'vue-carousel'
import { Tabs, Tab } from 'vue-slim-tabs'
import { Howl, Howler } from 'howler'
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  name: 'home',
  components: {
    Carousel,
    Slide,
    Tabs,
    Tab,
    VueFaqAccordion
  },
  data: function() { 
    return {
      slideText: [
        'In the spring of 2013, we met at a mutual friend’s kickback birthday party.  We took a group shot of UV Blue together (his handle of choice in his frat days), and we shared a chaser of orange soda.  Throughout the night, we took many drunken selfies together on Snapchat.  We continued to communicate through Snapchat well after the party was over and then finally exchanged numbers, and the rest was history.',
        'We took our first international trip together to the Philippines where we met each other’s family abroad and were able to take a side trip to Palawan. Some of our favorite experiences were island-hopping, snorkeling and living it up in Mabolo (a.k.a. Mabolow to Christian, Felicia’s Lolo’s house.)',
        'Thinking about 2015 makes us not want to think about 2015. We lost several close family members to cancer and , most notably,  both of our dads were diagnosed with pancreatic cancer  within 10 days of each other.  Both lost their battle to the disease within a year.  Somehow, we were lucky in the most unlucky way to be going through this together.  Ultimately, we are thankful that our dads are no longer suffering and that we got that time with them when we did. We know that they are looking down at us today and just as excited as the rest of our families.',
        'After the difficult year, we decided to treat ourselves to an international trip Down Under. We stayed in a little beach town called Cottesloe not far from Perth in Western Australia, which was the perfect mix of relaxation and adventure. Some of our favorite memories were feeding the kangaroos and, ironically, cooking kangaroo meat. We loved meeting all the other Australian animals like wombats, quokkas, and koalas.',
        'Christian received a position for the county and now worked in DTLA, meaning that we worked only two blocks from each other and it made sense for us to move in together. Our favorite part about living together is getting to see each other everyday.',
        'For our 5th year anniversary, we had a European trip planned for the fall that would start in Barcelona. We excitedly planned our itinerary but there was one part of the  plan that half of us was not privy to.  We got engaged right at sunrise on top of a fortress from the Spanish Civil that had a 360-degree view of the city, with a secret photographer to capture everything.  We celebrated with a bottle of Cava and got to enjoy the rest of our trip in engaged bliss.',
        'It’s finally time! We have decided to throw it back to Riverside and celebrate our union with our closest family and friends at the Mission Inn.  We are so excited to get married and have a great time with everyone on our big day.'
      ],
      voiceClips: [
        'voice/2013.mp3',
        'voice/2014.mp3',
        'voice/2015.mp3',
        'voice/2016.mp3',
        'voice/2017.mp3',
        'voice/2018.mp3',
        'voice/2019.mp3',
      ],
      faq: [
        {
          title: 'When is the RSVP deadline? May I RSVP online?',
          value: 'The deadline to respond is February 1st, 2020. RSVP responses are only being accepted online, through the red RSVP button at the top of the page. Please enter in your first and last name exactly as it is spelled out on the envelope of your formal invitation.'
        },
        {
          title: 'What should I wear? Is there a dress code?',
          value: 'The dress code for our wedding is formal. More specifically, ‘Southern California’ winter formal. See following question.'
        },
        {
          title: 'What will be the weather be like this time of year?',
          value: 'Since the wedding is in the last week of February, it will be cold (by Southern California standards). The weather on the exact date of our wedding in 2019 was a high of 58℉ with a low of 33℉ and in 2018 a high of  60℉ with a low of 38℉. We would advise to dress warmly but please note that all events will be hosted indoors in a controlled temperature environment.'
        },
        {
          title: 'Where are the ceremony and reception taking place?',
          value: 'All wedding events will be in one venue - The Mission Inn. The ceremony will be taking place at St. Francis of Assisi Chapel, The Mission Inn’s onsite chapel. The reception will take place at the Grand Parisian Ballroom within The Mission Inn. Cocktail Hour will take place at Ramona Court and Glenwood Tavern, which are attached to the Grand Parisian Ballroom. You can find a map under the \'Event Information\' section.'
        },
        {
          title: 'What happens after the ceremony?',
          value: 'After the ceremony, the wedding party will be having pictures taken nearby for about an hour. Guests may head straight to the ballroom for cocktail hour where hors doeuvres and beverages will be served.'
        },
        {
          title: 'Are there other wedding events I can attend?',
          value: 'If you will be in Riverside for the weekend, we would love to hang out with you the night before the wedding at The Presidential Lounge at The Mission Inn. Exact time will be announced as the event approaches.'
        },
        {
          title: 'What should I do if I can’t make it? May I send a substitute?',
          value: 'We will miss you! If you cannot make it to our wedding, please let us know as soon as possible and RSVP “no” so we can plan accordingly. Due to limited space and budget, the guest list is very specific and you were chosen to share this moment with us, you are irreplaceable.'
        },
        {
          title: 'Are kids welcome?',
          value: 'We love all kids, but only children whose names are listed on the invitation are welcome. We appreciate you making arrangements ahead of time for children and others not invited so you can celebrate with us.'
        },
        {
          title: 'Can I bring a date?',
          value: 'We have a strict guest list in order to stay on budget. Our wedding is strictly RSVP only. We will only be able to accommodate those listed on your invitation.'
        },
        {
          title: 'How do I get to the venue?',
          value: 'See the \'Parking\' section. Southern California traffic is unpredictable and travel times can easily double or triple.  Plan accordingly.'
        },
        {
          title: 'What time should I arrive?',
          value: 'We recommend that you arrive an hour before the start of the ceremony at 6pm, to make sure everyone is on time and we can get the party started! Please note that the ceremony will start promptly and that the seating capacity of the chapel is 150 people.'
        },
        {
          title: 'Where should I park?',
          value: 'At the Mission Inn, self-parking is $17 and valet service is $23. There is limited street parking surrounding the venue, in addition to a parking structure and two parking lots on Orange Street. See the \'Parking\' section.'
        },
        {
          title: 'Do you have a hotel block for guests? Where do you recommend I stay?',
          value: 'To reserve a room from our room block at Mission Inn, call the Room Reservations Department at 800-843-7755 or 951-784-0300, extension 850 and reference the Tumbucon & Mapa Wedding Room Block 2020 when making your reservation  We do not have a room block at Hyatt Place Downtown Riverside, but we do recommend it as a nearby alternative. Hyatt Place is less than a 5 minute walk from the venue. Reservations can be made online.'
        },
        {
          title: 'Are the ceremony and reception wheelchair accessible?',
          value: 'The Mission Inn is ADA compliant and wheelchair accessible. The historical venue was built a long time ago so although there are elevator cars to access both the chapel and ballroom, the paths traveled to access the locations are slightly different. Please allow extra time if it is necessary for you to use these paths.'
        },
        {
          title: 'Will food and drinks be served at the reception? What kind of food? Will there be any vegan/vegetarian options?',
          value: 'We will be serving chicken or vegetarian dinner options, as well as hosting an open bar. There will be no seafood options for passed appetizers or dinner due to Felicia’s severe allergy. If you have an allergy or intolerance please let us know through your RSVP so we can do our best to accommodate.'
        },
        {
          title: 'Where are you registered?',
          value: 'Your love, laughter, and company on our wedding day is the greatest gift of all. However, should you wish to help us celebrate with a gift, we are registered on Amazon and Wayfair. Please see the registry section on this page.'
        },
        {
          title: 'May I take and post pictures of the wedding on social media?',
          value: 'We are having an “unplugged” ceremony, where we hope you can be present and attentive by not using your electronic device(s) (including cameras, cell phones, tablets, etc.) while we have our professional photographer and videographer document the event. After the ceremony, feel free to let loose and take as many pictures/selfies and post to your social media accounts. We have not yet thought of an appropriately cool/corny hashtag.'
        },
        {
          title: 'I still have questions, what is the best way to contact you?',
          value: 'For further questions, please email us at cmftwed@gmail.com'
        }
      ],
      currentSlide: 0,
      passwordSuccess: false,
    }
  },
  computed: {
    currentClip: function() {
      return new Howl({
        src: [this.voiceClips[this.currentSlide]]
      });
    }
  },
  methods: {
    handlePageChange: function(slideIndex) {
      this.$data.currentSlide = slideIndex;
      
      let currentClip = this.$data.currentClip;

      currentClip.stop();
      this.$data.currentClip = new Howl({
          src: [this.$data.voiceClips[this.$data.currentSlide]],
          html5: true,
          onloaderror: function(id, error) { console.log('loadError: ' + id +' - ' + error)}
      });
    },
    toggleAudio: function() {
      let currentClip = this.$data.currentClip;

      if (!currentClip) {
        let currentClip = new Howl({
          src: [this.$data.voiceClips[this.$data.currentSlide]],
          html5: true,
          onloaderror: function(id, error) { console.log('loadError: ' + id +' - ' + error)}
        });

        this.$data.currentClip = currentClip;
      }

      console.log(currentClip)

      if (currentClip.playing()) {
        currentClip.stop();
        console.log('Clip stopped')
      }

      else {
        currentClip.play();
        console.log('Clip playing')
      }
    },
    injectRsvpForm: function() {
      let section = document.getElementById('rsvp-form');
      
      let script1 = document.createElement('script');
      let script2 = document.createElement('script');
      let script3 = document.createElement('script');

      let inlineScript = document.createTextNode('iFrameResize({autoResize: true,checkOrigin: false,heightCalculationMethod: \'max\', enablePublicMethods: true}, \"#RSVPifyIFrame\");');

      script1.setAttribute('type', 'text/javascript');
      script1.setAttribute('src', 'https://app.rsvpify.com/embed/500295579');
      script1.setAttribute('scrolling', 'yes')

      script2.setAttribute('type', 'text/javascript');
      script2.setAttribute('src', 'https://app.rsvpify.com/js/iframeResizer.min.js');

      script3.setAttribute('type', 'text/javascript');
      script3.setAttribute('type', 'text/javascript');
      script3.appendChild(inlineScript)

      section.insertAdjacentElement('beforeend', script1);
      section.insertAdjacentElement('beforeend', script2);
      section.insertAdjacentElement('beforeend', script3);
      
    },
    checkPassword: function() {
      let vm = this;
      vm.$data.passwordSuccess = (this.$refs.passwordText.value.trim() === "cmftwed") || (this.$refs.passwordText.value === "Cmftwed")
      console.log(this.passwordSuccess)
      setTimeout(function() {
        vm.injectRsvpForm();
      }, 500)
    }
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Nunito+Sans|Lato|Amatic+SC|Source+Sans+Pro&display=swap');

@font-face {
    font-family: 'Marigold';
    src: url('../assets/marigold/marigold-webfont.woff2') format('woff2'),
          url('../assets/marigold/marigold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.home {
  overflow-x: hidden;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  background-color: #e5dfe7;
}

h1, h2 {
  font-family: 'Josefin Sans', sans-serif;
  }

.container {
  padding: 0 10%;
}

.content {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.hr {
  width: 25%;
}

.section-h2 {
  font-family: 'Marigold', cursive;
  font-size: 5em;
  text-align: center;
  margin-bottom: 0;
}

.section-h3 {
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
  margin: 5% 0;
}

section#hero {
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  background: url("https://i.imgur.com/D8cNkgn.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  text-align: center;
}

.hero-h1, .hero-h2 , .password {
  text-align: center;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1);
}


.hero-h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Marigold', cursive;
  padding-top: 12%;
  margin-bottom: 0;
  font-size: 5em;
  color: white;
}

.hero-h2 {
  margin-top: 10px;
  font-size: 2em;
  font-family: 'Marigold', cursive;
  color: white;
}

.password-input > input {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5%;
}

.password {
  font-family: 'Nunito Sans'
}

section#our-story {
  background-color: #282828;
}

#story-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5%;
  padding: 0 15%;
}

.story-h2 {
  font-size: 2em;
}

.story-p {
  font-size: 1em;
  line-height: 1.5;
  color: #8c8c8c;
}

#gallery {
  padding-top: 10%;
  padding-bottom: 10%;
}

.gal-img {
  max-height: 750px;
}

.slide {
  background-color: #282828;
  display: flex;
  align-items: center;
}

.slide-title, .slide-subtitle {
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
}

.slide-title {
  position: absolute;
  top: 20%;
  text-align: center;
  font-size: 8em;
  color: white;
  width: 100%;
  font-family: 'Marigold', cursive;
}

.slide-subtitle {
  position: absolute;
  top: 45%;
  text-align: center;
  font-size: 3em;
  color: white;
  width: 100%;
  font-family: 'Source Sans Pro', cursive;
  font-family: 'Nunito Sans', sans serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.slide-img {
  display: inline-block;
  margin: auto;
  max-width: 100%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.VueCarousel-navigation-button {
  font-size: 2em;
}

.slide-text {
  text-align: center;
  padding: 5% 20%;
  line-height: 1.6;
  color: white;
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
  font-size: 1.2em;
  margin-bottom: 0;
}

.sound-btn {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 25px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin-top: 2%;
}

.sound-icon {
  max-width: 25px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}

section#gallery {
  background-color: #282828;
}

section#venue {
  padding-top: 10%;
  background-color: #eee5d5;
}

#venue-grid {
}

.venue-info {
  padding: 0 10%;
  text-align: center;
}

.venue-title {
  margin-bottom: 0;
  font-size: 3em;
}

.venue-sub {
  color: #8c8c8c;
}

.venue-blurb {
  padding: 0 12.5%;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5%;
}

.venue-img {
  width: 66%;
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.venue-p {
  font-style: italic;
  margin: auto;
  width: 50%;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  padding: 5% 7%;
  margin: 5% auto;
}

#map {
  height: 100%;
}

.schedule-grid {
  display: grid;
  padding: 3% 15%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 25%;
}

.schedule-item {
  text-align: center;
  font-size: 1.25em;
}

.schedule-icon {
  width: 50%;
}

.schedule-time {
  font-size: 1.75em;
}

.schedule-location {
  font-size: 1em;
}

.venue-map {
  display: block;
  margin: 0 auto;
  width: 75%;
  margin-bottom: 10%;
}

.parking-info {
  padding: 0 40%;
}

.parking-info > p {
  font-size: 1.5em;
}

.parking-price {
  font-size: 2em;
}

.parking-disc {
  text-align: center;
  padding: 0 33%;
}

.acc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.acc-item {
  text-align: center;
  padding: 0 15%;
}

.acc {
  display: inline-block;
  margin: 0 auto;
  width: 50%;
}

.acc-logo {
  max-width: 250px;
  border-radius: 5%;
  transition-duration: 0.4s;
  transition-property: transform;
}

.acc-logo:hover {
  transform: scale(1.1);
}

section#whattodo {
  background-color: white;
}

.rside-blurb {
  text-align: center;
  padding: 0 33%;
}

.activities {
  width: 33%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 19px 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

ul.list {
  list-style: none;
  padding-bottom: 5%;
  line-height: 2;
}

ul.list>li>a {
  color: black;
}

.vue-tablist {
  list-style: none;
  display: flex;
  padding-left: 0;
  border-bottom: 1px solid #e2e2e2;
}

.vue-tab {
  padding: 4% 10%;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-bottom-color: #e2e2e2;
  border-radius: 3px 3px 0 0;
  background-color: white;
  position: relative;
  bottom: -1px;
}

.vue-tab[aria-selected="true"] {
  border-color: #e2e2e2;
  border-bottom-color: transparent;
}

.vue-tab[aria-disabled="true"] {
  cursor: not-allowed;
  color: #999;
}

section {
  padding-bottom: 25%;
}

.footer {
  text-align: center;
  background-color: transparent;
}

.footer > a {
  text-decoration: none;
}

.password {
  margin-top: 16px;
  font-size: 2em;
  font-family: 'Marigold', cursive;
  color: white;
}

.password > label {
  display: inline-block;
}

.password > .password-input {
  margin: auto;
  display: block;
}

.registry-text {
  text-align: center;
  padding: 2% 35%;
}

.registry-item {
  display: block;
}

.registry-item > img {
  align-self: center;
  margin-left: 12.5%;
}

section#rsvp-form {
  padding-top: 10%;
}

.rsvp-button {
  text-align: center;
  z-index: 999999;
  margin: 0 auto;
  padding: 1% 4%;
  display: inline-block;
  box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
  line-height: 1.25;
  background: #e74c3c;
  text-decoration: none;
  color: white;
  font-size: 16px;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: background-color .6s ease;
  overflow: hidden;
  border-radius: 10px;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%,-50%,0);
    background: rgba(white,.1);
    border-radius: 100%;
    transition: width .3s ease, height .3s ease;
  }
  &:focus,
  &:hover {
      background: darken(#e74c3c,25%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px)
  {
    .container {
      padding: 0;
    }

    .hero-h1 {
      margin-top: 0;
      padding-top: 60%;
      font-size: 50px;
    } 

    .hero-h2 {
      font-size: 30px;
    }

    .section-h2 {
      font-size: 3em;
    }

    .slide-title {
      font-size: 2em;
    }

    .slide-subtitle {
      font-size: 1em;
    }

    .slide-img {
      max-width: 375px;
    }

    .slide-text {
      font-size: 1.1em;
      padding: 5% 12%;
    }

    .youtube {
      width: 100%;
      height: 250px;
    }

    .venue-title {
      font-size: 2em;
    }

    .venue-img {
      width: 100%;
    }

    .venue-blurb {
      padding: 0 6%;
    }

    .venue-p {
      width: 75%;
    }

    .schedule-icon {
      width: 25%;
    }

    .schedule-grid {
      padding: 3% 0;
      grid-template-columns: 1fr;
      grid-row-gap: 5%;
    }

    .section-h3 {
      padding-top: 25%;
    }

    .schedule-time {
      font-size: 1.25em;
    }

    .schedule-location {
      font-size: 0.75em;
    }

    .venue-map {
      margin-top: 25%;
    }

    .parking-info {
      padding: 0 15%;
    }

    .parking-info > p {
      font-size: 1em;
      text-align: center;
    }

    .parking-disc {
      padding: 0 12.5%;
    }

    .acc-logo {
      max-width: 100px;
    }

    .rside-blurb {
      padding: 0 12%;
    }

    .activities {
      width: 80%;
    }

    .registry-text {
      padding: 1% 12.5%;
    }

    .registry-grid {
      grid-template-columns: 1fr;
    }

    .registry {
      width: 75%;
    }

    
  }

</style>
