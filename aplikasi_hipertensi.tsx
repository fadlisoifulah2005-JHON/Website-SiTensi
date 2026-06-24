import React, { useState, useEffect } from 'react';

// Komponen SVG sebaris (inline) untuk kestabilan aplikasi
const Activity = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const HeartPulse = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const Pill = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>;
const Footprints = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>;
const Utensils = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>;
const Droplets = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 6.3 7 6.3s-2.15 2.76-3.29 3.69C2.57 10.92 2 12.02 2 13.18 2 15.4 3.8 17.2 6 17.2Z"/><path d="M16 21c2.2 0 4-1.8 4-4.03 0-1.16-.57-2.25-1.71-3.18S16 11 16 11s-2.15 2.76-3.29 3.69C11.57 15.62 11 16.71 11 17.87 11 20.1 12.8 21.9 15 21.9Z"/></svg>;
const CheckCircle2 = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
const Circle = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/></svg>;
const AlertCircle = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>;
const ChevronRight = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>;
const Info = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;
const Plus = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
const Bell = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const Scale = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>;
const BookOpen = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const Award = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
const Edit3 = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>;
const Lock = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const Mail = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const User = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const LogOut = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;

const App = () => {
  // DATABASE SIMULASI (Persistensi Data Selama Sesi Berjalan)
  const [usersDb, setUsersDb] = useState([
    { 
      email: 'budi@email.com', 
      password: 'password123', 
      name: 'Budi Utomo', 
      age: 45, 
      gender: 'Laki-laki', 
      stepGoal: 8000, 
      currentSteps: 6430,
      weight: 65,
      height: 166,
      waterIntake: 1.5,
      bpHistory: [
        { day: 'Sen', sys: 120, dia: 80 },
        { day: 'Sel', sys: 125, dia: 82 },
        { day: 'Rab', sys: 145, dia: 92 },
        { day: 'Kam', sys: 130, dia: 85 },
        { day: 'Jum', sys: 118, dia: 78 },
        { day: 'Sab', sys: 138, dia: 88 },
        { day: 'Min', sys: 122, dia: 80 },
      ],
      meds: [
        { id: 1, name: 'Amlodipine 5mg', time: '08:00', taken: true },
        { id: 2, name: 'Lisinopril 10mg', time: '20:00', taken: false },
      ]
    }
  ]);

  // STATE AUTENTIKASI AKTIF
  const [user, setUser] = useState(null); // null jika belum login
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register' | 'forgot'
  
  // State Input Autentikasi
  const [authFields, setAuthFields] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  // Kumpulan Doa & Sapaan untuk Pasien Hipertensi (Dipilih Acak)
  const prayers = [
    "Semoga detak jantung Anda selalu stabil hari ini. Ingat, ketenangan adalah kunci kesehatan pembuluh darah Anda. ❤️",
    "Kesehatan adalah berkah paling indah. Mari bersama-sama mengontrol tensi darah agar bisa terus berkumpul bahagia bersama keluarga. 🌿",
    "Setiap langkah kaki kecil dan segelas air putih hangat hari ini adalah investasi kesehatan bagi masa depan Anda. Tetap semangat!",
    "Hari baru, harapan baru. Semoga tekanan darah Anda hari ini berada dalam zona hijau dan tubuh Anda dipenuhi stamina sehat.",
    "Kami mendoakan agar pikiran Anda dilingkupi kedamaian hari ini. Kurangi garam, perbanyak senyuman, sehat selalu bersama SiTensi!"
  ];
  
  const [currentPrayer, setCurrentPrayer] = useState(prayers[0]);

  // Merotasi doa setiap kali pengguna berganti tab atau memuat ulang halaman login
  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * prayers.length);
    setCurrentPrayer(prayers[randomIdx]);
  }, [authMode, user]);

  // SISTEM MODAL KUSTOM (PENGGANTI WINDOW.ALERT & CONFIRM)
  const [customAlert, setCustomAlert] = useState(null); // { message: '', title: '' }
  const [customConfirm, setCustomConfirm] = useState(null); // { message: '', onConfirm: () => {} }

  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());

  // DATA PEMANTAUAN (Dipindahkan dari database saat pengguna berhasil Login)
  const [bpHistory, setBpHistory] = useState([]);
  const [selectedBpIndex, setSelectedBpIndex] = useState(6);
  const [showBpForm, setShowBpForm] = useState(false);
  const [bpInput, setBpInput] = useState({ day: 'Sen', sys: '', dia: '' });

  const [meds, setMeds] = useState([]);
  const [showMedForm, setShowMedForm] = useState(false);
  const [medInput, setMedInput] = useState({ name: '', time: '' });

  const [waterIntake, setWaterIntake] = useState(1.5);
  const [showWaterModal, setShowWaterModal] = useState(false);
  const [customWater, setCustomWater] = useState('');

  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(166);
  const [showBmiModal, setShowBmiModal] = useState(false);
  const [weightInput, setWeightInput] = useState('65');
  const [heightInput, setHeightInput] = useState('166');

  const [userProfile, setUserProfile] = useState({
    age: 45,
    gender: 'Laki-laki',
    stepGoal: 8000,
    currentSteps: 6430
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileInput, setProfileInput] = useState({
    name: '',
    age: '45',
    gender: 'Laki-laki',
    stepGoal: '8000',
    currentSteps: '6430'
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // FUNGSI UTAS AUTENTIKASI (LOGIN & REGISTER DENGAN PENYIMPANAN PERSISTEN)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (authFields.email && authFields.password) {
      // Cari pengguna di Database Simulasi
      const matchedUser = usersDb.find(
        u => u.email.toLowerCase() === authFields.email.toLowerCase() && u.password === authFields.password
      );

      if (matchedUser) {
        // Pindahkan data spesifik pengguna ke State aktif aplikasi
        setUser({ name: matchedUser.name, email: matchedUser.email });
        setBpHistory(matchedUser.bpHistory);
        setMeds(matchedUser.meds);
        setWaterIntake(matchedUser.waterIntake);
        setWeight(matchedUser.weight);
        setHeight(matchedUser.height);
        setUserProfile({
          age: matchedUser.age,
          gender: matchedUser.gender,
          stepGoal: matchedUser.stepGoal,
          currentSteps: matchedUser.currentSteps
        });
        setSelectedBpIndex(matchedUser.bpHistory.length - 1);
        
        // Reset form input login
        setAuthFields({ name: '', email: '', password: '', agreeTerms: false });
      } else {
        setCustomAlert({
          title: 'Gagal Masuk',
          message: 'Alamat email atau kata sandi Anda salah. Gunakan "budi@email.com" & "password123" atau daftarkan akun baru Anda!'
        });
      }
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (authFields.name && authFields.email && authFields.password) {
      if (!authFields.agreeTerms) {
        setCustomAlert({
          title: 'Syarat & Ketentuan',
          message: 'Anda harus menyetujui syarat layanan SiTensi untuk melanjutkan pendaftaran.'
        });
        return;
      }

      // Cek apakah email sudah terdaftar
      const isEmailExist = usersDb.some(u => u.email.toLowerCase() === authFields.email.toLowerCase());
      if (isEmailExist) {
        setCustomAlert({
          title: 'Email Terdaftar',
          message: 'Alamat email ini sudah terdaftar. Silakan masuk menggunakan email tersebut.'
        });
        return;
      }

      // Buat data default pengguna baru
      const newUserObj = {
        email: authFields.email,
        password: authFields.password,
        name: authFields.name,
        age: 35,
        gender: 'Laki-laki',
        stepGoal: 8000,
        currentSteps: 0,
        weight: 60,
        height: 165,
        waterIntake: 0,
        bpHistory: [
          { day: 'Sen', sys: 120, dia: 80 },
          { day: 'Sel', sys: 120, dia: 80 },
          { day: 'Rab', sys: 120, dia: 80 },
          { day: 'Kam', sys: 120, dia: 80 },
          { day: 'Jum', sys: 120, dia: 80 },
          { day: 'Sab', sys: 120, dia: 80 },
          { day: 'Min', sys: 120, dia: 80 },
        ],
        meds: []
      };

      // Tambahkan ke database lokal simulasi
      const updatedDb = [...usersDb, newUserObj];
      setUsersDb(updatedDb);

      // Otomatis log-in dengan data baru
      setUser({ name: newUserObj.name, email: newUserObj.email });
      setBpHistory(newUserObj.bpHistory);
      setMeds(newUserObj.meds);
      setWaterIntake(newUserObj.waterIntake);
      setWeight(newUserObj.weight);
      setHeight(newUserObj.height);
      setUserProfile({
        age: newUserObj.age,
        gender: newUserObj.gender,
        stepGoal: newUserObj.stepGoal,
        currentSteps: newUserObj.currentSteps
      });
      setSelectedBpIndex(newUserObj.bpHistory.length - 1);

      setAuthFields({ name: '', email: '', password: '', agreeTerms: false });
      
      setCustomAlert({
        title: 'Pendaftaran Berhasil',
        message: `Selamat datang ${newUserObj.name}! Akun Anda telah dibuat dan data kesehatan harian Anda siap dipantau.`
      });
    }
  };

  // Sinkronisasi data kembali ke database simulasi saat ada perubahan (agar tidak tereset pasca logout)
  const syncUserDataToDb = (updatedProfile = {}, updatedHealth = {}) => {
    if (!user) return;
    setUsersDb(prevDb => prevDb.map(u => {
      if (u.email.toLowerCase() === user.email.toLowerCase()) {
        return {
          ...u,
          name: updatedProfile.name || u.name,
          age: updatedProfile.age !== undefined ? updatedProfile.age : u.age,
          gender: updatedProfile.gender || u.gender,
          stepGoal: updatedProfile.stepGoal !== undefined ? updatedProfile.stepGoal : u.stepGoal,
          currentSteps: updatedProfile.currentSteps !== undefined ? updatedProfile.currentSteps : u.currentSteps,
          weight: updatedHealth.weight !== undefined ? updatedHealth.weight : u.weight,
          height: updatedHealth.height !== undefined ? updatedHealth.height : u.height,
          waterIntake: updatedHealth.waterIntake !== undefined ? updatedHealth.waterIntake : u.waterIntake,
          bpHistory: updatedHealth.bpHistory || u.bpHistory,
          meds: updatedHealth.meds || u.meds
        };
      }
      return u;
    }));
  };

  const handleLogoutClick = () => {
    setCustomConfirm({
      message: 'Apakah Anda yakin ingin keluar dari akun SiTensi Anda? Seluruh data yang Anda ubah hari ini akan tersimpan dengan aman.',
      onConfirm: () => {
        // Simpan perubahan terakhir sebelum log-out
        syncUserDataToDb(
          { name: user.name, ...userProfile },
          { weight, height, waterIntake, bpHistory, meds }
        );
        setUser(null);
        setAuthMode('login');
        setActiveTab('dashboard');
        setCustomConfirm(null);
        setShowProfileModal(false);
      }
    });
  };

  const toggleMed = (id) => {
    const updatedMeds = meds.map(med => med.id === id ? { ...med, taken: !med.taken } : med);
    setMeds(updatedMeds);
    syncUserDataToDb({}, { meds: updatedMeds });
  };

  const handleAddBP = () => {
    if(bpInput.sys && bpInput.dia) {
      const newEntry = { 
        day: bpInput.day, 
        sys: parseInt(bpInput.sys), 
        dia: parseInt(bpInput.dia) 
      };
      
      const updatedHistory = [...bpHistory];
      const existingIdx = updatedHistory.findIndex(item => item.day === bpInput.day);
      if (existingIdx !== -1) {
        updatedHistory[existingIdx] = newEntry;
        setSelectedBpIndex(existingIdx);
      } else {
        updatedHistory.shift();
        updatedHistory.push(newEntry);
        setSelectedBpIndex(updatedHistory.length - 1);
      }

      setBpHistory(updatedHistory);
      syncUserDataToDb({}, { bpHistory: updatedHistory });
      setShowBpForm(false);
      setBpInput({ day: 'Sen', sys: '', dia: '' });
    }
  };

  const handleAddMed = () => {
    if(medInput.name && medInput.time) {
      const newMed = { id: Date.now(), name: medInput.name, time: medInput.time, taken: false };
      const updatedMeds = [...meds, newMed];
      setMeds(updatedMeds);
      syncUserDataToDb({}, { meds: updatedMeds });
      setShowMedForm(false);
      setMedInput({ name: '', time: '' });
      
      setCustomAlert({
        title: 'Alarm Aktif',
        message: `Alarm pengingat untuk obat "${medInput.name}" telah dijadwalkan pada pukul ${medInput.time} WIB.`
      });
    }
  };

  // Fungsi menambah air minum harian
  const handleAddWater = (amount) => {
    const newIntake = parseFloat((waterIntake + amount).toFixed(2));
    const targetIntake = newIntake > 5 ? 5 : newIntake;
    setWaterIntake(targetIntake);
    syncUserDataToDb({}, { waterIntake: targetIntake });
  };

  const handleCustomWaterSubmit = () => {
    const amount = parseFloat(customWater) / 1000;
    if (!isNaN(amount) && amount > 0) {
      handleAddWater(amount);
      setCustomWater('');
      setShowWaterModal(false);
    }
  };

  const handleBmiSubmit = () => {
    const w = parseFloat(weightInput);
    const h = parseFloat(heightInput);
    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
      setWeight(w);
      setHeight(h);
      syncUserDataToDb({}, { weight: w, height: h });
      setShowBmiModal(false);
    }
  };

  // Menyimpan pembaruan biodata profil
  const handleProfileSubmit = () => {
    const parsedAge = parseInt(profileInput.age);
    const parsedGoal = parseInt(profileInput.stepGoal);
    const parsedSteps = parseInt(profileInput.currentSteps);

    const updatedName = profileInput.name.trim() ? profileInput.name : user.name;
    const finalAge = isNaN(parsedAge) ? userProfile.age : parsedAge;
    const finalGender = profileInput.gender;
    const finalGoal = isNaN(parsedGoal) ? userProfile.stepGoal : parsedGoal;
    const finalSteps = isNaN(parsedSteps) ? userProfile.currentSteps : parsedSteps;

    setUser({ ...user, name: updatedName });
    setUserProfile({
      age: finalAge,
      gender: finalGender,
      stepGoal: finalGoal,
      currentSteps: finalSteps
    });

    // Sinkronisasi data profil baru ke basis data database
    syncUserDataToDb(
      { name: updatedName, age: finalAge, gender: finalGender, stepGoal: finalGoal, currentSteps: finalSteps },
      {}
    );

    setShowProfileModal(false);
  };

  // Hitung BMI secara Real-time
  const calculatedBmi = height > 0 ? parseFloat((weight / ((height / 100) ** 2)).toFixed(1)) : 0;

  const getBmiStatus = (bmiValue) => {
    if (bmiValue < 18.5) return { label: 'Kurus / Kurang Berat', color: 'text-orange-500 bg-orange-50 border-orange-100' };
    if (bmiValue >= 18.5 && bmiValue <= 24.9) return { label: 'Berat Badan Ideal (Sehat)', color: 'text-green-600 bg-green-50 border-green-100' };
    if (bmiValue >= 25 && bmiValue <= 29.9) return { label: 'Kelebihan Berat Badan', color: 'text-yellow-600 bg-yellow-50 border-yellow-100' };
    return { label: 'Obesitas (Risiko Tinggi)', color: 'text-red-600 bg-red-50 border-red-100' };
  };

  const bmiStatus = getBmiStatus(calculatedBmi);

  const getLatestBP = () => bpHistory.length > 0 ? bpHistory[bpHistory.length - 1] : { sys: 120, dia: 80, day: 'Min' };
  const isBPHigh = (sys, dia) => sys > 130 || dia > 85;
  const latestBPStatus = isBPHigh(getLatestBP().sys, getLatestBP().dia);

  const evaluateBP = (sys, dia) => {
    if (sys >= 140 || dia >= 90) {
      return {
        label: 'Hipertensi (Tinggi)',
        color: 'text-red-500 bg-red-50 border-red-200',
        badge: 'bg-red-500',
        desc: 'Kurangi asupan garam segera, hindari stres berat, pastikan minum obat teratur, dan konsultasikan dengan dokter.'
      };
    } else if ((sys >= 120 && sys < 140) || (dia >= 80 && dia < 90)) {
      return {
        label: 'Pre-Hipertensi (Waspada)',
        color: 'text-orange-500 bg-orange-50 border-orange-200',
        badge: 'bg-orange-500',
        desc: 'Batasi konsumsi asin, micin & makanan olahan. Perbanyak aktivitas fisik ringan & konsumsi air putih hangat.'
      };
    } else {
      return {
        label: 'Normal (Sehat)',
        color: 'text-green-600 bg-green-50 border-green-200',
        badge: 'bg-green-500',
        desc: 'Luar biasa! Tekanan darah Anda dalam rentang optimal. Pertahankan pola makan sehat rendah garam.'
      };
    }
  };

  const activeBpData = bpHistory[selectedBpIndex] || getLatestBP();
  const isActiveBPHigh = isBPHigh(activeBpData.sys, activeBpData.dia);
  const activeBpEval = evaluateBP(activeBpData.sys, activeBpData.dia);

  // --- FITUR WAKTU & TANGGAL DINAMIS (Berdasarkan HP Pengguna) ---
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 4 && hour < 11) return 'Pagi';
    if (hour >= 11 && hour < 15) return 'Siang';
    if (hour >= 15 && hour < 18) return 'Sore';
    return 'Malam';
  };

  const formattedDate = new Intl.DateTimeFormat('id-ID', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(currentTime);

  // Komponen Grafik SVG Kustom yang Aktif & Interaktif
  const BPChart = () => {
    const maxSys = 160;
    const minDia = 60;
    const range = maxSys - minDia;
    
    return (
      <div className="relative w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mt-4 overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold text-slate-500 flex items-center">
            <Activity className="w-4 h-4 mr-2 text-blue-500" />
            Grafik Tekanan Darah (Pilih Batang)
          </h3>
          <button 
            onClick={() => setShowBpForm(!showBpForm)} 
            className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg flex items-center font-bold hover:bg-blue-100 transition-colors"
          >
            <Plus className="w-3 h-3 mr-1" /> Catat BP
          </button>
        </div>

        {/* Formulir Input Data Tekanan Darah */}
        {showBpForm && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 p-4 flex flex-col justify-center animate-in fade-in">
            <h4 className="text-sm font-bold text-slate-700 mb-2 text-center">Catat Tekanan Darah Baru</h4>
            <div className="space-y-2 mb-3">
              <div>
                <label className="text-[10px] text-slate-500 mb-0.5 block">Hari Pencatatan</label>
                <select 
                  value={bpInput.day} 
                  onChange={(e) => setBpInput({...bpInput, day: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:ring-2 focus:ring-blue-300 outline-none"
                >
                  <option value="Sen">Senin</option>
                  <option value="Sel">Selasa</option>
                  <option value="Rab">Rabu</option>
                  <option value="Kam">Kamis</option>
                  <option value="Jum">Jumat</option>
                  <option value="Sab">Sabtu</option>
                  <option value="Min">Minggu</option>
                </select>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[10px] text-slate-500 mb-0.5 block">Sistolik (mmHg)</label>
                  <input type="number" placeholder="Cth: 120" value={bpInput.sys} onChange={(e) => setBpInput({...bpInput, sys: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-center focus:ring-2 focus:ring-blue-300 outline-none" />
                </div>
                <div className="flex items-end pb-2 text-slate-400 font-bold">/</div>
                <div className="flex-1">
                  <label className="text-[10px] text-slate-500 mb-0.5 block">Diastolik (mmHg)</label>
                  <input type="number" placeholder="Cth: 80" value={bpInput.dia} onChange={(e) => setBpInput({...bpInput, dia: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-center focus:ring-2 focus:ring-blue-300 outline-none" />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowBpForm(false)} className="flex-1 py-1.5 text-xs font-bold text-slate-500 bg-slate-100 rounded-lg">Batal</button>
              <button onClick={handleAddBP} className="flex-1 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg shadow-sm">Simpan</button>
            </div>
          </div>
        )}
        
        {/* Batas Normal Band */}
        <div className="absolute left-10 right-4 top-[35%] h-[30%] bg-blue-50/40 rounded-lg border-y border-blue-100 border-dashed z-0">
           <span className="absolute right-2 -top-5 text-[10px] text-blue-400 font-medium">Zona Target Normal</span>
        </div>

        <div className="relative h-[160px] flex items-end justify-between pl-6 pr-2 z-10 mt-4">
          {/* Label Sumbu Y */}
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-slate-400 font-medium">
            <span>160</span>
            <span>110</span>
            <span>60</span>
          </div>

          {bpHistory.map((data, index) => {
            const sysHeight = ((data.sys - minDia) / range) * 100;
            const diaHeight = ((data.dia - minDia) / range) * 100;
            const isHigh = isBPHigh(data.sys, data.dia);
            const isSelected = index === selectedBpIndex;

            return (
              <div 
                key={index} 
                onClick={() => setSelectedBpIndex(index)}
                className={`relative flex flex-col items-center w-8 cursor-pointer group rounded-lg p-0.5 transition-all duration-300 ${isSelected ? 'bg-slate-100/80 ring-2 ring-blue-400/50 scale-105' : 'hover:bg-slate-50'}`}
              >
                {/* Nilai Mengambang Di Atas */}
                <span className="text-[9px] font-bold text-slate-500 mb-1 z-20">
                  {data.sys}
                </span>

                {/* Bar Container */}
                <div className="relative w-3 h-24 flex items-end justify-center mb-1">
                  {/* Bar Sistolik */}
                  <div 
                    className={`w-3 rounded-t-md transition-all duration-500 ${isHigh ? 'bg-red-500' : 'bg-blue-500'} ${isSelected ? 'opacity-100 shadow-md' : 'opacity-80'}`}
                    style={{ height: `${sysHeight}%`, position: 'absolute', bottom: '0px' }}
                  ></div>
                  
                  {/* Bar Diastolik */}
                  <div 
                    className={`w-3 rounded-md transition-all duration-500 ${isHigh ? 'bg-red-300' : 'bg-blue-300'} ${isSelected ? 'opacity-100' : 'opacity-85'}`}
                    style={{ height: `${diaHeight}%`, position: 'absolute', bottom: '0px' }}
                  ></div>
                </div>

                {/* Label Hari */}
                <span className={`text-xs font-bold ${isSelected ? 'text-blue-600' : (isHigh ? 'text-red-500' : 'text-slate-500')}`}>
                  {data.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ==================== TAMPILAN JIKA BELUM LOGIN (SCREEN AUTH) ====================
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-center items-center p-6 relative overflow-hidden">
        {/* Ornamen Latar Belakang */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-200/30 rounded-full blur-3xl z-0"></div>

        <div className="w-full max-w-md bg-white/85 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 p-8 relative z-10 animate-in fade-in zoom-in-95 duration-500">
          
          {/* Logo SiTensi */}
          <div className="text-center mb-5">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2 border-2 border-white shadow-md animate-bounce">
              <HeartPulse className="w-9 h-9 text-blue-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-blue-700">Si<span className="text-orange-500">Tensi</span></h1>
            <p className="text-[11px] text-slate-500 mt-0.5 font-semibold">Pemantau Tekanan Darah Cerdas & Ramah Indonesia</p>
          </div>

          {/* BOX SAPAAN & DOA KESEHATAN KUSTOM */}
          <div className="bg-gradient-to-br from-orange-400/10 to-orange-500/5 border border-orange-200/50 rounded-2xl p-4 mb-6 relative overflow-hidden text-center">
            <span className="absolute -left-2 -top-2 w-8 h-8 bg-orange-500/10 rounded-full blur-sm"></span>
            <p className="text-xs text-orange-700 leading-relaxed font-semibold italic">
              "{currentPrayer}"
            </p>
          </div>

          {/* VIEW: LOGIN */}
          {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold text-slate-800">Masuk ke Akun Anda</h2>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-bold">Akun Demo Aktif</span>
              </div>
              
              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="budi@email.com" 
                    value={authFields.email}
                    onChange={(e) => setAuthFields({...authFields, email: e.target.value})}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Kata Sandi</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    required
                    placeholder="password123" 
                    value={authFields.password}
                    onChange={(e) => setAuthFields({...authFields, password: e.target.value})}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300" 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-400" />
                  Ingat Saya
                </label>
                <button 
                  type="button" 
                  onClick={() => setAuthMode('forgot')} 
                  className="text-blue-600 hover:underline"
                >
                  Lupa Kata Sandi?
                </button>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-200"
              >
                Masuk Sekarang
              </button>

              <div className="text-center text-xs text-slate-500 pt-1">
                Belum punya akun?{' '}
                <button 
                  type="button" 
                  onClick={() => setAuthMode('register')} 
                  className="text-orange-500 font-bold hover:underline"
                >
                  Daftar Sekarang
                </button>
              </div>
            </form>
          )}

          {/* VIEW: REGISTER */}
          {authMode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <h2 className="text-base font-bold text-slate-800 mb-1">Daftar Akun SiTensi</h2>
              
              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    placeholder="Budi Utomo" 
                    value={authFields.name}
                    onChange={(e) => setAuthFields({...authFields, name: e.target.value})}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="nama@email.com" 
                    value={authFields.email}
                    onChange={(e) => setAuthFields({...authFields, email: e.target.value})}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Kata Sandi</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    required
                    placeholder="Minimal 6 karakter" 
                    value={authFields.password}
                    onChange={(e) => setAuthFields({...authFields, password: e.target.value})}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300" 
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer pt-1">
                <input 
                  type="checkbox" 
                  checked={authFields.agreeTerms}
                  onChange={(e) => setAuthFields({...authFields, agreeTerms: e.target.checked})}
                  className="rounded text-blue-600 focus:ring-blue-400 mt-0.5" 
                />
                <span>Saya menyetujui syarat layanan dan kebijakan privasi perlindungan data pribadi SiTensi.</span>
              </label>

              <button 
                type="submit" 
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-md shadow-orange-100"
              >
                Buat Akun & Masuk
              </button>

              <div className="text-center text-xs text-slate-500 pt-1">
                Sudah punya akun?{' '}
                <button 
                  type="button" 
                  onClick={() => setAuthMode('login')} 
                  className="text-blue-600 font-bold hover:underline"
                >
                  Masuk di Sini
                </button>
              </div>
            </form>
          )}

          {/* VIEW: FORGOT PASSWORD */}
          {authMode === 'forgot' && (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <h2 className="text-base font-bold text-slate-800 mb-1">Pulihkan Kata Sandi</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Masukkan alamat email yang terdaftar. Kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
              </p>
              
              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Alamat Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="nama@email.com" 
                    value={authFields.email}
                    onChange={(e) => setAuthFields({...authFields, email: e.target.value})}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-200"
              >
                Kirim Tautan Reset
              </button>

              <div className="text-center text-xs">
                <button 
                  type="button" 
                  onClick={() => setAuthMode('login')} 
                  className="text-slate-500 font-bold hover:underline"
                >
                  Kembali ke Halaman Masuk
                </button>
              </div>
            </form>
          )}

        </div>

        {/* NOTIFIKASI ALERT UTAMA (KUSTOM) */}
        {customAlert && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-lg mb-2">{customAlert.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{customAlert.message}</p>
              <button 
                onClick={() => setCustomAlert(null)}
                className="w-full py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors"
              >
                Mengerti
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==================== TAMPILAN UTAMA APLIKASI (SUDAH LOGIN) ====================
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative overflow-x-hidden">
      {/* Background Ornamen Utama */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/30 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-md mx-auto min-h-screen flex flex-col relative z-10 bg-white/40 backdrop-blur-sm shadow-xl">
        
        {/* Header Utama */}
        <div className="bg-white px-5 pt-8 pb-4 shadow-sm rounded-b-3xl relative z-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-extrabold text-blue-700 tracking-tight">Si<span className="text-orange-500">Tensi</span></h1>
              <p className="text-xs text-slate-500">Selamat {getGreeting()}, <b>{user.name}</b>!</p>
            </div>
            <div className="flex items-center gap-2">
              {/* TOMBOL FOTO PROFIL UNTUK EDIT BIODATA & LOGOUT */}
              <button 
                onClick={() => {
                  setProfileInput({
                    name: user.name,
                    age: userProfile.age.toString(),
                    gender: userProfile.gender,
                    stepGoal: userProfile.stepGoal.toString(),
                    currentSteps: userProfile.currentSteps.toString()
                  });
                  setShowProfileModal(true);
                }}
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:scale-105 active:scale-95 transition-all overflow-hidden"
                title="Buka Menu Profil & Keluar"
              >
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Profile" className="w-full h-full" />
              </button>
            </div>
          </div>
          
          {/* Menu Tab Navigasi */}
          <div className="flex bg-slate-100 p-1 rounded-2xl relative gap-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex flex-col items-center justify-center ${activeTab === 'dashboard' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
            >
              <HeartPulse className="w-4 h-4 mb-0.5" /> Dasbor
            </button>
            <button 
              onClick={() => setActiveTab('health')}
              className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex flex-col items-center justify-center ${activeTab === 'health' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
            >
              <Activity className="w-4 h-4 mb-0.5" /> Profil
            </button>
            <button 
              onClick={() => setActiveTab('edu')}
              className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex flex-col items-center justify-center ${activeTab === 'edu' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
            >
              <BookOpen className="w-4 h-4 mb-0.5" /> Edukasi
            </button>
            <button 
              onClick={() => setActiveTab('diet')}
              className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all flex flex-col items-center justify-center ${activeTab === 'diet' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
            >
              <Utensils className="w-4 h-4 mb-0.5" /> Menu
            </button>
          </div>
        </div>

        {/* Area Konten Utama */}
        <div className="flex-1 p-5 overflow-y-auto pb-24 scroll-smooth">
          
          {/* LAYER 1: DASBOR */}
          {activeTab === 'dashboard' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              
              {/* Card Status Utama */}
              <div className={`p-5 rounded-3xl text-white shadow-lg relative overflow-hidden transition-colors duration-500 ${isActiveBPHigh ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-600 to-blue-500'}`}>
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute right-10 bottom-[-20px] w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <p className="text-white/80 text-xs font-medium mb-1">
                      Status Pantauan ({activeBpData.day === getLatestBP().day ? formattedDate : `Riwayat Hari ${activeBpData.day}`})
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">{activeBpData.sys}/{activeBpData.dia}</span>
                      <span className="text-white/80 font-medium">mmHg</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                    {isActiveBPHigh ? <AlertCircle className="w-8 h-8 text-white animate-pulse" /> : <HeartPulse className="w-8 h-8 text-white" />}
                  </div>
                </div>
                
                <div className={`mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${isActiveBPHigh ? 'bg-white/20 text-white' : 'bg-blue-700/50 text-blue-50'}`}>
                  {isActiveBPHigh ? '⚠️ Tekanan Darah Tinggi! Segera Beristirahat' : '✓ Tekanan Darah Anda Normal'}
                </div>
              </div>

              {/* Grafik Interaktif */}
              <BPChart />

              {/* Panel Detail Hari Terpilih dari Grafik */}
              <div className={`p-4 rounded-2xl border transition-all duration-300 ${activeBpEval.color}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Detail Hari: {activeBpData.day === 'Sen' ? 'Senin' : activeBpData.day === 'Sel' ? 'Selasa' : activeBpData.day === 'Rab' ? 'Rabu' : activeBpData.day === 'Kam' ? 'Kamis' : activeBpData.day === 'Jum' ? 'Jumat' : activeBpData.day === 'Sab' ? 'Sabtu' : 'Minggu'}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${activeBpData.sys > 130 ? 'bg-red-500' : 'bg-green-500'}`}></span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-2xl font-extrabold text-slate-800">{activeBpData.sys}/{activeBpData.dia}</span>
                  <span className="text-xs text-slate-500 font-semibold">mmHg</span>
                  <span className="text-xs font-extrabold ml-auto px-2 py-0.5 rounded-md bg-white border border-slate-100 shadow-xs">
                    {activeBpEval.label}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  💡 {activeBpEval.desc}
                </p>
              </div>

              {/* Pengingat Obat & Alarm */}
              <div className="mt-2">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center">
                    <Pill className="w-5 h-5 mr-2 text-orange-500" /> Pengingat Obat
                  </h2>
                  <button 
                    onClick={() => setShowMedForm(!showMedForm)}
                    className="text-xs bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg flex items-center font-bold hover:bg-orange-100 transition-colors"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Tambah Obat
                  </button>
                </div>

                {showMedForm && (
                  <div className="bg-white border border-orange-100 p-4 rounded-2xl mb-3 shadow-sm animate-in slide-in-from-top-2">
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-slate-500 mb-1 block">Nama Obat & Dosis</label>
                        <input type="text" placeholder="Cth: Captopril 25mg" value={medInput.name} onChange={(e) => setMedInput({...medInput, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-orange-300" />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 mb-1 block">Waktu Alarm (Jam)</label>
                        <input type="time" value={medInput.time} onChange={(e) => setMedInput({...medInput, time: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-orange-300" />
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button onClick={() => setShowMedForm(false)} className="flex-1 py-2 text-xs font-bold text-slate-500 bg-slate-100 rounded-lg">Batal</button>
                        <button onClick={handleAddMed} className="flex-1 py-2 text-xs font-bold text-white bg-orange-500 rounded-lg shadow-sm flex items-center justify-center">
                          <Bell className="w-3 h-3 mr-1" /> Pasang Alarm
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {meds.map((med) => (
                    <div 
                      key={med.id} 
                      onClick={() => toggleMed(med.id)}
                      className={`flex items-center p-4 rounded-2xl cursor-pointer transition-all border ${med.taken ? 'bg-green-50/50 border-green-100 opacity-70' : 'bg-white border-slate-100 shadow-sm hover:shadow-md'}`}
                    >
                      <div className="flex-1">
                        <h4 className={`font-bold ${med.taken ? 'text-slate-500 line-through' : 'text-slate-800'}`}>{med.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500 flex items-center">
                            <Circle className="w-2.5 h-2.5 mr-1 fill-orange-400 text-orange-400" /> Jam {med.time}
                          </span>
                          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold flex items-center">
                            <Bell className="w-2.5 h-2.5 mr-0.5 text-blue-500" /> Alarm Aktif
                          </span>
                        </div>
                      </div>
                      <div>
                        {med.taken ? (
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        ) : (
                          <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center">
                             <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {meds.length === 0 && (
                    <p className="text-xs text-slate-400 text-center py-4 bg-white rounded-2xl border border-slate-100">Belum ada alarm obat yang dijadwalkan.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* LAYER 2: PROFIL KESEHATAN */}
          {activeTab === 'health' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              
              {/* Header Tab Profil (Tombol Logout Telah Dihapus dari Sini) */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">Profil Kesehatan Anda</h2>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg font-bold">
                  Ketuk foto profil di atas untuk mengedit biodata
                </span>
              </div>

              {/* Card Ringkasan Biodata Pengguna (Pena Edit Telah Dihapus dari Sini) */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-5 rounded-3xl text-white shadow-md relative overflow-hidden">
                <div className="absolute right-[-10px] top-[-10px] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-extrabold text-lg">{user.name}</h3>
                    <p className="text-xs text-blue-100 mt-0.5">{user.email}</p>
                    <div className="flex gap-3 mt-3 text-xs bg-black/15 py-1 px-2.5 rounded-lg w-fit">
                      <span>Umur: <b>{userProfile.age} Tahun</b></span>
                      <span>Gender: <b>{userProfile.gender}</b></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Langkah kaki (Tersambung Dinamis) */}
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-4 relative z-10">
                  <Footprints className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 z-10">
                  <p className="text-sm text-slate-500 font-medium">Langkah Harian</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {userProfile.currentSteps.toLocaleString()} 
                    <span className="text-xs font-normal text-slate-400"> / {userProfile.stepGoal.toLocaleString()} langkah</span>
                  </p>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((userProfile.currentSteps / userProfile.stepGoal) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-5 z-0">
                  <Footprints className="w-32 h-32" />
                </div>
              </div>

              {/* CARD INTERAKTIF: AIR PUTIH */}
              <div className="bg-blue-50/70 p-5 rounded-3xl shadow-sm border border-blue-100 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <button 
                    onClick={() => setShowWaterModal(true)} 
                    className="text-[10px] font-bold text-blue-600 bg-white border border-blue-200 px-2.5 py-1 rounded-lg hover:bg-blue-50 transition-all flex items-center"
                  >
                    <Edit3 className="w-2.5 h-2.5 mr-1" /> Atur Kustom
                  </button>
                </div>
                
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Konsumsi Air Putih</p>
                  <p className="text-2xl font-extrabold text-blue-900 mt-1">{waterIntake} Liter <span className="text-xs font-normal text-slate-400">/ 2.0 L</span></p>
                  <div className="w-full bg-blue-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((waterIntake / 2) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tombol Quick-Add Air */}
                <div className="flex gap-2 mt-4">
                  <button onClick={() => handleAddWater(0.25)} className="flex-1 py-1.5 bg-white text-blue-700 font-bold text-xs rounded-xl border border-blue-200 active:scale-95 transition-all">+250ml</button>
                  <button onClick={() => handleAddWater(0.5)} className="flex-1 py-1.5 bg-blue-600 text-white font-bold text-xs rounded-xl active:scale-95 transition-all">+500ml</button>
                  <button onClick={() => setWaterIntake(0)} className="py-1.5 px-3 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl active:scale-95 transition-all">Reset</button>
                </div>

                {/* Modal Input Custom Air */}
                {showWaterModal && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col justify-center p-4 z-20">
                    <h4 className="text-xs font-bold text-slate-700 mb-2">Input Konsumsi Air (ml)</h4>
                    <input 
                      type="number" 
                      placeholder="Cth: 600" 
                      value={customWater} 
                      onChange={(e) => setCustomWater(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs mb-3 focus:ring-2 focus:ring-blue-300 outline-none" 
                    />
                    <div className="flex gap-2">
                      <button onClick={() => setShowWaterModal(false)} className="flex-1 py-1.5 text-xs font-bold text-slate-500 bg-slate-100 rounded-lg">Batal</button>
                      <button onClick={handleCustomWaterSubmit} className="flex-1 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg">Tambah</button>
                    </div>
                  </div>
                )}
              </div>

              {/* CARD INTERAKTIF: BMI (INDEKS MASSA) */}
              <div className="bg-emerald-50/70 p-5 rounded-3xl shadow-sm border border-emerald-100 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-emerald-600" />
                  </div>
                  <button 
                    onClick={() => {
                      setWeightInput(weight.toString());
                      setHeightInput(height.toString());
                      setShowBmiModal(true);
                    }} 
                    className="text-[10px] font-bold text-emerald-700 bg-white border border-emerald-200 px-2.5 py-1 rounded-lg hover:bg-emerald-50 transition-all flex items-center"
                  >
                    <Edit3 className="w-2.5 h-2.5 mr-1" /> Update BB/TB
                  </button>
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-semibold">Indeks Massa Tubuh (BMI)</p>
                  <p className="text-2xl font-extrabold text-emerald-900 mt-1">{calculatedBmi} <span className="text-xs font-normal text-slate-400">BMI</span></p>
                  
                  {/* Status Klasifikasi BMI */}
                  <div className={`mt-2 px-3 py-1 rounded-lg border text-[11px] font-bold text-center ${bmiStatus.color}`}>
                    {bmiStatus.label}
                  </div>

                  <div className="flex gap-4 mt-3 text-xs text-slate-500 font-semibold">
                    <span>Berat: <b>{weight} kg</b></span>
                    <span>Tinggi: <b>{height} cm</b></span>
                  </div>
                </div>

                {/* Modal Edit Berat / Tinggi */}
                {showBmiModal && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col justify-center p-4 z-20">
                    <h4 className="text-xs font-bold text-slate-700 mb-2 text-center">Update Data Fisik</h4>
                    <div className="space-y-2 mb-3">
                      <div>
                        <label className="text-[10px] text-slate-500 block">Berat Badan (kg)</label>
                        <input 
                          type="number" 
                          value={weightInput} 
                          onChange={(e) => setWeightInput(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-xs focus:ring-2 focus:ring-emerald-300 outline-none" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 block">Tinggi Badan (cm)</label>
                        <input 
                          type="number" 
                          value={heightInput} 
                          onChange={(e) => setHeightInput(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-xs focus:ring-2 focus:ring-emerald-300 outline-none" 
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setShowBmiModal(false)} className="flex-1 py-1.5 text-xs font-bold text-slate-500 bg-slate-100 rounded-lg">Batal</button>
                      <button onClick={handleBmiSubmit} className="flex-1 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg">Simpan</button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB: EDUKASI HIPERTENSI LENGKAP */}
          {activeTab === 'edu' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5">
              <div className="flex items-center mb-2">
                <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-slate-800">Pusat Edukasi Hipertensi</h2>
              </div>

              {/* Pengertian */}
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-extrabold text-blue-900 mb-2 text-base">Apa itu Hipertensi?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hipertensi atau tekanan darah tinggi adalah kondisi medis di mana tekanan darah pada dinding pembuluh arteri secara konsisten terlalu tinggi (biasanya di atas **130/80 mmHg**). Kondisi ini sering dijuluki sebagai *"The Silent Killer"* karena sering kali tidak bergejala namun dapat memicu penyakit komplikasi jantung, stroke, hingga ginjal jika tidak dikontrol.
                </p>
              </div>

              {/* Klasifikasi Tabel */}
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <h3 className="font-extrabold text-blue-900 mb-3 text-base flex items-center">
                  <Activity className="w-4 h-4 mr-2 text-orange-500" />
                  Tabel Klasifikasi Medis
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-600 border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-100">
                        <th className="py-2 px-2">Kategori</th>
                        <th className="py-2 px-2">Sistolik</th>
                        <th className="py-2 px-2">Diastolik</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 px-2 font-semibold text-green-600">Normal</td>
                        <td className="py-2.5 px-2">&lt; 120 mmHg</td>
                        <td className="py-2.5 px-2">&lt; 80 mmHg</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-2 font-semibold text-orange-500">Pre-Hipertensi</td>
                        <td className="py-2.5 px-2">120 - 129 mmHg</td>
                        <td className="py-2.5 px-2">&lt; 80 mmHg</td>
                      </tr>
                      <tr className="bg-red-50/30">
                        <td className="py-2.5 px-2 font-semibold text-red-500">Hipertensi Tahap 1</td>
                        <td className="py-2.5 px-2">130 - 139 mmHg</td>
                        <td className="py-2.5 px-2">80 - 89 mmHg</td>
                      </tr>
                      <tr className="bg-red-50/70">
                        <td className="py-2.5 px-2 font-semibold text-red-600">Hipertensi Tahap 2</td>
                        <td className="py-2.5 px-2">&ge; 140 mmHg</td>
                        <td className="py-2.5 px-2">&ge; 90 mmHg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Gejala */}
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-extrabold text-blue-900 mb-2 text-base">Gejala Umum</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">•</span> Sakit kepala hebat, terutama di bagian belakang kepala.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">•</span> Rasa lelah, lemas, atau pusing berputar.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">•</span> Jantung berdebar-debar atau nyeri dada ringan.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">•</span> Pandangan mata menjadi agak kabur atau buram.
                  </li>
                </ul>
              </div>

              {/* Gaya Hidup PATUH */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-3xl text-white shadow-md">
                <h3 className="font-extrabold mb-3 text-base flex items-center">
                  <Award className="w-5 h-5 mr-2 text-orange-400" />
                  Prinsip "PATUH" Kemenkes RI
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-orange-300">P</span> - **Periksa** kesehatan secara berkala dan ikuti saran dokter.
                  </div>
                  <div>
                    <span className="font-bold text-orange-300">A</span> - **Atasi** penyakit dengan pengobatan yang tepat dan teratur.
                  </div>
                  <div>
                    <span className="font-bold text-orange-300">T</span> - **Tetap** diet sehat dengan nutrisi seimbang (rendah natrium).
                  </div>
                  <div>
                    <span className="font-bold text-orange-300">U</span> - **Upayakan** melakukan aktivitas fisik/olahraga secara aman.
                  </div>
                  <div>
                    <span className="font-bold text-orange-300">H</span> - **Hindari** asap rokok, minuman beralkohol, dan zat karsinogenik.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LAYER 3: REKOMENDASI MENU KHAS INDONESIA */}
          {activeTab === 'diet' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              <div className="flex justify-between items-end mb-1">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Menu Lokal Sehat</h2>
                  <p className="text-xs text-slate-500">Bahan lokal alami bersahabat untuk tensi Anda</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-3 py-1 rounded-full border border-emerald-200">
                  Rendah Natrium
                </div>
              </div>

              <div className="space-y-4">
                {/* Menu 1: Sayur Bening Bayam */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                  <div className="h-32 bg-slate-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" alt="Sayur Bening Bayam" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                      Sayuran Hijau
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 text-base">Sayur Bening Bayam & Jagung</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Bayam segar kaya akan Kalium dan Nitrat alami yang secara efektif membantu melebarkan pembuluh darah dan menurunkan tekanan darah tinggi. Dimasak bening tanpa kaldu instan berlebih.</p>
                    <div className="mt-3 flex items-center text-xs text-blue-600 font-bold cursor-pointer">
                      Lihat Resep Lokal <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Menu 2: Rebusan Ubi & Singkong */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                  <div className="h-32 bg-slate-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=600&q=80" alt="Rebusan Ubi Jalar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                      Umbi-umbian
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 text-base">Ubi Jalar & Singkong Rebus</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Pengganti nasi putih terbaik. Umbi-umbian kaya akan serat pangan and kalium tanpa tambahan garam/mentega. Membantu menjaga kestabilan energi harian Anda dengan aman.</p>
                    <div className="mt-3 flex items-center text-xs text-blue-600 font-bold cursor-pointer">
                      Lihat Resep Lokal <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Menu 3: Pisang Ambon & Semangka */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                  <div className="h-32 bg-slate-200 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80" alt="Pisang Ambon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                      Buah Rendah Tensi
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 text-base">Pisang Ambon & Semangka Segar</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Semangka mengandung asam amino *L-citrulline* yang terbukti merelaksasi pembuluh darah. Pisang Ambon sangat tinggi kalium untuk membantu ginjal membuang kelebihan natrium melalui urine.</p>
                    <div className="mt-3 flex items-center text-xs text-blue-600 font-bold cursor-pointer">
                      Lihat Panduan Porsi <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* MODAL EDIT PROFIL / BIODATA KUSTOM & MENU KELUAR (LOGOUT) */}
        {showProfileModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 animate-in zoom-in-95">
              
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 border border-slate-100 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Avatar" className="w-full h-full" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-base">Pengaturan Profil & Akun</h3>
                <p className="text-[10px] text-slate-400">{user.email}</p>
              </div>
              
              <div className="space-y-2.5 mb-4">
                <div>
                  <label className="text-[10px] text-slate-500 block mb-0.5 font-bold">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={profileInput.name} 
                    onChange={(e) => setProfileInput({ ...profileInput, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none focus:ring-2 focus:ring-blue-300 font-medium text-slate-700" 
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-[10px] text-slate-500 block mb-0.5 font-bold">Umur (Tahun)</label>
                    <input 
                      type="number" 
                      value={profileInput.age} 
                      onChange={(e) => setProfileInput({ ...profileInput, age: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none focus:ring-2 focus:ring-blue-300 font-medium text-slate-700" 
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] text-slate-500 block mb-0.5 font-bold">Jenis Kelamin</label>
                    <select 
                      value={profileInput.gender} 
                      onChange={(e) => setProfileInput({ ...profileInput, gender: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none focus:ring-2 focus:ring-blue-300 font-medium text-slate-700"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-[10px] text-slate-500 block mb-0.5 font-bold">Langkah Hari Ini</label>
                    <input 
                      type="number" 
                      value={profileInput.currentSteps} 
                      onChange={(e) => setProfileInput({ ...profileInput, currentSteps: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none focus:ring-2 focus:ring-blue-300 font-medium text-slate-700" 
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] text-slate-500 block mb-0.5 font-bold">Target Langkah</label>
                    <input 
                      type="number" 
                      value={profileInput.stepGoal} 
                      onChange={(e) => setProfileInput({ ...profileInput, stepGoal: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs outline-none focus:ring-2 focus:ring-blue-300 font-medium text-slate-700" 
                    />
                  </div>
                </div>
              </div>

              {/* MENU UTAMA KELUAR DI DALAM MODAL PROFIL */}
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowProfileModal(false)} 
                    className="flex-1 py-2 text-xs font-bold text-slate-500 bg-slate-100 rounded-lg transition-colors hover:bg-slate-200"
                  >
                    Batal
                  </button>
                  <button 
                    onClick={handleProfileSubmit} 
                    className="flex-1 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700 shadow-sm"
                  >
                    Simpan Perubahan
                  </button>
                </div>
                
                <button 
                  onClick={handleLogoutClick}
                  className="w-full py-2.5 mt-1 border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-extrabold rounded-lg flex items-center justify-center transition-all active:scale-95"
                >
                  <LogOut className="w-3.5 h-3.5 mr-1" /> Keluar Akun (Logout)
                </button>
              </div>

            </div>
          </div>
        )}

        {/* MODAL KONFIRMASI KELUAR (KUSTOM & AMAN) */}
        {customConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100 animate-in zoom-in-95">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <LogOut className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-lg mb-2">Konfirmasi Keluar</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">{customConfirm.message}</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setCustomConfirm(null)}
                  className="flex-1 py-2.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Batal
                </button>
                <button 
                  onClick={customConfirm.onConfirm}
                  className="flex-1 py-2.5 bg-red-500 text-white text-xs font-bold rounded-xl shadow-md hover:bg-red-600 transition-colors"
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* NOTIFIKASI ALERT UTAMA (KUSTOM) */}
        {customAlert && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100 animate-in zoom-in-95">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-lg mb-2">{customAlert.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{customAlert.message}</p>
              <button 
                onClick={() => setCustomAlert(null)}
                className="w-full py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-red-700 transition-colors"
              >
                Mengerti
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;