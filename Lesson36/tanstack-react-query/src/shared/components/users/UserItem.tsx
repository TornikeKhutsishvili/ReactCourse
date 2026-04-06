import React from 'react'
import type { IAddress, ICompany } from '../../../core/interfaces/user.interfaces';
import { useNavigate } from 'react-router-dom';

interface UserItemProps {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: IAddress,
  company: ICompany
}

const UserItem:React.FC<UserItemProps> = ({ id, name, username, email, phone, website, address, company }) => {
  const { city, street, suite, zipcode } = address || {};
  const { name: companyName, bs, catchPhrase } = company || {};
  const navigate = useNavigate();

  return (
    <div key={id} onClick={() => navigate(`/users/${id}`)}
      className="
        bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 border
        border-gray-100 hover:cursor-pointer
      "
    >
      {/* Header */}
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      {/* Contact */}
      <div className="mb-3 space-y-1 text-sm text-gray-700">
        <p>📧 {email}</p>
        <p>📞 {phone}</p>
        <p>🌐 {website}</p>
      </div>

      {/* Address */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">Address</h3>
        <p className="text-sm text-gray-600">{street}, {suite}</p>
        <p className="text-sm text-gray-600">{city}, {zipcode}</p>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-1">Company</h3>
        <p className="text-sm text-gray-700">{companyName}</p>
        <p className="text-xs text-gray-500 italic">{catchPhrase}</p>
        <p className="text-xs text-gray-400">{bs}</p>
      </div>
    </div>
  )
}

export default UserItem;