import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
import {categories} from './constans';
async function up() {
    console.log('🚀 Начинаю заполнение таблицы "User"...');
    await prisma.user.createMany({
        data: [
            {
                fullName: 'John',
                email: 'john@example.com',
                password: hashSync('123456', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Administrator',
                email: 'admin@example.com',
                password: hashSync('123456', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    });
    console.log('✅ Пользователи успешно созданы.');
    await prisma.category.createMany({
    data: categories,
});
}




async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}

async function main() {
    try {
        await down();
        await up();
        console.log('🌟 Сидирование завершено успешно!');
    } catch (e) {
        console.error('❌ Ошибка во время выполнения сида:', e);
        process.exit(1);
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})
