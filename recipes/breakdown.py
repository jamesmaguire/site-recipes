import io

page = []
with io.open('recipes.org', 'r', encoding='utf-8') as f:
    for line in f:
        page.append(line[:-1])

def title_linums(page):
    nums = []
    for i, line in enumerate(page):
        if line[:3] == '* [':
            nums.append(i)
    return nums

recipestarts = title_linums(page)
recipeends = recipestarts[1:]
recipeends.append(len(page))

recipes = []
for i in range(len(recipestarts)):
    recipes.append(page[recipestarts[i]:recipeends[i]])

def recipe_title(recipe):
    titleline = recipe[0]
    if ':' in titleline:
        title = titleline[15:titleline.find('  ')]
    else:
        title = titleline[15:]
    return title

def recipe_date(recipe):
    titleline = recipe[0]
    return titleline[3:13]

def generate_title(recipe, setupfile='recipe.setup'):
    title = '#+TITLE: ' + recipe_title(recipe)
    title += '\n' + '#+DATE: ' + recipe_date(recipe)
    title += '\n' + '#+SETUPFILE: ' + setupfile
    return title

def generate_recipe(recipe):
    txt = generate_title(recipe) + '\n\n' 
    for line in recipe[1:]:
        txt += reduce_headlines(line) + '\n'
    return txt

def reduce_headlines(line):
    line = line.replace('**', '*')
    line = line.replace('***', '**')
    line = line.replace('****', '***')
    line = line.replace('*****', '****')
    return line

def generate_fname(recipe):
    fname = recipe_title(recipe)
    fname = fname.replace(' ', '-')
    fname = fname.replace('"', '')
    fname = fname.replace('&', '')
    fname = fname.replace('--', '-')
    fname += '.org'
    return fname.lower()

for recipe in recipes:
    data = generate_recipe(recipe)
    fname = generate_fname(recipe)
    with open(fname, 'w') as f:
        f.write(data)
