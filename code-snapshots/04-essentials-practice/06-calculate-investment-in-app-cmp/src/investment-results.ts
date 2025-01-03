export function calculateInvestmentResults(data: Investment): InvestmentResult[] {
  const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
  let investmentValue = initialInvestment;
  const annualData: InvestmentResult[] = [];
  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      }
    );
  }
  return annualData;
}

export interface Investment {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

export interface InvestmentResult {
  year: number
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number
}
