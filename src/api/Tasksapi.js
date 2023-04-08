export function createTasksApi(taskdata) {
  const url = `https://642d29af66a20ec9ce961a2d.mockapi.io/tasks`;
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(taskdata),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((task) => {
    })
    .catch((error) => {
      console.error(`error: ${JSON.stringify(error)}`);
    });
}

export function getAllTasksapi() {
  const url = `https://642d29af66a20ec9ce961a2d.mockapi.io/tasks`;
  return fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((error) => {
      console.error(`error: ${JSON.stringify(error)}`);
    });
}

export function deleteATask(taskid) {
  const url = `https://642d29af66a20ec9ce961a2d.mockapi.io/tasks/${taskid}`;
  return fetch(url, {
     method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((task) => {
    })
    .catch((error) => {
      console.error(`error: ${JSON.stringify(error)}`);
    });
}
