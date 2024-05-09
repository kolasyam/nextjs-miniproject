const getPredictionAge=async (name:string)=>{
    const res= await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}
const getPredictionGender=async (name:string)=>{
    const res= await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}
const getPredictionCountry=async (name:string)=>{
    const res= await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}
interface Params{
    params: {name:string};
}
export default async function Page({params}:Params){
    const ageData= getPredictionAge(params.name);
    const genderData= getPredictionGender(params.name);
    const countryData= getPredictionCountry(params.name);
    const [age,gender,country]=await Promise.all([ageData,genderData,countryData]);
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4 w-45 lg:w-60">
            <div className="p-8 text-center">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Presonal Info</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Age:{age?.age}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Gender:{gender?.gender}</div>
                <div className="block mt-1 text-lg text-black font-medium leading-tight">Country:{country?.country[0].country_id}</div>

            </div>
        </div>
    );

}