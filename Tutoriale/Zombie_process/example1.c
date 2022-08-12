#include <stdlib.h>
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <wait.h>


int main() {
    printf("Example 1\n");

    printf("Forking...\n");
    pid_t p = fork();
    printf("--> forked with result %d\n", p);

    pid_t my_pid = getpid();
    printf("My PID: %d\n", my_pid);
  
    if (p == 0) {
        printf("[%d] Child: exiting now. Will become a zombie.\n", my_pid);
        exit(1);
    }

    int i;

    for (i=0; i<20; i++) {
        printf("[%d] Parent of %d: sleeping %d\n", my_pid, p, i);
        sleep(1);
    }

    printf("[%d] wait(NULL)\n", my_pid);
    wait(NULL);

    for (i=0; i<20; i++) {
        printf("[%d] Parent of %d: sleeping %d\n", my_pid, p, i);
        sleep(1);
    }

    printf("[%d] Bye.", my_pid);

    return 0;
}
