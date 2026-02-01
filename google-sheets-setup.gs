/**
 * Google Apps Script for Tony FYP Portfolio Lead Sheet
 *
 * HOW TO USE:
 * 1. Open your Google Sheet (or create a new one)
 * 2. Go to Extensions > Apps Script
 * 3. Paste this entire script
 * 4. Click "Run" > "setupPortfolioLeadsSheet"
 * 5. Grant permissions when prompted
 *
 * This will create/setup the "Portfolio_Leads" sheet with proper headers and formatting.
 */

function setupPortfolioLeadsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Check if sheet exists, if not create it
  let sheet = ss.getSheetByName('Portfolio_Leads');
  if (!sheet) {
    sheet = ss.insertSheet('Portfolio_Leads');
    Logger.log('Created new sheet: Portfolio_Leads');
  } else {
    Logger.log('Sheet already exists: Portfolio_Leads');
  }

  // Define headers (must match n8n workflow columns)
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Service_Type',
    'Service_Category',
    'Message',
    'Source',
    'Status',
    'Follow_Up_Date',
    'Lead_Score',
    'Response_Required',
    'Notes'
  ];

  // Set headers in row 1
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);

  // Format headers
  headerRange.setBackground('#10b981');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  headerRange.setFontFamily('Arial');
  headerRange.setFontSize(10);

  // Set column widths
  const columnWidths = {
    1: 160,  // Timestamp
    2: 150,  // Name
    3: 220,  // Email
    4: 150,  // Service_Type
    5: 120,  // Service_Category
    6: 300,  // Message
    7: 150,  // Source
    8: 100,  // Status
    9: 120,  // Follow_Up_Date
    10: 100, // Lead_Score
    11: 130, // Response_Required
    12: 250  // Notes
  };

  for (let col in columnWidths) {
    sheet.setColumnWidth(parseInt(col), columnWidths[col]);
  }

  // Freeze header row
  sheet.setFrozenRows(1);

  // Add data validation for Status column (column 8)
  const statusRange = sheet.getRange('H2:H1000');
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['New', 'Contacted', 'In Progress', 'Quoted', 'Won', 'Lost', 'Follow Up'], true)
    .setAllowInvalid(false)
    .build();
  statusRange.setDataValidation(statusRule);

  // Add data validation for Lead_Score column (column 10)
  const scoreRange = sheet.getRange('J2:J1000');
  const scoreRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['High', 'Medium', 'Low'], true)
    .setAllowInvalid(false)
    .build();
  scoreRange.setDataValidation(scoreRule);

  // Add data validation for Service_Category column (column 5)
  const categoryRange = sheet.getRange('E2:E1000');
  const categoryRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Website', 'Automation'], true)
    .setAllowInvalid(false)
    .build();
  categoryRange.setDataValidation(categoryRule);

  // Add conditional formatting for Status
  const statusConditions = [
    { value: 'New', color: '#fef3c7' },       // Yellow
    { value: 'Contacted', color: '#dbeafe' }, // Light blue
    { value: 'In Progress', color: '#e0e7ff' }, // Indigo
    { value: 'Quoted', color: '#fce7f3' },    // Pink
    { value: 'Won', color: '#d1fae5' },       // Green
    { value: 'Lost', color: '#fee2e2' },      // Red
    { value: 'Follow Up', color: '#fef9c3' }  // Bright yellow
  ];

  statusConditions.forEach(condition => {
    const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(condition.value)
      .setBackground(condition.color)
      .setRanges([sheet.getRange('H2:H1000')])
      .build();
    const rules = sheet.getConditionalFormatRules();
    rules.push(rule);
    sheet.setConditionalFormatRules(rules);
  });

  // Add conditional formatting for Lead_Score
  const scoreConditions = [
    { value: 'High', color: '#d1fae5', fontColor: '#065f46' },   // Green
    { value: 'Medium', color: '#fef3c7', fontColor: '#92400e' }, // Yellow
    { value: 'Low', color: '#fee2e2', fontColor: '#991b1b' }     // Red
  ];

  scoreConditions.forEach(condition => {
    const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(condition.value)
      .setBackground(condition.color)
      .setFontColor(condition.fontColor)
      .setRanges([sheet.getRange('J2:J1000')])
      .build();
    const rules = sheet.getConditionalFormatRules();
    rules.push(rule);
    sheet.setConditionalFormatRules(rules);
  });

  // Add conditional formatting for Service_Category
  const categoryConditions = [
    { value: 'Website', color: '#dbeafe', fontColor: '#1e40af' },    // Blue
    { value: 'Automation', color: '#f3e8ff', fontColor: '#7c3aed' }  // Purple
  ];

  categoryConditions.forEach(condition => {
    const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(condition.value)
      .setBackground(condition.color)
      .setFontColor(condition.fontColor)
      .setRanges([sheet.getRange('E2:E1000')])
      .build();
    const rules = sheet.getConditionalFormatRules();
    rules.push(rule);
    sheet.setConditionalFormatRules(rules);
  });

  // Add filter
  const dataRange = sheet.getRange(1, 1, sheet.getMaxRows(), headers.length);
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  dataRange.createFilter();

  // Add a sample row for testing (optional - comment out if not needed)
  // addSampleRow(sheet);

  Logger.log('Sheet setup complete!');
  SpreadsheetApp.getUi().alert('Portfolio Leads sheet has been set up successfully!');
}

