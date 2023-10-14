export const getLocalStorage = (key: string) => {
  const get = JSON.parse(localStorage.getItem(key));

  if (!get) {
    return [];
  }
  return get;
};

export const saveLocalStorage = (key: string, data: {} | []) => {
  const stringified = JSON.stringify(data);

  localStorage.setItem(key, stringified);
  return 0
};

export const updateLocalStorage = (key: string, data: {} | []) => {
  const get = JSON.parse(localStorage.getItem(key));

  if (!get) {
    saveLocalStorage(key, data);
    return 0;
  } else if (Array.isArray(get)) {
    const collectiveUpdate = JSON.stringify([...get, data]);
    localStorage.setItem(key, collectiveUpdate);
    return 0;
  } else {
    const collectiveUpdate = JSON.stringify({ ...get, ...data });
    localStorage.setItem(key, collectiveUpdate);
    return 0;
  }
};
