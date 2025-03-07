import { calculateInvestmentResults, formatter } from "../investment.js"
export default function Result({ input }) {
    // const results = {};
    const resultData = calculateInvestmentResults(input)
    console.log(resultData);
    const initialInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData) => {
                const totalinterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment *
                    yearData.year -
                    initialInvestment;

                const totalAmountInvestment = yearData.valueEndOfYear - totalinterest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalinterest)}</td>
                    <td>{formatter.format(totalAmountInvestment)}</td>
                </tr>
            })}
        </tbody>
    </table>
}