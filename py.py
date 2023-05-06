with open("worlde.csv") as file:
    file=file.read()

x=file.splitlines()
f = open("myfile.txt", "w")
for i in x:
    f.write(f"'{i}', ")