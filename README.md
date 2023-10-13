# IFrame Communication Relay

Publish/Subscribe communication relay between an iframe and its parent window, and vice versa, using the postMessage API. Supports JSON-RPC styled communication with requests and responses.

⭐ Stars ⭐ and contributions are highly appreciated.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- Publish and subcribe to events between iframes with the postMessage API
- JSON RPC Method invocation between iframes


## Installation

Install via npm:

```bash
npm install @gradian/iframecommunicationrelay
```

## Usage

```javascript
import IframeCommunicationRelay from "@gradian/iframecommunicationrelay";

// Parent Window (or IFrame)
// 1. Create an instance of the relay for communication
const relay = new IframeCommunicationRelay({
    iframeID: "myIframe", // If it's the parent window. If it's the iframe, you don't need the iframeID.
});

// 2. Define an RPC method that adds two numbers
relay.defineJSONRPCMethod("addNumbers", async (num1: number, num2: number) => {
    return num1 + num2;
});

// 3. This could also listen for other events or define other methods as needed.

// Child Iframe (or Parent Window)
// 1. Create an instance of the relay for communication. 
// If this is an iframe, it doesn't need the iframeID. If it's the parent window, it should.
const relay = new IframeCommunicationRelay();

// 2. Call the defined RPC method
relay.callJSONRPCMethod("addNumbers", (response) => {
    if (response.error) {
        console.error("RPC Error:", response.error.message);
    } else {
        console.log("Result of addition:", response.result);
    }
}, 5, 7);

// 3. This could also call other methods or listen for other events as needed.
```


## Building

To build the project, run:

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

By using this software, you acknowledge and agree that the authors and contributors of this software are not responsible or liable, directly or indirectly, for any damage or loss caused, or alleged to be caused, by or in connection with the use of or reliance on this software. This includes, but is not limited to, any bugs, errors, defects, failures, or omissions in the software or its documentation. Additionally, the authors are not responsible for any security vulnerabilities or potential breaches that may arise from the use of this software.

You are solely responsible for the risks associated with using this software and should take any necessary precautions before utilizing it in any production or critical systems. It's strongly recommended to review the software thoroughly and test its functionalities in a controlled environment before any broader application.
