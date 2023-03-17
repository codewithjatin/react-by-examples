import clsx from "clsx";

const SectionHeading = ({ title, className }: { title: string, className?: string }) => {
    return (
        <div className={clsx('border-b border-gray-200 pb-2 mb-4', className)}>
            <h3 className="text-base font-semibold leading-6 text-gray-900 uppercase">{title}</h3>
        </div>
    )
}

export default SectionHeading;