export const truncateAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatAddress = (address, options = {}) => {
  if (!address) return '';
  const { 
    start = 6, 
    end = 4, 
    separator = '...',
    fallback = 'Invalid address'
  } = options;

  return address.length > start + end 
    ? `${address.slice(0, start)}${separator}${address.slice(-end)}`
    : fallback;
};