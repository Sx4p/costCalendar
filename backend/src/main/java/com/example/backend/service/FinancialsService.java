package com.example.backend.service;

import com.example.backend.model.Financials;
import com.example.backend.model.Type;
import com.example.backend.repository.FinancialsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Set;

@Service
public class FinancialsService {

    private final FinancialsRepository financialsRepository;

    @Autowired
    public FinancialsService(FinancialsRepository financialsRepository) {
        this.financialsRepository = financialsRepository;
    }

    public Set<Financials> getFinancialsByDate(LocalDate date) {
        return financialsRepository.getFinancialsByDate(date);
    }

    public Financials postFinancials(Financials financials) {
        return financialsRepository.save(financials);
    }

    public boolean deleteFinancials(Long id) {
        Financials financialsToDelete = financialsRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        financialsRepository.delete(financialsToDelete);
        return true;
    }

    public Set<Financials> getAllIncome() {
        return financialsRepository.getFinancialsByType(Type.INCOME);
    }

    public Set<Financials> getAllExpense() {
        return financialsRepository.getFinancialsByType(Type.EXPENSE);
    }
}
