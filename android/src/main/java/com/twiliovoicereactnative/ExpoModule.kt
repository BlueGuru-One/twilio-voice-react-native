package com.twiliovoicereactnative

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("TwilioVoiceReactNativeExpo")

        // This module primarily exists to register the lifecycle listeners
        // The actual voice functionality is provided by TwilioVoiceReactNativeModule

        Function("getVersion") {
            return@Function "1.0.0"
        }
    }
}
