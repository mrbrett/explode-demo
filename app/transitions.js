export default function(){
  var duration = 500;
  this.transition(
    this.childOf('#home'),
    this.use('explode', {
      pickOld: 'h3', use: ['toUp', { duration }]
    }, {
      pickNew: 'h3', use: ['toDown', { duration }]
    }, {
      pickNew: 'img', use: ['toLeft', {duration: duration*5, easing: 'easeOutQuart'}]
    }, {
      // everything else
      use: ['fade', { duration: duration/2 }]
    })
  );

  // ABOUT shuffle
  this.transition(
    this.childOf('#about'),
    this.use('explode', {
      matchBy: 'data-photo-id',
      use: ['fly-to', { duration, easing: 'easeInEaseOut'}]
    })
  );

  // Users transition
  this.transition(
    this.childOf('#users-chart'),
    this.use('explode', {
      matchBy: 'data-user-id',
      use: ['fly-to', {duration, easing: 'easeInOutQuint'}]
    }, {
      pick: '.detail-container',
      use: ['crossFade', {duration: duration*4}]
    })
  );
}