package com.twiliovoicereactnative;

import android.content.Context;

import java.util.Collections;
import java.util.List;

import expo.modules.core.interfaces.ApplicationLifecycleListener;
import expo.modules.core.interfaces.Package;
import expo.modules.core.interfaces.ReactActivityLifecycleListener;

public class ExpoPackage implements Package {
    @Override
    public List<? extends ReactActivityLifecycleListener> createReactActivityLifecycleListeners(Context activityContext) {
        return Collections.singletonList(new ExpoActivityLifecycleListener());
    }

    @Override
    public List<? extends ApplicationLifecycleListener> createApplicationLifecycleListeners(Context context) {
        return Collections.singletonList(new ExpoApplicationLifecycleListener());
    }
}
