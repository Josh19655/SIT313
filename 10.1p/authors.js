import { faker } from '@faker-js/faker';

const authors = Array.from({ length: 6 }, function() {
    return {
        name: faker.person.firstName(),
        date: `joined in ${faker.date.past().getFullYear()}`,
        img: faker.image.avatar(), 
        detail: `${faker.hacker.adjective()} ${faker.hacker.noun()}`, 
    };
});

export default authors;