import React, { useState } from 'react';

function DogYearsCalculator() {
    const [humanAge, setHumanAge] = useState('');
    const [dogAge, setDogAge] = useState(null);

    // Function to calculate dog years
    const calculateDogYears = () => {
        const age = parseFloat(humanAge);

        if (isNaN(age) || age < 0) {
            alert('Please enter a valid age');
            return;
        }

        // Common formula: first year = 15 dog years, second year = 9 more, then 5 years for each human year
        let calculatedDogYears;
        if (age <= 1) {
            calculatedDogYears = age * 15;
        } else if (age <= 2) {
            calculatedDogYears = 15 + (age - 1) * 9;
        } else {
            calculatedDogYears = 15 + 9 + (age - 2) * 5;
        }
        
        setDogAge(calculatedDogYears.toFixed(1));
    };

    return (
        <div className="dog-years-calculator">
            <h1>Dog Years Calculator</h1>
            <div className="calculator-form">
                <label htmlFor="human-age">Enter your age in human years:</label>
                <input
                    id="human-age"
                    type="number"
                    value={humanAge}
                    onChange={(e) => setHumanAge(e.target.value)}
                    min="0"
                    step="0.1"
                />
                <button onClick={calculateDogYears}>Calculate</button>
            </div>

            {dogAge !== null && (
                <div className="result">
                    <h2>Result:</h2>
                    <p>{humanAge} human years = {dogAge} dog years</p>
                </div>
            )}
        </div>
    );
}

export default DogYearsCalculator;