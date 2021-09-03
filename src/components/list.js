const { Link } = require("react-router-dom");

const List = ({ data }) => (
    <>
      {data.map(convict => (
        <ListContainer key={convict.id} data={convict} />
      ))}
    </>
  );
   
const ListContainer = ({ data }) => (
    <li className='ring-1 ring-gray-300 p-5 rounded-lg list-none text-center'>
        <div className='flex flex-col h-full'>
          <div className='flex flex-col'>
            <div className='font-semibold text-lg'>{data.tagname}</div>
            <div className='w-28 h-28 rounded-md mx-auto my-2 overflow-hidden'>
              <img className='w-full h-full object-cover' src={require("./images/"+data.tagname.toLowerCase()+".jpg").default} alt=''/>
            </div>
          </div>
            <div className='flex-1 flex-col my-2 mb-4'>
              <div className='font-medium text-base'>Sentenced for <div className='inline font-semibold'>{data.offence[0].charge}</div><div className='inline font-semibold'> + {data.offence.length - 1}</div> other offence(s)</div>
            </div>
            <Link to={'/' + data.tagname.toLowerCase()} className='mt-auto bg-black text-sm p-3 rounded-md text-white font-semibold active:bg-blue-500'>
              View
            </Link>
        </div>
    </li>
);
   
export default List;