/**
 * Add a sample row for testing (optional)
 */
function addSampleRow(sheet) {
  const sampleData = [
    new Date().toISOString().replace('T', ' ').substring(0, 19),
    'Test User',
    'test@example.com',
    'website-new',
    'Website',
    'I need a new website for my restaurant',
    'tonyfyp.com Portfolio',
    'New',
    new Date(Date.now() + 86400000).toISOString().substring(0, 10), // Tomorrow
    'High',
    '24 hours',
    ''
  ];

  sheet.appendRow(sampleData);
  Logger.log('Sample row added');
}

/**
 * Create a dashboard sheet with summary stats
 */
function createDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  let dashboard = ss.getSheetByName('Dashboard');
  if (!dashboard) {
    dashboard = ss.insertSheet('Dashboard');
  } else {
    dashboard.clear();
  }

  // Title
  dashboard.getRange('A1').setValue('Tony FYP Lead Dashboard');
  dashboard.getRange('A1').setFontSize(18).setFontWeight('bold').setFontColor('#10b981');

  // Summary stats
  const stats = [
    ['Metric', 'Value'],
    ['Total Leads', '=COUNTA(Portfolio_Leads!A:A)-1'],
    ['Website Inquiries', '=COUNTIF(Portfolio_Leads!E:E,"Website")'],
    ['Automation Inquiries', '=COUNTIF(Portfolio_Leads!E:E,"Automation")'],
    ['High Priority', '=COUNTIF(Portfolio_Leads!J:J,"High")'],
    ['New (Uncontacted)', '=COUNTIF(Portfolio_Leads!H:H,"New")'],
    ['Won Deals', '=COUNTIF(Portfolio_Leads!H:H,"Won")'],
    ['This Week', '=COUNTIFS(Portfolio_Leads!A:A,">="&(TODAY()-7))'],
    ['This Month', '=COUNTIFS(Portfolio_Leads!A:A,">="&(TODAY()-30))']
  ];

  dashboard.getRange(3, 1, stats.length, 2).setValues(stats);
  dashboard.getRange(3, 1, 1, 2).setFontWeight('bold').setBackground('#f3f4f6');
  dashboard.getRange(3, 1, stats.length, 2).setBorder(true, true, true, true, true, true);

  // Set column widths
  dashboard.setColumnWidth(1, 180);
  dashboard.setColumnWidth(2, 120);

  // Service type breakdown
  dashboard.getRange('D3').setValue('Service Type Breakdown');
  dashboard.getRange('D3').setFontWeight('bold');

  const serviceTypes = [
    ['Type', 'Count'],
    ['website-new', '=COUNTIF(Portfolio_Leads!D:D,"website-new")'],
    ['website-redesign', '=COUNTIF(Portfolio_Leads!D:D,"website-redesign")'],
    ['website-maintenance', '=COUNTIF(Portfolio_Leads!D:D,"website-maintenance")'],
    ['lead-gen', '=COUNTIF(Portfolio_Leads!D:D,"lead-gen")'],
    ['reporting', '=COUNTIF(Portfolio_Leads!D:D,"reporting")'],
    ['content', '=COUNTIF(Portfolio_Leads!D:D,"content")'],
    ['onboarding', '=COUNTIF(Portfolio_Leads!D:D,"onboarding")'],
    ['workflow', '=COUNTIF(Portfolio_Leads!D:D,"workflow")'],
    ['integration', '=COUNTIF(Portfolio_Leads!D:D,"integration")'],
    ['other', '=COUNTIF(Portfolio_Leads!D:D,"other")']
  ];

  dashboard.getRange(4, 4, serviceTypes.length, 2).setValues(serviceTypes);
  dashboard.getRange(4, 4, 1, 2).setFontWeight('bold').setBackground('#f3f4f6');
  dashboard.getRange(4, 4, serviceTypes.length, 2).setBorder(true, true, true, true, true, true);

  dashboard.setColumnWidth(4, 160);
  dashboard.setColumnWidth(5, 80);

  // Last updated timestamp
  dashboard.getRange('A' + (stats.length + 5)).setValue('Last updated: ' + new Date().toLocaleString());
  dashboard.getRange('A' + (stats.length + 5)).setFontSize(9).setFontColor('#6b7280');

  Logger.log('Dashboard created!');
  SpreadsheetApp.getUi().alert('Dashboard has been created!');
}

