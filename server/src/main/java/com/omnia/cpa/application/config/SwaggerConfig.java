package com.omnia.cpa.application.config;

import com.google.common.collect.Lists;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


/**
 * Warning: Springfox 2.7.0 Doesn't work with SpringBoot >= 2.0.0
 */

@Configuration
@EnableSwagger2
//@Profile("dev")
@Import(SpringDataRestConfiguration.class)
public class SwaggerConfig {

    @Bean
    public Docket docket() {
        return new Docket(DocumentationType.SWAGGER_2)
            .tags(new Tag("Person", "Person entity repository"))
            .apiInfo(new ApiInfo("CPA service demo API", "REST API of the CPA demo Service", "0.0.1", null, null, null, null, Lists.newArrayList()));
    }

}

