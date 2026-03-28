# Quick Reference: Admin Guide Screenshots

## 📸 Screenshot Upload Checklist

### Location
```
public/images/admin-guide/
```

### Format
- **File Type:** PNG (recommended) or JPG
- **Resolution:** 1920px width minimum
- **Quality:** High

## 📋 Complete Screenshot List

Copy and paste these commands to check what's missing:

```bash
cd public/images/admin-guide/
ls -la
```

### Required Files (26 total)

#### 1. Overview (1)
- ✅ `overview_dashboard.png`

#### 2. Lead Management (3)
- ✅ `lead-management_all-leads.png`
- ✅ `lead-management_upload-leads.png`
- ✅ `lead-management_available-leads.png`

#### 3. Team Management (4)
- ✅ `team-management_users.png`
- ✅ `team-management_attendance.png`
- ✅ `team-management_leave-management.png`
- ✅ `team-management_whatsapp.png`

#### 4. Analytics & Reporting (7)
- ✅ `analytics_reports.png`
- ✅ `analytics_login-management.png`
- ✅ `analytics_disbursement-report.png`
- ✅ `analytics_audit-logs.png`
- ✅ `analytics_wallboard.png`
- ✅ `analytics_operations.png`
- ✅ `analytics_dialer-assignment.png`

#### 5. System Configuration (1)
- ✅ `system-settings.png`

#### 6. Hidden Modules (5)
- ✅ `hidden_broadcast-center.png`
- ✅ `hidden_ivr-campaigns.png`
- ✅ `hidden_c2c-reports.png`
- ✅ `hidden_team-hierarchy.png`
- ✅ `hidden_live-leaderboard.png`

#### 7. Global Layout (3)
- ✅ `global-header-navigation.png`
- ✅ `global-security-watermark.png`
- ✅ `global-360-lead-profile.png`

## 🚀 Quick Upload Commands

### Using SCP (from local machine)
```bash
scp your-screenshot.png user@server:/home/z/my-project/public/images/admin-guide/
```

### Using rsync (for multiple files)
```bash
rsync -avz screenshots/ user@server:/home/z/my-project/public/images/admin-guide/
```

### Batch Rename (if needed)
```bash
cd public/images/admin-guide/
# Rename all files to match pattern
# Example: rename 's/^/overview_/' dashboard.png
```

## ✅ Verification

After uploading, verify:

1. **File exists:**
   ```bash
   ls -la public/images/admin-guide/overview_dashboard.png
   ```

2. **File is readable:**
   ```bash
   file public/images/admin-guide/overview_dashboard.png
   ```

3. **Application displays it:**
   - Open the guide in browser
   - Navigate to the section
   - Click on the function
   - Screenshot should appear

## 🎯 Best Practices

### Screenshot Composition
- ✅ Capture full window (not just viewport)
- ✅ Show all relevant UI elements
- ✅ Ensure text is legible
- ✅ Use consistent window size
- ❌ Avoid browser chrome (optional)
- ❌ Don't include sensitive data

### File Management
- ✅ Use lowercase filenames
- ✅ Use hyphens for spaces
- ✅ Keep original quality
- ❌ No spaces in filenames
- ❌ No special characters

### Organization
```
public/images/admin-guide/
├── README.md                 # Detailed instructions
├── overview_*.png           # Overview section
├── lead-management_*.png    # Lead management
├── team-management_*.png    # Team management
├── analytics_*.png          # Analytics
├── system-settings.png      # System config
├── hidden_*.png             # Hidden modules
└── global-*.png             # Global layout
```

## 🔍 Troubleshooting

### Screenshot not showing?
1. Check file name matches exactly (case-sensitive)
2. Verify file is in correct directory
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for errors

### Wrong screenshot displayed?
1. Verify file naming convention
2. Check for duplicate files
3. Clear browser cache

### Images look bad?
1. Use higher resolution
2. Save as PNG instead of JPG
3. Check original screenshot quality

## 📞 Support

If you encounter issues:
1. Check `ADMIN_GUIDE_DOCUMENTATION.md`
2. Review `public/images/admin-guide/README.md`
3. Examine browser console errors
4. Verify file permissions

---

**Total Screenshots Needed:** 26
**Current Status:** 0/26
**Next Step:** Start capturing screenshots from the CRM Admin Panel
