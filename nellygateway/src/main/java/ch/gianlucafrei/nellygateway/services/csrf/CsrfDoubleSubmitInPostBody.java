package ch.gianlucafrei.nellygateway.services.csrf;

import ch.gianlucafrei.nellygateway.filters.spring.ExtractAuthenticationFilter;
import ch.gianlucafrei.nellygateway.session.Session;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import java.util.Optional;

@Component("csrf-double-submit-cookie-with-body-validation")
public class CsrfDoubleSubmitInPostBody extends CsrfDoubleSubmitValidation {

    @Override
    public boolean needsRequestBody() {
        return true;
    }

    @Override
    public boolean shouldBlockRequest(ServerWebExchange exchange, String requestBody) {

        Optional<Session> sessionOptional = (Optional<Session>) exchange.getAttribute(ExtractAuthenticationFilter.NELLY_SESSION);

        if (sessionOptional.isPresent()) {
            String csrfValueFromSession = exchange.getAttribute(ExtractAuthenticationFilter.NELLY_SESSION_CSRF_TOKEN);
            String csrfValueFromDoubleSubmit = extractCsrfToken(exchange);

            if (requestBody == null) {
                throw new AssertionError("request body is null");
            }

            if (requestBody.contains(csrfValueFromSession))
                return false;

            if (csrfValueFromDoubleSubmit == null)
                return true;

            if (!csrfValueFromDoubleSubmit.equals(csrfValueFromSession))
                return true;
        }

        return false;
    }
}