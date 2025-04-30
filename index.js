const express = require('express');
const cors = require('cors');
const app = express();

// تكوين CORS للسماح بالوصول من الواجهة الأمامية
app.use(cors({
  origin: '*',  // للتطوير، استخدم '*' للسماح بالوصول من أي مصدر
  // في بيئة الإنتاج، حدد النطاقات المسموح بها:
  // origin: ['https://your-frontend-app.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true // مهم إذا كنت تستخدم الكوكيز
}));

// تمكين معالجة JSON
app.use(express.json());

// ... باقي إعدادات التطبيق والمسارات ...

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});