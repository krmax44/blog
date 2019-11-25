import 'typeface-assistant/index.css';
import 'typeface-fira-mono/index.css';
import './theme/assets/scss/global.scss';

import BadgeButton from './theme/components/BadgeButton.vue';

export default ({ Vue }) => {
	Vue.component('BadgeButton', BadgeButton);
};
