package com.omnia.cpa.application.config;

import com.omnia.cpa.entity.Postback;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
//        config.useHalAsDefaultJsonMediaType(false);
        config.exposeIdsFor(Postback.class);
    }
}
