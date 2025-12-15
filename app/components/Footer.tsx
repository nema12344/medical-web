export default function Footer(){
  return (
    <footer className="py-8 mt-12 border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} DispoPowell. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="text-sm hover:text-primary-600" href="#">Terms</a>
          <a className="text-sm hover:text-primary-600" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
