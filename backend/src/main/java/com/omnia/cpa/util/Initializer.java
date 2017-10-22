package com.omnia.cpa.util;

import com.omnia.cpa.entity.Postback;
import com.omnia.cpa.repository.PostbackRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.List;

@Component
public class Initializer implements ApplicationRunner {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
	private PostbackRepository postbackRepository;

	@Override
	public void run(ApplicationArguments args) throws Exception {

        log.info("=================================================================");
//
//        Postback postback = postbackRepository.findOne((long) 128);
//        log.info(postback.toString());
//
//        log.info("=================================================================");
//
//        List<Postback> postbacks = postbackRepository.findBy(null, null, null, LocalDate.parse("2017-07-31"),  LocalDate.parse("2017-08-01"), new PageRequest(0, 10, new Sort(Sort.Direction.ASC, "prefix")));
//
//        postbacks.forEach(item->log.info(item.toString()));

        log.info("=================================================================");
//
//        List<Postback> postbacks2 = postbackRepository.findBy((long) 128, null, null, null, null);
//        postbacks2.forEach(item->log.info(item.toString()));

	}
}
