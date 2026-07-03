const ExcelJS = require('exceljs');
const fs = require('fs');

async function createReport() {

    const logs = JSON.parse(
        fs.readFileSync(
            'cypress/reports/logs.json',
            'utf8'
        )
    );

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Cypress Report');

    sheet.columns = [
        { header: 'Test Case', key: 'testcase', width: 30 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Remarks', key: 'remarks', width: 50 }
    ];

    logs.forEach(log => {
        sheet.addRow({
            testcase: log.testcase,
            status: log.status,
            remarks: log.remarks
        });
    });

    await workbook.xlsx.writeFile(
        'CypressExecutionReport.xlsx'
    );

    console.log('Excel Report Created');
}

createReport();