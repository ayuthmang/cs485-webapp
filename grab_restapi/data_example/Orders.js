const data = {
  result: true,
  status_code: 200,
  status_message: 'succeed',
  data: [
    {
      title: 'ซื้อข้าวมันไก่ให้หน่อยยยยยยย หิวว้อยย',
      description: 'ที่ไหนก็ได้ซื้อมา',
      address: 'หอ C11 ห้อง 414',
      user_owner: 'ayuth',
      user_grabber: 'boombi',
      description: 'รายละเอียดของการซื้อ',
      status: 'pending', // pending, approved, reject
      price: 100,
      tip: 10
    },
    {
      title: 'อยากกินข้าวผัดกระเพรา',
      description: 'ที่ไหนก็ได้ซื้อมา',
      address: 'หอ C11 ห้อง 414',
      user_owner: 'ayuth',
      user_grabber: 'boombi',
      description: 'รายละเอียดของการซื้อ',
      status: 'approved', // pending, approved, reject
      price: 100,
      tip: 10
    }
  ]
};

module.exports = {
  data
};
