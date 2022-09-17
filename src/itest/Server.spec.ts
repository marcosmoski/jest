import axios from "axios";

axios.defaults.validateStatus = function () {
  return true;
}
const serverUrl = "http://localhost:8080"

describe('server itest suite' , () => {
  test('server reachable', async () => { 
    expect(await serverReachable()).toBeTruthy();
  })
})

async function serverReachable(): Promise<boolean> { 
  try {   
    await axios.get(serverUrl);
  } catch (err) { 
    console.log("Server not reachable");
    return false
  }
  return true;
}