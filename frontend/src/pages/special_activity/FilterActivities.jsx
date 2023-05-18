import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/event.jpg';

const Activity = ({ id, name, description, startTime, endTime, image }) => {
  const navigate = useNavigate();
  const truncatedDescription = description.substring(0, 100) + '...';
  return (
    <div className='bg-white border border-gray-200 p-4 rounded-lg shadow-md mb-4 flex items-center'>
      <div className='flex-shrink-0'>
        <img
          src={image}
          alt={`Image for ${name}`}
          className='rounded-full'
          width={'200px'}
          height={'200px'}
        />
      </div>
      <div className='ml-4'>
        <h2
          onClick={() => {
            navigate(`/activities/${id}`);
          }}
          className='text-lg font-bold mb-2 text-gray-800 hover:text-blue-500 cursor-pointer'
        >
          {name}
        </h2>
        <p className='text-gray-700 mb-2'>{truncatedDescription}</p>
        <p className='text-gray-700'>
          {startTime} - {endTime}
        </p>
      </div>
    </div>
  );
};

const ActivityList = ({ activities }) => {
  console.log(activities);
  return (
    <div>
      {activities.map((activity) => (
        <Activity
          key={activity._id}
          id={activity._id}
          name={activity.name}
          description={activity.description}
          startTime={activity.timeRange.startTime}
          endTime={activity.timeRange.endTime}
          image={activity.image}
        />
      ))}
    </div>
  );
};

const FilterActivities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [activities, setActivities] = useState([]);
  const [activityType, setActivityType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `activities/filter?type=${activityType}&searchQuery=${searchQuery}&startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`
      );
      const data = await response.json();
      setLoading(false);
      setActivities(data.activities);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className='bg-cover bg-center'>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-[#DEEFFF] flex items-center justify-center w-full flex-col lg:flex-row'>
          <div className='p-8 pt-5 md:p-24 md:pt-5 lg:p-5'>
            <h1 className='text-3xl md:text-3xl font-bold uppercase text-[#272727] mb-10'>
              Find the
              <span className='text-[#41A4FF]'> Special Activity</span>
              <br />
              for your next stay today!
              <span className='text-2xl block md:text-3xl font-bold uppercase text-[#272727]'>
                Explore our activities
              </span>
            </h1>
            <div className='mb-4'>
              <input
                className='border rounded-lg px-4 py-2 w-full mb-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                style={{ width: '700px' }}
                type='text'
                placeholder='Search activities'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    // Enter key pressed
                    handleSearch();
                  }
                }}
              />
            </div>
          </div>
          <div className='p-8'>
            <img
              src={backgroundImage}
              alt='image-description'
              style={{ borderRadius: '10px', width: '500px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      <div
        className='flex max-w-7xl mx-auto p-4 gap-10 mt-10'
        style={{ marginBottom: '20rem' }}
      >
        <div className='w-1/3 pr-4 '>
          <h2 className='text-lg font-semibold mb-2'>Filter Activities</h2>
          <div className='mb-4'>
            <label className='block font-medium mb-2'>Start Date</label>
            <input
              className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='date'
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              min={new Date().toISOString().split('T')[0]}
              max={
                new Date(new Date().getFullYear() + 1, 11, 31)
                  .toISOString()
                  .split('T')[0]
              }
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium mb-2'>End Date</label>
            <input
              className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='date'
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              min={
                startDate ? startDate : new Date().toISOString().split('T')[0]
              }
              max={
                new Date(new Date().getFullYear() + 1, 11, 31)
                  .toISOString()
                  .split('T')[0]
              }
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium mb-2'>Start Time</label>
            <input
              className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='time'
              value={startTime}
              onChange={(event) => {
                setStartTime(event.target.value);
              }}
            />
          </div>

          <div className='mb-4'>
            <label className='block font-medium mb-2'>End Time</label>
            <input
              className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='time'
              value={endTime}
              onChange={(event) => {
                const selectedEndTime = event.target.value;
                const selectedStartTime = startTime;

                // Convert the selected times to Date objects
                const endDate = new Date(`2000-01-01T${selectedEndTime}`);
                const startDate = new Date(`2000-01-01T${selectedStartTime}`);

                // Check if the end time is before the start time
                if (endDate <= startDate) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'End time must be after start time',
                  });
                  return;
                }

                // Update the state with the selected end time
                setEndTime(selectedEndTime);
              }}
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium mb-2'>Activity Type</label>
            <select
              className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={activityType}
              onChange={(event) =>
                event.target.value === 'ALL'
                  ? setActivityType('')
                  : setActivityType(event.target.value)
              }
            >
              <option value='ALL'>ALL</option>
              <option value='INDOOR'>Indoor</option>
              <option value='OUTDOOR'>Outdoor</option>
            </select>
          </div>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-lg mb-4'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className='w-3/4 '>
          {loading ? (
            <div className='flex items-center justify-center'>
              <CircularProgress />
            </div>
          ) : (
            <>
              {activities.length > 0 ? (
                <ActivityList activities={activities} />
              ) : (
                <p>No activities found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterActivities;
