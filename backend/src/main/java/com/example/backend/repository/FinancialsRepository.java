package com.example.backend.repository;

import com.example.backend.model.Financials;
import com.example.backend.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Set;

@Repository
public interface FinancialsRepository extends JpaRepository<Financials, Long> {

    Set<Financials> getFinancialsByDate(LocalDate date);

    Set<Financials> getFinancialsByType(Type type);

    Set<Financials> getFinancialsByTypeAndDateBetween(Type type, LocalDate date, LocalDate date2);
}
