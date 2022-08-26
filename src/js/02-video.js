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

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
