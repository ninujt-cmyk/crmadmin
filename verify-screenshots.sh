#!/bin/bash

# Admin Guide Screenshot Verification Script
# This script checks which screenshots are missing from the admin guide

echo "=========================================="
echo "Admin Guide Screenshot Verification"
echo "=========================================="
echo ""

SCREENSHOT_DIR="/home/z/my-project/public/images/admin-guide"
TOTAL_REQUIRED=26
FOUND=0
MISSING=0

# Array of required screenshots
declare -a screenshots=(
    "overview_dashboard.png"
    "lead-management_all-leads.png"
    "lead-management_upload-leads.png"
    "lead-management_available-leads.png"
    "team-management_users.png"
    "team-management_attendance.png"
    "team-management_leave-management.png"
    "team-management_whatsapp.png"
    "analytics_reports.png"
    "analytics_login-management.png"
    "analytics_disbursement-report.png"
    "analytics_audit-logs.png"
    "analytics_wallboard.png"
    "analytics_operations.png"
    "analytics_dialer-assignment.png"
    "system-settings.png"
    "hidden_broadcast-center.png"
    "hidden_ivr-campaigns.png"
    "hidden_c2c-reports.png"
    "hidden_team-hierarchy.png"
    "hidden_live-leaderboard.png"
    "global-header-navigation.png"
    "global-security-watermark.png"
    "global-360-lead-profile.png"
)

echo "Checking screenshots in: $SCREENSHOT_DIR"
echo ""

# Create arrays for found and missing
declare -a found_screenshots=()
declare -a missing_screenshots=()

# Check each screenshot
for screenshot in "${screenshots[@]}"; do
    if [ -f "$SCREENSHOT_DIR/$screenshot" ]; then
        found_screenshots+=("$screenshot ✅")
        ((FOUND++))
    else
        missing_screenshots+=("$screenshot ❌")
        ((MISSING++))
    fi
done

# Print results
echo "Found Screenshots ($FOUND):"
echo "------------------------"
if [ $FOUND -eq 0 ]; then
    echo "None found"
else
    for item in "${found_screenshots[@]}"; do
        echo "  $item"
    done
fi
echo ""

echo "Missing Screenshots ($MISSING):"
echo "-------------------------"
if [ $MISSING -eq 0 ]; then
    echo "🎉 All screenshots are present!"
else
    for item in "${missing_screenshots[@]}"; do
        echo "  $item"
    done
fi
echo ""

# Summary
echo "=========================================="
echo "Summary: $FOUND/$TOTAL_REQUIRED screenshots found"
echo "=========================================="

if [ $MISSING -gt 0 ]; then
    echo ""
    echo "💡 Next Steps:"
    echo "  1. Take screenshots of the missing functions"
    echo "  2. Save them to: $SCREENSHOT_DIR/"
    echo "  3. Use the exact filenames listed above"
    echo ""
    echo "📖 For detailed instructions, see:"
    echo "  - ADMIN_GUIDE_DOCUMENTATION.md"
    echo "  - QUICK_REFERENCE.md"
    echo "  - public/images/admin-guide/README.md"
    exit 1
else
    echo ""
    echo "✅ All screenshots are uploaded! The guide is complete."
    exit 0
fi
