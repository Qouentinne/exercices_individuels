## LVL 1 ##

def find_longest(string): 
    spl = string.split(" ") 
    longest = 0 
    i=0 
    for word in spl: 
        if (len(word) > longest): 
            longest = len(word) 
    return longest

#print(find_longest(input("Entrez votre phrase\n")))


## LVL 2 ##
class Dinglemouse:
    def __init__(self):
        self.attributes = []

    def setAge(self, age):
        self.age = age
        self.attributes.append(f"I am {self.age}. ")
        return self

    def setSex(self, sex):
        self.sex = sex
        self.attributes.append(f"I am {self.sex}. ")
        return self

    def setName(self, name):
        self.name = name
        self.attributes.append(f"My name is {self.name}. ")
        return self

    def hello(self):
        greetings = "Hello. "
        for a in self.attributes:
            greetings += a        
        return greetings

# mouse = Dinglemouse()
# mouse.setAge("30")
# mouse.setName("Sabrina")


# print(mouse.hello())



## LVL 3 ##
import math

def possible_sum_squares(n:int) -> list:
    """Renvoie une liste des nombres strictement inférieurs à n dont la somme avec n donne un carré"""
    flist = []
    for i in range(1,n+1):
        if math.sqrt(n+i) == int(math.sqrt(n+i)):
            flist.append(i)
    return flist

def possible_sum_squares_mirror(n:int, max:int):
    """Renvoie une liste de nombres """
    flist = []
    for i in range(1, max):
        if i == n:
            continue
        elif math.sqrt(n+i) == int(math.sqrt(n+i)):
            flist.append(i)
    return flist


def all_possible_sum_squares(n:int) -> list:
    """Renvoie une liste : pour chaque nombre entre 1 et n renvoie une liste des nombres inférieur dont la somme 
    avec le nombre en cours donne un carré"""
    flist = []
    for i in range(1,n+1):
        flist.append(possible_sum_squares(i))
    # j=len(flist)-1
    # while j>=0:
    #     for n in flist[j]:
    #         flist[n-1].append(j)
    #     j-=1
    return flist

def all_possible_sum_squares_mirror(n:int) -> list:
    flist = []
    n+=1
    for i in range(1,n):
        flist.append(possible_sum_squares_mirror(i, n))
    return flist

def possibility_checker(lol : list) -> bool:
    """Tests de faisabilité d'une liste d'éléments uniques -> renvoie False si configuration impossible, True sinon"""
    # Il est impossible de créer une chaine d'éléments uniques inférieurs à un nombre donné et dont la somme avec son voisin 
    # si :
     
    #   un nombre est plus de 2 fois solution unique pour créer un carré en le sommant avec un autre nombre ()
    for l in unique_combinations(lol):
        if len(l) > 2:
            return False
    
    #   un nombre n'apparaît pas dans les solutions des autres nombres et n'a lui-même pas de solution (impossible d'associer à un autre terme pour former un carré)
    for i in missing_numbers(lol):
        if len(lol[i-1]) == 0:
            return False
    
    return True

def unique_combinations(lol : list) -> list:
    """Recombine une liste issue de all_possible_sum_square(n) pour renvoyer une liste exposant tous les 
    nombres prenant en solution unique l'indice de la liste +1"""
    flist = []
    for l in lol:
        flist.append([])
    for i in range(len(lol)):
        if len(lol[i]) == 1:
            flist[lol[i][0]-1].append(i+1)
    return flist

def missing_numbers(lol: list) -> list:
    """A partir d'une liste issue de all_possible_sum_square(n) renvoie une liste avec tous les nombres jamais 
    exposés comme solution par d'autres nombres"""
    flist = []
    merged_list = []
    for l in lol:
        merged_list+=l
    for i in range(1,len(lol)+1):
        if i not in merged_list:
            flist.append(i)
    return flist    
    
def numbers_chain(lol, flist):
    clist = lol[flist[-1]-1]
    for n in clist:
        if n not in flist:
            flist.append(n)
            if len(flist) == len(lol):
                print(flist)
                global hasSolution 
                hasSolution = True
            else : 
                numbers_chain(lol, flist)
    flist.pop()
    # return numbers_chain(lol, flist)

def somme_carrés(n):
    global hasSolution
    hasSolution = False
    lol = all_possible_sum_squares_mirror(n)
    for i in range(1, n):
        numbers_chain(lol, [i])
    if not hasSolution:
        print("Pas de solution possible")


somme_carrés(7)

