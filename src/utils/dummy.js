export const dataSource = [
  {
    key: '1',
    id: 1,
    nama: 'Americano',
    satuan: 'cup',
    hargaSatuan: 49000,
    sellerId: 1,
    deskripsi: 'Regular size',
  },
  {
    key: '2',
    id: 6,
    nama: 'Jeruk',
    satuan: 'kg',
    hargaSatuan: 10000,
    sellerId: 1,
    deskripsi: 'Jeruk Manis',
  },
];

export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nama',
    dataIndex: 'nama',
    key: 'nama',
  },
  {
    title: 'Satuan',
    dataIndex: 'satuan',
    key: 'satuan',
  },
  {
    title: 'Harga Satuan',
    dataIndex: 'hargaSatuan',
    key: 'hargaSatuan',
  },
  {
    title: 'Seller ID',
    dataIndex: 'sellerId',
    key: 'sellerId',
  },
  {
    title: 'Deskripsi',
    dataIndex: 'deskripsi',
    key: 'deskripsi',
  },
];
