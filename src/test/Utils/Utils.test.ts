import { IncomingMessage } from "http";
import { Utils } from "../../app/Utils/Utils";


describe('Utils test suite', () => { 
  const  baseUrl = "http://localhost:8080";
  test('getRequestPath valid request', () => {
    const request = {
      url: `${baseUrl}/login`
    } as IncomingMessage

    const resultPath = Utils.getRequestBasePath(request);
    expect(resultPath).toBe("login")
  })

  test('getRequestPath with no path name', () => { 
    const request = {
      url: `${baseUrl}`
    } as IncomingMessage
    const resultPath = Utils.getRequestBasePath(request);
    expect(resultPath).toBeFalsy()
  })

  test('getRequestPath with no url', () => { 
    const request = {
      url: ''
    } as IncomingMessage
    const resultPath = Utils.getRequestBasePath(request);
    expect(resultPath).toBeFalsy()
  })

})