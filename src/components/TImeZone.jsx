"use client"
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TimeZoneComponent = ({ onSelectTimeZone }) => {
  const timeZoneOptions = [
    'UTC-12:00',
    'UTC-11:00',
    'UTC-10:00',
    // ... Add more time zones as needed
  ];

  return (
    <div>
      <label>Select Time Zone:</label>
      <Select
        style={{ width: 200 }}
        placeholder="Select a time zone"
        onChange={onSelectTimeZone}
      >
        {timeZoneOptions.map((zone, index) => (
          <Option key={index} value={zone}>
            {zone}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default TimeZoneComponent;
