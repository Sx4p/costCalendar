package com.example.backend.repository;

import com.example.backend.model.Financials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Set;

@Repository
public interface FinancialsRepository extends JpaRepository<Financials, Long> {

    Set<Financials> getFinancialsByDate(LocalDate date);
}
