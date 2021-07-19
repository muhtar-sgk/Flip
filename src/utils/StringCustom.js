export const capitalConvert = (text) => {
  if (text.length <= 4) {
    return text.toUpperCase();
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
};

export const convertDate = (string) => {
  let date = '';
  const bulanIndo = [
    '',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const tanggal = string.split('-')[2];
  if (tanggal.includes('0')) {
    date = tanggal.slice(1);
  } else {
    date = tanggal;
  }
  const bulan = string.split('-')[1];
  const tahun = string.split('-')[0];

  return date + ' ' + bulanIndo[Math.abs(bulan)] + ' ' + tahun;
};

export const convertRupiah = (amount) => {
  const numberString = amount.toString();
  const sisa = numberString.length % 3;
  let rupiah = numberString.substr(0, sisa);
  const ribuan = numberString.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
    return 'Rp' + rupiah;
  }
};
