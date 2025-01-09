function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;
    const result = document.getElementById('result');

    if (weight && height) {
        const bmi = weight / (height * height);
        let category, color;

        if (bmi < 18.5) {
            category = 'น้ำหนักต่ำกว่าเกณฑ์';
            color = '#3b82f6';
        } else if (bmi < 25) {
            category = 'น้ำหนักปกติ';
            color = '#10b981';
        } else if (bmi < 30) {
            category = 'น้ำหนักเกิน';
            color = '#f59e0b';
        } else {
            category = 'อ้วน';
            color = '#ef4444';
        }

        result.innerHTML = `
            <p style="font-size: 2.5rem; font-weight: 600; margin: 0.5rem 0; color: ${color};">
                ${bmi.toFixed(1)}
            </p>
            <p style="font-size: 1.1rem; color: ${color}; font-weight: 500; margin: 0;">
                ${category}
            </p>
        `;
    }
}
