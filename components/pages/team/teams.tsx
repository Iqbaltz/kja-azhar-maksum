import { urlForImage } from "@/sanity/lib/image";

interface ITeamsProps {
  data: {
    teamList: {
      name: string;
      photo: any;
      title: string;
      _id: string;
    }[];
  };
}
export default function Teams({ data }: ITeamsProps) {
  return (
    <section className="py-16 lg:py-24 xl:py-40 px-4 md:px-8 2xl:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        {data?.teamList.map(({ name, title, photo, _id }) => (
          <TeamCard
            img={urlForImage(photo).url()}
            name={name}
            jobtitle={title}
            key={_id}
          />
        ))}
      </div>
    </section>
  );
}

interface ITeamCard {
  img: string;
  name: string;
  jobtitle: string;
}

function TeamCard({ img, name, jobtitle }: ITeamCard) {
  return (
    <div>
      <img className="bg-lightgrey w-full" src={img} alt={name} />
      <h1 className="questa text-xl mt-6 mb-2">{name}</h1>
      <p className="2xl:text-base xl:text-sm ">{jobtitle}</p>
    </div>
  );
}
