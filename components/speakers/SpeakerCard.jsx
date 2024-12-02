import Image from "next/image"
import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"


function SpeakerCard({ first_name, last_name, organization, slug, topic, image }){
    return(
        <figure className="col-6 col-lg-4 mb-3" key={slug}>
            <Image 
                src={image?.src ?? "https://dummyimage.com/400x400/111/fff&text=Announcing+Soon"}
                blurDataURL={image?.blurDataURL ?? "https://dummyimage.com/1x1/111/fff&text=Announcing+Soon"}
                placeholder="blur"
                alt={`${first_name} ${last_name}`}
                width={400} 
                 
                height={400} 
                className={clsx(Utils.w_100, Utils.mb_1, Utils.h_auto, "object-fit-contain")}
            />

            <figcaption className={Utils.px_1}>
                <h2 className={clsx(Utils.fs_5, Utils.mb_0)}>
                    <strong>{first_name} {last_name}</strong>
                </h2>
                <small>{organization}</small>

                <p className={Utils.mt_2}>
                    <small className={Style.smallText}>
                        TALK TOPIC
                    </small>
                    <span>
                        {topic}
                    </span>
                </p>
                
            </figcaption>

        </figure>
    )
}

export default SpeakerCard