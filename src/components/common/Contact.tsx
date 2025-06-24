export const Contact = () => {
  const icons = [
    {
      href: 'https://m.me/gianglangthangg',
      img: '/assets/icons/messenger.png',
      ringColor: 'bg-purple-400',
      bgColor: 'bg-purple-500'
    },
    {
      href: 'https://zalo.me/0986202220',
      img: '/assets/icons/zalo.png',
      ringColor: 'bg-blue-400',
      bgColor: 'bg-blue-500'
    },
    {
      href: 'tel:0986202220',
      img: '/assets/icons/phone.png',
      ringColor: 'bg-red-500',
      bgColor: 'bg-red-600'
    }
  ]

  return (
    <div className="fixed left-4 bottom-10 z-50 flex flex-col items-center gap-4">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 flex items-center justify-center"
        >
          {/* Ripple effect */}
          <span
            className={`absolute w-full h-full rounded-full ${icon.ringColor} opacity-50 animate-ripple`}
          />
          {/* Icon itself */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center animate-crazy shadow-lg ring-2 ring-white ${icon.bgColor} transition-transform duration-300 hover:scale-110`}
          >
            <img src={icon.img} alt={`icon-${index}`} className="w-8 h-8" />
          </div>
        </a>
      ))}
    </div>
  )
}
