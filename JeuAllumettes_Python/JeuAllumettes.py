#CONST
MATCHESINITIALNUMBER = 50
PLAYER1 = "Joueur 1"
PLAYER2 = "Joueur 2"
PLAYERS = (PLAYER1, PLAYER2)

#VAR
current_matches = MATCHESINITIALNUMBER
current_player = PLAYER1

def switch_player(current_player):
    if current_player == PLAYERS[-1]:
        return PLAYERS[0]
    else:
        return PLAYERS[PLAYERS.index(current_player)+1]

def promptmatchestoretrieve():
    return input("How many matches do you want to retrieve (1-6) ?\n")

def matchestoretrieve(current_matches):
    try:
        m=int(promptmatchestoretrieve())
    except ValueError:
        print("Please give a number between 1 and 6")
        return matchestoretrieve(current_matches)

    if m in range (1,7):
        if m <= current_matches:
            return m
        else: 
            print(f"There is less than {m} matches left, please take less ")
            return matchestoretrieve(current_matches)
    else:
        print("Please give a number between 1 and 6")
        return matchestoretrieve(current_matches)

def gameplay(current_matches):
    return current_matches - matchestoretrieve(current_matches)

while current_matches >= 0:
    print(f"Il reste {current_matches} allumettes, c'est au tour de {current_player} de jouer")
    current_matches = gameplay(current_matches)
    if current_matches <= 0:
        print(f"{current_player} a pris la dernière allumette et a perdu")
        break
    current_player=4switch_player(current_player)


    

    
