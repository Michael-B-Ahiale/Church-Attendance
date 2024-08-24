import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cellGroups = ['Group A', 'Group B', 'Group C', 'Group D'];

function AdminPage() {
  const [selectedCellGroup, setSelectedCellGroup] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports for the current month
    fetchReports(currentMonth);
  }, [currentMonth]);

  const fetchReports = async (date) => {
    // TODO: Implement API call to fetch reports
    // For now, we'll use dummy data
    const dummyReports = [
      { id: 1, title: 'Sunday Service', date: '2023-05-07', attendance: 150 },
      { id: 2, title: 'Bible Study', date: '2023-05-10', attendance: 75 },
      // Add more dummy reports here
    ];
    setReports(dummyReports);

    // Uncomment the following code when ready to implement API calls
    /*
    try {
      const response = await axios.get('/api/reports', {
        params: {
          month: date.getMonth() + 1,
          year: date.getFullYear()
        }
      });
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
    */
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleMonthSelect = (e) => {
    const [year, month] = e.target.value.split('-');
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Admin Dashboard</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Attendance Reports</h2>
          <select
            value={selectedCellGroup}
            onChange={(e) => setSelectedCellGroup(e.target.value)}
            className="w-full p-3 border rounded text-2xl mb-4"
          >
            <option value="">Select Cell Group</option>
            {cellGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
          {selectedCellGroup && (
            <div className="text-2xl text-blue-600">
              Viewing attendance for: {selectedCellGroup}
            </div>
          )}
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <button onClick={handlePrevMonth} className="text-3xl text-blue-600"><FaChevronLeft /></button>
              <h2 className="text-3xl font-bold text-blue-600">
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h2>
              <button onClick={handleNextMonth} className="text-3xl text-blue-600"><FaChevronRight /></button>
            </div>
            <div className="mb-6">
              <input
                type="month"
                value={`${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1).toString().padStart(2, '0')}`}
                onChange={handleMonthSelect}
                className="p-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {reports.map((report) => (
                <div key={report.id} className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                  <p>Date: {report.date}</p>
                  <p>Attendance: {report.attendance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;