function convertWeight(value, from, to) {
    if (from === to) return value;
    return from === 'kg' ? value * 2.20462 : value / 2.20462;
}

function convertHeight(value, from, to) {
    if (from === to) return value;
    return from === 'cm' ? value / 2.54 : value * 2.54;
}

function calculateBMI() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;
    const result = document.getElementById('result');

    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (weight <= 0 || height <= 0) {
        result.innerHTML = '<p style="color: #ef4444;">กรุณากรอกข้อมูลที่ถูกต้อง</p>';
        return;
    }
    
    const weightInKg = weightUnit === 'kg' ? weight : convertWeight(weight, 'lb', 'kg');
    const heightInM = (heightUnit === 'cm' ? height : convertHeight(height, 'in', 'cm')) / 100;

    const bmi = weightInKg / (heightInM * heightInM);
    let category, color, advice;

    if (bmi < 18.5) {
        category = 'น้ำหนักต่ำกว่าเกณฑ์';
        color = '#3b82f6';
        advice = 'ควรเพิ่มน้ำหนักและออกกำลังกายเพื่อสร้างกล้ามเนื้อ';
    } else if (bmi < 25) {
        category = 'น้ำหนักปกติ';
        color = '#10b981';
        advice = 'รักษาสุขภาพและออกกำลังกายสม่ำเสมอ';
    } else if (bmi < 30) {
        category = 'น้ำหนักเกิน';
        color = '#f59e0b';
        advice = 'ควรควบคุมอาหารและออกกำลังกายเพิ่มขึ้น';
    } else {
        category = 'อ้วน';
        color = '#ef4444';
        advice = 'ควรปรึกษาแพทย์เพื่อวางแผนลดน้ำหนัก';
    }

    result.innerHTML = `
        <p style="font-size: 2.5rem; font-weight: 600; margin: 0.5rem 0; color: ${color};">
            ${bmi.toFixed(1)}
        </p>
        <p style="font-size: 1.1rem; color: ${color}; font-weight: 500; margin: 0;">
            ${category}
        </p>
        <p style="font-size: 1rem; color: ${color};">${advice}</p>
    `;
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
}