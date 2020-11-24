package ch.gianlucafrei.nellygateway.services.login.drivers;

import ch.gianlucafrei.nellygateway.config.configuration.LoginProviderSettings;

import java.net.URI;

public abstract class LoginDriverBase implements LoginDriver {


    private final LoginProviderSettings settings;
    private final URI callbackURI;

    public LoginDriverBase(LoginProviderSettings settings, URI callbackURI) {
        this.callbackURI = callbackURI;

        var errors = getSettingsErrors(settings);
        if (errors.isEmpty()) {
            this.settings = settings;
        } else {
            String errorMsgs = String.join(", ", errors);
            throw new RuntimeException("Invalid provider settings: " + errorMsgs);
        }
    }

    public LoginProviderSettings getSettings() {
        return settings;
    }

    public URI getCallbackUri() {

        return callbackURI;
    }
}