import Ember from "ember";

// var i = 0;
// var photos = ["/assets/images/profile-pic-one.jpg", "/assets/images/profile-pic-two.jpg", "/assets/images/profile-pic-three.jpg", "/assets/images/profile-pic-4.jpg", "/assets/images/profile-pic-five.jpg", "/assets/images/profile-pic-six.jpg", "/assets/images/profile-pic-eight.jpg", "/assets/images/profile-pic-9.jpg", "/assets/images/profile-pic-10.jpg", "/assets/images/profile-pic-11.jpg", "/assets/images/profile-pic-12.jpg", "/assets/images/profile-pic-13.jpg", "/assets/images/profile-pic-14.jpg", "/assets/images/profile-pic-15.jpg", "/assets/images/profile-pic-16.jpg", "/assets/images/profile-pic-17.jpg", "/assets/images/profile-pic-18.jpg", "/assets/images/profile-pic-19.jpg", "/assets/images/profile-pic-20.jpg", "/assets/images/profile-pic21.jpg", "/assets/images/profile-pic-22.jpg", "/assets/images/profile-pic-23.jpg", "/assets/images/profile-pic-24.jpg", "/assets/images/profile-pic-25.jpg", "/assets/images/profile-pic-26.jpg"].map((url)=> {
//     return {
//       url: url,
//       id: i++
//     };
// });

var photos = [{id: 1, url: "/assets/images/profile-pic-one.jpg"}, {id: 2, url: "/assets/images/profile-pic-two.jpg"}, {id: 3, url: "/assets/images/profile-pic-three.jpg"}, {id: 4, url: "/assets/images/profile-pic-4.jpg"}, {id: 5, url: "/assets/images/profile-pic-five.jpg"}, {id: 6, url: "/assets/images/profile-pic-six.jpg"}, {id: 7, url: "/assets/images/profile-pic-eight.jpg"}, {id: 8, url: "/assets/images/profile-pic-9.jpg"}, {id: 9, url: "/assets/images/profile-pic-10.jpg"}, {id: 10, url: "/assets/images/profile-pic-11.jpg"}, {id: 11, url: "/assets/images/profile-pic-12.jpg"}, {id: 12, url: "/assets/images/profile-pic-13.jpg"}, {id: 13, url: "/assets/images/profile-pic-14.jpg"}, {id: 14, url: "/assets/images/profile-pic-15.jpg"}, {id: 15, url: "/assets/images/profile-pic-16.jpg"}, {id: 16, url: "/assets/images/profile-pic-17.jpg"}, {id: 17, url: "/assets/images/profile-pic-18.jpg"}, {id: 18, url: "/assets/images/profile-pic-19.jpg"}, {id: 19, url: "/assets/images/profile-pic-20.jpg"}, {id: 20, url: "/assets/images/profile-pic21.jpg"}, {id: 21, url: "/assets/images/profile-pic-22.jpg"}, {id: 22, url: "/assets/images/profile-pic-23.jpg"}, {id: 23, url: "/assets/images/profile-pic-24.jpg"}, {id: 24, url: "/assets/images/profile-pic-25.jpg"}, {id: 25, url: "/assets/images/profile-pic-26.jpg"}];


export default Ember.Component.extend({

  photos: photos,

  actions: {
    toggleDetail: function() {
      this.set('showDetail', !this.get('showDetail'));
    },
    shuffle: function() {
      this.get('photos').forEach((photo) => {
        photo._randomPosition = Math.random();
      });
      this.set('photos', this.get('photos').sortBy('_randomPosition'));
    }
  }
});