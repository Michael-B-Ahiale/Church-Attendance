import React, { useState, useEffect } from 'react';
import axios from 'axios';

const sheepfolds = ['Lion of Judah', 'Jericho', 'Bethlehem', 'Zion'];

function AttendancePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSheepfold, setSelectedSheepfold] = useState('');
  const [churchMembers, setChurchMembers] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isSunday, setIsSunday] = useState(false);

  useEffect(() => {
    // Check if it's Sunday
    setIsSunday(currentDate.getDay() === 0);

    // Fetch church members
    // TODO: Implement API call to fetch church members
    // For now, we'll use dummy data
    setChurchMembers([
      { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Jane Smith', image: 'https://via.placeholder.com/150' },
      // Add more members here
    ]);

    // Uncomment the following code when ready to implement API calls
    /*
    const fetchMembers = async () => {
      try {
        const response = await axios.get('/api/church-members');
        setChurchMembers(response.data);
      } catch (error) {
        console.error('Error fetching church members:', error);
      }
    };
    fetchMembers();
    */
  }, []);

  const handleAttendance = (memberId) => {
    // TODO: Implement attendance marking logic
    console.log(`Marked attendance for member ${memberId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Attendance Dashboard</h1>
        <p className="text-2xl">Date: {currentDate.toLocaleDateString()}</p>
      </div>

      {!isSunday && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
          <p className="font-bold">Note:</p>
          <p>Attendance can only be taken on Sundays.</p>
        </div>
      )}

      <div className="mb-8 flex items-center">
        <input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded text-2xl mr-4 flex-grow"
        />
        <select
          value={selectedSheepfold}
          onChange={(e) => setSelectedSheepfold(e.target.value)}
          className="p-3 border rounded text-2xl"
        >
          <option value="">All Sheepfolds</option>
          {sheepfolds.map((sheepfold) => (
            <option key={sheepfold} value={sheepfold}>
              {sheepfold}
            </option>
          ))}
        </select>
      </div>

      {selectedSheepfold && (
        <div className="mb-8 text-2xl font-semibold text-blue-600">
          Searching for members in: {selectedSheepfold}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {churchMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
            <button
              onClick={() => handleAttendance(member.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              disabled={!isSunday}
            >
              Mark Attendance
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendancePage;