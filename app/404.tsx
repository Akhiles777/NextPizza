export const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Страница не найдена</p>
            <a href="/" className="text-blue-500 hover:underline">Вернуться на главную</a>
        </div>
    );
}