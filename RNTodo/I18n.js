// 'use strict';
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
    'en' : require('./ImageSwipeLanguage/Lang/en.json'),
    'vi' : require('./ImageSwipeLanguage/Lang/vi.json')
  };

export default I18n;