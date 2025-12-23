import React from 'react'
import { ChartColumn, ShoppingCart, NotebookText, MessageCircleMore, Settings, CreditCard, User, Info} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: ChartColumn, label: 'Dashboard' },
    { icon: ShoppingCart, label: 'Food Orders' },
    { icon: NotebookText, label: 'Manage Menu' },
    { icon: MessageCircleMore, label: 'Customers Review' }
  ]

  const otherItems = [
    { icon: Settings, label: 'Settings' },
    { icon: CreditCard, label: 'Payment' },
    { icon: User, label: 'Account' },
    { icon: Info, label: 'Help' }
  ]

  return (
    <div className="h-full p-4 ml-5">
      {/* Name */}
      <div className="mb-13 flex items-center gap-3">
        {/* Circle with G */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
          <span className="text-sm font-bold text-white">G</span>
        </div>
  
        {/* GOOD FOOD text */}
        <span className="text-sm font-semibold text-blue-500">GOOD FOOD</span>
      </div>

      {/* Menu Section */}
      <div className="mb-12"> 
        <div className="mb-3 text-xs font-medium text-gray-500">MENU</div> 
        <nav className="space-y-2"> 
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm ${
                index === 0 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-3.5 w-3.5" /> 
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Others Section */}
      <div>
        <div className="mb-3 text-xs font-medium text-gray-500">OTHERS</div>
        <nav className="space-y-2">
          {otherItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
            >
              <item.icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar