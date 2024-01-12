import { faker } from '@faker-js/faker'
let i = 0
export const createDataComplaint = (number) => {
  return [number]
}
export const dataComplaint = [
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  },
  {
    id: String(++i),
    complaintCode: 'CPL-' + String(i).padStart(6, '0'),
    customerName: faker.person.fullName(),
    customerCode: 'CUS-' + String(i).padStart(6, '0'),
    typeComplaint: faker.helpers.arrayElement([
      'Sản phẩm',
      'Nhân viên',
      'Vận chuyển'
    ]),
    date: faker.date.soon({ days: 30 }),
    employeeName: faker.person.fullName(),
    status: faker.helpers.arrayElement([
      'Đang xử lí',
      'Chưa xử lí',
      'Đã xử lí',
      'Xử lí lại'
    ])
  }
]
