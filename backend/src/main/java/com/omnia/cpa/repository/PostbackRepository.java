package com.omnia.cpa.repository;

import com.omnia.cpa.annotation.PageableSwagger;
import com.omnia.cpa.entity.Postback;
import io.swagger.annotations.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;
import java.util.List;

@Api(tags = "Postbacks")
@RepositoryRestResource(path = "postbacks", collectionResourceRel = "data")
public interface PostbackRepository extends PagingAndSortingRepository<Postback, Long> {

    @ApiOperation(value = "Find postbacks by")
    @PageableSwagger
    @Query("select p from Postback p where " +
        "(:id is null or p.id = :id) and " +
        "(:afid is null or p.afid = :afid) and " +
        "(:prefix is null or p.prefix = :prefix) and" +
        "(:dateFrom is null or p.date >= :dateFrom) and " +
        "(:dateTo is null or p.date <= :dateTo)")
    Page<Postback> findBy(
        @Param("id") @ApiParam(name = "id", value = "Postback id") Long id,
        @Param("afid") @ApiParam(name = "afid", value = "Postback afid") Long afid,
        @Param("prefix") @ApiParam(name = "prefix", value = "Postback prefix") String prefix,
        @Param("dateFrom") @ApiParam(name = "dateFrom", value = "Postback creation date") @DateTimeFormat(pattern = "yyyy-MM-dd", iso = DateTimeFormat.ISO.DATE) LocalDate dateFrom,
        @Param("dateTo") @ApiParam(name = "dateTo", value = "Postback creation date") @DateTimeFormat(pattern = "yyyy-MM-dd", iso = DateTimeFormat.ISO.DATE) LocalDate dateTo,
        @Param("pageable") @ApiParam(name = "pageable", value = "pageable") Pageable pageable
    );

//    TODO: exported = false doesn't works?
    @Override
    @RestResource(exported = false)
    void delete(Long id);
//    TODO: exported = false doesn't works?
    @Override
    @RestResource(exported = false)
    void delete(Postback postback);

//    Example
    @ApiOperation(value = "Find postbacks by advertiser name")
    List<Postback> findByAdvnameStartingWith(@Param("advname") @ApiParam(name = "advname", value = "Name of advertiser", type = "body") String advname);

//    Example
//    @Override
//    @SuppressWarnings("unchecked")
//    @ApiOperation("saves a new Person")
//    @ApiResponses({@ApiResponse(code = 201, message = "Created", response = Postback.class)})
//    Postback save(Postback person);

}
