const teamList = [
  {
    src: "/images/profile-1.png",
    name: "Muhammad Karya Satya Azhar, SE. M.Si. Ak. CA. CPA",
    jobtitle: "Rekan Akuntan",
  },
  {
    src: "/images/profile-2.png",
    name: "Angelia Pribadi, SE. M.Sc. Ak. CA. CTA",
    jobtitle: "Rekan Akuntan",
  },
  {
    src: "/images/profile-3.png",
    name: "Wan Fachruddin, SE. M.Si. Ak. CA. CPA",
    jobtitle: "Rekan Non Akuntan",
  },
  {
    src: "/images/profile-4.png",
    name: "Ibnu Austrindanney Sina Azhar, SE. M.Si. CPA",
    jobtitle: "Rekan Non Akuntan",
  },
];

export default function Teams() {
  return (
    <section className="py-16 lg:py-24 2xl:py-40 px-4 md:px-8 2xl:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        {teamList.map(({ src, name, jobtitle }, i) => (
          <TeamCard img={src} name={name} jobtitle={jobtitle} key={i} />
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
      <h1 className="questa text-xl mt-6 mb-4">{name}</h1>
      <p>{jobtitle}</p>
    </div>
  );
}
