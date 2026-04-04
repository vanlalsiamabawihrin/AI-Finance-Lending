# URL Update Summary

## Domain Change: aifinance.com.au → aifinancelending.com.au

All references to the old domain have been updated to the new domain throughout the codebase.

---

## ✅ Files Updated

### 1. **gatsby-config.ts**
- ✅ `siteUrl`: `https://www.aifinancelending.com.au`
- ✅ `email`: `hello@aifinancelending.com.au`
- ✅ Sitemap `resolveSiteUrl`: `https://www.aifinancelending.com.au`
- ✅ Robots.txt `host`: `https://www.aifinancelending.com.au`
- ✅ Robots.txt `sitemap`: `https://www.aifinancelending.com.au/sitemap-index.xml`

### 2. **src/components/SchemaMarkup.tsx**
- ✅ Organization Schema `url`: `https://www.aifinancelending.com.au`
- ✅ Organization Schema `logo`: `https://www.aifinancelending.com.au/app-logo.png`
- ✅ Organization Schema `email`: `hello@aifinancelending.com.au`
- ✅ LocalBusiness Schema `@id`: `https://www.aifinancelending.com.au/#organization`
- ✅ LocalBusiness Schema `image`: `https://www.aifinancelending.com.au/app-logo.png`
- ✅ LocalBusiness Schema `email`: `hello@aifinancelending.com.au`
- ✅ LocalBusiness Schema `url`: `https://www.aifinancelending.com.au`
- ✅ FinancialService Schema provider `url`: `https://www.aifinancelending.com.au`

### 3. **src/components/Footer.jsx**
- ✅ Email link: `mailto:hello@aifinancelending.com.au`
- ✅ Email display text: `hello@aifinancelending.com.au`

### 4. **src/components/ContactForm.jsx**
- ✅ Email link: `mailto:hello@aifinancelending.com.au`
- ✅ Email display text: `hello@aifinancelending.com.au`

### 5. **SEO-GUIDE.md**
- ✅ Google Search Console domain reference
- ✅ Sitemap URL reference

---

## 🔍 SEO Components Affected

### Meta Tags (via SEO.tsx)
The SEO component dynamically pulls from `gatsby-config.ts`, so all meta tags will automatically use:
- ✅ `https://www.aifinancelending.com.au` for canonical URLs
- ✅ `hello@aifinancelending.com.au` for contact email
- ✅ Correct domain in Open Graph and Twitter Card tags

### Structured Data (Schema Markup)
All JSON-LD structured data now references:
- ✅ Correct website URL
- ✅ Correct email address
- ✅ Correct logo URL
- ✅ Correct organization identifier

---

## 📋 Post-Update Checklist

### Immediate Actions Required:

1. **Rebuild the Site**
   ```bash
   npm run clean
   npm run build
   ```

2. **Verify Changes Locally**
   ```bash
   npm run serve
   ```
   Then check:
   - View page source for meta tags
   - Check sitemap: `http://localhost:9000/sitemap-index.xml`
   - Check robots.txt: `http://localhost:9000/robots.txt`
   - Verify schema markup in page source

3. **Update DNS Settings**
   - Point `aifinancelending.com.au` to your hosting
   - Set up `www.aifinancelending.com.au` subdomain
   - Configure SSL certificate for new domain

4. **Google Search Console**
   - Add new property: `https://www.aifinancelending.com.au`
   - Verify ownership
   - Submit new sitemap: `https://www.aifinancelending.com.au/sitemap-index.xml`
   - Set up 301 redirects from old domain (if applicable)

5. **Google Analytics**
   - Update property settings with new domain
   - Update referral exclusions if needed

6. **Google Business Profile**
   - Update website URL to `https://www.aifinancelending.com.au`

7. **Social Media Profiles**
   - Update website links on all platforms
   - Update email to `hello@aifinancelending.com.au`

8. **Email Configuration**
   - Set up email forwarding for `hello@aifinancelending.com.au`
   - Update email signatures
   - Update business cards and marketing materials

---

## 🚀 SEO Impact

### Positive Changes:
- ✅ More descriptive domain name (includes "lending")
- ✅ Better keyword match for "finance lending" searches
- ✅ Clearer brand identity

### Migration Best Practices:
1. **Set up 301 redirects** from old domain to new domain (if you owned the old one)
2. **Keep old domain active** for 6-12 months with redirects
3. **Update all backlinks** where possible
4. **Monitor rankings** closely for first 3 months
5. **Submit change of address** in Google Search Console (if migrating)

---

## 📊 Verification Steps

### After Deployment:

1. **Test All URLs**
   - Homepage: `https://www.aifinancelending.com.au`
   - Sitemap: `https://www.aifinancelending.com.au/sitemap-index.xml`
   - Robots.txt: `https://www.aifinancelending.com.au/robots.txt`

2. **Validate Schema Markup**
   - Use: https://validator.schema.org
   - Paste your homepage URL
   - Verify all schemas are valid

3. **Check Meta Tags**
   - Use: https://metatags.io
   - Enter your homepage URL
   - Verify Open Graph and Twitter Cards

4. **Test Mobile Responsiveness**
   - Use: https://search.google.com/test/mobile-friendly
   - Enter your homepage URL

5. **Check Page Speed**
   - Use: https://pagespeed.web.dev
   - Test both mobile and desktop
   - Target: 90+ score

---

## 📧 Email Setup Instructions

### Configure Email Forwarding:

1. **Domain Registrar/Host**
   - Log in to your domain registrar (e.g., GoDaddy, Namecheap)
   - Navigate to email settings
   - Create email: `hello@aifinancelending.com.au`
   - Forward to your existing email address

2. **Alternative: Google Workspace**
   - Set up Google Workspace for professional email
   - Create `hello@aifinancelending.com.au`
   - Benefits: Professional appearance, better deliverability

3. **Update Contact Forms**
   - All forms already updated to use new email
   - Test form submissions after deployment

---

## ✅ Summary

**Total Files Updated:** 5 files
**Total URL References Changed:** 12+ instances
**Email References Changed:** 6 instances

All critical SEO components, schema markup, and contact information have been successfully updated to use the new domain: **aifinancelending.com.au**

---

**Last Updated:** April 4, 2026  
**Updated By:** AI Finance & Lending Development Team  
**Status:** ✅ Complete - Ready for Deployment
