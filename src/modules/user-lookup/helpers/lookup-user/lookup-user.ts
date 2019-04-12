const lookupUser = (lookupStr?: string, lookupArr?: any[]) => {
  if (!lookupStr || !lookupArr || lookupStr.length < 3) return false;
  return lookupArr.filter((item) => {
    return item.username.toLowerCase().includes(lookupStr.toLowerCase()) || item.name.toLowerCase().includes(lookupStr.toLowerCase());
  });
};

export default lookupUser;
