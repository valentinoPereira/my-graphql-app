module.exports.clients = [
  {
    id: '1',
    name: 'VTS',
    email: 'hello@vts.com',
    phone: '500-023-232',
    phoneExt: '+12',
  },
  {
    id: '2',
    name: 'CBRE',
    email: 'hello@cbre.com',
    phone: '500-023-232',
    phoneExt: '+44',
  },
  {
    id: '3',
    name: 'JLL',
    email: 'hello@jll.com',
    phone: '500-023-232',
    phoneExt: '+71',
  },
];

module.exports.projects = [
  {
    id: '1',
    name: 'CBRE',
    description: 'Retail properties',
    status: 'Completed',
    clientId: '2',
  },
  {
    id: '2',
    name: 'JLL',
    description: 'Industrial properties',
    status: 'Pending',
    clientId: '3',
  },
];