/**
 * Auto-update Follow_Up_Date when Status changes
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;

  // Only process edits in Portfolio_Leads sheet
  if (sheet.getName() !== 'Portfolio_Leads') return;

  // Check if Status column (H, column 8) was edited
  if (range.getColumn() === 8) {
    const newStatus = range.getValue();
    const row = range.getRow();

    // Update follow-up date based on status
    if (newStatus === 'Follow Up') {
      // Set follow-up date to 2 days from now
      const followUpDate = new Date();
      followUpDate.setDate(followUpDate.getDate() + 2);
      sheet.getRange(row, 9).setValue(followUpDate.toISOString().substring(0, 10));
    }
  }
}

/**
 * Add menu items when spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Tony FYP Tools')
    .addItem('Setup Portfolio Leads Sheet', 'setupPortfolioLeadsSheet')
    .addItem('Create Dashboard', 'createDashboard')
    .addSeparator()
    .addItem('Highlight Overdue Follow-ups', 'highlightOverdueFollowups')
    .addToUi();
}

/**
 * Highlight rows where follow-up date has passed
 */
function highlightOverdueFollowups() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Portfolio_Leads');

  if (!sheet) {
    SpreadsheetApp.getUi().alert('Portfolio_Leads sheet not found!');
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  const followUpDates = sheet.getRange(2, 9, lastRow - 1, 1).getValues();
  const statuses = sheet.getRange(2, 8, lastRow - 1, 1).getValues();

  let overdueCount = 0;

  for (let i = 0; i < followUpDates.length; i++) {
    const followUpDate = new Date(followUpDates[i][0]);
    const status = statuses[i][0];

    // Only highlight if status is New, Contacted, In Progress, or Follow Up
    if (['New', 'Contacted', 'In Progress', 'Follow Up'].includes(status)) {
      if (followUpDate < today) {
        // Highlight the entire row
        sheet.getRange(i + 2, 1, 1, 12).setBackground('#fef2f2');
        overdueCount++;
      }
    }
  }

  SpreadsheetApp.getUi().alert(`Found ${overdueCount} overdue follow-ups!`);
}
