import { mocked } from "ts-jest/dist/utils/testing";
import { Launcher } from "../app/Launcher";
import { Server } from "../app/Server/Server"
// deep mocks 

jest.mock("../app/Server/Server", () =>{
  return { 
    Server: jest.fn(() => {
      return { 
        startServer: () => {
          console.log('starting fake server')
        }
      }
    })
  }
})

describe('launcher test suite', () => { 
  const mockedServer = mocked(Server, true);
  afterEach(() => {
    jest.clearAllMocks();
  })

  test('create server', () => {
    new Launcher();
    expect(mockedServer).toBeCalled()
  })

  test('launch app', () => {
    const launchAppMock = jest.fn();
    Launcher.prototype.launchApp = launchAppMock;
    new Launcher().launchApp();
    expect(launchAppMock).toBeCalled()
  })

})