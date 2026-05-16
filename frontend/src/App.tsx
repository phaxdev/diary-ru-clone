import { useState } from 'react';

function App() {
  const [token, setToken] = useState('');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-72 bg-zinc-900 border-r border-zinc-800 p-4">
          <h1 className="text-2xl font-bold text-blue-400 mb-8">Дневник</h1>
          <nav className="space-y-2">
            <a href="#" className="block px-4 py-3 rounded-xl bg-zinc-800">Расписание</a>
            <a href="#" className="block px-4 py-3 rounded-xl hover:bg-zinc-800">Оценки</a>
            <a href="#" className="block px-4 py-3 rounded-xl hover:bg-zinc-800">Домашка</a>
          </nav>
        </div>

        {/* Main */}
        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-semibold mb-6">Добро пожаловать!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-3xl p-6">
              <h3 className="text-xl mb-4">Сегодня</h3>
              <p>Математика 9:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;