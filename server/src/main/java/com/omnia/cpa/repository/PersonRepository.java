package com.omnia.cpa.repository;

import com.omnia.cpa.entity.Person;
import io.swagger.annotations.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@Api(tags = "Person", description = "Person entity repository")
@RepositoryRestResource(path = "people")
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {

    @ApiOperation("find person by name")
	List<Person> findByLastName(@ApiParam(name = "name", value = "Name of the person", type = "body") String name);

    @Override
    @SuppressWarnings("unchecked")
    @ApiOperation("saves a new Person")
    @ApiResponses({@ApiResponse(code = 201, message = "Created", response = Person.class)})
    Person save(Person person);

}
