import ArrowCircleIcon from '@/lib/assets/arrow-circle.svg';
import ResearchAndAnalytics from './research-and-analytics';
import ReportsAndPublications from './reports-and-publications';
import CapacityBuilding from './capacity-building';

export default function OurWorkPage() {
    return (
        <main className="bg-design-light pt-[150px]">
            <section className="page-container">
                <div className="flex flex-col items-center px-10 py-20 gradient-green-container rounded-3xl">
                    <div className="Headline w-96 text-center text-design-green text-6xl font-extrabold font-['Avenir'] leading-10">Our work</div>
                    <div className="w-96 mt-10 text-center text-design-green text-lg font-normal font-['Avenir'] leading-relaxed">Our work is explicitly Latino, connects disciplines and regions (the U.S. and Latin America), and addresses the root causes of belief and behavior.</div>
                    <div className="grid grid-cols-3 gap-10 mt-10">
                        <div className="bg-design-green p-8 rounded-3xl">
                            <div className="Headline w-52 h-16 text-white text-3xl font-extrabold font-['Avenir'] leading-9">Research and Analysis</div>
                            <ArrowCircleIcon className="stroke-design-light-green mt-5 rotate-90"></ArrowCircleIcon>
                        </div>
                        <div className="bg-design-green p-8 rounded-3xl">
                            <div className="Headline w-52 h-16 text-white text-3xl font-extrabold font-['Avenir'] leading-9">Reports and Publications</div>
                            <ArrowCircleIcon className="stroke-design-light-green mt-5 rotate-90"></ArrowCircleIcon>
                        </div>
                        <div className="bg-design-green p-8 rounded-3xl">
                            <div className="Headline w-52 h-16 text-white text-3xl font-extrabold font-['Avenir'] leading-9">Capacity building</div>
                            <ArrowCircleIcon className="stroke-design-light-green mt-5 rotate-90"></ArrowCircleIcon>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page-container my-10'>
                <div className='flex items-center justify-center'>
                    <button className='border-none bg-design-green text-white r-btn'>
                        Research and Analysis
                    </button>
                    <div className='w-16 h-[2px] bg-design-green'></div>
                    <button className=' border-design-green text-design-green r-btn'>
                        Reports and Publications
                    </button>
                    <div className='w-16 h-[2px] bg-design-green'></div>
                    <button className=' border-design-green text-design-green r-btn'>
                        Capacity-Building
                    </button>
                </div>
            </section>
            <ResearchAndAnalytics></ResearchAndAnalytics>
            <ReportsAndPublications></ReportsAndPublications>
            <CapacityBuilding></CapacityBuilding>
        </main>
    );
}