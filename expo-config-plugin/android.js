const { withAndroidManifest, withAppBuildGradle, withProjectBuildGradle } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

/**
 * Android Config Plugin for Twilio Voice React Native SDK
 *
 * Responsibilities:
 * - Add required permissions to AndroidManifest.xml
 * - Configure Google Services plugin for FCM
 * - Copy google-services.json if provided
 */

function withTwilioVoiceAndroidManifest(config) {
  return withAndroidManifest(config, (config) => {
    const mainApplication = config.modResults.manifest.application[0];

    // Add required permissions
    if (!config.modResults.manifest['uses-permission']) {
      config.modResults.manifest['uses-permission'] = [];
    }

    const requiredPermissions = [
      'android.permission.RECORD_AUDIO',
      'android.permission.BLUETOOTH_CONNECT',
      'android.permission.POST_NOTIFICATIONS',
      'android.permission.FOREGROUND_SERVICE',
      'android.permission.FOREGROUND_SERVICE_MICROPHONE',
      'android.permission.FOREGROUND_SERVICE_PHONE_CALL',
      'android.permission.USE_FULL_SCREEN_INTENT',
      'android.permission.VIBRATE',
      'android.permission.WAKE_LOCK',
    ];

    for (const permission of requiredPermissions) {
      const exists = config.modResults.manifest['uses-permission'].some(
        (p) => p.$['android:name'] === permission
      );
      if (!exists) {
        config.modResults.manifest['uses-permission'].push({
          $: { 'android:name': permission },
        });
      }
    }

    return config;
  });
}

function withTwilioVoiceAndroid(config) {
  // Add permissions
  config = withTwilioVoiceAndroidManifest(config);

  return config;
}

module.exports = withTwilioVoiceAndroid;
