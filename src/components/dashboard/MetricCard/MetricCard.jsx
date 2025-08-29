
const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  bgColor, 
  iconColor 
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-2xl`}>
      <div className={`w-12 h-12 ${iconColor} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      <div className={`text-xs ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </div>
    </div>
  );
};

export default MetricCard;