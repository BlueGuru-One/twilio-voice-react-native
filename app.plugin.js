const { createRunOncePlugin } = require('@expo/config-plugins');
const withTwilioVoiceIOS = require('./expo-config-plugin/ios');
const withTwilioVoiceAndroid = require('./expo-config-plugin/android');

const pkg = require('./package.json');

/**
 * Twilio Voice React Native SDK - Expo Config Plugin
 *
 * This plugin configures your Expo app to work with the Twilio Voice SDK:
 *
 * iOS:
 * - Adds Background Modes (audio, voip)
 * - Adds Push Notifications entitlement
 *
 * Android:
 * - Adds required permissions (RECORD_AUDIO, BLUETOOTH_CONNECT, etc.)
 * - The lifecycle listeners are registered via expo-module.config.json
 */
function withTwilioVoice(config) {
  config = withTwilioVoiceIOS(config);
  config = withTwilioVoiceAndroid(config);
  return config;
}

module.exports = createRunOncePlugin(withTwilioVoice, pkg.name, pkg.version);
