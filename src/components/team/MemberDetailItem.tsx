
import React from 'react';

interface MemberDetailItemProps {
  icon: React.ElementType;
  label: string;
  value?: string;
}

const MemberDetailItem: React.FC<MemberDetailItemProps> = ({ icon: Icon, label, value }) => {
  if (!value) return null;
  return (
    <div className="flex items-start space-x-2 mb-2">
      <Icon className="w-5 h-5 text-sky-600 mt-1 shrink-0" />
      <div>
        <span className="font-semibold text-slate-700">{label}:</span>
        <p className="text-sm text-slate-600">{value}</p>
      </div>
    </div>
  );
};

export default MemberDetailItem;
