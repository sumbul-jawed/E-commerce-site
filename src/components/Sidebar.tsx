import Link from "next/link"
import { Home, ShoppingBag, Users, Settings, HelpCircle } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: ShoppingBag, label: "Products", href: "/dashboard/products" },
  { icon: Users, label: "Customers", href: "/dashboard/customers" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function Sidebar() {
  return (
    <div className="flex flex-col h-full w-64 bg-gray-800 text-white">
      <div className="p-5">
        <h2 className="text-2xl font-bold">Furniro Admin</h2>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="flex items-center px-5 py-3 hover:bg-gray-700">
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-5">
        <Link href="/help" className="flex items-center text-gray-400 hover:text-white">
          <HelpCircle className="mr-3 h-5 w-5" />
          Help & Support
        </Link>
      </div>
    </div>
  )
}

