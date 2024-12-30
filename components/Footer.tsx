import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BDHealthClub</h3>
            <p className="text-sm text-gray-600">Your trusted source for health supplements, herbs, and superfoods.</p>
          </div>
          {/* <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-600">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-orange-600">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-orange-600">Contact</Link></li>
            </ul>
          </div> */}
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-600 mb-2">Phone: +91-9039709738</p>
            <p className="text-sm text-gray-600">Email: customer@bdhealthclub.com</p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Follow us on</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-600 flex flex-row items-center gap-2"><Instagram className='w-4 h-4'/>Instagram</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-600 flex flex-row items-center gap-2"><Youtube className='w-4 h-4'/>Youtube</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  ) 
}