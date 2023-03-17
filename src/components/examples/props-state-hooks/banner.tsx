type BannerProps = {
    bannerText: string;
}
const Banner = ({ bannerText }: BannerProps) => {
    return (
        <div className="mb-3">
            <h3 className="text-4xl">{bannerText}</h3>
        </div>
    )
}

export default Banner;

/**
 * The following code shows how we can use the `any` as the props data type.
 * @param props 
 * @returns 
 */
function BannerWithProps1(props: any) {
    return (
        <div className="mb-3">
            <h3 className="text-4xl">{props.bannerText}</h3>
        </div>
    )
}

/**
 * The following code show how we can use the `BannerProp`s as the type for the props input paramter.
 * @param props
 * @returns 
 */
function BannerWithProp2(props: BannerProps) {
    return (
        <div className="mb-3">
            <h3 className="text-4xl">{props.bannerText}</h3>
        </div>
    )
}