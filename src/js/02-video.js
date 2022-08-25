import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LOCALSTORAGE_KEY, `${seconds}`);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
