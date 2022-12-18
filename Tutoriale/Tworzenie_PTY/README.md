# Tworzenie PTY w Pythonie

Przykładowy skrypt uruchamiający `su` w terminalu.

```python

import os
import select
import subprocess
import sys

TIMEOUT = 1

cmd = [
    'su',
    '-c',
    'id'
]

master_fd, slave_fd = os.openpty()

fds = {
    'stdin': slave_fd,
    'stdout': slave_fd,
    'stderr': slave_fd
}

with subprocess.Popen(cmd, **fds, preexec_fn=os.setsid) as proc:
    while proc.poll() == None:
        r_ready, _, _ = select.select([master_fd], [], [], TIMEOUT)
        if master_fd in r_ready:
            data_from_proc = os.read(master_fd, 1024).decode()
            print(f'Read: {data_from_proc}')
            if 'assword' in data_from_proc:
                print("Giving password")
                os.write(master_fd, 'qwe\n'.encode())

print("Bye")



```
