package com.omnia.cpa.util;

import com.omnia.cpa.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements ApplicationRunner {

	private PersonRepository mtoPersonRepository;

	@Autowired
	public Initializer(PersonRepository mtoPersonRepository) {
		this.mtoPersonRepository = mtoPersonRepository;
	}


	@Override
	public void run(ApplicationArguments args) throws Exception {


	}
}
