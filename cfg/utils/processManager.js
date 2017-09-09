const path = require('path');
const fs = require('fs');
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

    autostart() {
        if (fs.existsSync(this.serverPath)) {
            this.start();
        } else {
            setTimeout(() => this.autostart(), 1000);
        }
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
        if (!!this.server) this.server.kill();
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
        server.autostart();
    });

program.parse(process.argv);