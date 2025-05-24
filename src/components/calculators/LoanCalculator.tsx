import React, { useState, useEffect, useCallback } from 'react';

interface LoanCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
}

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>('250000');
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [loanTerm, setLoanTerm] = useState<string>('30');
  const [calculation, setCalculation] = useState<LoanCalculation | null>(null);
  const [showAmortization, setShowAmortization] = useState<boolean>(false);

  const calculateLoan = useCallback(() => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const years = parseFloat(loanTerm);

    if (!principal || !annualRate || !years) {
      setCalculation(null);
      return;
    }

    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;

    // Monthly payment calculation using the formula: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;

    setCalculation({
      monthlyPayment,
      totalInterest,
      totalAmount
    });
  }, [loanAmount, interestRate, loanTerm]);

  useEffect(() => {
    calculateLoan();
  }, [calculateLoan]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const generateAmortizationSchedule = () => {
    if (!calculation) return [];

    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;
    
    const schedule = [];
    let remainingBalance = principal;

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = calculation.monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
        month,
        payment: calculation.monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance)
      });

      if (remainingBalance <= 0) break;
    }

    return schedule;
  };

  return (
    <div className="p-8 relative" style={{ backgroundColor: 'black' }}>
      <div 
        className="absolute top-0 right-0 w-80 h-80 opacity-20 rounded-full" 
        style={{ 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(80, 40, 120, 0.1) 70%, transparent 100%)',
          filter: 'blur(40px)',
          transform: 'translate(20%, -30%)',
          zIndex: 0
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 pb-2 relative inline-block">
          Loan Calculator
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label htmlFor="loanAmount" className="block mb-2 text-sm font-medium">Loan Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                <input
                  id="loanAmount"
                  type="text"
                  className="w-full pl-8 pr-4 py-4 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="250000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interestRate" className="block mb-2 text-sm font-medium">Annual Interest Rate</label>
              <div className="relative">
                <input
                  id="interestRate"
                  type="text"
                  className="w-full pl-4 pr-8 py-4 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="6.5"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">%</span>
              </div>
            </div>

            <div>
              <label htmlFor="loanTerm" className="block mb-2 text-sm font-medium">Loan Term</label>
              <div className="relative">
                <input
                  id="loanTerm"
                  type="text"
                  className="w-full pl-4 pr-16 py-4 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="30"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">years</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-purple-200">Quick Presets</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setLoanAmount('200000');
                    setInterestRate('6.0');
                    setLoanTerm('30');
                  }}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
                >
                  Starter Home
                </button>
                <button
                  onClick={() => {
                    setLoanAmount('400000');
                    setInterestRate('6.5');
                    setLoanTerm('30');
                  }}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
                >
                  Family Home
                </button>
                <button
                  onClick={() => {
                    setLoanAmount('25000');
                    setInterestRate('8.0');
                    setLoanTerm('5');
                  }}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
                >
                  Car Loan
                </button>
                <button
                  onClick={() => {
                    setLoanAmount('50000');
                    setInterestRate('7.5');
                    setLoanTerm('10');
                  }}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
                >
                  Personal Loan
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {calculation && (
              <>
                <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-purple-200">Loan Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly Payment:</span>
                      <span className="text-2xl font-bold text-white">
                        {formatCurrency(calculation.monthlyPayment)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Interest:</span>
                      <span className="text-lg text-orange-400">
                        {formatCurrency(calculation.totalInterest)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Amount:</span>
                      <span className="text-lg text-gray-100">
                        {formatCurrency(calculation.totalAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-purple-200">Payment Breakdown</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Principal:</span>
                      <span className="text-green-400">{formatCurrency(parseFloat(loanAmount))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Interest:</span>
                      <span className="text-orange-400">{formatCurrency(calculation.totalInterest)}</span>
                    </div>
                  </div>
                  
                  {/* Visual representation */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-orange-500 h-4 rounded-full"
                        style={{ 
                          width: `${(parseFloat(loanAmount) / calculation.totalAmount) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                      <span>Principal ({((parseFloat(loanAmount) / calculation.totalAmount) * 100).toFixed(1)}%)</span>
                      <span>Interest ({((calculation.totalInterest / calculation.totalAmount) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowAmortization(!showAmortization)}
                  className="w-full p-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-200"
                >
                  {showAmortization ? 'Hide' : 'Show'} Amortization Schedule
                </button>
              </>
            )}
          </div>
        </div>

        {/* Amortization Schedule */}
        {showAmortization && calculation && (
          <div className="mt-8 p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Amortization Schedule (First 12 Months)</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-2 text-gray-300">Month</th>
                    <th className="text-right p-2 text-gray-300">Payment</th>
                    <th className="text-right p-2 text-gray-300">Principal</th>
                    <th className="text-right p-2 text-gray-300">Interest</th>
                    <th className="text-right p-2 text-gray-300">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {generateAmortizationSchedule().slice(0, 12).map((row) => (
                    <tr key={row.month} className="border-b border-gray-800">
                      <td className="p-2 text-white">{row.month}</td>
                      <td className="p-2 text-right text-white">{formatCurrency(row.payment)}</td>
                      <td className="p-2 text-right text-green-400">{formatCurrency(row.principal)}</td>
                      <td className="p-2 text-right text-orange-400">{formatCurrency(row.interest)}</td>
                      <td className="p-2 text-right text-gray-300">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Information */}
        <div className="mt-8 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-purple-200 mb-3">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-medium mb-2">Monthly Payment Formula:</h4>
              <p>M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]</p>
              <p className="mt-1 text-xs">Where P = Principal, r = Monthly rate, n = Number of payments</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Key Terms:</h4>
              <p>• Principal: The loan amount</p>
              <p>• Interest: Cost of borrowing</p>
              <p>• Amortization: Gradual loan payoff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator; 