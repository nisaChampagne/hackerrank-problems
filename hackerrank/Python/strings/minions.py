def minion_game(string):
    # your code goes here
    vowels=['A','I','O','E','U']
    kevin=0
    stuart=0
    for i in range(len(string)):
        if string == None:
            print("No word entered")
            return
        if string[i] in vowels:
          kevin+=len(string)-i
        else:
          stuart+=len(string)-i
                
    if stuart>kevin:
        print("Stuart",stuart)
    else:
        print("Kevin",kevin)