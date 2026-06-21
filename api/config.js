export default function handler(req, res) {
  // Membuat javascript string secara aman menggunakan environment variables server
  const config = `window.FirebaseConfig = {
    apiKey: "${process.env.FIREBASE_API_KEY || ""}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN || ""}",
    projectId: "${process.env.FIREBASE_PROJECT_ID || ""}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET || ""}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || ""}",
    appId: "${process.env.FIREBASE_APP_ID || ""}"
  };`;

  // Pastikan header diatur sebagai JavaScript agar dapat dibaca browser sebagai berkas <script>
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-store, max-age=0'); // Mencegah browser menyimpan cache kunci usang
  res.status(200).send(config);
}