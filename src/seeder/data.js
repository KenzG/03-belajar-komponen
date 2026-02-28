const { v4: uuidv4 } = require('uuid');

const scientists = [
  {
    id: uuidv4(),
    name: 'Natalie Paquette',
    email: 'natalie@wattson.edu',
    image_url: 'bOGByD0',
  },
  {
    id: uuidv4(),
    name: 'Yin Ling Lui',
    email: 'yinlinglui@alter.edu',
    image_url: 'l5wCajX',
  },
  {
    id: uuidv4(),
    name: 'Reene Blasey',
    email: 'reeneblasey@wraith.edu',
    image_url: 'fwckz7H',
  }
];

module.exports = { scientists };