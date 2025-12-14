"use client";

interface DrawerProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const Drawer = ({ open, onClose, children, title }: DrawerProps) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity z-40
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Drawer panel */}
            <div
                className={`fixed top-0 right-0 h-full 
                w-[75vw] lg:w-[60vw] xl:w-[50vw] 
                bg-white shadow-xl z-50
                transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-5 border-b flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-black"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-5 overflow-y-auto h-full">
                    {children}
                </div>
            </div>
        </>
    );
};