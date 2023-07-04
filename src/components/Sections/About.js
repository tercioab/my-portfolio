import Steps from "./Steps";
import ProjectResults from "./ProjectResults";
export default function About() {
	return (
		<div className='flex justify-center bg-gray-100 border-t-8 border-gray-900'>
  <div className='w-full max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
    <div className='relative'>
      <div className='p-6 mx-auto'>
        <ProjectResults />
      </div>
    </div>
    <div className='p-6 mx-auto'>
      <Steps />
    </div>
  </div>
</div>

	);
}
