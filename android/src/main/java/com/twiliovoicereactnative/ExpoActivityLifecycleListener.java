package com.twiliovoicereactnative;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import expo.modules.core.interfaces.ReactActivityLifecycleListener;

public class ExpoActivityLifecycleListener implements ReactActivityLifecycleListener {
    private static final String TAG = "ExpoActivityLifecycleListener";
    private VoiceActivityProxy voiceActivityProxy;

    @Override
    public void onCreate(Activity activity, Bundle savedInstanceState) {
        Log.d(TAG, "onCreate: initializing VoiceActivityProxy");
        this.voiceActivityProxy = new VoiceActivityProxy(
            activity,
            permission -> Log.d(TAG, "Permission rationale requested for: " + permission)
        );
        this.voiceActivityProxy.onCreate(savedInstanceState);
    }

    @Override
    public boolean onNewIntent(Intent intent) {
        if (this.voiceActivityProxy != null) {
            this.voiceActivityProxy.onNewIntent(intent);
        }
        return false;
    }

    @Override
    public void onDestroy(Activity activity) {
        if (this.voiceActivityProxy != null) {
            this.voiceActivityProxy.onDestroy();
        }
    }
}
