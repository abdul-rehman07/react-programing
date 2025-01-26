import { calculateInvestmentResults } from "../investment.js"

export default function Result({ input }) {
    const resultData = calculateInvestmentResults(input)
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
                return <tr key={year}>
                    <td>{yearData.year}</td>
                    <td>{yearData.year}</td>
                    <td>{yearData.year}</td>
                    <td>{yearData.year}</td>
                    <td>{yearData.year}</td>
                </tr>
            })}
        </tbody>
    </table>
}