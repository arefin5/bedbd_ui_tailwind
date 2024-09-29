import React from 'react'

export default function Chart({ data, title, totalValue }) {

  const colors = ['#4758F1', '#FF8855', '#00f', '#ff0', '#0ff'];

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
      const usedColors = new Set(colors);
      const total = data.reduce((acc, { value }) => acc + value, 0);
      let cumulativePercentage = 0;
    
      // Extend colors array if necessary
      const extendedColors = [...colors];
      while (extendedColors.length < data.length) {
        let randomColor;
        do {
          randomColor = generateRandomColor();
        } while (usedColors.has(randomColor));
        extendedColors.push(randomColor);
        usedColors.add(randomColor);
      }
    
      const background = data.map(({ value }, index) => {
        const percentage = (value / total) * 100;
        const start = cumulativePercentage;
        const end = cumulativePercentage + percentage;
        cumulativePercentage += percentage;
        return `${extendedColors[index]} ${start}% ${end}%`;
      }).join(', ');
    

      const formatFinancialValue = (value, locale = 'en-US', currency = 'USD') => {
        // Convert value to number if it's a string
        const numericValue = typeof value === 'string' ? parseFloat(value) : value;
        
        // Check if numericValue is a valid number
        if (!isNaN(numericValue)) {
          return numericValue.toLocaleString(locale, {
            style: 'currency',
            currency: currency,
            // minimumFractionDigits: 2,
            // maximumFractionDigits: 2
          });
        } else {
          return ''; // Return empty string if value is not a valid number
        }
      };


      return (
        <div className="w-fit items-center px-4 py-6 bg-secondary-50 rounded-lg">
            <div className='text-lg font-semibold text-neutral-600'>
                {title}
            </div>
          <div className="relative w-52 h-52 rounded-full ml-auto mr-auto mt-7"
            style={{ background: `conic-gradient(${background})` }} >
            <div className="absolute-center w-32 h-32  bg-secondary-50 rounded-full text-neutral-600 text-2xl">
                <span className='absolute-center'>{formatFinancialValue(totalValue)}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-around mt-4 w-full">
            {data.map(({ value, title }, index) => (
              <div key={index} className="flex items-center m-2">
                <span
                  className="block w-5 h-5 mr-2"
                  style={{ backgroundColor: extendedColors[index] }}
                ></span>
                <span>{`${title}: ${((value / total) * 100).toFixed(0)}%`}</span>
              </div>
            ))}
          </div>
        </div>
      );
}
