import random

# CONST
COMBINATION_LENGTH = 4
INITIAL_TRIES = 12
COLORS = ['yellow', 'blue', 'red', 'green', 'white', 'black']

# VAR
remaining_tries = INITIAL_TRIES


# FUNCTIONS
def random_comb():
    global COLORS
    flist = []
    for i in range(COMBINATION_LENGTH):
        flist.append(random.choice(COLORS))
    return flist

print(random_comb())
