package com.example.backend.controller;

import com.example.backend.model.Financials;
import com.example.backend.service.FinancialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Set;

@RestController
@RequestMapping("api/financials")
public class FinancialsController {

    private final FinancialsService financialsService;

    @Autowired
    public FinancialsController(FinancialsService financialsService) {
        this.financialsService = financialsService;
    }

    @GetMapping("/{date}")
    public Set<Financials> getFinancialsByDate(@PathVariable LocalDate date) {
        return financialsService.getFinancialsByDate(date);
    }

    @PostMapping("/")
    public Financials postFinancials(@RequestBody Financials financials) {
        return financialsService.postFinancials(financials);
    }
}