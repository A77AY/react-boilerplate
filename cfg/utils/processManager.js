const path = require('path');
const cp = require('child_process');
const program = require('commander');

class Server {
    constructor(serverPath) {
        this.serverPath = path.join(process.cwd(), serverPath);
    }

    start() {
        this.server = cp.fork(this.serverPath, [], {});
        this.addEventListeners();
    }

    addEventListeners() {
        this.server.on('message', (msg) => {
            switch (msg) {
                case 'restart':
                    this.restart();
                    break;
            }
        });
    }

    stop() {
        if(!!this.server) this.server.kill();
        this.server = null;
    }

    restart() {
        this.stop();
        this.start();
    }
}

program
    .version('0.1.0')
    .arguments('<serverPath>')
    .action(function (serverPath) {
        const server = new Server(serverPath);
        server.start();
    });

program.parse(process.argv);