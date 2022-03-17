#CONST
MATCHESINITIALNUMBER = 50

def promptmatchestoretrieve():
    return input("How many matches do you want to retrieve (1-6) ?")

def matchestoretrieve():
    try:
        m=int(promptmatchestoretrieve())
    except ValueError:
        print("Please give a number between 1 and 6")
        return matchestoretrieve()

    if m in range [1,7]:
        return m
    else:
        print("Please give a number between 1 and 6")
        return matchestoretrieve()

print(f"Allumettes à retirer :{matchestoretrieve()}")
    

    
