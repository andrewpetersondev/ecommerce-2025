import Link from 'next/link'

export default function NavItemSubMenu({ ...props }) {

    const { category, href, current } = props
    console.log(current)
    return (<div
        key={category}
        className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
    >
        <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            {/* <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" /> */}
            <p>icon</p>
        </div>
        <div className="flex-auto">
            <Link href={href} className="block font-semibold text-gray-900">
                {category}
                <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{category}</p>
        </div>
    </div>)
}