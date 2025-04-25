import useAuth from "../hooks/useAuth";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-[var(--color-primary)] border-b border-black sticky top-0 z-10 w-full">
        <div className="w-full px-4 py-3 flex justify-between items-center flex-row-reverse">
            <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-white">
                    {user?.userDecoded?.username || "Usuário"}
                    </p>
                    <p className="text-xs text-white capitalize">
                    {user?.userDecoded?.roles?.toLowerCase() || "usuário"}
                    </p>
                </div>

                <button
                    onClick={logout}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm transition-colors flex items-center"
                >
                    <span className="hidden md:inline">Sair</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                    </svg>
                </button>
            </div>
        </div>
    </header>
  );
}
