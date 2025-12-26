const { withInfoPlist, withEntitlementsPlist, withXcodeProject } = require('@expo/config-plugins');

/**
 * iOS Config Plugin for Twilio Voice React Native SDK
 *
 * Adds required capabilities:
 * - Background Modes: Audio, AirPlay, Picture in Picture, Voice over IP
 * - Push Notifications
 */

function withTwilioVoiceIOS(config) {
  // Add background modes to Info.plist
  config = withInfoPlist(config, (config) => {
    if (!config.modResults.UIBackgroundModes) {
      config.modResults.UIBackgroundModes = [];
    }

    const requiredModes = ['audio', 'voip'];
    for (const mode of requiredModes) {
      if (!config.modResults.UIBackgroundModes.includes(mode)) {
        config.modResults.UIBackgroundModes.push(mode);
      }
    }

    return config;
  });

  // Add push notification entitlements
  config = withEntitlementsPlist(config, (config) => {
    // Set APS environment (development or production)
    if (!config.modResults['aps-environment']) {
      config.modResults['aps-environment'] = 'development';
    }

    return config;
  });

  return config;
}

module.exports = withTwilioVoiceIOS;
